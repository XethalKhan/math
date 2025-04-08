# Joint PDF and independence

Let $X$ and $Y$ have **joint PDF** $f_{X, Y}$. Then $X \amalg Y$ if and only if $f_{X, Y}(x, y) = f_{X}(x) f_{Y}(y)$ for all values $x$ and $y$.

## Example 1

Let $X$ and $Y$ have the following distribution

|         | $Y = 0$       | $Y = 1$       |               |
|---------|---------------|---------------|---------------|
| $X = 0$ | $\frac{1}{4}$ | $\frac{1}{4}$ | $\frac{1}{2}$ |
| $X = 1$ | $\frac{1}{4}$ | $\frac{1}{4}$ | $\frac{1}{2}$ |
|         | $\frac{1}{2}$ | $\frac{1}{2}$ | $1$           |

Then, $f_{X}(0) = f_{X}(1) = \frac{1}{2}$ and $f_{Y}(0) = f_{Y}(1) = \frac{1}{2}$. $X$ and $Y$ are independent because $f_{X}(0) f_{Y}(0) = f(0, 0), f_{X}(0) f_{Y}(1) = f(0, 1), f_{X}(1) f_{Y} (0) = f(1, 0), f_{X}(1) f_{Y}(1) = f(1, 1)$.

Suppose instead that $X$ and $Y$ have the following distribution:

|         | $Y = 0$       | $Y = 1$       |               |
|---------|---------------|---------------|---------------|
| $X = 0$ | $\frac{1}{2}$ | $0$           | $\frac{1}{2}$ |
| $X = 1$ | $0$           | $\frac{1}{2}$ | $\frac{1}{2}$ |
|         | $\frac{1}{2}$ | $\frac{1}{2}$ | $1$           |

These are not independent because $f_{X}(0) f_{Y}(1) = (\frac{1}{2})(\frac{1}{2}) = \frac{1}{4}$ yet $f(0, 1) = 0$.

## Example 2

Suppose that $X$ and $Y$ are independent and both have the same density

$$
f(x) =
\begin{cases}
    2x  & \text{ if } 0 \leq x \leq 1\\
    0   & \text{ otherwise }
\end{cases}
$$

Let us find $\mathbb{P}(X + Y \leq 1)$. Using independence, the joint density is

$$
f(x, y) = f_{X}(x) f_{Y}(y) = 
\begin{cases}
    4xy & \text{ if } 0 \leq x \leq 1, 0 \leq y \leq 1\\
    0   & \text{ otherwise }
\end{cases}
$$

Now,

$$
\mathbb{P}(X + Y \leq 1) = \int \int_{x + y \leq 1} f(x, y) \\; dy \\; dx
$$

$$
= 4 \int^{1}_{0} x [\int^{1 - x}_{0} y \\; dy] dx
$$

$$
= 4 \int^{1}_{0} x \frac{(1 - x)^{2}}{2} dx
$$

$$
= 2 \int^{1}_{0} x - 2x^{2} + 2x^{3} dx
$$

$$
= 2 (\frac{x^{2}}{2} - \frac{2x^{3}}{3} + \frac{x^{4}}{4}|^{1}_{0})
$$

$$
= 2 ((\frac{1}{2} - \frac{2}{3} + \frac{1}{4}) - (\frac{0}{2} - \frac{0}{3} + \frac{0}{4}))
$$

$$
= 2 (\frac{1}{12}) = \frac{1}{6}
$$

## Reference

1. Larry Wasserman **All of statistics** (page 35, 36)