# Orthogonal set of vectors

Suppose that $S = \\{u_1, u_2, u_3, \dots , u_n\\}$ is a set of vectors from $\mathbb{C}^{m}$. Then $S$ is an **orthogonal set** if every pair of different vectors from $S$ is orthogonal, that is $⟨u_i, u_j⟩ = 0$ whenever $i \neq j$.

In this definition, we extended the definition of [**Orthogonal Vector**](./0011-orthogonal-vectors.md) to whole sets by requiring vectors to be pairwise orthogonal.

## Example

The set

$$
\\{ x_1, x_2, x_3, x_4 \\}
= \\{
\begin{bmatrix}
1 + i\\
1\\
1 − i\\
i
\end{bmatrix}
,
\begin{bmatrix}
1 + 5i\\
6 + 5i\\
−7 − i\\
1 − 6i
\end{bmatrix}
,
\begin{bmatrix}
− 7 + 34i\\
− 8 − 23i\\
− 10 + 22i\\
30 + 13i
\end{bmatrix}
,
\begin{bmatrix}
− 2 − 4i\\
6 + i\\
4 + 3i\\
6 − i
\end{bmatrix}
\\}
$$
 
is an orthogonal set.

$$
⟨x_1, x_3⟩ = (1 − i)(− 7 + 34i) + (1)(− 8 − 23i) + (1 + i)(− 10 + 22i) + (− i)(30 + 13i)
$$

$$
= (27 + 41i) + (− 8 − 23i) + (− 32 + 12i) + (13 − 30i)
$$

$$
= 0 + 0i
$$
 
and

$$
⟨x_2, x_4⟩ = (1 − 5i)(− 2 − 4i) + (6 − 5i)(6 + i) + (− 7 + i)(4 + 3i) + (1 + 6i)(6 − i)
$$

$$
= (− 22 + 6i) + (41 − 24i) + (− 31 − 17i) + (12 + 35i)
$$

$$
= 0 + 0i
$$

## Reference

1. [linear.ups.edu - definition OSV, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)