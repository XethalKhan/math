# Matrix multiplication and complex conjugate

Suppose $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix. Then $\overline{AB} = \overline{A} \\; \overline{B}$.

## Proof

To obtain this matrix equality, we will work entry-by-entry. For $1 \leq i \leq m, 1 \leq j \leq p$,

$$
[\overline{AB}]_{ij} = \overline{[AB]_{ij}}
\\;\\;\\;
\text{ Definition Complex Conjugate of a Matrix }
$$

$$
= \overline{\sum^{n}_{k = 1} [A]_{ik} [B]_{kj}}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{n}_{k = 1} \overline{[A]_{ik} [B]_{kj}}
\\;\\;\\;
\text{ Theorem Complex conjugate respects addition }
$$

$$
= \sum^{n}_{k = 1} \overline{[A]_{ik}} \\; \overline{[B]_{kj}}
\\;\\;\\;
\text{ Theorem Complex conjugate respects multiplication }
$$

$$
= \sum^{n}_{k = 1} [\overline{A}]_{ik} \\; [\overline{B}]_{kj}
\\;\\;\\;
\text{ Definition Complex conjugate of matrix }
$$

$$
= [\overline{A} \\; \overline{B}]_{ij}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

So the matrices $\overline{AB}$ and $\overline{A} \\; \overline{B}$ are equal, entry-by-entry, and by the definition of **Matrix Equality** we can say they are equal matrices.

## Reference

1. [linear.ups.edu - theorem MMCC, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)