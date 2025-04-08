# Continuous random variable

A random variable $X$ is **continuous** if there exists a function $f_X$ such that $f_X(x) \geq 0$ for all $x$, $\int^{\infty}_{- \infty} f_X(x) \\; dx = 1$ and for every $a \leq b$,

$$
\mathbb{P}(a \lt X \lt b) = \int^{b}_{a} f_X(x) \\; dx
$$

The function $f_X$ is called the **probability density function (PDF)**. We have that

$$
F_X(x) = \int^{x}_{- \infty} f_X(t)\\; dt
$$

## Warning

Continuous random variables can lead to confusion. First, note that if $X$ is continuous then $\mathbb{P}(X = x) = 0$ for every $x$. Don’t try to think of $f(x)$ as $\mathbb{P}(X = x)$. This only holds for discrete random variables. We get probabilities from a PDF by integrating. A PDF can be bigger than $1$ (unlike a **mass function**). For example, if $f(x) = 5$ for $x \in [0, \frac{1}{5}]$ and $0$ otherwise, then $f(x) \geq 0$ and $\int f(x) \\; dx = 1$ so this is a well-defined PDF even though $f(x) = 5$ in some places. In fact, a PDF can be unbounded. For example, if $f(x) = \frac{2}{3} x^{- \frac{1}{3}}$ for $0 \lt x \lt 1$ and $f(x) = 0$ otherwise, then $\int f(x) \\; dx = 1$ even though $f$ is not bounded.

## Reference

1. Larry Wasserman **All of statistics** (page 23, 24)