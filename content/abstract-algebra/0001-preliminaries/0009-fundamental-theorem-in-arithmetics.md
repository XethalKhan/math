# Fundamental theorem in arithmetics

Let $n$ be an integer such that $n \gt 1$. Then $n = p_1 p_2 \dots p_k$ where $p_1 p_2 \dots p_k$ are **primes** (not necessarily distinct). Furthermore, this factorization is unique; that is if $n = q_1 q_2 \dots q_l$ then $k = l$ and the $q_i$'s are just the $p_i$'s rearranged.

## Proof

### Uniqueness

To show uniqueness, we will use induction on $n$. The theorem is certanly true for $n = 2$ since in this case $n$ is prime. Now assume that the result holds for all integers $m$ such that $1 \leq m \lt n$, and

$$
n = p_1 p_2 \dots p_k = q_1 q_2 \dots q_l
$$

where $p_1 \leq p_2 \leq \dots \leq p_k$ and $q_1 \leq q_2 \leq \dots \leq q_l$ (induction hypothesis).

By [**Euclids lemma**](./0006-euclids-lemma.md) $p_1 | q_i$ for some $i = 1, 2, \dots , l$ and $q_1 | p_j$ for some $j = 1, 2, \dots , k$. Since all of the $p_i$'s and $q_i$'s are **prime numbers** $p_1 = q_i$ and $q_1 = p_j$. Hence $p_1 = q_1$ since $p_1 \leq p_j = q_1 \leq q_i = p_1$.

By the induction hypothesis $n' = p_2 p_3 \dots p_k = q_2 q_3 \dots q_l$ has a unique factorization. Hence $k = l$ and $q_i = p_i$ for $i = 1, 2, \dots , k$.

### Existence

Suppose that there is some integer that cannot be written as the product of the primes. Let $S$ be the set of all such numbers. By the [**well ordering principle**](./0001-well-ordering-principle.md), $S$ has the smallest number $a$.

If the only positive factors of $a$ are $a$ and $1$, then $a$ is a **prime**, which is a contradiction.

Hence $a = a_1 a_2$ where $1 \lt a_1 \lt a$ and $1 \lt a_2 \lt a$. Neither $a_1 \in S$ nor $a_2 \in S$ since $a$ is the smallest element in $S$. So $a_1 = p_1 p_2 \dots p_r$ and $a_2 = q_1 q_2 \dots q_s$.

Therefore $a = a_1 a_2 = p_1 p_2 \dots p_r q_1 q_2 \dots q_s$. So $a \not\in S$ which is a contradiction.

## Reference

1. [abstract.pugetsound.edu section The Division Algorithm, Theorem 2.15 Fundamental Theorem of Arithmetic](http://abstract.pugetsound.edu/aata/integers-section-division-algorithm.html)