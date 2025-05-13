# The rule of lazy statistician

Let $Y = r(X)$. Then

$$
\mathbb{E}(Y) = \mathbb{E}(r(X)) = \int r(x) \\; dF_{X}(x)
$$

## Intuition

This result makes intuitive sense. Think of playing a game where we draw $X$ at random and then I pay you $Y = r(X)$. Your average income is $r(x)$ times the chance that $X = x$, summed (or integrated) over all values of $x$.

## Probability is special case of expectation

Here is a special case. Let $A$ be an event and let $r(x) = I_{A}(x)$ where $I_{A}(x) = 1$ if $x \in A$ and $I_{A}(x) = 0$ if $x \not \in A$. Then

$$
\mathbb{E}(I_{A}(X)) = \int I_{A}(x) \\; fX(x)dx = \int_{A} f_{X}(x)dx = \mathbb{P}(X \in A)
$$

In other words, probability is a special case of expectation.

## Example

Let $(X, Y)$ have a jointly uniform distribution on the unit square. Let $Z = r(X, Y) = X^{2} + Y^{2}$. Then,

$$
\mathbb{E}(Z) = \int \int r(x, y) \\; dF(x, y) = \int^{1}_{0} \int^{1}_{0} (x^{2} + y^{2}) dx \\; dy
$$

$$
= \int^{1}_{0} x^{2} dx + \int^{1}_{0} y^{2} dy = \frac{2}{3}
$$

## Reference

1. Larry Wasserman **All of statistics** (page 48, 49)