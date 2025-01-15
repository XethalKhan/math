# Linear combination

Suppose that $V$ is a **vector space**. Given $n$ vectors $u_1, u_2, u_3, \dots , u_n$ and $n$ scalars $\alpha_1, \alpha_2, \alpha_3, \dots , \alpha_n$, their **linear combination** is the vector

$$
\alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_n u_n
$$

## Example - A linear combination of matrices

In the vector space $M_{23}$ of $2 \times 3$ matrices, we have the vectors

$$
x =
\begin{bmatrix}
    1 & 3 & - 2\\
    2 & 0 & 7
\end{bmatrix}
\\;\\;\\;
y =
\begin{bmatrix}
    3 & - 1 & 2\\
    5 & 5 & 2
\end{bmatrix}
\\;\\;\\;
z =
\begin{bmatrix}
    4 & 2 & - 4\\
    1 & 1 & 1
\end{bmatrix}
$$

and we can form linear combinations such as

$$
2 x + 4 y + (- 1) z = 2
\begin{bmatrix}
    1 & 3 & - 2\\
    2 & 0 & 7
\end{bmatrix}
+ 4
\begin{bmatrix}
    3 & - 1 & 2\\
    5 & 5 & 1
\end{bmatrix}
+ (- 1)
\begin{bmatrix}
    4 & 2 & - 4\\
    1 & 1 & 1
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    2 & 6 & - 4\\
    4 & 0 & 14
\end{bmatrix}
+
\begin{bmatrix}
    12 & - 4 & 8\\
    20 & 20 & 4
\end{bmatrix}
+
\begin{bmatrix}
    - 4 & - 2 & 4\\
    - 1 & - 1 & - 1
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    10 & 0 & 8\\
    23 & 19 & 17
\end{bmatrix}
$$

or

$$
4 x - 2 y + 3 z = 4
\begin{bmatrix}
    1 & 3 & - 2\\
    2 & 0 & 7
\end{bmatrix}
- 2
\begin{bmatrix}
    3 & - 1 & 2\\
    5 & 5 & 1
\end{bmatrix}
+ 3
\begin{bmatrix}
    4 & 2 & - 4\\
    1 & 1 & 1
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    4 & 12 & - 8\\
    8 & 0 & 28
\end{bmatrix}
+
\begin{bmatrix}
    - 6 & 2 & - 4\\
    - 10 & - 10 & - 2
\end{bmatrix}
+
\begin{bmatrix}
    12 & 6 & - 12\\
    3 & 3 & 3
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    10 & 20 & - 24\\
    1 & - 7 & 29
\end{bmatrix}
$$

## Example linear combination of column vectors

Take a look at [**linear combination of column vectors**](./0002-linear-combination-of-column-vectors.md)

## Reference

1. [linear.ups.edu - definition LC, section Subspaces](http://linear.ups.edu/html/section-S.html)