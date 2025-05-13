# $2^{\aleph_0} = c$

$\mathbb{R}$ is numerically equivalent to the **power set** of $\mathbb{N}$. In terms of cardinal numbers, we have $2^{\aleph_0} = c$

## Proof

Since $(0, 1) \cong \mathbb{R}$, we may just as well prove that $(0, 1) \cong \mathcal{P}(\mathbb{N})$. We will show that $(0, 1) \preceq \mathcal{P}(\mathbb{N})$ and $\mathcal{P}(\mathbb{N}) \preceq (0, 1)$ and appeal to [**Schroeder-Bemstein**](./0011-cantor-bernstein-schroder-theorem.md).

To define a one-to-one mapping $f$ of $(0, 1)$ into $\mathcal{P}(\mathbb{N})$, let $. b_1, b_2, b_3 \dots$ be the binary expansion of a given $x \in (0, 1)$, so that each $b_i$ is either $0$ or $1$. We outlaw the use of an infinite string of $1$'s in a binary representation,
in order to guarantee uniqueness. Now define $f$ by the rule $f(x) = \\{ n \in \mathbb{N} | b_n, = 1 \\}$. By the uniqueness of binary representation, we conclude that $f$ is a one-to-one mapping of $(0, 1)$ into $\mathcal{P}(\mathbb{N})$.

To prove $\mathcal{P}(\mathbb{N}) \preceq (0, 1)$, let $A \subseteq \mathbb{N}$. We must associate with $A$ in a one-to-one fashion an element of $(0, 1)$. Using standard decimal representation of numbers in $(0, 1)$, with the (by now familiar) eschewing of infinite strings of nines, we decree that $g(A) = .x_{1} x_{2} x_{3} \dots$, where $x_i = 4$ if $i \in A$ and $x_i = 7$ if $i \not \in A$. Clearly $g$ maps $\mathcal{P}(\mathbb{N})$ into $(0, 1)$. Furthermore, by uniqueness of decimal representation, if $g(A) = g(B)$, where $g(B) = . y_{1} y_{2} y_{3} \dots$, then $x_i = y_i = \text{ either } 4 \text{ or } 7$ for all $i \in \mathbb{N}$, so that $i \in A$ if and only if $i \in B$; that is, $A = B$. Hence $g$ is one to one and the proof is complete.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 286, 287)