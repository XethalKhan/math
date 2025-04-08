# Marginal mass function

If $(X, Y)$ have joint distribution with mass function $f_{X, Y}$, then the **marginal mass function for $X$** is defined by

$$
f_{X}(x) = \mathbb{P}(X = x) = \sum_{y} \mathbb{P}(X = x, Y = y) = \sum_{y} f(x, y)
$$

and the **marginal mass function for $Y$** is defined by

$$
f_{Y}(y) = \mathbb{P}(Y = y) = \sum_{x} \mathbb{P}(X = x, Y = y) = \sum_{x} f(x, y)
$$

For **continuous** random variables, the **marginal densities** are

$$
f_{X}(x) = \int f(x, y) \\; dy
\\;\\;\\;
\text{ and }
\\;\\;\\;
f_{Y}(y) = \int f(x, y) \\; dx
$$

The corresponding marginal distribution functions are denoted by $F_{X}$ and $F_{Y}$.

## Example 1

Suppose that $f_{X, Y}$ is given in the table that follows. The marginal distribution for $X$ corresponds to the row totals and the marginal
distribution for $Y$ corresponds to the columns totals.

|         | $Y = 0$        | $Y = 1$        |                |
|---------|----------------|----------------|----------------|
| $X = 0$ | $\frac{1}{10}$ | $\frac{2}{10}$ | $\frac{3}{10}$ |
| $X = 1$ | $\frac{3}{10}$ | $\frac{4}{10}$ | $\frac{7}{10}$ |
|         | $\frac{4}{10}$ | $\frac{6}{10}$ | $1$            |

For example, $f_{X}(0) = \frac{3}{10}$ and $f_{X}(1) = \frac{7}{10}$.

## Example 2

Suppose that

$$
f(x, y) =
\begin{cases}
    x + y   & \text{ if } 0 \leq x \leq 1, 0 \leq y \leq 1 \\
    0       & \text{ otherwise }
\end{cases}
$$

Then

$$
f_{Y}(y) = \int^{1}_{0} (x + y) dx = \int^{1}_{0} x \\; dx + \int^{1}_{0} y \\; dx = \frac{1}{2} + y
$$

## Reference

1. Larry Wasserman **All of statistics** (page 33, 34)