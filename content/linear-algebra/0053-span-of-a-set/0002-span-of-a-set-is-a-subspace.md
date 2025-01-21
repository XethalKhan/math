# Span of a set is a subspace

Suppose $V$ is a **vector space**. Given a set of vectors $S = \\{ u_1, u_2, u_3, \dots , u_t \\} \subseteq V$, their span, $⟨S⟩$, is a **subspace**.

## Proof

By definition [**Span of a Set**](./0001-span-of-a-set.md), the span contains **linear combinations** of vectors from the vector space $V$, so by repeated use of the closure properties, Vector space property 1 - Additive Closure and Vector space property 2 Scalar Closure, $⟨S⟩$ can be seen to be a subset of $V$.

We will then verify the three conditions of Theorem **Testing Subsets for Subspaces**. First,

$$
0 = 0 + 0 + 0 + \dots + 0
\\;\\;\\;
\text{ Vector space property 5 - Zero Vector }
$$

$$
= 0 u_1 + 0 u_2 + 0 u_3 + \dots + 0 u_t
\\;\\;\\;
\text{ Theorem Zero Scalar in Scalar Multiplication }
$$

So we have written $0$ as a linear combination of the vectors in $S$ and by Definition [**Span of a Set**](./0001-span-of-a-set.md), $0 \in ⟨S⟩$ and therefore $⟨S⟩ \neq \emptyset$.

Second, suppose $x \in ⟨S⟩$ and $y \in ⟨S⟩$. Can we conclude that $x + y \in ⟨S⟩$? What do we know about $x$ and $y$ by virtue of their membership in $⟨S⟩$? There must be scalars from $\mathbb{C}, \alpha_1, \alpha_2, \alpha_3, \dots , \alpha_t$ and $\beta_1, \beta_2, \beta_3, \dots , \beta_t$ so that

$$
x = \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_t u_t
$$

$$
y = \beta_1 u_1 + \beta_2 u_2 + \beta_3 u_3 + \dots + \beta_t u_t
$$

Then

$$
x + y = \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_t u_t + \beta_1 u_1 + \beta_2 u_2 + \beta_3 u_3 + \dots + \beta_t u_t
$$

$$
= \alpha_1 u_1 + \beta_1 u_1 + \alpha_2 u_2 + \beta_2 u_2 + \alpha_3 u_3 + \beta_3 u_3 + \dots + \alpha_t u_t + \beta_t u_t
\\;\\;\\;
\text{ Vector space property 4 - Additive Associativity, Vector space property 3 - Commutativity }
$$

$$
= (\alpha_1 + \beta_1) u_1 + (\alpha_2 + \beta_2) u_2 + (\alpha_3 + \beta_3) u_3 + \dots + (\alpha_t + \beta_t) u_t
\\;\\;\\;
\text{ Vector space property 9 - Distributivity across Scalar Addition }
$$

Since each $\alpha_i + \beta_i$ is again a scalar from $\mathbb{C}$ we have expressed the vector sum $x + y$ as a linear combination of the vectors from $S$, and therefore by Definition [**Span of a Set**](./0001-span-of-a-set.md) we can say that $x + y \in ⟨S⟩$.

Third, suppose $\alpha \in \mathbb{C}$ and $x \in ⟨S⟩$. Can we conclude that $\alpha x \in ⟨S⟩$? What do we know about $x$ by virtue of its membership in $⟨S⟩$? There must be scalars from $\mathbb{C}, \alpha_1, \alpha_2, \alpha_3, \dots , \alpha_t$ so that

$$
x = \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_t u_t
$$

Then

$$
\alpha x = \alpha (\alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_t u_t)
$$

$$
= \alpha (\alpha_1 u_1) + \alpha (\alpha_2 u_2) + \alpha (\alpha_3 u_3) + \dots + \alpha (\alpha_t u_t)
\\;\\;\\;
\text{ Vector space property 8 - Distributivity across Vector Addition }
$$

$$
= (\alpha \alpha_1) u_1 + (\alpha \alpha_2) u_2 + (\alpha \alpha_3) u_3 + \dots + (\alpha \alpha_t) u_t
\\;\\;\\;
\text{ Vector space property 7 - Scalar Multiplication Associativity }
$$

Since each $\alpha \alpha_i$ is again a scalar from $\mathbb{C}$ we have expressed the scalar multiple $\alpha x$ as a linear combination of the vectors from $S$, and therefore by Definition [**Span of a Set**](./0001-span-of-a-set.md) we can say that $\alpha x \in ⟨S⟩$.

With the three conditions of Theorem **Testing Subsets for Subspaces** met, we can say that $⟨S⟩$ is a **subspace** (and so is also a **vector space**).

## Example - Span of a set of polynomials

$$
W = \\{ p(x) | p \in P_4, p(2) = 0 \\}
$$
 
is a subspace of $P_4$, the vector space of polynomials of degree at most 4. Since $W$ is a vector space itself, let us construct a span within $W$. First let

$$
S = \\{ x^4 - 4 x^3 + 5 x^2 - x - 2, 2 x^4 - 3 x^3 - 6 x^2 + 6 x + 4\\}
$$
 
and verify that $S$ is a subset of $W$ by checking that each of these two polynomials has $x = 2$ as a root. Now, if we define $U = ⟨S⟩$,then Theorem **Span of a set is a subspace** tells us that $U$ is a subspace of $W$. So quite quickly we have built a chain of subspaces, $U$ inside $W$, and $W$ inside $P_4$.

Rather than dwell on how quickly we can build subspaces, let us try to gain a better understanding of just how the span construction creates subspaces, in the context of this example. We can quickly build representative elements of $U$,

$$
3 (x^4 - 4 x^3 + 5 x^2 - x - 2) + 5 (2 x^4 - 3 x^3 - 6 x^2 + 6 x + 4) = 13 x^4 - 27 x^3 - 15 x^2 + 27 x + 14
$$

and

$$
(- 2)(x^4 - 4 x^3 + 5 x^2 - x - 2) + 8 (2 x^4 - 3 x^3 - 6 x^2 + 6 x + 4) = 14 x^4 - 16 x^3 - 58 x^2 + 50 x + 36
$$

and each of these polynomials must be in $W$ since it is closed under addition and scalar multiplication. But you might check for yourself that both of these polynomials have $x = 2$ as a root.

I can tell you that $y = 3 x^4 - 7 x^3 - x^2 + 7 x - 2$ is not in $U$, but would you believe me? A first check shows that $y$ does have $x = 2$ as a root, but that only shows that $y \in W$. What does $y$ have to do to gain membership in $U = ⟨S⟩$? It must be a linear combination of the vectors in $S$, $x^4 - 4 x^3 + 5 x^2 - x - 2$ and $2 x^4 - 3 x^3 - 6 x^2 + 6 x + 4$. So let us suppose that $y$ is such a linear combination,

$$
y = 3 x^4 - 7 x^3 - x^2 + 7 x - 2
$$

$$
= \alpha_1 (x_4 - 4 x^3 + 5 x^2 - x - 2) + \alpha_2 (2 x^4 - 3 x^3 - 6 x^2 + 6 x + 4)
$$

$$
= (\alpha_1 + 2 \alpha_2) x^4 + ( - 4 \alpha_1 - 3 \alpha_2) x_3 + (5 \alpha_1 - 6 \alpha_2) x_2 + (- \alpha_1 + 6 \alpha_2) x + (- 2 \alpha_1 + 4 \alpha_2)
$$

Notice that operations above are done in accordance with the definition of the vector space of polynomials. Now, if we equate coefficients, which is the definition of equality for polynomials, then we obtain the system of five linear equations in two variables

$$
\alpha_1 + 2 \alpha_2 = 3
$$

$$
- 4 \alpha_1 - 3 \alpha_2 = - 7
$$

$$
5 \alpha_1 - 6 \alpha_2 = - 1
$$

$$
- \alpha_1 + 6 \alpha_2 = 7
$$

$$
- 2 \alpha_1 + 4 \alpha_2 = - 2
$$

Build an augmented matrix from the system and row-reduce,

$$
\begin{bmatrix}
    1 & 2 & 3\\
    - 4 & - 3 & - 7\\
    5 & - 6 & 1\\
    - 1 & 6 & 7\\
    - 2 & 4 & - 2
\end{bmatrix}
\xrightarrow{RRFU}
\begin{bmatrix}
    1 & 0 & 0\\
    0 & 1 & 0\\
    0 & 0 & 1\\
    0 & 0 & 0\\
    0 & 0 & 0
\end{bmatrix}
$$

Since the final column of the row-reduced augmented matrix is a pivot column, Theorem **Recognizing consistency of a linear system** tells us the system of equations is inconsistent. Therefore, there are no scalars, $\alpha_1$ and $\alpha_2$, to establish $y$ as a linear combination of the elements in $U$. So $y \not \in U$.

## Example - A subspace of $M_{32}$

The set of all $3 \times 2$ matrices forms a vector space when we use the operations of matrix addition and scalar matrix multiplication. Consider the subset

$$
S = \\{
\begin{bmatrix}
    3 & 1\\
    4 & 2\\
    5 & - 5
\end{bmatrix}
\\;\\;\\;
,
\\;\\;\\;
\begin{bmatrix}
    1 & 1\\
    2 & - 1\\
    14 & - 1
\end{bmatrix}
\\;\\;\\;
,
\\;\\;\\;
\begin{bmatrix}
    3 & - 1\\
    - 1 & 2\\
    - 19 & - 11
\end{bmatrix}
\\;\\;\\;
,
\\;\\;\\;
\begin{bmatrix}
    4 & 2\\
    1 & - 2\\
    14 & - 2
\end{bmatrix}
\\;\\;\\;
,
\\;\\;\\;
\begin{bmatrix}
    3 & 1\\
    - 4 & 0\\
    - 17 & 7
\end{bmatrix}
\\}
$$

and define a new subset of vectors $W$ in $M_{32}$ using the **span**, $W = ⟨S⟩$. So by Theorem **Span of a set is a subspace** we know that $W$ is a subspace of $M_{32}$. While $W$ is an infinite set, and this is a precise description, it would still be worthwhile to investigate whether or not $W$ contains certain elements.

First is

$$
y =
\begin{bmatrix}
    9 & 3\\
    7 & 3\\
    10 & - 11
\end{bmatrix}
$$

in $W$? To answer this, we want to determine if $y$ can be written as a linear combination of the five matrices in $S$. Can we find scalars, $\alpha_1 , \alpha_2 , \alpha_3 , \alpha_4 , \alpha_5$ so that

$$
\begin{bmatrix}
    9 & 3\\
    7 & 3\\
    10 & - 11
\end{bmatrix}
= \alpha_1
\begin{bmatrix}
    3 & 1\\
    4 & 2\\
    5 & - 5
\end{bmatrix}
+ \alpha_2
\begin{bmatrix}
    1 & 1\\
    2 & - 1\\
    14 & - 1
\end{bmatrix}
+ \alpha_3
\begin{bmatrix}
    3 & - 1\\
    - 1 & 2\\
    - 19 & - 11
\end{bmatrix}
+ \alpha_4
\begin{bmatrix}
    4 & 2\\
    1 & - 2\\
    14 & - 2
\end{bmatrix}
\alpha_5
\begin{bmatrix}
    3 & 1\\
    - 4 & 0\\
    - 17 & 7
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    3 \alpha_1 + \alpha_2 + 3 \alpha_3 + 4 \alpha_4 + 3 \alpha_5        & \alpha_1 + \alpha_2 - \alpha_3 + 2 \alpha_4 + \alpha_5\\
    4 \alpha_1 + 2 \alpha_2 - \alpha_3 + \alpha_4 - 4 \alpha_5          & 2 \alpha_1 - \alpha_2 + 2 \alpha_3 - 2 \alpha_4\\
    5 \alpha_1 + 14 \alpha_2 - 19 \alpha_3 + 14 \alpha_4 - 17 \alpha_5  & - 5 \alpha_1 - \alpha_2 - 11 \alpha_3 - 2 \alpha_4 + 7 \alpha_5
\end{bmatrix}
$$

Using our definition of **matrix equality** we can translate this statement into six equations in the five unknowns,

$$
3 \alpha_1 + \alpha_2 + 3 \alpha_3 + 4 \alpha_4 + 3 \alpha_5 = 9
$$

$$
\alpha_1 + \alpha_2 - \alpha_3 + 2 \alpha_4 + \alpha_5 = 3
$$

$$
4 \alpha_1 + 2 \alpha_2 - \alpha_3 + \alpha_4 - 4 \alpha_5 = 7
$$

$$
2 \alpha_1 - \alpha_2 + 2 \alpha_3 - 2 \alpha_4 = 3
$$

$$
5 \alpha_1 + 14 \alpha_2 - 19 \alpha_3 + 14 \alpha_4 - 17 \alpha_5 = 10
$$

$$
- 5 \alpha_1 - \alpha_2 - 11 \alpha_3 - 2 \alpha_4 + 7 \alpha_5 = - 11
$$

This is a linear system of equations, which we can represent with an augmented matrix and row-reduce in search of solutions. The matrix that is row-equivalent to the augmented matrix is

$$
\begin{bmatrix}
    1 & 0 & 0 & 0 & \frac{5}{8} & 2\\
    0 & 1 & 0 & 0 & - \frac{19}{4} & -1\\
    0 & 0 & 1 & 0 & - \frac{7}{8} & 0\\
    0 & 0 & 0 & 1 & \frac{17}{8} & 1\\
    0 & 0 & 0 & 0 & 0 & 0\\
    0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

So we recognize that the system is consistent since the final column is not a pivot column (Theorem **Recognizing consistency of a linear system**), and compute $n - r = 5 - 4 = 1$ free variables (Theorem **Solution for consistent system can be build using free variables**). While there are infinitely many solutions, we are only in pursuit of a single solution, so let us choose the free variable $\alpha_5 = 0$ for simplicity's sake. Then we easily see that $\alpha_1 = 2, \alpha_2 = - 1, \alpha_3 = 0, \alpha_4 = 1$. So the scalars $\alpha_1 = 2, \alpha_2 = - 1, \alpha_3 = 0, \alpha_4 = 1, \alpha+5 = 0$ will provide a linear combination of the elements of $S$ that equals $y$, as we can verify by checking,

$$
\begin{bmatrix}
    9 & 3\\
    7 & 3\\
    10 & - 11
\end{bmatrix}
= 2
\begin{bmatrix}
    3 & 1\\
    4 & 2\\
    5 & - 5
\end{bmatrix}
+ (- 1)
\begin{bmatrix}
    1 & 1\\
    2 & - 1\\
    14 & - 1
\end{bmatrix}
+ (1)
\begin{bmatrix}
    4 & 2\\
    1 & - 2\\
    14 & - 2
\end{bmatrix}
$$

So with one particular linear combination in hand, we are convinced that $y$ deserves to be a member of $W = ⟨S⟩$.

Second is

$$
x =
\begin{bmatrix}
    2 & 1\\
    3 & 1\\
    4 & - 2
\end{bmatrix}
$$

in $W$? To answer this, we want to determine if $x$ can be written as a linear combination of the five matrices in $S$. Can we find scalars, $\alpha_1 , \alpha_2 , \alpha_3 , \alpha_4 , \alpha_5$ so that

$$
\begin{bmatrix}
    2 & 1\\
    3 & 1\\
    4 & - 2
\end{bmatrix}
= \alpha_1
\begin{bmatrix}
    3 & 1\\
    4 & 2\\
    5 & - 5
\end{bmatrix}
+ \alpha_2
\begin{bmatrix}
    1 & 1\\
    2 & - 1\\
    14 & - 1
\end{bmatrix}
+ \alpha_3
\begin{bmatrix}
    3 & - 1\\
    - 1 & 2\\
    - 19 & - 11
\end{bmatrix}
+ \alpha_4
\begin{bmatrix}
    4 & 2\\
    1 & - 2\\
    14 & - 2
\end{bmatrix}
\alpha_5
\begin{bmatrix}
    3 & 1\\
    - 4 & 0\\
    - 17 & 7
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
    3 \alpha_1 + \alpha_2 + 3 \alpha_3 + 4 \alpha_4 + 3 \alpha_5        & \alpha_1 + \alpha_2 - \alpha_3 + 2 \alpha_4 + \alpha_5\\
    4 \alpha_1 + 2 \alpha_2 - \alpha_3 + \alpha_4 - 4 \alpha_5          & 2 \alpha_1 - \alpha_2 + 2 \alpha_3 - 2 \alpha_4\\
    5 \alpha_1 + 14 \alpha_2 - 19 \alpha_3 + 14 \alpha_4 - 17 \alpha_5  & - 5 \alpha_1 - \alpha_2 - 11 \alpha_3 - 2 \alpha_4 + 7 \alpha_5
\end{bmatrix}
$$

Using our definition of **matrix equality** we can translate this statement into six equations in the five unknowns,

$$
3 \alpha_1 + \alpha_2 + 3 \alpha_3 + 4 \alpha_4 + 3 \alpha_5 = 2
$$

$$
\alpha_1 + \alpha_2 - \alpha_3 + 2 \alpha_4 + \alpha_5 = 1
$$

$$
4 \alpha_1 + 2 \alpha_2 - \alpha_3 + \alpha_4 - 4 \alpha_5 = 3
$$

$$
2 \alpha_1 - \alpha_2 + 2 \alpha_3 - 2 \alpha_4 = 1
$$

$$
5 \alpha_1 + 14 \alpha_2 - 19 \alpha_3 + 14 \alpha_4 - 17 \alpha_5 = 4
$$

$$
- 5 \alpha_1 - \alpha_2 - 11 \alpha_3 - 2 \alpha_4 + 7 \alpha_5 = - 2
$$

This is a linear system of equations, which we can represent with an augmented matrix and row-reduce in search of solutions. The matrix that is row-equivalent to the augmented matrix is

$$
\begin{bmatrix}
    1 & 0 & 0 & 0 & \frac{5}{8} & 0\\
    0 & 1 & 0 & 0 & - \frac{38}{8} & 0\\
    0 & 0 & 1 & 0 & - \frac{7}{8} & 0\\
    0 & 0 & 0 & 1 & - \frac{17}{8} & 0\\
    0 & 0 & 0 & 0 & 0 & 1\\
    0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

Since the last column is a pivot column, Theorem **Recognizing consistency of a linear system** tells us that the system is inconsistent. Therefore, there are no values for the scalars that will place $x$ in $W$, and so we conclude that $x \not \in W$.

## Reference

1. [linear.ups.edu - theorem SSS, section Subspaces](http://linear.ups.edu/html/section-S.html)