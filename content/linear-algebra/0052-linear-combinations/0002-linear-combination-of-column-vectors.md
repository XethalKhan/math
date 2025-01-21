# Linear combination of column vectors

Given $n$ **column vectors** $u_1, u_2, u_3, \dots , u_n$ from $\mathbb{C}^m$ and $n$ scalars $\alpha_1, \alpha_2, \alpha_3, \dots , \alpha_n$, their linear combination is the vector

$$
\alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_n u_n
$$

## Note

This is a specialisation of [**linear combination**](./0001-linear-combination.md) over a vector space of $\mathbb{C}^m$

## Example

Suppose that

$$
\alpha_1 = 1
\\;\\;\\;
\alpha_2 = - 4
\\;\\;\\;
\alpha_3 = 2
\\;\\;\\;
\alpha_4 = - 1
$$

and

$$
u_1 =
\begin{bmatrix}
    2\\
    4\\
    - 3\\
    1\\
    2\\
    9
\end{bmatrix}
\\;\\;\\;
u_2 =
\begin{bmatrix}
    6\\
    3\\
    0\\
    - 2\\
    1\\
    4
\end{bmatrix}
\\;\\;\\;
u_3 =
\begin{bmatrix}
    - 5\\
    2\\
    1\\
    1\\
    - 3\\
    0
\end{bmatrix}
u_4 =
\begin{bmatrix}
    3\\
    2\\
    - 5\\
    7\\
    1\\
    3
\end{bmatrix}
$$

then their linear combination is

$$
\alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \alpha_4 u_4 =
(1)
\begin{bmatrix}
    2\\
    4\\
    - 3\\
    1\\
    2\\
    9
\end{bmatrix}
+ (- 4)
\begin{bmatrix}
    6\\
    3\\
    0\\
    - 2\\
    1\\
    4
\end{bmatrix}
+ (2)
\begin{bmatrix}
    - 5\\
    2\\
    1\\
    1\\
    - 3\\
    0
\end{bmatrix}
+ (- 1)
\begin{bmatrix}
    3\\
    2\\
    - 5\\
    7\\
    1\\
    3
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    2\\
    4\\
    - 3\\
    1\\
    2\\
    9
\end{bmatrix}
+
\begin{bmatrix}
    - 24\\
    - 12\\
    0\\
    8\\
    - 4\\
    - 16
\end{bmatrix}
+
\begin{bmatrix}
    - 10\\
    4\\
    2\\
    2\\
    - 6\\
    0
\end{bmatrix}
+
\begin{bmatrix}
    - 3\\
    - 2\\
    5\\
    - 7\\
    - 1\\
    - 3
\end{bmatrix}
=
\begin{bmatrix}
    - 35\\
    - 6\\
    4\\
    4\\
    - 9\\
    - 10
\end{bmatrix}
$$

A different linear combination, of the same set of vectors, can be formed with different scalars. Take

$$
\beta_1 = 3
\\;\\;\\;
\beta_2 = 0
\\;\\;\\;
\beta_3 = 5
\\;\\;\\;
\beta_4 = - 1
$$

and form the linear combination

$$
\beta_1 u_1 + \beta_2 u_2 + \beta_3 u_3 + \beta_4 u_4 =
(3)
\begin{bmatrix}
    2\\
    4\\
    - 3\\
    1\\
    2\\
    9
\end{bmatrix}
+ (0)
\begin{bmatrix}
    6\\
    3\\
    0\\
    - 2\\
    1\\
    4
\end{bmatrix}
+ (5)
\begin{bmatrix}
    - 5\\
    2\\
    1\\
    1\\
    - 3\\
    0
\end{bmatrix}
+ (- 1)
\begin{bmatrix}
    3\\
    2\\
    - 5\\
    7\\
    1\\
    3
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    6\\
    12\\
    - 9\\
    3\\
    6\\
    27
\end{bmatrix}
+
\begin{bmatrix}
    0\\
    0\\
    0\\
    0\\
    0\\
    0
\end{bmatrix}
+
\begin{bmatrix}
    - 25\\
    10\\
    5\\
    5\\
    - 15\\
    0
\end{bmatrix}
+
\begin{bmatrix}
    - 3\\
    - 2\\
    5\\
    - 7\\
    - 1\\
    - 3
\end{bmatrix}
=
\begin{bmatrix}
    - 22\\
    20\\
    1\\
    1\\
    - 10\\
    24
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition LCCV, section Subspaces](http://linear.ups.edu/html/section-LC.html)