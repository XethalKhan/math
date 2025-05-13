# Determinant expansion about rows

Suppose that $A$ is a **square matrix** of size $n$. Then for $1 \leq i \leq n$

$$
det(A) = (-1)^{i + 1}[A]_{i1} det(A(i | 1)) + (-1)^{i + 2}[A]_{i2} det(A(i | 2)) + (- 1)^{i + 3} [A]_{i3} det(A(i | 3)) + \dots + (-1)^{i + n} [A]_{in} det(A(i | n))
$$

which is known as expansion about row $i$.

## Proof

First, the statement of the theorem coincides with Definition Determinant when $i = 1$, so throughout, we need only consider $i \gt 1$.

Given the recursive definition of the determinant, it should be no surprise that we will use induction for this proof. When $n = 1$, there is nothing to prove since there is but one row. When $n = 2$, we just examine expansion about the second row,

$$
(- 1)^{2 + 1}[A]_{21} det(A(2 | 1)) + (- 1)^{2 + 2}[A]_{22} det(A(2 | 2)) = - [A]_{21} [A]_{12} + [A]_{22} [A]_{11}
\\;\\;\\;
\text{ Definition Determinant of a Matrix }
$$

$$
= [A]_{11} [A]_{22} - [A]_{12} [A]_{21}
$$

$$
= det(A)
\\;\\;\\;
\text{ Theorem Determinant of matrices of size two}
$$

So the theorem is true for matrices of size $n = 1$ and $n = 2$. Now assume the result is true for all matrices of size $n - 1$ as we derive an expression for expansion about row $i$ for a matrix of size $n$.

We will abuse our notation for a submatrix slightly, so $A(i_1, i_2 | j_1, j_2)$ will denote the matrix formed by removing rows $i_1$ and $i_2$, along with removing columns $j_1$ and $j_2$.

Also, as we take a determinant of a submatrix, we will need to “jump up” the index of summation partway through as we “skip over” a missing column. To do this smoothly we will set

$$
[e_l]\_j = \begin{cases}
0 & l \lt j\\
1 & l \gt j
\end{cases}
$$

Now

$$
det(A) = \sum^{n}_{j = 1} (- 1)^{1 + j} [A]_{1j} det(A(1 | j))
\\;\\;\\;
\text{ Definition Determinant of a Matrix }
$$

$$
= \sum^{n}_{j = 1} (- 1)^{1 + j} [A]_{1j} \sum_{1 \leq l \leq n \text{ and } l \neq j} (-1)^{i - 1 + l - e_{l_j}} [A]_{il} det(A(1, i | j, l))
\\;\\;\\;
\text{ Induction }
$$

$$
= \sum^{n}_{j = 1} \sum_{1 \leq l \leq n \text{ and } l \neq j} (-1)^{j + i + l - e_{l_j}} [A]_{1j} [A]_{il} det(A(1, i | j, l))
\\;\\;\\;
\text{ Distributivity }
$$

$$
= \sum^{n}_{l = 1} \sum_{1 \leq j \leq n \text{ and } j \neq l} (-1)^{j + i + l - e_{l_j}} [A]_{1j} [A]_{il} det(A(1, i | j, l))
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= \sum^{n}_{l = 1} (-1)^{i + l} [A]_{il} \sum_{1 \leq j \leq n \text{ and } j \neq l} (-1)^{j - e_{l_j}} [A]_{1j} det(A(1, i | j, l))
\\;\\;\\;
\text{ Distributivity }
$$

$$
= \sum^{n}_{l = 1} (-1)^{i + l} [A]_{il} \sum_{1 \leq j \leq n \text{ and } j \neq l} (-1)^{e_{l_j} + j} [A]_{1j} det(A(1, i | j, l))
\\;\\;\\;
2 e_{l_j} \text{ is even }
$$

$$
= \sum^{n}_{l = 1} (-1)^{i + l} [A]_{il} det(A(i | l))
\\;\\;\\;
\text{ Definition Determinant of a Matrix }
$$

## Reference

1. [linear.ups.edu - theorem DER, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)
