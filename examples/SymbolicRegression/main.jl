# SciML Tools
using ComponentArrays, LinearAlgebra, Lux, MLJ, Optimization, OptimizationOptimisers,
      OptimizationOptimJL, OrdinaryDiffEq, Printf, SciMLSensitivity, StableRNGs, Statistics,
      SymbolicRegression, Zygote
using CairoMakie, Latexify, SymbolicUtils

## Set a random seed for reproducible behaviour
rng = StableRNG(1111)

function lotka!(du, u, p, t)
    α, β, γ, δ = p
    du[1] = α * u[1] - β * u[2] * u[1]
    du[2] = γ * u[1] * u[2] - δ * u[2]
    return
end

# Define the experimental parameter
tspan = (0.0, 5.0)
u0 = 5.0f0 * rand(rng, 2)
const p_true = [1.3, 0.9, 0.8, 1.8]
prob = ODEProblem(lotka!, u0, tspan, p_true)
solution = solve(prob, Vern7(); abstol=1e-12, reltol=1e-12, saveat=0.25)

# Add noise in terms of the mean
X = Array(solution)
t = solution.t

x̄ = mean(X; dims=2)
noise_magnitude = 5e-3
Xₙ = X .+ (noise_magnitude * x̄) .* randn(rng, eltype(X), size(X))

begin
    fig = Figure()
    ax = CairoMakie.Axis(
        fig[1, 1]; ylabel=L"$u_1(t)$, $u_2(t)$", xlabel=L"t", xlabelsize=24, ylabelsize=24)

    ts = 0.0:0.01:5.0
    us = reduce(hcat, solution.(ts))
    l = lines!(ax, ts, us[1, :]; color=:black, linewidth=3)
    lines!(ax, ts, us[2, :]; color=:black, linewidth=3)
    sc = scatter!(ax, t, Xₙ[1, :]; color=:red, markersize=16, strokewidth=2)
    scatter!(ax, t, Xₙ[2, :]; color=:red, markersize=16, strokewidth=2)

    axislegend(ax, [l, sc], ["True Data", "Noisy Data"]; position=:lb)

    fig
end

rbf(x) = exp(-(x^2))

# Multilayer FeedForward
model = Chain(Dense(2 => 5, rbf), Dense(5 => 5, rbf), Dense(5 => 5, rbf), Dense(5 => 2))

function train_neural_network(model, rng, p_true, Xₙ, t)
    ps, st = Lux.setup(rng, model)

    stateful_model = StatefulLuxLayer(model, st)

    function nn_dynamics!(du, u, p, t, p_true)
        û = stateful_model(u, p)
        du[1] = p_true[1] * u[1] + û[1]
        return du[2] = -p_true[4] * u[2] + û[2]
    end

    prob_nn = ODEProblem(nn_dynamics!, Xₙ[:, 1], tspan, ps)

    ## Closure with the known parameter
    nn_dynamics!(du, u, p, t) = nn_dynamics!(du, u, p, t, p_true)

    function predict(θ, X=Xₙ[:, 1], T=t)
        _prob = remake(prob_nn; u0=X, tspan=(T[1], T[end]), p=θ)
        return Array(solve(_prob, Vern7(); saveat=T, abstol=1e-6, reltol=1e-6,
            sensealg=QuadratureAdjoint(; autojacvec=ReverseDiffVJP(true))))
    end

    loss(θ) = mean(abs2, Xₙ .- predict(θ))

    losses = Float64[]

    callback = function (p, l)
        push!(losses, l)
        length(losses) % 50 == 0 &&
            @printf "Current loss after %5d iterations:\t%10.9g\n" length(losses) losses[end]
        return false
    end

    adtype = Optimization.AutoZygote()
    optf = Optimization.OptimizationFunction((x, p) -> loss(x), adtype)
    optprob = Optimization.OptimizationProblem(optf, ComponentVector{Float64}(ps))

    res1 = Optimization.solve(optprob, ADAM(); callback, maxiters=5000)
    @printf "Training loss after %d iterations:\t%10.9g\n" length(losses) losses[end]

    optprob2 = Optimization.OptimizationProblem(optf, res1.u)
    res2 = Optimization.solve(optprob2, Optim.LBFGS(); callback=callback, maxiters=1000)
    @printf "Final training loss after %d iterations:\t%10.9g\n" length(losses) losses[end]

    ## Rename the best candidate
    p_trained = res2.u

    return stateful_model, p_trained, losses, predict
end

smodel, p_trained, losses, predict_fn = train_neural_network(model, rng, p_true, Xₙ, t)

begin
    fig = Figure()
    ax = CairoMakie.Axis(fig[1, 1]; xscale=log10, yscale=log10, xlabel="Iterations",
        ylabel="Loss", xlabelsize=20, ylabelsize=20)

    l1 = lines!(1:5000, losses[1:5000]; color=:black, linewidth=3)
    l2 = lines!(5001:length(losses), losses[5001:end]; color=:red, linewidth=3)

    axislegend(ax, [l1, l2], ["Adam", "LBFGS"]; position=:lb)

    fig
end

ts = first(solution.t):(mean(diff(solution.t)) / 2):last(solution.t)
X̂ = predict_fn(p_trained, Xₙ[:, 1], ts)

# Ideal unknown interactions of the predictor
Ȳ = [-p_true[2] * (X̂[1, :] .* X̂[2, :])'; p_true[3] * (X̂[1, :] .* X̂[2, :])']
# Neural network guess
Ŷ = smodel(X̂, p_trained)

begin
    fig = Figure(; size=(1000, 600))
    ax = CairoMakie.Axis(fig[1:2, 1]; ylabel=L"$u_1(t)$, $u_2(t)$",
        xlabel=L"t", xlabelsize=24, ylabelsize=24)

    l = lines!(ax, ts, X̂[1, :]; color=:blue, linewidth=3, linestyle=:dash)
    lines!(ax, ts, X̂[2, :]; color=:blue, linewidth=3, linestyle=:dash)
    sc = scatter!(ax, t, Xₙ[1, :]; color=:red, markersize=16, strokewidth=2)
    scatter!(ax, t, Xₙ[2, :]; color=:red, markersize=16, strokewidth=2)

    axislegend(ax, [l, sc], ["UDE Approximation", "Noisy Data"]; position=:lb)

    ax12 = CairoMakie.Axis(
        fig[1, 2]; ylabel=L"$U(x,y)$", xticksvisible=false, xticklabelsvisible=false,
        xlabelsize=24, ylabelsize=24, yaxisposition=:right)

    l1 = lines!(ax12, ts, Ŷ[1, :]; color=:blue, linewidth=3, linestyle=:dash)
    lines!(ax12, ts, Ŷ[2, :]; color=:blue, linewidth=3, linestyle=:dash)
    l2 = lines!(ax12, ts, Ȳ[1, :]; color=:black, markersize=16, strokewidth=2)
    lines!(ax12, ts, Ȳ[2, :]; color=:black, markersize=16, strokewidth=2)

    axislegend(ax12, [l1, l2], ["UDE Approximation", "True Interaction"]; position=:rc)

    ax22 = CairoMakie.Axis(fig[2, 2]; ylabel=L"$L_2$ error", xlabel=L"t", xlabelsize=24,
        ylabelsize=24, yaxisposition=:right, yscale=log10)

    l2error = norm.(eachcol(Ŷ .- Ȳ))
    lines!(ax22, ts, l2error; color=:red, linewidth=3)

    linkxaxes!(ax, ax12, ax22)

    fig
end

srmodel = MultitargetSRRegressor(;
    binary_operators=[+, -, *, /], niterations=100, save_to_file=false)
mach = machine(srmodel, X̂', Ŷ')
fit!(mach; verbosity=100)
r = report(mach)
best_eq = [r.equations[1][r.best_idx[1]], r.equations[2][r.best_idx[2]]]

# --

eqn1 = latexify(string(node_to_symbolic(best_eq[1], model)))
print("__REPLACEME__$(eqn1.s)__REPLACEME__") #hide
nothing

# --

eqn2 = latexify(string(node_to_symbolic(best_eq[2], model)))
print("__REPLACEME__$(eqn2.s)__REPLACEME__") #hide
nothing
