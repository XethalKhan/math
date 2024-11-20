# First principle of mathematical induction

Let $S$ be a set of integers containing $n_0$. Suppose $S$ has the property whenever some integer $n \geq n_0$ belongs to $S$, then the integer $n + 1$ also belongs to $S$. Then, $S$ contains every integer greater than or equal to $n_0$.

## Proof by contradiction

$$
p: n_0 \in S
$$

$$
q: n \in S \rightarrow n + 1 \in S
$$

Let $F = \\{x \in \mathbb{N}, x \geq n_0 | x \not\in S\\}$. If $F$ is nonempty then by **well ordering principle** of $\mathbb{N}$, $F$ contains minimum element $m$, where clearly $m \neq n_0$ (by hypothesis $p$). This means that $n_0, n_0 + 1, . . . , m - 2, m - 1 \in S$, which contradicts the hypothesis $q$.

$$
r: m - 1 \in S = T
$$

$$
s: m \in S = F
$$

$$
q: r \rightarrow s = T \rightarrow F = F
$$

Therefore $F = \emptyset$ and $(\forall n \geq n_0, n \in \mathbb{N})(n \in S)$

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 13)