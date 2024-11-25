# Independent and dependent variables

Suppose $A$ is the **augmented matrix** of a **consistent** system of linear equations and $B$ is a row-equivalent matrix in **reduced row-echelon form**. Suppose $j$ is the index of a **pivot column** of $B$. Then the variable $x_j$ is [**dependent**](./../0001-systems-of-linear-equations/0006-echelon-form.md). A variable that is not dependent is called [**independent** or **free**](./../0001-systems-of-linear-equations/0007-free-variables.md).

Consider the system and its reduced row-echelon form

$$
\displaylines{
x_1 - x_2 - 2 x_3 + x_4 + 1 x_5 = 13\\
x_1 - x_2 + x_3 + x_4 + 5 x_5 = 16\\
2 x_1 - 2 x_2    + 3 x_4 + 10 x_5 = 21\\
2 x_1 - 2 x_2 - x_3 + 3 x_4 + 20 x_5 = 38\\
2 x_1 - 2 x_2 + x_3 + x_4 + 8 x_5 = 22
}
\\;\\;\\;\\;\\;\\;\\;\\;
\begin{bmatrix}
    1 & -1 & 0 & 0 & 3 & 6\\
    0 & 0 & 1 & 0 & -2 & 1\\
    0 & 0 & 0 & 1 & 4 & 9\\
    0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

Columns $1$, $3$ and $4$ are **pivot columns**, so $D = \\{1, 3, 4\\}$. From this we know that the variables $x_1, x_3, x_4$ will be **dependent variables**, and each of the $r = 3$ nonzero rows of the row-reduced matrix will yield an expression for one of these three variables. The set $F$ is all the remaining column indices $F = \\{2, 5, 6\\}$. The column index $6$ in $F$ means that the final column is not a pivot column, and thus the system is **consistent**. The remaining indices in $F$ indicate **free variables**, so $x_2$ and $x_5$ are our free variables.

The resulting three equations that describe our solution set are then

$$
(x_{d_1} = x_1)
\\;\\;\\;
x_1 = 6 + x_2 - 3 x_5
$$

$$
(x_{d_2} = x_3)
\\;\\;\\;
x_3 = 1 + 2 x_5
$$

$$
(x_{d_3} = x_4)
\\;\\;\\;
x_4 = 9 - 4 x_5
$$

Make sure you understand where these three equations came from, and notice how the location of the pivot columns determined the variables on the left-hand side of each equations. We can compactly describe the solution set as

$$
S = x = \\{
\begin{bmatrix}
    6 + x_2 - 3 x_5\\
    x_2\\
    x_3 = 1 + 2 x_5\\
    x_4 = 9 - 4 x_5\\
    x_5
\end{bmatrix}
| x_2, x_5 \in \mathbb{R}
\\}
$$

## Reference

1. [linear.ups.edu - definition IDV, section Types of Solution Sets](http://linear.pugetsound.edu/html/section-TSS.html)