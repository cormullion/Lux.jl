Base.zero(s::NamedTuple{(),Tuple{}}) = s

Base.zero(::Symbol) = Symbol()

Base.zero(nt::NamedTuple{fields}) where {fields} = NamedTuple{fields}(zero.(values(nt)))

# Layers are stateless so we can simply return that
Base.zero(l::AbstractExplicitLayer) = l

ChainRulesCore.rrule(::typeof(istraining)) = true, _ -> (NoTangent(),)

ChainRulesCore.@non_differentiable _update_stats!(::Any, ::Any, ::Any, ::Any, ::Any, ::Any, ::Any, ::Any)

# Sparse Arrays
_project(x, y) = x .* one.(y)

function ChainRulesCore.rrule(
    ::typeof(*),
    X::EFLSparseMatrixCSC{<:Union{AbstractSparseMatrixCSC,AbstractCuSparseMatrix}},
    Y::Union{Matrix,CuMatrix},
)
    Z = X * Y
    function sparse_matmul_pullback(Δ)
        Δ = unthunk(Δ)
        return NoTangent(), _project(Δ * Y', X), X.mat' * Δ
    end
    return Z, sparse_matmul_pullback
end

# Fast Matmul
function ChainRulesCore.rrule(
    ::typeof(fast_matmul!), C::AbstractVecOrMat{T}, A::AbstractMatrix{T}, B::AbstractVecOrMat{T}
) where {T}
    fast_matmul!(C, A, B)
    function fast_matmul!_pullback(Δ)
        Δ = unthunk(Δ)
        return NoTangent(), Δ, fast_matmul(Δ, B'), fast_matmul(A', Δ)
    end
    function fast_matmul!_pullback(Δ::FillArrays.Fill)
        Δ = Array(unthunk(Δ))
        return NoTangent(), Δ, fast_matmul(Δ, B'), fast_matmul(A', Δ)
    end
    return C, fast_matmul!_pullback
end
