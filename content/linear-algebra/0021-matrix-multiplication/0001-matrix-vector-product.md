# Matrix-vector product

Suppose $A$ is an $m \times n$ **matrix** with columns $A_1, A_2, A_3, \dots , A_n$ and $u$ is a **vector** of size $n$. Then the **matrix-vector product** of $A$ with $u$ is the **linear combination**

$$
A u = [u]_1 A_1 + [u]_2 A_2 + [u]_3 A_3 + \dots + [u]_n A_n
$$

## Example

Consider

$$
A =
\begin{bmatrix}
    1 & 4 & 2 & 3 & 4\\
    - 3 & 2 & 0 & 1 & - 2\\
    1 & 6 & - 3 & - 1 & 5
\end{bmatrix}
\\;\\;\\;
u =
\begin{bmatrix}
    2\\
    1\\
    -2\\
    3\\
    - 1
\end{bmatrix}
$$

Then

$$
A u =
2
\begin{bmatrix}
    1\\
    - 3\\
    1
\end{bmatrix}
+
1
\begin{bmatrix}
    4\\
    2\\
    6
\end{bmatrix}
+ (- 2)
\begin{bmatrix}
    2\\
    0\\
    - 3
\end{bmatrix}
+ 3
\begin{bmatrix}
    3\\
    1\\
    - 1
\end{bmatrix}
+ (- 1)
\begin{bmatrix}
    4\\
    - 2\\
    5
\end{bmatrix}
=
\begin{bmatrix}
    7\\
    1\\
    6
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition MVP, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)