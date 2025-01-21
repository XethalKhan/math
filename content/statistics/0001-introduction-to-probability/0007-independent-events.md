# Independent events

Two events $A$ and $B$ are **independent** if

$$
\mathbb{P}(AB) = \mathbb{P}(A) \mathbb{P}(B)
$$

and we write $A \coprod B$. A set of events $\\{ A_i | i \in I \\}$ is independent if

$$
\mathbb{P} ( \bigcap_{i \in J} A_i ) = \prod_{i \in J} \mathbb{P}(A_i)
$$

for every finite subset $J$ of $I$. If $A$ and $B$ are not independent, we write

$$
A \perp\!\!\!\perp B
$$

Independence can arise in two distinct ways. Sometimes, we explicitly **assume** that two events are independent. For example, in tossing a coin twice, we usually assume the tosses are independent which reflects the fact that the coin has no memory of the first toss. In other instances, we **derive** independence by verifying that $\mathbb{P}(AB) = \mathbb{P}(A) \mathbb{P}(B)$ holds. For example, in tossing a fair die, let $A = \\{ 2, 4, 6 \\}$ and let $B = \\{ 1, 2, 3, 4 \\}$. Then, $A \cap B = \\{ 2, 4 \\}, \mathbb{P}(AB)= \frac{2}{6} = \mathbb{P}(A) \mathbb{P}(B) = \frac{1}{2} \times \frac{2}{3}$ and so $A$ and $B$ are independent. In this case, we didn’t assume that $A$ and $B$ are independent — it just turned out that they were.

Suppose that $A$ and $B$ are disjoint events, each with positive probability. Can they be independent? No. This follows since $\mathbb{P}(A) \mathbb{P}(B) \gt 0$ yet $\mathbb{P}(AB) = P(\emptyset) = 0$. Except in this special case, there is no way to judge independence by looking at the sets in a Venn diagram.

## Example

Toss a fair coin $10$ times. Let $A = \text{ at least one head }$ Let $T_j$ be the event that tails occurs on the $j$-th toss. Then

$$
\mathbb{P}(A) =1 - \mathbb{P}(A')
$$

$$
= 1 - \mathbb{P}(\text{ all tails })
$$

$$
= 1 - \mathbb{P}(T_1 T_2 \dots T_{10})
$$

$$
= 1 - \mathbb{P}(T_1) \mathbb{P}(T_2) \dots \mathbb{P}(T_{10})
\\;\\;\\;
\text{ using independence }
$$

$$
= 1 - (\frac{1}{2})^{10} \approx .999.
$$

## Summary

1. $A$ and $B$ are independent if and only if $\mathbb{P}(A B) = \mathbb{P}(A) \mathbb{P}(B)$.
2. Independence is sometimes assumed and sometimes derived.
3. Disjoint events with positive probability are not independent.

## Reference

1. Larry Wasserman **All of statistics** (page 8, 9, 10)