# Gauss-Jordam method

## Informal

Gauss-Jordan method is an extension of Gauss’s Method, used to turn matrices into its **reduced-row echelon form**.

To reduce the matrix

$$
A =
\begin{bmatrix}
    1 & 1 & -2 & -2\\
    0 & 1 & 3 & 7\\
    1 & 0 & -1 & -1
\end{bmatrix}
$$

we can start as usual by reducing it to **echelon form**.

$$
\xrightarrow{- \rho_1 + \rho_3}
\\;\\;\\;
\begin{bmatrix}
    1 & 1 & -2 & -2\\
    0 & 1 & 3 & 7\\
    0 & -1 & 1 & 1
\end{bmatrix}
\\;\\;\\;
\xrightarrow{\rho_2 + \rho_3}
\\;\\;\\;
\begin{bmatrix}
    1 & 1 & -2 & -2\\
    0 & 1 & 3 & 7\\
    0 & 0 & 4 & 8
\end{bmatrix}
$$

We can keep going to a second stage by making the leading entries into $1$’s

$$
\xrightarrow{\frac{1}{4} \rho_3}
\\;\\;\\;
\begin{bmatrix}
    1 & 1 & -2 & -2\\
    0 & 1 & 3 & 7\\
    0 & 0 & 1 & 2
\end{bmatrix}
$$

and then to a third stage that uses the leading entries to eliminate all of the other entries in each column by combining upwards. Using one entry to clear out the rest of a column is **pivoting** on that entry.

$$
\xrightarrow[2 \rho_3 + \rho_1]{-3 \rho_3 + \rho_2}
\\;\\;\\;
\begin{bmatrix}
    1 & 1 & 0 & 2\\
    0 & 1 & 0 & 1\\
    0 & 0 & 1 & 2
\end{bmatrix}
\\;\\;\\;
\xrightarrow{- \rho_2 + \rho_1}
\\;\\;\\;
\begin{bmatrix}
    1 & 0 & 0 & 1\\
    0 & 1 & 0 & 1\\
    0 & 0 & 1 & 2
\end{bmatrix}
$$

The cost of using Gauss-Jordan reduction to solve a system is the additional arithmetic. The benefit is that we can just read off the solution set description.


In any echelon form system, reduced or not, we can read off when the system has an empty solution set because there is a contradictory equation. We can read off when the system has a one-element solution set because there is no contradiction and every variable is the leading variable in some row. And, we can read off when the system has an infinite solution set because there is no contradiction and at least one variable is free.

However, in reduced echelon form we can read off not just the size of the solution set but also its description. We have no trouble describing the solution set when it is empty, of course.

## Formal

Suppose $A$ is a matrix. Then there is a matrix $B$ so that

1. $A$ and $B$ are row-equivalent.
2. $B$ is in **reduced row-echelon form**.

### Proof

Suppose that $A$ has $m$ rows and $n$ columns. We will describe a process for converting $A$ into $B$ via row operations, known as Gauss-Jordan elimination. Tracing through this procedure will be easier if you recognize that $i$ refers to a row that is being converted, $j$ refers to a column that is being converted, and $r$ keeps track of the number of nonzero rows. Here we go.

1. Set $j = 0$ and $r = 0$.
2. Increase $j$ by $1$. If $j$ now equals $n + 1$, then stop.
3. Examine the entries of $A$ in column $j$ located in rows $r + 1$ through $m$. If all of these entries are zero, then go to Step 2.
4. Choose a row from rows $r + 1$ through $m$ with a nonzero entry in column $j$. Let $i$ denote the index for this row.
5. Increase $r$ by 1.
6. Use the first row operation to swap rows $i$ and $r$.
7. Use the second row operation to convert the entry in row $r$ and column $j$ to a $1$.
8. Use the third row operation with row $r$ to convert every other entry of column $j$ to zero.
9. Go to Step 2.

The result of this procedure is that the matrix $A$ is converted to a matrix in reduced row-echelon form, which we will refer to as $B$. We need to now prove this claim by showing that the converted matrix has the requisite properties of **reduced row-echelon form**. First, the matrix is only converted through row operations (Steps 6, 7, 8), so $A$ and $B$ are **row-equivalent** (first point proved).

It is a bit more work to be certain that $B$ is in reduced row-echelon form. We claim that as we begin Step 2, the first $j$ columns of the matrix are in reduced row-echelon form with $r$ nonzero rows. Certainly this is true at the start when $j = 0$, since the matrix has no columns and so vacuously meets the conditions of **reduced row-echelon form** definition with $r = 0$ nonzero rows.

In Step 2 we increase $j$ by $1$ and begin to work with the next column. There are two possible outcomes for Step 3. Suppose that every entry of column $j$ in rows $r + 1$ through $m$ is zero. Then with no changes we recognize that the first $j$ columns of the matrix has its first $r$ rows still in reduced-row echelon form, with the final $m − r$ rows still all zero.

Suppose instead that the entry in row $i$ of column $j$ is nonzero. Notice that since $r + 1 \leq i \leq m$, we know the first $j − 1$ entries of this row are all zero. Now, in Step 5 we increase $r$ by $1$, and then embark on building a new nonzero row. In Step 6 we swap row $r$ and row $i$. In the first $j$ columns, the first $r − 1$ rows remain in reduced row-echelon form after the swap. In Step 7 we multiply row $r$ by a nonzero scalar, creating a 1 in the entry in column $j$ of row $i$, and not changing any other rows. This new leading 1 is the first nonzero entry in its row, and is located to the right of all the leading 1's in the preceding $r − 1$ rows. With Step 8 we insure that every entry in the column with this new leading 1 is now zero, as required for reduced row-echelon form. Also, rows $r + 1$ through $m$ are now all zeros in the first $j$ columns, so we now only have one new nonzero row, consistent with our increase of $r$ by one. Furthermore, since the first $j − 1$ entries of row $r$ are zero, the employment of the third row operation does not destroy any of the necessary features of rows $1$ through $r − 1$ and rows $r + 1$ through $m$, in columns $1$ through $j − 1$.

So at this stage, the first $j$ columns of the matrix are in reduced row-echelon form. When Step 2 finally increases $j$ to $n + 1$, then the procedure is completed and the full $n$ columns of the matrix are in reduced row-echelon form, with the value of $r$ correctly recording the number of nonzero rows.

## Reference

1. Jim Hefferson, *Linear Algebra* (page 50, 51)
2. [linear.ups.edu - theorem REMEF, section Reduced Row-Echelon form](http://linear.ups.edu/html/section-RREF.html)
