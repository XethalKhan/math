# Independent variables and rectangular range

Suppose that the range of $X$ and $Y$ is a (possibly infinite) rectangle. If $f(x, y) = g(x)h(y)$ for some functions $g$ and $h$ (not necessarily probability density functions) then $X$ and $Y$ are independent.

## Example

Let $X$ and $Y$ have density

$$
f(x, y) =
\begin{cases}
    2e^{- (x + 2y)} & \text{ if } x \gt 1, y \gt 1\\
    0               & \text{ otherwise }
\end{cases}
$$

The range of $X$ and $Y$ is the rectangle $(0, \infty) \times (0, \infty)$.

We can write

$$
f(x, y) = 2 e^{- (x + 2y)} = 2 e^{- x - 2y} = 2 e^{- x} e^{- 2 y} = g(x) h(y)
$$

where $g(x)= 2 e^{- x}$ and $h(y) = e^{- 2 y}$.

## Reference

1. Larry Wasserman **All of statistics** (page 36)