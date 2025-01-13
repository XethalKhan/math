# Continuity of probabilities

If $A_n \rightarrow A$ then $\mathbb{P}(A_n) \rightarrow \mathbb{P}(A)$ as $n \rightarrow \infty$.

## Proof

Suppose that $A_n$ is **monotone increasing** so that $A_1 \subset A_2 \subset \dots$ (from hypothesis).

Let $A = \lim\limits_{n \rightarrow \infty} A_n = \displaystyle{\bigcup_{i = 1}^{\infty}} A_i$. Define $B_1 = A_1, B_2 = \\{ \omega \in \Omega : \omega \in A_2, \omega \not\in A_1 \\}, B3 = \\{ \omega \in \Omega : \omega \in A_3, \omega \not\in A_2, \omega \not\in A_1 \\}, \dots$. It can be shown that $B1, B2, \dots$ are disjoint, $A_n = \displaystyle{\bigcup_{i = 1}^{n}} A_i = \displaystyle{\bigcup_{i = 1}^{n}} B_i$ for each $n$ and $\displaystyle{\bigcup_{i = 1}^{\infty}} B_i = \displaystyle{\bigcup_{i = 1}^{\infty}} A_i$. From [Axiom 3 of probability distribution](./0002-probability.md),

$$
\mathbb{P}(A_n) = \mathbb{P}(\displaystyle{\bigcup_{i = 1}^{n}} B_i) = \sum_{i = 1}^{n} \mathbb{P}(B_i)
$$

and hence, using Axiom 3 again,

$$
\lim\limits_{n \rightarrow \infty} \mathbb{P}(A_n) = \lim\limits_{n \rightarrow \infty} \mathbb{P}(B_i) = \sum_{i = 1}^{\infty} \mathbb{P}(B_i) = \mathbb{P}(\displaystyle{\bigcup_{i = 1}^{\infty}} B_i) = \mathbb{P}(A)
$$

## Reference

1. Larry Wasserman **All of statistics** (page 7)
