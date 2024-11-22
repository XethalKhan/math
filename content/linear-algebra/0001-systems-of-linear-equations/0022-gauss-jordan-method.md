# Gauss-Jordam method

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

## Reference

1. Jim Hefferson, *Linear Algebra* (page 50, 51)
