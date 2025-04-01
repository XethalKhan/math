# Elementary matrices

1. For $i \neq j, E_{i, j}$ is the square matrix of size $n$ with

$$
[E_{i, j}]_{k l} = \begin{cases}
0 \\;\\;\\; k \neq i, k \neq j, l \neq k\\
1 \\;\\;\\; k \neq i, k \neq j, l = k\\
0 \\;\\;\\; k = i, l \neq j\\
1 \\;\\;\\; k = i, l = j\\
0 \\;\\;\\; k = j, l \neq i\\
1 \\;\\;\\; k = j, l = i
\end{cases}
$$

2. For $\alpha \neq 0, E_i (\alpha)$ is the square matrix of size $n$ with

$$
[E_i (\alpha)]_{k l} = \begin{cases}
0 \\;\\;\\; l \neq k\\
1 \\;\\;\\; k \neq i, l = k\\
\alpha \\;\\;\\; k = i, l = i
\end{cases}
$$

3. For $i \neq j, E_{i, j} (\alpha)$ is the square matrix of size $n$ with

$$
[E_{i, j} (\alpha)]_{k l} = \begin{cases}
0 \\;\\;\\; k \neq j, l \neq k\\
1 \\;\\;\\; k \neq j, l = k\\
0 \\;\\;\\; k = j, l \neq i, l \neq j\\
1 \\;\\;\\; k = j, l = j\\
\alpha \\;\\;\\; k = j, l = i
\end{cases}
$$

## Note

Again, these matrices are not as complicated as their definitions suggest, since they are just small perturbations of the $n \times n$ identity matrix. $E_{i, j}$ is the identity matrix with rows (or columns) $i$ and $j$ trading places, $E_{i} (\alpha)$ is the identity matrix where the diagonal entry in row $i$ and column $i$ has been replaced by $\alpha$, and $E_{i, j}(\alpha)$ is the identity matrix where the entry in row $j$ and column $i$ has been replaced by $\alpha$. Notice that our notation makes no reference to the size of the elementary matrix, since this will always be apparent from the context, or unimportant.

The raison d'etre for elementary matrices is to “do” row operations on matrices with matrix multiplication.

## Example

$$
A =
\begin{bmatrix}
    2 & 1 & 3 & 1\\
    1 & 3 & 2 & 4\\
    5 & 0 & 3 & 1
\end{bmatrix}
$$

$$
R_1 \leftrightarrow R_3 :
\begin{bmatrix}
    5 & 0 & 3 & 1\\
    1 & 3 & 2 & 4\\
    2 & 1 & 3 & 1
\end{bmatrix}
\\;\\;\\;\\;\\;
E_{1, 3} :
\begin{bmatrix}
    0 & 0 & 1\\
    0 & 1 & 0\\
    1 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
    2 & 1 & 3 & 1\\
    1 & 3 & 2 & 4\\
    5 & 0 & 3 & 1
\end{bmatrix}
=
\begin{bmatrix}
    5 & 0 & 3 & 1\\
    1 & 3 & 2 & 4\\
    2 & 1 & 3 & 1
\end{bmatrix}
$$

$$
2 R_2 :
\begin{bmatrix}
    5 & 0 & 3 & 1\\
    2 & 6 & 4 & 8\\
    2 & 1 & 3 & 1
\end{bmatrix}
\\;\\;\\;\\;\\;
E_2(2) :
\begin{bmatrix}
    1 & 0 & 0\\
    0 & 2 & 0\\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    5 & 0 & 3 & 1\\
    1 & 3 & 2 & 4\\
    2 & 1 & 3 & 1
\end{bmatrix}
=
\begin{bmatrix}
    5 & 0 & 3 & 1\\
    2 & 6 & 4 & 8\\
    2 & 1 & 3 & 1
\end{bmatrix}
$$

$$
2 R_3 + R_1 :
\begin{bmatrix}
    9 & 2 & 9 & 3\\
    2 & 6 & 4 & 8\\
    2 & 1 & 3 & 1
\end{bmatrix}
\\;\\;\\;\\;\\;
E_{3, 1} (2) :
\begin{bmatrix}
    1 & 0 & 2\\
    0 & 1 & 0\\
    0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
    5 & 0 & 3 & 1\\
    2 & 6 & 4 & 8\\
    2 & 1 & 3 & 1
\end{bmatrix}
=
\begin{bmatrix}
    9 & 2 & 9 & 3\\
    2 & 6 & 4 & 8\\
    2 & 1 & 3 & 1
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition ELEM, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)