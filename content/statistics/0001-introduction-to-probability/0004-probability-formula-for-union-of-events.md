# Probability formula for union of events

For any events A and B,

$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) − \mathbb{P}(AB)
$$

## Proof

Write $A \cup B = (AB') \cup (AB) \cup (A'B)$ and note that these events are **disjoint**. Hence, making repeated use of the fact that $\mathbb{P}$ is additive for disjoint events, we see that

$$
\mathbb{P}(A \cup B) = \mathbb{P}((AB') \cup (AB) \cup (A'B))
$$

$$
= \mathbb{P}(AB') + \mathbb{P}(AB) + \mathbb{P}(A'B)
$$

$$
= \mathbb{P}(AB') + \mathbb{P}(AB) + \mathbb{P}(A'B) + \mathbb{P}(AB) − \mathbb{P}(AB)
$$

$$
= \mathbb{P}((AB') \cup (AB)) + \mathbb{P}((A'B) \cup (AB)) − \mathbb{P}(AB)
$$

$$
= \mathbb{P}(A) + \mathbb{P}(B) − \mathbb{P}(AB)
$$

## Reference

1. Larry Wasserman **All of statistics** (page 6)