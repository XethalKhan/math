# Vector space properties of matrices

Suppose that $M_{m \times n}$ is the set of all $m \times n$ matrices (Definition [Vector space of matrices](./0005-vector-space-of-matrices.md)) with [**addition**](./0003-matrix-addition.md) and [**scalar multiplication**](./0004-matrix-scalar-multiplication.md). Then

1. Additive Closure - If $A, B \in M_{m \times n}$, then $A + B \in M_{m \times n}$.
2. Scalar Closure - If $\alpha \in \mathbb{C}$ and $A \in M_{m \times n}$, then $\alpha A \in M_{m \times n}$.
3. Commutativity - If $A, B \in M_{m \times n}$, then $A + B = B + A$.
4. Additive Associativity - If $A, B, C \in M_{m \times n}$, then $A + (B + C) = (A + B) + C$.
5. Zero Matrix - There is a matrix, $0$, called the **zero matrix**, such that $A + 0 = A$ for all $A \in M_{m \times n}$.
6. Additive Inverses - If $A \in M_{m \times n}$, then there exists a matrix $−A \in M_{m \times n}$ so that $A + (−A) = 0$.
7. Scalar Multiplication Associativity - If $\alpha, \beta \in \mathbb{C}$ and $A \in M_{m \times n}$, then $\alpha(\beta A) = (\alpha \beta)A$.
8. Distributivity across Matrix Addition - If $\alpha \in \mathbb{C}$ and $A, B \in M_{m \times n}$, then $\alpha (A + B) = \alpha A + \alpha B$.
9. Distributivity across Scalar Addition - If $\alpha, \beta \in \mathbb{C}$ and $A \in M_{m \times n}$, then $(\alpha + \beta) A = \alpha A + \beta A$.
10. One - If $A \in M_{m \times n}$, then $1 A = A$.

## Proof (TODO)

### 9. Distributivity across Scalar Addition

To prove Property Distributivity across Scalar Addition, $(\alpha + \beta) A = \alpha A + \beta A$, we need to establish the equality of two matrices. Definition [**Matrix equality**](./0002-matrix-equality.md) says we need to establish the equality of their entries, one-by-one. How do we do this, when we do not even know how many entries the two matrices might have? This is where the notation for matrix entries, given in Definition [**Matrix**](./0001-matrix.md), comes into play.

For any $i$ and $j$, $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[(\alpha + \beta)A]_{ij} = (\alpha + \beta)[A]_{ij} \text{ Definition Matrix scalar multiplication }
$$

$$
= \alpha [A]_{ij} + \beta [A]_{ij} \text{ Distributivity in } \mathbb{C}
$$

$$
= [\alpha A]_{ij} + [\beta A]_{ij} \text{ Definition Matrix scalar multiplication }
$$

$$
= [\alpha A + \beta A]_{ij} \text{ Definition Matrix Addition }
$$

## Reference

1. [linear.ups.edu - definition VSPM, section Matrix operations](http://linear.ups.edu/html/section-MO.html)
