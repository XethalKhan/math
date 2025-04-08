# The law of total probability

Let $A_1, \dots , A_k$ be a partition of $\Omega$. Then, for any event $B$,

$$
\mathbb{P}(B) = \sum^{k}_{i = 1} \mathbb{P}(B | A_i) \mathbb{P}(A_i).
$$

## Proof

Define $C_j = B \cap A_j$ and note that $C_1, \dots , C_k$ are **disjoint** and that $B = \sum^{k}_{j = 1} C_j$ ([Axiom of probability 3](./0002-probability.md)). Hence,

$$
\mathbb{P}(B) = \sum_{j} \mathbb{P}(C_j)
$$

$$
= \sum_j \mathbb{P}(B \cap A_j)
$$

$$
= \sum_j \mathbb{P}(B | A_j) \mathbb{P}(A_j) \text{ Definition of Conditional probability }
$$

## Reference

1. Larry Wasserman **All of statistics** (page 12)