# Expected value

The mean, or expectation, of a random variable $X$ is the average value of $X$.

The **expected value**, or mean, or first moment, of $X$ is defined to be

$$
\mathbb{E}(X) = \int x dF(x) =
\begin{cases}
    \sum_{x} x \\; f(x)     & \text{ if } X \text{ is discrete } \\
    \int x \\; f(x) \\; dx  & \text{ if } X \text{ is continuous }
\end{cases}
$$

assuming that the sum (or integral) is well defined. We use the following notation to denote the expected value of $X$:

$$
\mathbb{E}(X) = \mathbb{E}X = \int \\; x \\; dF(x) = \mu = \mu_{X}
$$

The expectation is a one-number summary of the distribution. Think of $\mathbb{E}(X)$ as the average $\frac{\displaystyle\sum^{n}_{i = 1} X_{i}}{n}$ of a large number of **IID** draws $X_1, \dots , X_{n}$. The fact that $\mathbb{E}(X) \approx \frac{\displaystyle\sum^{n}_{i = 1} X_{i}}{n}$ is actually more than a heuristic; it is a theorem called the **law of large numbers** that we will discuss later.

To ensure that $\mathbb{E}(X)$ is well defined, we say that $\mathbb{E}(X)$ exists if $\int_{x} |x| dF_{X}(x) \lt \infty$. Otherwise we say that the expectation does not exist.

## Example

Flip a fair coin two times. Let $X$ be the number of heads. Then,

$$
\mathbb{E}(X) = \int x dF_{X}(x) = \sum_{x} x f_{X}(x)
$$

$$
= (0 \times f(0)) + (1 \times f(1)) + (2 \times f(2)) = (0 \times (\frac{1}{4})) + (1 × (\frac{1}{2})) + (2 × (\frac{1}{4})) = 1
$$

## Reference

1. Larry Wasserman **All of statistics** (page 47, 48)