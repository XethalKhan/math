# Determinant of the transpose

Suppose that $A$ is a **square matrix**. Then $det(A^t) = det(A)$.

## Proof

With our definition of the determinant and theorems like **Determinant expansion about rows**, using induction is a natural approach to proving properties of determinants. And so it is here. Let $n$ be the size of the matrix $A$, and we will use induction on $n$.

For $n = 1$, the transpose of a matrix is identical to the original matrix, so vacuously, the determinants are equal.

Now assume the result is true for matrices of size $n - 1$. Then,

$$
det(A^t) = \frac{1}{n} \sum^{n}_{i = 1} det(A^t)
$$

$$
= \frac{1}{n} \sum^{n}_{i = 1} \sum^{n}_{j = 1} (- 1)^{i + j} [A^t]_{ij} det(A^t(i | j))
\\;\\;\\;
\text{ Theorem Determinant expansion about rows }
$$

$$
= \frac{1}{n} \sum^{n}_{i = 1} \sum^{n}_{j = 1} (- 1)^{i + j} [A]_{ji} det(A^t(i | j))
\\;\\;\\;
\text{ Transpose of a Matrix }
$$

$$
= \frac{1}{n} \sum^{n}_{i = 1} \sum^{n}_{j = 1} (- 1)^{i + j} [A]_{ji} det((A(j | i))^t)
\\;\\;\\;
\text{ Transpose of a Matrix }
$$

$$
= \frac{1}{n} \sum^{n}_{i = 1} \sum^{n}_{j = 1} (- 1)^{i + j} [A]_{ji} det(A(j | i))
\\;\\;\\;
\text{ Induction Hypothesis }
$$

$$
= \frac{1}{n} \sum^{n}_{j = 1} \sum^{n}_{i = 1} (- 1)^{i + j} [A]_{ji} det(A(j | i))
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= \frac{1}{n} \sum^{n}_{j = 1} det(A)
\\;\\;\\;
\text{ Theorem Determinant expansion about rows }
$$

$$
= det(A)
$$

## Reference

1. [linear.ups.edu - theorem DT, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)