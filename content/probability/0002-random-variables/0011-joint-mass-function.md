# Joint mass function

Given a pair of discrete random variables $X$ and $Y$ , define the **joint mass function** by $f(x, y) = \mathbb{P}(X = x \text{ and } Y = y)$. From now on, we write $\mathbb{P}(X = x \text{ and } Y = y) \text{ as } \mathbb{P}(X = x, Y = y)$. We write $f$ as $f_{X, Y}$ when we want to be more explicit.

In the continuous case, we call a function $f(x, y)$ a **PDF** for the random variables $(X, Y)$ if

1. $f(x, y) \geq 0$ for all $(x, y)$,
2. $\int^{\infty}_{- \infty} \int^{\infty}_{- \infty} f(x, y) \\; dx \\; dy = 1$ and,
3. for any set $A \subset \mathbb{R} \times \mathbb{R}, \mathbb{P}((X, Y ) \in A) = \int \int_{A} f(x, y) \\; dx \\; dy$

In the discrete or continuous case we define the **joint CDF** as $F_{X, Y}(x, y) = \mathbb{P}(X \leq x, Y \leq y)$.

## Example 1

Here is a bivariate distribution for two random variables $X$ and $Y$ each taking values $0$ or $1$:

|         | $Y = 0$       | $Y = 1$       |               |
|---------|---------------|---------------|---------------|
| $X = 0$ | $\frac{1}{9}$ | $\frac{2}{9}$ | $\frac{1}{3}$ |
| $X = 1$ | $\frac{2}{9}$ | $\frac{4}{9}$ | $\frac{2}{3}$ |
|         | $\frac{1}{3}$ | $\frac{2}{1}$ | $1$           |

Thus, $f(1, 1) = \mathbb{P}(X = 1, Y = 1) = \frac{4}{9}$

## Example 2

Let $(X, Y)$ have density

$$
f(x, y) =
\begin{cases}
    x + y   & \text{ if } 0 \leq x \leq 1, 0 \leq y \leq 1 \\
    0       & \text{ otherwise }
\end{cases}
$$

Then

$$
\int^{1}_{0} \int^{1}_{0} (x + y) \\; dx \\; dy = \int^{1}_{0} [ \int^{1}_{0} x \\; dx] \\; dy + \int^{1}_{0} [ \int^{1}_{0} y \\; dx] \\; dy
$$

$$
= \int^{1}_{0} \frac{1}{2} dy + \int^{1}_{0} y \\; dy = \frac{1}{2} + \frac{1}{2} = 1
$$

which verifies that this is a PDF.

## Reference

1. Larry Wasserman **All of statistics** (page 31, 32)