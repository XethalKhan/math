# Systems of linear equations as matrix multiplication

The set of solutions to the linear system $LS(A, b)$ equals the set of solutions for $x$ in the vector equation $A x = b$.

## Proof

This theorem says that two sets (of solutions) are equal. So we need to show that one set of solutions is a subset of the other, and vice versa. Let $A_1, A_2, A_3, \dots , A_n$ be the columns of $A$. Both of these set inclusions then follow from the following chain of equivalences,

$$
x \text{ is a solution to } LS(A, b)
$$

$$
[x]_1 A_1 + [x]_2 A_2 + [x]_3 A_3 + \dots + [x]_n A_n = b
\\;\\;\\;
\text{ Theorem Solutions to Linear Systems are Linear Combinations}
$$

$$
x \text{ is a solution to } A x = b
\\;\\;\\;
\text{ definition Matrix-Vector product }
$$

## Example

Consider the system of linear equations

$$
\displaylines{
2 x_1 + 4 x_2 - 3 x_3 + 5 x_4 + x_5 = 9\\
3 x_1 + x_2 + x_4 - 3 x_5 = 0\\
- 2 x_1 + 7 x_2 - 5 x_3 + 2 x_4 + 2 x_5 = - 3
}
$$

has coefficient matrix and vector of constants

$$
A =
\begin{bmatrix}
    2 & 4 & - 3 & 5 & 1\\
    3 & 1 & 0 & 1 & - 3\\
    - 2 & 7 & - 5 & 2 & 2
\end{bmatrix}
\\;\\;\\;
b =
\begin{bmatrix}
    9\\
    0\\
    - 3
\end{bmatrix}
$$

and so will be described compactly by the vector equation $A x = b$.

## Reference

1. [linear.ups.edu - theorem SLEMM, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)