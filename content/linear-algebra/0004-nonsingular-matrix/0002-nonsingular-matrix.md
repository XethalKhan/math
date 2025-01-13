# Nonsingular matrix

Suppose $A$ is a **square matrix**. Suppose further that the solution set to the **homogeneous linear system of equations** $LS(A, 0)$ is $\\{ 0 \\}$, in other words, the system has only the trivial solution. Then we say that $A$ is a **nonsingular matrix**. Otherwise we say $A$ is a **singular matrix**.

We can investigate whether any square matrix is nonsingular or not, no matter if the matrix is derived somehow from a system of equations or if it is simply a matrix. The definition says that to perform this investigation we must construct a very specific system of equations (homogeneous, with the matrix as the coefficient matrix) and look at its solution set.

Notice that it makes no sense to call a system of equations nonsingular (the term does not apply to a system of equations), nor does it make any sense to call a $5 \times 7$ matrix singular (the matrix is not square).

## Example - singular matrix

$$
A =
\begin{bmatrix}
    1 & -1 & 2\\
    2 & 1 & 1\\
    1 & 1 & 0
\end{bmatrix}
$$

## Example - nonsingular matrix

$$
B =
\begin{bmatrix}
    -7 & -6 & -12\\
    5 & 5 & 7\\
    1 & 0 & 4
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition NM, section Nonsingular matrices](http://linear.ups.edu/html/section-NM.html)