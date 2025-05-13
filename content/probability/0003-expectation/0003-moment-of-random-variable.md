# Moment of random variable

The $n$-th moment of $X$ is defined to be $\mathbb{E}(X^{n})$ assuming that $\mathbb{E}(|X|^{n}) \lt \infty$.

The $n$-th raw moment (i.e., moment about zero) of a random variable $X$ with density function $f(x)$ is defined by

$$
\mathbb{E}(X^{n}) = 
\begin{cases}
    \displaystyle\sum_{i} x^{n}_{i}  & \text{ discrete distribution }\\
    \displaystyle\int x^{n} f(x) dx  & \text{ continuous distribution }
\end{cases}
$$

## Reference

1. Larry Wasserman **All of statistics** (page 49)
2. [Moment (mathematics), section Significance of the moments - wikipedia](https://en.wikipedia.org/wiki/Moment_(mathematics))