# Gram-Schmidt procedure

Suppose that $S = \\{ v_1, v_2, v_3, \dots , v_p \\}$ is a linearly independent set of vectors in $\mathbb{C}^{m}$. Define the vectors $u_i, 1 \leq i \leq p$ by

$$
u_i = v_i - \frac{⟨u_1, v_i⟩}{⟨u_1, u_1⟩} u_1 - \frac{⟨u_2, v_i⟩}{⟨u_2, u_2⟩} u_2 - \frac{⟨u_3, v_i⟩}{⟨u_3, u_3⟩} u_3 - \dots - \frac{⟨u_{i - 1}, v_i⟩}{⟨u_{i - 1}, u_{i - 1}⟩} u_{i - 1}
$$

Let $T = \\{u_1, u_2, u_3, \dots , u_p \\}$. Then $T$ is an **orthogonal set of nonzero vectors**, and $⟨T⟩ = ⟨S⟩$.

## Note

The Gram-Schmidt Procedure is really a theorem. It says that if we begin with a linearly independent set of $p$ vectors, $S$, then we can do a number of calculations with these vectors and produce an orthogonal set of $p$ vectors, $T$, so that $⟨S⟩ = ⟨T⟩$. Given the large number of computations involved, it is indeed a procedure to do all the necessary computations, and it is best employed on a computer. However, it also has value in proofs where we may on occasion wish to replace a linearly independent set by an orthogonal set.

## Proof

We will prove the result by using induction on $p$. To begin, we prove that $T$ has the desired properties when $p = 1$. In this case $u_1 = v_1$ and $T = \\{ u_1 \\} = \\{ v_1 \\} = S$. Because $S$ and $T$ are equal, $⟨S⟩ = ⟨T⟩$. Equally trivial, $T$ is an orthogonal set. If $u_1 = 0$, then $S$ would be a linearly dependent set, a contradiction (by hypothesis).

Suppose that the theorem is true for any set of $p - 1$ linearly independent vectors. Let $S = \\{ v_1, v_2, v_3, \dots , v_p \\}$ be a linearly independent set of $p$ vectors. Then $S' = \\{ v_1, v_2, v_3, \dots , v_{p - 1} \\}$ is also linearly independent. So we can apply the theorem to $S'$ and construct the vectors $T' = \\{ u_1, u_2, u_3, \dots , u_{p - 1} \\}$. $T'$ is therefore an orthogonal set of nonzero vectors and $⟨S'⟩ = ⟨T'⟩$. Define

$$
u_p = v_p - \frac{⟨u_1, v_p⟩}{⟨u_1, u_1⟩} u_1 - \frac{⟨u_2, v_p⟩}{⟨u_2, u_2⟩} u_2 - \frac{⟨u_3, v_p⟩}{⟨u_3, u_3⟩} u_3 - \dots - \frac{⟨u_{p - 1}, v_p⟩}{⟨u_{p - 1}, u_{p - 1}⟩} u_{p - 1}
$$

and let $T = T' \cup \\{ u_p \\}$. We need to now show that $T$ has several properties by building on what we know about $T'$. But first notice that the above equation has no problems with the denominators ($⟨u_i, u_i⟩$) being zero, since the $u_i$ are from $T'$, which is composed of nonzero vectors.

We show that $⟨T⟩ = ⟨S⟩$, by first establishing that $⟨T⟩ \subseteq ⟨S⟩$. Suppose $x \in ⟨T⟩$, so

$$
x = a_1 u_1 + a_2 u_2 + a_3 u_3 + \dots + a_p u_p
$$

The term $a_p u_p$ is a linear combination of vectors from $T'$ and the vector $v_p$, while the remaining terms are a linear combination of vectors from $T'$. Since $⟨T'⟩ = ⟨S'⟩$, any term that is a multiple of a vector from $T'$ can be rewritten as a linear combination of vectors from $S'$. The remaining term $a_p v_p$ is a multiple of a vector in $S$. So we see that $x$ can be rewritten as a linear combination of vectors from $S$, i.e. $x \in ⟨S⟩$.

To show that $⟨S⟩ \subseteq ⟨T⟩$, begin with $y \in ⟨S⟩$, so

$$
y = a_1 v_1 + a_2 v_2 + a_3 v_3 + \dots + a_p v_p
$$

Rearrange our defining equation for $u_p$ by solving for $v_p$. Then the term $a_p v_p$ is a multiple of a linear combination of elements of $T$. The remaining terms are a linear combination of $v_1, v_2, v_3, \dots , v_{p - 1}$, hence an element of $⟨S'⟩ = ⟨T'⟩$. Thus these remaining terms can be written as a linear combination of the vectors in $T'$. So $y$ is a linear combination of vectors from $T$, i.e. $y \in ⟨T⟩$.

The elements of $T'$ are nonzero, but what about $u_p$? Suppose to the contrary that $u_p = 0$,

$$
0 = u_p = v_p - \frac{⟨u_1, v_p⟩}{⟨u_1, u_1⟩} u_1 - \frac{⟨u_2, v_p⟩}{⟨u_2, u_2⟩} u_2 - \frac{⟨u_3, v_p⟩}{⟨u_3, u_3⟩} u_3 - \dots - \frac{⟨u_{p - 1}, v_p⟩}{⟨u_{p - 1}, u_{p - 1}⟩} u_{p - 1}
$$

$$
v_p = \frac{⟨u_1, v_p⟩}{⟨u_1, u_1⟩} u_1 + \frac{⟨u_2, v_p⟩}{⟨u_2, u_2⟩} u_2 + \frac{⟨u_3, v_p⟩}{⟨u_3, u_3⟩} u_3 + \dots + \frac{⟨u_{p - 1}, v_p⟩}{⟨u_{p - 1}, u_{p - 1}⟩} u_{p - 1}
$$

Since $⟨S'⟩ = ⟨T'⟩$ we can write the vectors $u_1, u_2, u_3, \dots , u_{p - 1}$ on the right side of this equation in terms of the vectors $v_1, v_2, v_3, \dots , v_{p - 1}$ and we then have the vector $v_p$ expressed as a linear combination of the other $p - 1$ vectors in $S$, implying that $S$ is a linearly dependent set (Theorem DLDS), contrary to our lone hypothesis about $S$.

Finally, it is a simple matter to establish that $T$ is an orthogonal set, though it will not appear so simple looking. Think about your objects as you work through the following — what is a vector and what is a scalar. Since $T'$ is an orthogonal set by induction, most pairs of elements in $T$ are already known to be orthogonal. We just need to test “new” inner products, between $u_p$ and $u_i$, for $1 \leq i \leq p - 1$. Here we go, using summation notation,

$$
⟨u_i, u_p⟩ = ⟨u_i, v_p - \sum_{k = 1}^{p - 1} \frac{⟨u_k, v_p⟩}{⟨u_k, u_k⟩} u_k⟩
$$

$$
= ⟨u_i, v_p⟩ - ⟨u_i, \sum_{k = 1}^{p - 1} \frac{⟨u_k, v_p⟩}{⟨u_k, u_k⟩} u_k⟩
\\;\\;\\;\\;\\;
\text{ Theorem IPVA }
$$

$$
= ⟨u_i, v_p⟩ - \sum_{k = 1}^{p - 1} ⟨u_i, \frac{⟨u_k, v_p⟩}{⟨u_k, u_k⟩} u_k⟩
\\;\\;\\;\\;\\;
\text{ Theorem IPVA }
$$

$$
= ⟨u_i, v_p⟩ - \sum_{k = 1}^{p - 1} \frac{⟨u_k, v_p⟩}{⟨u_k, u_k⟩} ⟨u_i, u_k⟩
\\;\\;\\;\\;\\;
\text{ Theorem IPSM }
$$

$$
= ⟨u_i, v_p⟩ - \frac{⟨u_i, v_p⟩}{⟨u_i, u_i⟩} ⟨u_i, u_i⟩ - \sum_{k \neq 1} \frac{⟨u_k, v_p⟩}{⟨u_k, u_k⟩} 0
\\;\\;\\;\\;\\;
\text{ Induction hypothesis }
$$

$$
= ⟨u_i, v_p⟩ - ⟨u_i, v_p⟩ - \sum_{k \neq 1} 0
$$

$$
= 0
$$

## Example

$$
S = \\{ v_1, v_2, v_3 \\} = \\{
\begin{bmatrix}
1\\
1 + i\\
1
\end{bmatrix}
,
\begin{bmatrix}
− i\\
1\\
1 + i
\end{bmatrix}
,
\begin{bmatrix}
0\\
i\\
i
\end{bmatrix}
\\}
$$

Then

$$
u_1 = v_1 =
\begin{bmatrix}
1\\
1 + i\\
1
\end{bmatrix}
$$

$$
u_2 = v_2 - \frac{⟨u_1, v_2⟩}{⟨u_1, u_1⟩} u_1 = \frac{1}{4} 
\begin{bmatrix}
- 2 - 3 i\\
1 - i\\
2 + 5 i
\end{bmatrix}
$$

$$
u_3 = v_3 - \frac{⟨u_1, v_3⟩}{⟨u_1, u_1⟩} u_1 - \frac{⟨u_2, v_3⟩}{⟨u_2, u_2⟩} u_2 = \frac{1}{11}
\begin{bmatrix}
- 3 - i\\
1 + 3 i\\
- 1 - i
\end{bmatrix}
$$

and

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

is an orthogonal set of nonzero vectors and $⟨T⟩ = ⟨S⟩$ (all by Theorem GSP). Of course, as a by-product of orthogonality, the set $T$ is also linearly independent (Theorem OSLI).

## Reference

1. [linear.ups.edu - theorem GSP, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)