# Conditional probability function

The **conditional probability mass function** is

$$
f_{X | Y}(x | y) = \mathbb{P}(X = x | Y = y) = \frac{\mathbb{P}(X = x, Y = y)}{\mathbb{P}(Y = y)} = \frac{f_{X, Y}(x, y)}{f_{Y}(y)}
$$

For **continuous** distributions we use the same definitions. The interpretation differs: in the discrete case, $f_{X | Y}(x | y)$ is $\mathbb{P}(X = x | Y = y)$, but in the continuous case, we must integrate to get a probability

For **continuous** random variables, the **conditional probability density function** is

$$
f_{X | Y}(x | y) = \frac{f_{X, Y}(x, y)}{f_{Y}(y)}
$$

assuming that $f_{Y}(y) \gt 0$. Then,

$$
\mathbb{P}(X \in A | Y = y) = \int_{A} f_{X | Y}(x | y) \\; dx
$$

## Example

Let

$$
f(x, y) =
\begin{cases}
    x + y   & \text{ if } 0 \leq x \leq 1, 0 \leq y \leq 1 \\
    0       & \text{ otherwise }
\end{cases}
$$

Let us find $\mathbb{P}(X \lt \frac{1}{4} | Y = \frac{1}{3})$. In [**Marginal mass function**](./0012-marginal-mass-function.md) we saw that

$$
f_{Y}(y) = y + \frac{1}{2}
$$

Hence,

$$
f_{X | Y}(x | y) = \frac{f_{X, Y}(x, y)}{f_{Y}(y)} = \frac{x + y}{y + \frac{1}{2}}
$$

So,

$$
\mathbb{P}(X \lt \frac{1}{4} | Y = \frac{1}{3}) = \int^{\frac{1}{4}}_{0} f_{X | Y} (x | \frac{1}{3}) \\; dx
$$

$$
= \int^{\frac{1}{4}}_{0} \frac{x + \frac{1}{3}}{\frac{1}{3} + \frac{1}{2}} \\; dx
\\;\\;\\;
= \int^{\frac{1}{4}}_{0} \frac{x + \frac{1}{3}}{\frac{2}{6} + \frac{3}{6}} \\; dx
\\;\\;\\;
= \int^{\frac{1}{4}}_{0} \frac{x + \frac{1}{3}}{\frac{5}{6}} \\; dx
\\;\\;\\;
= \frac{6}{5} \int^{\frac{1}{4}}_{0} x + \frac{1}{3} \\; dx
$$

$$
= \frac{6}{5} (\frac{x^{2}}{2} + \frac{1}{3} x |^{\frac{1}{4}}_{0})
\\;\\;\\;
= \frac{6}{5} (\frac{\frac{1}{16}}{2} + \frac{1}{3} \frac{1}{4})
\\;\\;\\;
= \frac{6}{5} (\frac{1}{32} + \frac{1}{12})
\\;\\;\\;
= \frac{6}{160} + \frac{6}{60} = \frac{3}{80} + \frac{8}{80} =  \frac{11}{80}
$$

## Reference

1. Larry Wasserman **All of statistics** (page 36, 37)