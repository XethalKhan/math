# Probability function

We define the **probability function** or **probability mass function** for $X$ by $f_X(x) = \mathbb{P}(X = x)$.

Thus, $f_X(x) \geq 0$ for all $x \in \mathbb{R}$ and $\sum_{i} f_X(x_i) = 1$.

Sometimes we write $f$ instead of $f_X$.

The **CDF** of $X$ is related to $f_X$ by

$$
F_X(x) = \mathbb{P}(X \leq x) = \sum_{x_i \leq x} f_X(x_i)
$$

Probability function for occurence of Head when flipping coin four times

![Probability function four heads](/img/probability-function-four-heads.svg)

## Reference

1. Larry Wasserman **All of statistics** (page 22, 23)