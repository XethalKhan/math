# Augmented matrix

## Definition

Suppose we have a system of $m$ equations in $n$ variables with **coefficient matrix $A$** and **vector of constants $b$**. Then the **augmented matrix** of the system of equations is the $m \times (n + 1)$ matrix whose first $n$ columns are the columns of $A$ and whose last column $n + 1$ is the column vecotr $b$. This matrix will be written as $[A | b]$.

The augmented matrix represents all the important information in the system of equations, since the names of the variables have been ignored, and the only connection with the variables is the location of their coefficients in the matrix. It is important to realize that the augmented matrix is just that, a **matrix** and not a system of equations. In particular, the augmented matrix does not have any solutions, though it will be usefull for finding solutions to the system of equations that it is associated with.

For the following system of equations

$$
\displaylines{
x_1 - x_2 + 2 x_3 = 1\\
2 x_1 + x_2 + x_3 = 8\\
x_1 + x_2 = 5
}
$$

here is its augmented matrix

$$
B =
\begin{bmatrix}
    1 & -1 & 2 & 1\\
    2 & 1 & 1 & 8\\
    1 & 1 & 0 & 5
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition AM, section Reduced Row-Echelon form](http://linear.ups.edu/html/section-RREF.html)