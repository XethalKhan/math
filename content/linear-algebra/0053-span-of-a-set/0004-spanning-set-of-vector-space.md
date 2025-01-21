# Spanning set of vector space

Suppose $V$ is a **vector space**. A subset $S$ of $V$ is a **spanning set** of $V$ if $⟨S⟩ = V$. In this case, we also frequently say $S$ **spans** $V$.

## Note

The definition of a spanning set requires that two sets (subspaces actually) be equal. If $S$ is a subset of $V$, then $⟨S⟩ \subseteq V$ always. Thus it is usually only necessary to prove that $V \subseteq ⟨S⟩$.

## Example - Spanning set in $M_{22}$

In the space of all $2 \times 2$ matrices, $M_{22}$ consider the subspace

$$
Z = \\{
    \begin{bmatrix}
        a & b\\
        c & d
    \end{bmatrix}
| a + 3 b - c - 5 d = 0, - 2 a - 6 b + 3 c + 14 d = 0
\\}
$$

and find a **spanning set** for $Z$.

We need to construct a limited number of matrices in $Z$ so that every matrix in $Z$ can be expressed as a **linear combination** of this limited number of matrices.

Suppose that
$
B = \begin{bmatrix}
    a & b\\
    c & d
\end{bmatrix}
$
is a matrix in $Z$. Then we can form a column vector with the entries of $B$ and write

$$
\begin{bmatrix}
    a\\
    b\\
    c\\
    d
\end{bmatrix}
\in
N(
\begin{bmatrix}
    1 & 3 & - 1 & 5\\
    - 2 & - 6 & 3 & 14
\end{bmatrix}
)
$$

Row-reducing this matrix and applying Theorem **Row-equivalent matrices represent equivalent systems** we obtain the equivalent statement,

$$
\begin{bmatrix}
    a\\
    b\\
    c\\
    d
\end{bmatrix}
\in
N(
\begin{bmatrix}
    1 & 3 & 0 & - 1\\
    0 & 0 & 1 & 4
\end{bmatrix}
)
$$

We can then express the subspace $Z$ in the following equal forms,

$$
Z = \\{
    \begin{bmatrix}
        a & b\\
        c & d
    \end{bmatrix}
| a + 3 b - c - 5 d = 0, - 2 a - 6 b + 3 c + 14 d = 0
\\}
$$

$$
= \\{
    \begin{bmatrix}
        a & b\\
        c & d
    \end{bmatrix}
| a + 3 b - d = 0, c + 4 d = 0
\\}
$$

$$
= \\{
    \begin{bmatrix}
        a & b\\
        c & d
    \end{bmatrix}
| a = - 3 b + d, c = - 4 d
\\}
$$

$$
= \\{
    \begin{bmatrix}
        - 3 b + d & b\\
        - 4 d & d
    \end{bmatrix}
| b, d \in \mathbb{C}
\\}
$$

$$
= \\{
    \begin{bmatrix}
        - 3 b & b\\
        0 & 0
    \end{bmatrix}
    +
    \begin{bmatrix}
        d & 0\\
        - 4 d & d
    \end{bmatrix}
| b, d \in \mathbb{C}
\\}
$$

$$
= \\{
    b
    \begin{bmatrix}
        - 3 & 1\\
        0 & 0
    \end{bmatrix}
    + d
    \begin{bmatrix}
        1 & 0\\
        - 4 & 1
    \end{bmatrix}
| b, d \in \mathbb{C}
\\}
$$

$$
= ⟨\\{
    \begin{bmatrix}
        - 3 & 1\\
        0 & 0
    \end{bmatrix}
    ,
    \begin{bmatrix}
        1 & 0\\
        - 4 & 1
    \end{bmatrix}
\\}⟩
$$

So the set

$$
Q= \\{
    \begin{bmatrix}
        - 3 & 1\\
        0 & 0
    \end{bmatrix}
    ,
    \begin{bmatrix}
        1 & 0\\
        - 4 & 1
    \end{bmatrix}
\\}
$$

spans $Z$ by this Definition.

## Reference

1. [linear.ups.edu - definition SSVS, section Linear Independence and Spanning Sets](http://linear.ups.edu/html/section-LISS.html)