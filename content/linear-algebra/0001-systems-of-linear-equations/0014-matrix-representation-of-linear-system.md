# Matrix representation of a linear system

## Definition

If $A$ is the **coefficient matrix** of a system of linear equations and $b$ is the **vector of constants**, then we will write $LS(A, b)$ as a shorthand expression for the system of linear equations, which we will refer to as the **matrix representation of the linear system**.

The system of linear equations

$$
\displaylines{
2 x_1 + 4 x_2 - 3 x_3 + 5 x_4 + x_5 = 9\\
3 x_1 + x_2 + \\;\\;\\;\\;\\;\\;\\;\\;\\; + x_4 - 3 x_5 = 0\\
-2 x_1 + 7 x_2 - 5 x_3 + 2 x_4 + 2 x_5 = -3
}
$$

has coefficient matrix and vector matrix of constants

$$
A =
\begin{bmatrix}
    2 & 4 & -3 & 5 & 1\\
    3 & 1 & 0 & 1 & -3\\
    -2 & 7 & -5 & 2 & 2
\end{bmatrix}
\\;\\;\\;\\;\\;
b =
\begin{bmatrix}
9\\
0\\
-3
\end{bmatrix}
$$

and so will be referenced as $LS(A, b)$

## Reference

1. [linear.ups.edu - definition MRLS, section Reduced Row-Echelon form](http://linear.ups.edu/html/section-RREF.html)