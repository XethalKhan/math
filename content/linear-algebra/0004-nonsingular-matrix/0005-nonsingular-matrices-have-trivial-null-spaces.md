# Nonsingular matrices have trivial null spaces

Suppose that $A$ is a **square matrix**. Then $A$ is **nonsingular** if and only if the null space of $A$ is the set containing only the zero vector, i.e. $N(A) = \\{ 0 \\}$.

## Proof

The null space of a square matrix, $A$, is equal to the set of solutions to the homogeneous system, $LS(A, 0)$. A matrix is nonsingular if and only if the set of solutions to the homogeneous system, $LS(A, 0)$, has only a trivial solution. These two observations may be chained together to construct the two proofs necessary for each half of this theorem.

## Examples

### Singular matrix

$$
A =
\begin{bmatrix}
    1 & -1 & 2\\
    2 & 1 & 1\\
    1 & 1 & 0
\end{bmatrix}
\\;\\;\\;\\;\\;
N(A) = \\{
\begin{bmatrix}
- x_3\\
x_3\\
x_3
\end{bmatrix}
| x_3 \in \mathbb{C}
\\}
$$

### Nonsingular matrix

$$
A =
\begin{bmatrix}
    -7 & -6 & -12\\
    5 & 5 & 7\\
    1 & 0 & 4
\end{bmatrix}
\\;\\;\\;\\;\\;
N(A) = \\{
\begin{bmatrix}
0\\
0\\
0
\end{bmatrix}
\\}
$$

## Reference

1. [linear.ups.edu - theorem NMTNS, section Nonsingular matrices](http://linear.ups.edu/html/section-NM.html)