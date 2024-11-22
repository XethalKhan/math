# Reduced-row echelon form

A matrix is in **reduced echelon form** if, in addition to being in **echelon form**, each leading entry is a one and is the only nonzero entry in its column.

A matrix is in **reduced-row echelon form** if it meets all of the following conditions:

1. If there is a row where every entry is zero, than this row lies below any other row that contains a nonzero entry
2. The leftmost nonzero entry of a row is equal to $1$
3. The leftmost nonzero entry of a row is the only nonzero entry in its column
4. Consider any two different leftmost nonzero entries, one located in row $i$, column $j$ and the other located in row $s$ column $t$. If $s \gt i$, then $t \gt j$.

A row of only zero entries is called a **zero row** and the leftmost nonzero entry of a nonzero row is **leading 1**. A column containing a leading $1$ will be called a **pivot column**. The number of nonzero rows will be denoted by $r$, which is also equal to the number of leading 1s and the number of pivot columns.

The set of column indices for the pivot columns will be denoted by $D = \\{d_1, d_2, \dots , d_r\\}$ where $d_1 \leq d_2 \leq \dots \leq d_r$ while the columns that are not pivot columns will be denoted as $F = \\{f_1, f_2, \dots , f_{n - r}\\}$.

One important point to make here is that all of these terms and notation apply to a matrix. Sometimes we will employ these terms and sets for an **augmented matrix**, and other times it might be a **coefficient matrix**. So always give some thought to exactly which type of matrix you are analyzing.

$$
C =
\begin{bmatrix}
    1 & -3 & 0 & 6 & 0 & 0 & -5 & 9\\
    0 & 0 & 0 & 0 & 1 & 0 & 3 & -7\\
    0 & 0 & 0 & 0 & 0 & 1 & 7 & 3\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

## Reference

1. Jim Hefferson, *Linear Algebra* (page 47)
2. [linear.ups.edu - definition RREF, section Reduced Row-Echelon form](http://linear.ups.edu/html/section-RREF.html)