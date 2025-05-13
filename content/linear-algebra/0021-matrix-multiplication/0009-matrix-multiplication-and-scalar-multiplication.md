# Matrix multiplication and scalar multiplication

Suppose $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix. Let $\alpha$ be a scalar. Then $\alpha (A B) = (\alpha A) B = A (\alpha B)$.

## Proof

These are equalities of matrices. We will do the $\alpha (A B) = (\alpha A) B$. For $1 \leq i \leq m, 1 \leq j \leq p$,

$$
[\alpha (A B)]_{ij} = \alpha [AB]_{ij}
\\;\\;\\;
\text{ Matrix Scalar Multiplication }
$$

$$
= \alpha \sum^{n}_{k = 1} [A]_{ik} [B]_{kj}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{n}_{k = 1} \alpha [A]_{ik} [B]_{kj}
\\;\\;\\;
\text{ Distributivity }
$$

$$
= \sum^{n}_{k = 1} [\alpha A]_{ik} [B]_{kj}
\\;\\;\\;
\text{ Matrix Scalar Multiplication }
$$

$$
= (\alpha A) B
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

So the matrices $\alpha (A B)$ and $(\alpha A) B$ are equal, entry-by-entry, and by the definition of **Matrix Equality** we can say they are equal matrices.

## Reference

1. [linear.ups.edu - theorem MMSMM, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)