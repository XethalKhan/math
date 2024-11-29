# Inner product

Given the vectors $u, v \in \mathbb{C}^m$ the **inner product** of $u$ and $v$ is the scalar quantity in $\mathbb{C}$,

$$
⟨u, v⟩ = \overline{[u]\_1} [v]\_{1} + \overline{[u]\_2} [v]\_{2} + \dots + \overline{[u]\_{m}} [v]\_m = \sum_{i=1}^{m} \overline{[u]\_{i}} [v]\_{i}
$$

## Example

The inner product of

$$
u = \begin{bmatrix}
2 + 3i\\
5 + 2i\\
−3 + i
\end{bmatrix}
\\;\\;\\;
\text{ and }
\\;\\;\\;
v = \begin{bmatrix}
1 + 2i\\
−4 + 5i\\
0 + 5i
\end{bmatrix}
$$

is

$$
⟨u, v⟩ = (\overline{2 + 3i})(1 + 2i) + (\overline{5 + 2i})(−4 + 5i) + (\overline{−3 + i})(0 + 5i)
$$

$$
= (2 − 3i)(1 + 2i) + (5 − 2i)(−4 + 5i) + (−3 − i)(0 + 5i)
$$

$$
= (8 + i) + (−10+ 33i) + (5 − 15i)
$$

$$
=3 + 19i
$$

The inner product of

$$
w = \begin{bmatrix}
2\\
4\\
−3\\
2\\
8
\end{bmatrix}
\\;\\;\\;
\text{ and }
\\;\\;\\;
x = \begin{bmatrix}
3\\
1\\
0\\
−1\\
−2
\end{bmatrix}
$$

is

$$
⟨w, x⟩ = (\overline{2})3 + (\overline{4})1 + (\overline{−3})0 + (\overline{2})(−1) + (\overline{8})(−2)
$$

$$
= 2(3) + 4(1) + (−3)0 + 2(−1) + 8(−2)
$$

$$
= −8
$$

## Note

In the case where the entries of our vectors are all real numbers (as in the second part of example), the computation of the inner product may look familiar and be known to you as a **dot product** or **scalar product**. So you can view the inner product as a generalization of the scalar product to vectors from $\mathbb{C}^m$ (rather than $\mathbb{R}^m).

Note that we have chosen to conjugate the entries of the first vector listed in the inner product, while it is almost equally feasible to conjugate entries from the second vector instead.

## Reference

1. [linear.ups.edu - definition IP, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)