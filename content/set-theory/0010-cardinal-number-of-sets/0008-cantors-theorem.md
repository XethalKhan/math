# Cantor's theorem

Let $S$ be any set. Then $S \prec \mathcal{P}(S)$

## Proof

First, the mapping $x \rightarrow \\{ x \\}$ is clearly a one-to-one mapping of $S$ into $\mathcal{P}(S)$, so that $S \preceq \mathcal{P}(S)$. We must still show that there is no one-to-one mapping of $S$ that is **onto** $\mathcal{P}(S)$.

For suppose $f: S \rightarrow \mathcal{P}(S)$ were such a mapping. Now, for each $x \in S, f(x) \in \mathcal{P}(S)$, so that $f(x) \subseteq S$. Thus for each $x \in S$, we may consider whether $x \in f(x)$. Surely we may say that either $x \in f(x)$ or $x \not \in f(x)$ for each $x \in S$.

Consider the set $N = \\{ x \in S | x \not \in f(x) \\}$. Clearly $N \subseteq S$ so $N \in \mathcal{P}(S)$. Since $f$ is assumed to be **onto**, there exists $x_0 \in S$ such that $f(x_0) = N$.

Now either $x_0 \in N$ or $x_0 \not \in N$.

If $x_0 \in N$, then $x_0 \not \in f(x_0) = N$, so $x_0 \not \in N$, a contradiction.

If $x_0 \not \in N$, then $x_0 \in f(x_0) = N$, again a contradiction.

Our assumption of the existence of a one-to-one mapping of $S$ onto $\mathcal{P}(S)$ leads to a contradiction, so that no such mapping exists, and our desired conclusion $S \prec \mathcal{P}(S)$ is established.

## Note

$$
\mathbb{N} \prec \mathcal{P}(\mathbb{N}) \prec \mathcal{P}(\mathcal{P}(\mathbb{N})) \prec \dots \text{ and so forth. }
$$

The same can be said of

$$
\mathbb{R} \prec \mathcal{P}(\mathbb{R}) \prec \mathcal{P}(\mathcal{P}(\mathbb{R})) \prec \dots \text{ and so on. }
$$

The existence of infinitely many distinct infinite cardinal numbers is established.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 284, 285)