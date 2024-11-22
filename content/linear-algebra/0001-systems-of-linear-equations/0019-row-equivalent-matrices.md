# Row-equivalent matrices

Two matrices, $A$ and $B$ are **row-equivalent** if one can be obtained from the other by a sequence of **row operations**.

The matrices

$$
A =
\begin{bmatrix}
    2 & -1 & 3 & 4\\
    5 & 2 & -2 & 3\\
    1 & 1 & 0 & 6
\end{bmatrix}
\\;\\;\\;
B =
\begin{bmatrix}
    1 & 1 & 0 & 6\\
    3 & 0 & -2 & -9\\
    2 & -1 & 3 & 4
\end{bmatrix}
$$

are **row-equivalent** as can be seen from

$$
\begin{bmatrix}
    2 & -1 & 3 & 4\\
    5 & 2 & -2 & 3\\
    1 & 1 & 0 & 6
\end{bmatrix}
\\;\\;\\;
\xrightarrow{\rho_1 \leftrightarrow \rho_3}
\\;\\;\\;
\begin{bmatrix}
    1 & 1 & 0 & 6\\
    5 & 2 & -2 & 3\\
    2 & -1 & 3 & 4
\end{bmatrix}
\\;\\;\\;
\xrightarrow{-2 \rho_1 + \rho_2}
\\;\\;\\;
\begin{bmatrix}
    1 & 1 & 0 & 6\\
    3 & 0 & -2 & -9\\
    2 & -1 & 3 & 4
\end{bmatrix}
$$

Notice that each of the three row operations is reversible, so we do not have to be careful about the distinction between "$A$ is row-equivalent to $B$" and "$B$ is row-equivalent to $A$".

This definition is corollary of lemmas [Elementary row operations are reversible](./0017-elementary-row-operations-are-reversible.md) and [Between matrices "reduces to" is an equivalence relation](./0018-reduces-to-is-an-equivalence-relation.md).

## Reference

1. [linear.ups.edu - definition REM, section Reduced Row-Echelon form](http://linear.ups.edu/html/section-RREF.html)