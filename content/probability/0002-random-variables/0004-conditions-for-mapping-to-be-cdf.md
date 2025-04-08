# Conditions for mapping to be cumulative distribution function

A function $F$ mapping the real line $\mathbb{R}$ to $[0, 1]$ is a **cumulative distribution function** for some probability $\mathbb{P}$ if and only if $F$ satisfies the following three conditions:

1. $F$ is non-decreasing: $x_1 \lt x_2$ implies that $F(x_1) \leq F(x_2)$
2. $F$ is normalized:

$$
\lim\limits_{x \rightarrow - \infty} F(x) = 0
$$

and

$$
\lim\limits_{x \rightarrow \infty} F(x) = 1
$$

3. $F$ is right-continuous: $F(x) = F(x^{+})$ for all $x$, where

$$
F(x^{+}) = \lim\limits_{y \rightarrow x^{+}} F(y)
$$

## Proof

### 3.

Suppose that $F$ is a $CDF$.

Let $x$ be a real number and let $y_1, y_2, \dots$ be a sequence of real numbers such that $y_1 > y_2 > \dots$ and $\lim\limits_{i \rightarrow \infty} y_i = x$. Let $A_i = (- \infty, y_i]$ and let $A = (- \infty, x]$. Note that $A = \cap^{\infty}_{i = 1} A_i$ and also note that $A1 \supset A2 \supset \dots $. Because the events are monotone (see [**Continuity of probability**](../0001-introduction-to-probability/0006-continuity-of-probability-function.md)), $\lim\limits_{i \rightarrow \infty} \mathbb{P}(A_i) = \mathbb{P}(\cap_{i} A_i)$. Thus,

$$
F(x) = \mathbb{P}(A) = \mathbb{P}(\cap_{i} A_i) =
\lim\limits_{i \rightarrow \infty} \mathbb{P}(A_i) = \lim\limits_{i \rightarrow \infty} F(y_i) = F(x^{+})
$$

## Reference

1. Larry Wasserman **All of statistics** (page 22)