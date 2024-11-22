# Second principle of mathematical induction

Let $S$ be a set of integers containing $n_0$. Suppose $S$ has the property that $n$ belongs to $S$ whenever every integer less than $n$ and greater than or equal to $n_0$ belongs to $S$. Than $S$ contains every integer greater than or equal to $n_0$.

## Proof by contradiction

$$
p: n_0 \in S
$$

$$
q: n_0 \in S \land n_0 + 1 \in S \land . . . \land n - 1 \in S \rightarrow n \in S
$$

Let $F = \\{x \in \mathbb{N}, x \geq n_0 | x \not\in S\\}$. If $F$ is nonempty, then by **well ordering principle** of $\mathbb{N}$, $F$ contains minimum element $m$, where clearly $m \neq n_0$ (hypothesis $p$). This means that $n_0, n_0 + 1, . . . , m - 2, m - 1 \in S$, which contradicts hypothesis $q$.

$$
r: n_0 \in S \land n_0 + 1 \in S \land . . . \land m - 2 \in S \land m - 1 \in S = T
$$

$$
s: m \in S = F
$$

$$
q = r \rightarrow s = T \rightarrow F = F
$$

Therefore $F = \emptyset$ and $(\forall n \geq n_0, n \in \mathbb{N})(n \in S)$

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 14)