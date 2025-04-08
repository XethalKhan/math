# CDF properties related with random variable

Let $F$ be the **CDF** for a random variable $X$. Then:

1. $\mathbb{P}(X = x) = F(x) - F(x^{-})$ where $F(x^{-}) = \lim\limits_{y \rightarrow x^{-}} F(y)$

2. $\mathbb{P}(x \lt X \leq y) = F(y) - F(x)$

3. $\mathbb{P}(X \gt x) = 1 - F(x)$

4. If $X$ is **continuous** then

$$
F(b) - F(a) = \mathbb{P}(a \lt X \lt b) = \mathbb{P}(a \leq X \lt b)
$$

$$
F(b) - F(a) = \mathbb{P}(a \lt X \leq b) = \mathbb{P}(a \leq X \leq b)
$$

## Reference

1. Larry Wasserman **All of statistics** (page 24, 25)