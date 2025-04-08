# Inverse cumulative distribution function

Let $X$ be a random variable with CDF $F$. The **inverse CDF** or **quantile function** is defined by

$$
F^{- 1}(q) = inf \\{ x : F(x) \gt q \\}
$$

for $q \in [0, 1]$. If $F$ is strictly increasing and **continuous** then $F^{- 1}(q)$ is the unique real number $x$ such that $F(x) = q$.

We call $F^{- 1}(\frac{1}{4})$ the **first quartile**, $F^{- 1}(\frac{1}{2})$ the **median** (or **second quartile**), and $F^{- 1}(\frac{3}{4})$ the **third quartile**.

## Reference

1. Larry Wasserman **All of statistics** (page 25)