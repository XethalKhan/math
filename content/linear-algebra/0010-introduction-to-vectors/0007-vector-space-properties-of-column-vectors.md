# Vector space properties of column vectors

Suppose that $\mathbb{C}^m$ is the set of column vectors of size $m$ (Definition [Vector space of column vectors](./0006-vector-space-of-column-vectors.md)) with [**addition**](./0004-column-vector-addition.md) and [**scalar multiplication**](./0005-column-vector-scalar-multiplication.md). Then

1. Additive Closure - If $u, v \in \mathbb{C}^m$, then $u + v \in \mathbb{C}^m$.
2. Scalar Closure - If $\alpha \in \mathbb{C}$ and $u \in \mathbb{C}^m$, then $\alpha u \in \mathbb{C}^m$.
3. Commutativity - If $u, v \in \mathbb{C}^m$, then $u + v = v + u$.
4. Additive Associativity - If $u, v, w \in \mathbb{C}^m$, then $u + (v + w) = (u + v) + w$.
5. Zero Column vector - There is a vector, $0$, called the **zero column vector**, such that $u + 0 = u$ for all $u \in \mathbb{C}^m$.
6. Additive Inverses - If $u \in \mathbb{C}^m$, then there exists a matrix $−u \in \mathbb{C}^m$ so that $u + (−u) = 0$.
7. Scalar Multiplication Associativity - If $\alpha, \beta \in \mathbb{C}$ and $u \in \mathbb{C}^m$, then $\alpha(\beta u) = (\alpha \beta)u$.
8. Distributivity across Matrix Addition - If $\alpha \in \mathbb{C}$ and $u, v \in \mathbb{C}^m$, then $\alpha (u + v) = \alpha u + \alpha v$.
9. Distributivity across Scalar Addition - If $\alpha, \beta \in \mathbb{C}$ and $u \in \mathbb{C}^m$, then $(\alpha + \beta) u = \alpha u + \beta u$.
10. One - If $u \in \mathbb{C}^m$, then $1 u = u$.

## Proof

### 9. Distributivity across Scalar Addition

To prove Property Distributivity across Scalar Addition, $(\alpha + \beta) u = \alpha u + \beta u$, we need to establish the equality of two column vectors. Definition [**Column vector equality**](./0003-column-vector-equality.md) says we need to establish the equality of their entries, one-by-one. How do we do this, when we do not even know how many entries the two column vectors might have? This is where the notation for column vector entries, given in Definition [**Column vector**](./0001-column-vector.md), comes into play.

For any $i$, $1 \leq i \leq m$,

$$
[(\alpha + \beta)u]_{i} = (\alpha + \beta)[u]_{i} \text{ Definition Column vector scalar multiplication }
$$

$$
= \alpha [u]_{i} + \beta [u]_{i} \text{ Distributivity in } \mathbb{C}
$$

$$
= [\alpha u]_{i} + [\beta u]_{i} \text{ Definition Column vector scalar multiplication }
$$

$$
= [\alpha u + \beta u]_{i} \text{ Definition Column vector Addition }
$$

Since the individual components of the vectors $(\alpha + \beta) u$ and $\alpha u + \beta u$ are equal for all $i, 1 \leq i \leq m$, definition [**Column vector equality**](./0003-column-vector-equality.md) tells us the vectors are equal.

## Reference

1. [linear.ups.edu - definition VSPCV, section Vector operations](http://linear.ups.edu/html/section-VO.html)