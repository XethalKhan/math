# Determinant of a matrix

Suppose $A$ is a **square matrix**. Then its determinant, $det(A) = | A |$, is an element of $\mathbb{C}$ defined recursively by:

1. If $A$ is a $1 \times 1$ matrix, then $det(A) = [A]_{11}$.

2. If $A$ is a matrix of size $n$ with $n \geq 2$, then

$$
det(A) = [A]_{11} det(A(1|1)) - [A]_{12} det(A(1|2)) + [A]_{13} det(A(1|3)) - [A]_{14} det(A(1|4)) + \dots + (- 1)^{n + 1} [A]_{1 n} det(A(1|n))
$$

## Example

$$
A = \begin{bmatrix}
    3 & 2 & - 1\\
    4 & 1 & 6\\
    - 3 & - 1 & 2
\end{bmatrix}
$$

Then

$$
det(A) = | A | = \begin{vmatrix}
    3 & 2 & - 1\\
    4 & 1 & 6\\
    - 3 & - 1 & 2
\end{vmatrix}
$$

$$
= 3 \begin{vmatrix}
    1 & 6\\
    - 1 & 2
\end{vmatrix}
- 2 \begin{vmatrix}
    4  & 6\\
    - 3 & 2
\end{vmatrix}
+ (- 1) \begin{vmatrix}
    4 & 1 \\
    - 3 & - 1
\end{vmatrix}
$$

$$
= 3 (1 | 2 | - 6 | - 1 |) - 2 (4 | 2 | - 6 | - 3 |) - (4 | - 1| - 1 | - 3 |)
$$

$$
= 3 (1(2) - 6(- 1)) - 2 (4(2) - 6(- 3)) - (4(- 1) - 1(- 3))
$$

$$
= 24 - 52 + 1
$$

$$
= - 27
$$

## Reference

1. [linear.ups.edu - definition DM, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)