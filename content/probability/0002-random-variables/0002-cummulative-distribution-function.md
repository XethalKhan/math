# Cumulative distribution function

Given a random variable $X$, we define the cumulative distribution function (or distribution function) as follows:

The **cumulative distribution function**, or **CDF**, is the function $F_{X}: \mathbb{R} \rightarrow [0, 1]$ defined by

$$
F_{X}(x) = \mathbb{P}(X \leq x)
$$

## Example

Flip a fair coin four times and let $X$ be the number of heads. The distribution function is

$$
\binom{n}{k} = \begin{cases}
    0               & x \lt 0 \\
    \frac{1}{16}    & 0 \leq x \lt 1 \\
    \frac{5}{16}    & 1 \leq x \lt 2 \\
    \frac{11}{16}   & 2 \leq x \lt 3 \\
    \frac{15}{16}   & 3 \leq x \lt 4 \\
    1               & 4 \geq x
\end{cases}
$$

![Cumulative distribution function four heads](/img/cumulative-distribution-function-four-heads.svg)

Notice that the function is right continuous, non-decreasing, and that it is defined for all $x$, even though the random variable only takes values 0, 1, 2, 3 and 4.

## Reference

1. Larry Wasserman **All of statistics** (page 20, 21)