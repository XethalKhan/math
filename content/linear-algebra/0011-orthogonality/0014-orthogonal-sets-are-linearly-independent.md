# Orthogonal sets are linearly independent

Suppose that $S$ is an **orthogonal set** of nonzero vectors. Then $S$ is linearly independent.

## Proof

Let $S = \\{u_1, u_2, u_3, \dots , u_n \\}$ be an orthogonal set of nonzero vectors. To prove the linear independence of $S$, we can appeal to the definition of Linear Independence of Column Vectors and begin with an arbitrary relation of linear dependence,

$$
\alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_n u_n = 0
$$

Then, for every $1 \leq i \leq n$, we have

$$
\alpha_i ⟨u_i, u_i⟩ = \alpha_1 (0) + \alpha_2 (0) + \dots + \alpha_i ⟨u_i, u_i⟩ + \dots + \alpha_n (0) \text{ Property of Zero Complex Number }
$$

$$
= \alpha_1 ⟨u_i, u_1⟩ + \dots + \alpha_i ⟨u_i, u_i⟩ + \dots + \alpha_n ⟨u_i, u_n⟩ \text{ Definition Orthogonal Set of Vectors }
$$

$$
= ⟨u_i, \alpha_1 u_1⟩ + ⟨u_i, \alpha_2 u_2⟩ + \dots + ⟨u_i, \alpha_n u_n⟩ \text{ Theorem Inner Product Scalar Multiplication }
$$

$$
= ⟨u_i, \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_n u_n⟩ \text{ Theorem Inner Product Vector Addition }
$$

$$
= ⟨u_i, 0⟩ \text{ Definition of Relationship of Linear Dependence of Column Vectors }
$$

$$
= 0 \text{ Definition Inner Product }
$$ 

Because $u_i$ was assumed to be nonzero, [**Theorem Inner Product is Positive**](./0010-inner-product-is-positive.md) says $⟨u_i, u_i⟩$ is nonzero and thus $\alpha_i$ must be zero. So we conclude that $\alpha_i = 0$ for all $1 \leq i \leq n$ in any relation of linear dependence on $S$. But this says that $S$ is a linearly independent set since the only way to form a relation of linear dependence is the trivial way (By definition Linear Independence of Column Vectors).

## Reference

1. [linear.ups.edu - theorem OSLI, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)