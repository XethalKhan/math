# Binomial coefficient

Let $n \in \mathbb{Z}_{\geq 0}$ and $k \in \mathbb{Z}$.

Then the binomial coefficient $\binom{n}{k}$ is defined as:

$$
\binom{n}{k} = \begin{cases}
    \frac{n!}{k!(n - k)!}   & 0 \leq k \leq n\\
    0                       & \text{ otherwise }
\end{cases}
$$

where $n!$ denotes the [**factorial**](./0001-factorial.md) of $n$.

## Corollary

For any natural number $n$, we have

$$
\sum^{n}_{r = 0} \binom{n}{r} = 2^{n}
$$

## Reference

1. Joy Morris *Combinatorics* (page 27)
2. [Binomial coefficient - proofwiki](https://proofwiki.org/wiki/Definition:Binomial_Coefficient)