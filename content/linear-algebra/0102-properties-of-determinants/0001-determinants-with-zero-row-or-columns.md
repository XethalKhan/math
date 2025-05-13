# Determinants with zero rows or columns

Suppose that $A$ is a **square matrix** with a row where every entry is zero, or a column where every entry is zero. Then $det(A) = 0$.

## Proof

Suppose that $A$ is a square matrix of size $n$ and row $i$ has every entry equal to zero. We compute $det(A)$ via expansion about row $i$.

$$
det(A) = \sum^{n}_{j = 1} (-1)^{i + j} [A]_{ij} det(A(i | j))
\\;\\;\\;
\text{ Theorem Determinant Expansion about Rows }
$$

$$
= \sum^{n}_{j = 1} (-1)^{i + j} \\; 0 \\; det(A(i | j))
\\;\\;\\;
\text{ Row } i \text{ is zeros }
$$

$$
= \sum^{n}_{j = 1} 0 = 0
$$

## Note

The proof for the case of a zero column is entirely similar, or could be derived from an application of Theorem **Determinant of the Transpose** employing the transpose of the matrix.

## Reference

1. [linear.ups.edu - theorem DZRC, section Properties of Determinants of Matrices](http://linear.ups.edu/html/section-PDM.html)