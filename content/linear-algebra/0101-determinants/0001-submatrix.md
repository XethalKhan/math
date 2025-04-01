# SubMatrix

Suppose that $A$ is an $m \times n$ matrix. Then the submatrix $A(i|j)$ is the $(m - 1) \times (n - 1)$ matrix obtained from $A$ by removing row $i$ and column $j$.

## Example

For the matrix

$$
A = \begin{bmatrix}
    1 & - 2 & 3 & 9\\
    4 & - 2 & 0 & 1\\
    3 & 5 & 2 & 1
\end{bmatrix}
$$

we have the submatrices

$$
A(2 | 3) = \begin{bmatrix}
    1 & - 2 & 9\\
    3 & 5 & 1
\end{bmatrix}
\\;\\;\\;\\;\\;
A(3 | 1) = \begin{bmatrix}
    - 2 & 3 & 9\\
    - 2 & 0 & 1
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition SM, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)