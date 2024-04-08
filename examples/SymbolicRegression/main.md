```@meta
EditURL = "main.jl"
```

SciML Tools

````julia
using ComponentArrays, LinearAlgebra, Lux, MLJ, Optimization, OptimizationOptimisers,
      OptimizationOptimJL, OrdinaryDiffEq, Printf, SciMLSensitivity, StableRNGs, Statistics,
      SymbolicRegression, Zygote
using CairoMakie, Latexify, SymbolicUtils

# Set a random seed for reproducible behaviour
rng = StableRNG(1111)

function lotka!(du, u, p, t)
    α, β, γ, δ = p
    du[1] = α * u[1] - β * u[2] * u[1]
    du[2] = γ * u[1] * u[2] - δ * u[2]
    return
end
````

````
lotka! (generic function with 1 method)
````

Define the experimental parameter

````julia
tspan = (0.0, 5.0)
u0 = 5.0f0 * rand(rng, 2)
const p_true = [1.3, 0.9, 0.8, 1.8]
prob = ODEProblem(lotka!, u0, tspan, p_true)
solution = solve(prob, Vern7(); abstol=1e-12, reltol=1e-12, saveat=0.25)
````

````
retcode: Success
Interpolation: 1st order linear
t: 21-element Vector{Float64}:
 0.0
 0.25
 0.5
 0.75
 1.0
 1.25
 1.5
 1.75
 2.0
 2.25
 2.5
 2.75
 3.0
 3.25
 3.5
 3.75
 4.0
 4.25
 4.5
 4.75
 5.0
u: 21-element Vector{Vector{Float64}}:
 [3.1461493970111687, 1.5370475785612603]
 [2.9859373213610247, 1.8151256657789583]
 [2.6730312791519366, 2.041940882539932]
 [2.30415733239217, 2.1417963393965027]
 [1.9753654460876546, 2.0924940547294777]
 [1.736002634133593, 1.930637008123919]
 [1.5935873446698463, 1.7147329337804191]
 [1.5377347373134915, 1.4934030053705472]
 [1.5560058365041194, 1.2960019933559421]
 [1.63928371406785, 1.1363095301655686]
 [1.781733444116645, 1.0191202673722095]
 [1.978575994946351, 0.9456434853816177]
 [2.222602305466573, 0.9171644909372093]
 [2.499295982442994, 0.9374041408836428]
 [2.7805559892569844, 1.0136918724754893]
 [3.0189383518547883, 1.155771215628081]
 [3.14929515226535, 1.3688518295412284]
 [3.1101187234840464, 1.6373463745592367]
 [2.88692773348896, 1.9070589512497111]
 [2.541288980358861, 2.0950506945043452]
 [2.177773161488458, 2.140312342705142]
````

Add noise in terms of the mean

````julia
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
````

````
rbf (generic function with 1 method)
````

Multilayer FeedForward

````julia
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

    # Closure with the known parameter
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

    # Rename the best candidate
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
````

````
2×41 Matrix{Float64}:
 3.14639  3.089    2.98684  2.8465   2.67831  2.49475  2.30866  2.13149  1.97211  1.83633  1.72692  1.64395  1.58565  1.54944  1.53281  1.53382  1.55116  1.58401  1.63189  1.69448  1.7715   1.86261   1.96727   2.08458   2.21313   2.35073   2.49418   2.63907   2.77961  2.90872  3.01829  3.09984  3.1454   3.14856  3.10578  3.01762  2.88921  2.72976  2.55115  2.36615  2.18666
 1.54233  1.68293  1.81919  1.94155  2.04098  2.11015  2.14427  2.14154  2.10346  2.0345   1.94157  1.83294  1.7169   1.60045  1.48871  1.38494  1.29088  1.20732  1.13444  1.07215  1.02026  0.978601  0.947124  0.925993  0.915656  0.916919  0.930985  0.959445  1.00414  1.06686  1.14885  1.25013  1.36885  1.50088  1.63976  1.77714  1.90361  2.00998  2.08837  2.13318  2.14171
````

Ideal unknown interactions of the predictor

````julia
Ȳ = [-p_true[2] * (X̂[1, :] .* X̂[2, :])'; p_true[3] * (X̂[1, :] .* X̂[2, :])']
````

````
2×41 Matrix{Float64}:
 -4.3675   -4.67871  -4.89028  -4.97396  -4.91973  -4.73788  -4.45535  -4.1082   -3.73342  -3.36241  -3.01764  -2.71195  -2.45016  -2.23181  -2.05372  -1.91182  -1.80212  -1.72116  -1.66615  -1.63506  -1.62665  -1.64048  -1.67692  -1.73728  -1.82382  -1.93988  -2.08984  -2.27884  -2.51201  -2.79289  -3.12082  -3.48769  -3.87502  -4.25304  -4.58347  -4.82645  -4.94994  -4.93808  -4.79497  -4.54269  -4.21487
  3.88222   4.15885   4.34691   4.42129   4.37309   4.21145   3.96031   3.65174   3.31859   2.98881   2.68234   2.41062   2.17792   1.98383   1.82553   1.69939   1.60189   1.52992   1.48102   1.45339   1.44591   1.4582    1.4906    1.54425   1.62117   1.72434   1.85764   2.02563   2.2329    2.48256   2.77406   3.10017   3.44446   3.78048   4.0742    4.29018   4.39995   4.38941   4.26219   4.03795   3.74655
````

Neural network guess

````julia
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

model = MultitargetSRRegressor(; binary_operators=[+, -, *, /], niterations=100)
mach = machine(model, X̂', Ŷ')
fit!(mach; verbosity=100)
r = report(mach)
best_eq = [r.equations[1][r.best_idx[1]], r.equations[2][r.best_idx[2]]]
````

````
2-element Vector{DynamicExpressions.EquationModule.Node{Float64}}:
 x₁ * (x₂ * -0.8992399878996041)
 (x₁ * x₂) * 0.8003304123920374
````

--

````julia
eqn1 = latexify(string(node_to_symbolic(r.equations[1][r.best_idx[1]], model)))
nothing
````

$$x1 \cdot x2 \cdot -0.8992399878996041$$

--

````julia
eqn2 = latexify(string(node_to_symbolic(r.equations[2][r.best_idx[2]], model)))
nothing
````

$$x1 \cdot x2 \cdot 0.8003304123920374$$

---

*This page was generated using [Literate.jl](https://github.com/fredrikekre/Literate.jl).*

