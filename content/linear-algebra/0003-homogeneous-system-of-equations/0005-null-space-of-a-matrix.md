# Null space of a matrix

The null space of a matrix $A$, denoted $N(A)$, is the set of all the vectors that are solutions to the **homogeneous system** $LS(A, 0)$.

Null space is a property of the **coefficient matrix**, not a property of some system of equations.

The set of solutions to a **homogeneous system** (which is never empty) is of enough interest to warrant its own name. However, we define it as a property of the **coefficient matrix**, not as property of some system of equations.

## Example

Let us compute the null space of

$$
A =
\begin{bmatrix}
2 & −1 & 7 & −3 & −8\\
1 & 0 & 2 & 4 & 9\\
2 & 2 & −2 & −1 & 8
\end{bmatrix}
$$

which we write as $N(A)$. Translating our definition, we simply desire to solve the homogeneous system $LS(A, 0)$. So we row-reduce the augmented matrix to obtain

$$
\begin{bmatrix}
1 & 0 & 2 & 0 & 1 & 0\\
0 & 1 & −3 & 0 & 4 & 0\\
0 & 0 & 0 & 1 & 2 & 0
\end{bmatrix}
$$

The variables (of the homogeneous system) $x_3$ and $x_5$ are free (since columns 1, 2 and 4 are pivot columns), so we arrange the equations represented by the matrix in reduced row-echelon form to

$$
x_1 = −2 x_3 − x_5
$$

$$
x_2 = 3 x_3 − 4 x_5
$$

$$
x_4 = −2 x_5
$$

So we can write the infinite solution set as sets using column vectors,

$$
N(A) = \\{ \begin{bmatrix}
−2 x_3 − x_5\\
3 x_3 − 4 x_5\\
x_3\\
− 2 x_5\\
x_5
\end{bmatrix}
| x_3, x_5 \in \mathbb{C}
\\}
$$


## Reference

1. [linear.ups.edu - definition NSM, section Homogeneous Systems of Equations](http://linear.ups.edu/html/section-HSE.html)