# Transformations of random variable

Suppose that $X$ is a **random variable** with PDF $f_{X}$ and CDF $F_{X}$. Let $Y = r(X)$ be a function of $X$, for example, $Y = X^{2}$ or $Y = e^{X}$. We call $Y = r(X)$ a **transformation of $X$**. How do we compute the PDF and CDF of $Y$? In the discrete case, the answer is easy. The mass function of $Y$ is given by

$$
f_{Y}(y) = \mathbb{P}(Y = y) = \mathbb{P}(r(X) = y) = \mathbb{P}({x: r(x) = y}) = \mathbb{P}(X \in r^{- 1}(y))
$$

The **continuous** case is harder. There are three steps for finding $f_Y$

1. For each $y$, find the set $A_{y} = {x : r(x) \leq y}$.
2. Find the CDF

$$
F_{Y}(y) = \mathbb{P}(Y \leq y) = \mathbb{P}(r(X) \leq y) = \mathbb{P}({x: r(x) \leq y}) = \int_{A_{y}} f_{X}(x) \\; dx
$$

3.  The PDF is $f_{Y}(y) = F'_{Y}(y)$

## Example - discrete

Suppose that $\mathbb{P}(X = - 1) = \mathbb{P}(X = 1) = \frac{1}{4}$ and $\mathbb{P}(X = 0) = \frac{1}{2}$.

Let $Y = X^{2}$. Then, $\mathbb{P}(Y = 0) = \mathbb{P}(X = 0) = \frac{1}{2}$ and $\mathbb{P}(Y = 1) = \mathbb{P}(X = 1) + \mathbb{P}(X = - 1) = \frac{1}{2}$.



| $x$       | $f_{X}(x)$    |
|-----------|---------------|
| $X = - 1$ | $\frac{1}{4}$ |
| $X = 0$   | $\frac{1}{2}$ |
| $X = 1$   | $\frac{1}{4}$ |

$Y$ takes fewer values than $X$ because the transformation is not **one-to-one**.

| $y$       | $f_{Y}(y)$    |
|-----------|---------------|
| $X = 0$   | $\frac{1}{2}$ |
| $X = 1$   | $\frac{1}{2}$ |

## Reference

1. Larry Wasserman **All of statistics** (page 41)