# Complex conjugate respects matrix scalar multiplication

Suppose that $\alpha \in \mathbb{C}$ and $A$ is an $m \times n$ matrix. Then $\overline{\alpha A} = \overline{\alpha} \overline{A}$.

## Proof

For $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[\overline{\alpha A}]_{ij} = \overline{[\alpha A]_{ij}}
\\;\\;\\;\\;\\;
\text{ Definition Complex Conjugate of Matrix }
$$

$$
= \overline{\alpha [A]_{ij}}
\\;\\;\\;\\;\\;
\text{ Definition Matrix Scalar Multiplication }
$$

$$
= \overline{\alpha} \overline{[A]_{ij}}
\\;\\;\\;\\;\\;
\text{ Theorem Complex Conjugate Respects Multiplication }
$$

$$
= \overline{\alpha} [\overline{A}]_{ij}
\\;\\;\\;\\;\\;
\text{ Definition Complex Conjugate of Matrix }
$$

$$
= [\overline{\alpha} \overline{A}]_{ij}
\\;\\;\\;\\;\\;
\text{ Definition Matrix Scalar Multiplication }
$$


Since the matrices $\overline{\alpha A}$ and $\overline{\alpha} \overline{A}$ are equal in each entry, Definition Matrix Equality says that $\overline{\alpha A} = \overline{\alpha} \overline{A}$.

## Reference

1. [linear.ups.edu - theorem CRMSM, section Matrix operations](http://linear.ups.edu/html/section-MO.html)