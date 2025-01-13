# Orthonormal set

Suppose $S = \\{u_1, u_2, u_3, \dots , u_n \\}$ is an orthogonal set of vectors such that $|| u_i || = 1$ for all $1 \leq i \leq n$. Then $S$ is an orthonormal set of vectors.

## Note

Once you have an orthogonal set, it is easy to convert it to an orthonormal set — multiply each vector by the reciprocal of its **norm**, and the resulting vector will have norm 1. This scaling of each vector will not affect the orthogonality properties (apply Theorem Inner product and scalar multiplication).

## Example

The set

$$
T = \\{ u_1, u_2, u_3 \\} = \\{
\begin{bmatrix}
1\\
1 + i\\
1
\end{bmatrix}
,
\frac{1}{4} 
\begin{bmatrix}
- 2 - 3 i\\
1 - i\\
2 + 5 i
\end{bmatrix}
,
\frac{1}{11}
\begin{bmatrix}
- 3 - i\\
1 + 3 i\\
- 1 - i
\end{bmatrix}
\\}
$$

is an orthogonal set.

We compute the norm of each vector,

$$
|| u_1 || = 2
\\;\\;\\;
|| u_2 || = \frac{1}{2} \sqrt{11}
\\;\\;\\;
|| u_3 || = \frac{\sqrt{2}}{\sqrt{11}}
$$

Converting each vector to a norm of 1, yields an orthonormal set,

$$
w_1 = \frac{1}{2}
\begin{bmatrix}
1\\
1 + i\\
1
\end{bmatrix}
$$

$$
w_2 = \frac{1}{\frac{1}{2} \sqrt{11}}
\frac{1}{4}
\begin{bmatrix}
- 2 - 3 i\\
1 - i\\
2 + 5 i
\end{bmatrix}
= \frac{1}{2 \sqrt{11}}
\begin{bmatrix}
- 2 - 3 i\\
1 - i\\
2 + 5 i
\end{bmatrix}
$$

$$
w_3 = \frac{1}{\frac{\sqrt{2}}{\sqrt{11}}}
\frac{1}{11}
\begin{bmatrix}
- 3 - i\\
1 + 3 i\\
- 1 - i
\end{bmatrix}
= \frac{1}{\sqrt{22}}
\begin{bmatrix}
- 3 - i\\
1 + 3 i\\
- 1 - i
\end{bmatrix}
$$

