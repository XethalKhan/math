# Matrix multiplication

Suppose $A$ is an $m \times n$ **matrix** and $B_1, B_2, B_3, \dots , B_p$ are the columns of an $n \times p$ **matrix** $B$. Then the matrix product of $A$ with $B$ is the $m \times p$ matrix where column $i$ is the **matrix-vector product** $AB_i$. Symbolically,

$$
AB = A [B_1 | B_2 | B_3 | \dots | B_p] = [AB_1 | AB_2 | AB_3 | \dots | AB_p]
$$

## Example

$$
A =
\begin{bmatrix}
    1 & 2 & - 1 & 4 & 6\\
    0 & - 4 & 1 & 2 & 3\\
    - 5 & 1 & 2 & - 3 & 4
\end{bmatrix}
\\;\\;\\;
B = 
\begin{bmatrix}
    1 & 6 & 2 & 1\\
    - 1 & 4 & 3 & 2\\
    1 & 1 & 2 & 3\\
    6 & 4 & - 1 & 2\\
    1 & - 2 & 3 & 0
\end{bmatrix}
$$

$$
AB = 
\\;\\;\\;
\begin{bmatrix}
    A
    \begin{bmatrix}
    1\\
    - 1\\
    1\\
    6\\
    1
    \end{bmatrix}
    |
    A
    \begin{bmatrix}
    6\\
    4\\
    1\\
    4\\
    - 2
    \end{bmatrix}
    |
    A
    \begin{bmatrix}
    2\\
    3\\
    2\\
    - 1\\
    3
    \end{bmatrix}
    |
    A
    \begin{bmatrix}
    1\\
    2\\
    3\\
    2\\
    0
    \end{bmatrix}
\end{bmatrix}
\\;\\;\\;
=
\\;\\;\\;
\begin{bmatrix}
    28 & 17 & 20 & 10\\
    20 & - 13 & - 3 & - 1\\
    - 18 & - 44 & 12 & - 3
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition MM, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)