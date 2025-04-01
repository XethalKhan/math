# Probability formula for union of events

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

## Reference

1. Larry Wasserman **All of statistics** (page 6)