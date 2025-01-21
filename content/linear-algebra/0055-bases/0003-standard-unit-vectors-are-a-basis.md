# Standard unit vectors are a basis

The set of standard unit vectors for $\mathbb{C}^m$ (Definition **Standard Unit Vector**), $B = \\{ e_i | 1 \leq i \leq m \\}$ is a **basis** for the vector space $\mathbb{C}^m$.

## Note

For “important” vector spaces, it will be convenient to have a collection of “nice” bases. When a vector space has a single particularly nice basis, it is sometimes called the standard basis though there is nothing precise enough about this term to allow us to define it formally - it is a question of style.

## Proof

We must show that the set $B$ is both **linearly independent** and a **spanning set** for $\mathbb{C}^m$. First, the vectors in $B$ are, by Definition **Standard Unit Vector**, the columns of the **identity matrix**, which we know is **nonsingular** (since it row-reduces to the identity matrix, see Theorem **Nonsingular matrices row reduce to identity matrices**). And the columns of a nonsingular matrix are linearly independent by Theorem NMLIC.

Suppose we grab an arbitrary vector from $\mathbb{C}^m$, say

$$
v = \begin{bmatrix}
    v_1\\
    v_2\\
    v_3\\
    \vdots\\
    v_m
\end{bmatrix}
$$

Can we write $v$ as a **linear combination** of the vectors in $B$? Yes, and quite simply.

$$
\begin{bmatrix}
    v_1\\
    v_2\\
    v_3\\
    \vdots\\
    v_m
\end{bmatrix}
= v_1
\begin{bmatrix}
    1\\
    0\\
    0\\
    \vdots\\
    0
\end{bmatrix}
+ v_2
\begin{bmatrix}
    0\\
    1\\
    0\\
    \vdots\\
    0
\end{bmatrix}
+ v_3
\begin{bmatrix}
    0\\
    0\\
    1\\
    \vdots\\
    0
\end{bmatrix}
+ \dots
+ v_m
\begin{bmatrix}
    0\\
    0\\
    0\\
    \vdots\\
    1
\end{bmatrix}
$$

$$
v = v_1 e_1 + v_2 e_2 + v_3 e_3 + \dots + v_m e_m
$$

This shows that $\mathbb{C}^m \subseteq ⟨B⟩$, which is sufficient to show that $B$ is a **spanning set** for $\mathbb{C}^m$.

## TODO - Rename NMLIC for linear independence claim

## Reference

1. [linear.ups.edu - theorem SUVB, section Bases](http://linear.ups.edu/html/section-B.html)