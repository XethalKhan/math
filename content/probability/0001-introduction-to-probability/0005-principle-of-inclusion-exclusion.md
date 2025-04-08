# Principle of inclusion-exclusion

For any events A and B,

$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) − \mathbb{P}(A \cap B)
$$

## Proof

Write $A \cup B = (A \cap B') \cup (A \cap B) \cup (A' \cap B)$ and note that these events are **disjoint**. Hence, making repeated use of the fact that $\mathbb{P}$ is additive for disjoint events, we see that

$$
\mathbb{P}(A \cup B) = \mathbb{P}((A \cap B') \cup (A \cap B) \cup (A' \cap B))
$$

$$
= \mathbb{P}(A \cap B') + \mathbb{P}(A \cap B) + \mathbb{P}(A' \cap B)
$$

$$
= \mathbb{P}(A \cap B') + \mathbb{P}(A \cap B) + \mathbb{P}(A' \cap B) + \mathbb{P}(A \cap B) − \mathbb{P}(A \cap B)
$$

$$
= \mathbb{P}((A \cap B') \cup (A \cap B)) + \mathbb{P}((A' \cap B) \cup (A \cap B)) − \mathbb{P}(A \cap B)
$$

$$
= \mathbb{P}(A) + \mathbb{P}(B) − \mathbb{P}(A \cap B)
$$

## Intuition

Intuitively, the probability function $\mathbb{P}(A)$ measures the size of the set $A$ (assuming a suitable definition of size). The size of the set $A$ plus the size of the set $B$ equals the size of the union $A \cup B$ plus the size of the intersection $A \cap B: \mathbb{P}(A) + \mathbb{P}(B) = \mathbb{P}(A \cup B) + \mathbb{P}(A \cap B)$ (since the intersection $A \cap B$ is counted twice in $\mathbb{P}(A) + \mathbb{P}(B)$).

## Reference

1. Larry Wasserman **All of statistics** (page 6)
2. [Probability - The analysis of data - Volume 1 - 1.2. The Probability Function](http://theanalysisofdata.com/probability/1_2.html)