# Vector space

Suppose that $V$ is a set upon which we have defined two operations: 

1. **vector addition**, which combines two elements of $V$ and is denoted by $+$
2. and **scalar multiplication**, which combines a complex number with an element of $V$ and is denoted by juxtaposition.

Then $V$, along with the two operations, is a vector space over $\mathbb{C}$ if the following ten properties hold.

1. Additive Closure - If $u, v \in V$, then $u + v \in V$.
2. Scalar Closure - If $\alpha \in \mathbb{C}$ and $u \in V$, then $\alpha u \in V$.
3. Commutativity - If $u, v \in V$, then $u + v = v + u$.
4. Additive Associativity - If $u, v, w \in V$, then $u + (v + w) = (u + v) + w$.
5. Zero Vector - There is a vector, $0$, called the **zero vector**, such that $u + 0 = u$ for all $u \in V$.
6. Additive Inverses - If $u \in V$, then there exists a vector $−u \in V$ so that $u + (−u) = 0$.
7. Scalar Multiplication Associativity - If $\alpha, \beta \in \mathbb{C}$ and $u \in V$, then $\alpha(\beta u) = (\alpha \beta)u$.
8. Distributivity across Vector Addition - If $\alpha \in \mathbb{C}$ and $u, v \in V$, then $\alpha (u + v) = \alpha u + \alpha v$.
9. Distributivity across Scalar Addition - If $\alpha, \beta \in \mathbb{C}$ and $u \in V$, then $(\alpha + \beta) u = \alpha u + \beta u$.
10. One - If $u \in V$, then $1 u = u$.

The objects in $V$ are called **vectors**, no matter what else they might really be, simply by virtue of being elements of a vector space.

A vector space is composed of three objects, a set and two operations. Some would explicitly state in the definition that $V$ must be a nonempty set, but we can infer this from **Property Zero Vector**, since the set cannot be empty and contain a vector that behaves as the zero vector. Also, we usually use the same symbol for both the set and the vector space itself. Do not let this convenience fool you into thinking the operations are secondary!

## Example 1 -  The vector space $\mathbb{C}^{m}$

See [**Vector space of column vectors**](./../0010-introduction-to-vectors/0006-vector-space-of-column-vectors.md)

## Example 2 -  The vector space of matrices $M_{mn}$

See [**Vector space of matrices**](./../0020-matrix-operations/0005-vector-space-of-matrices.md)

## Example 3 - The vector space of polynomials, $P_n$

Set: $P_n$, the set of all polynomials of degree $n$ or less in the variable $x$ with coefficients from $\mathbb{C}$.

Equality:

$$
a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n = b_0 + b_1 x + b_2 x^2 + \dots + b_n x_n
$$

$$
\text{ if and only if }
\\;\\;\\;
a_i = b_i
\\;\\;\\;
\text{ for }
\\;\\;\\;
0 \leq i \leq n
$$ 

Vector Addition:

$$
(a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n) + (b_0 + b_1 x + b_2 x^2 + \dots + b_n x^n) = (a_0 + b_0) + (a_1 + b_1) x + (a_2 + b_2) x^2 + \dots + (a_n + b_n) x^n
$$

Scalar Multiplication:

$$
\alpha (a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n) = (\alpha a_0) + (\alpha a_1) x + (\alpha a_2) x^2 + \dots + (\alpha a_n) x^n
$$

## Example 4 - The vector space of functions

Let $X$ be any set.

Set: $F = \\{ f | f: X \rightarrow \mathbb{C} \\}$.

Equality: $f = g$ if and only if $f(x) = g(x)$ for all $x \in X$.

Vector Addition: $f + g$ is the function with outputs defined by $(f + g)(x) = f(x) + g(x)$.

Scalar Multiplication: $\alpha f$ is the function with outputs defined by $(\alpha f)(x) = \alpha f(x)$.

## Reference

1. [linear.ups.edu - definition VS, section Vector Spaces](http://linear.ups.edu/html/section-VS.html)