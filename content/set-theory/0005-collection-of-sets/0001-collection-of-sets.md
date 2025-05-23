# Collection (family) of sets

The collection of sets $\mathcal{A} = \\{A_1, A_2, A_3, \dots \\} = \\{A_i | i \in \mathbb{N}\\}$ containing a set $A$, corresponding to each positive integer $i$ (where some **universal set** $U$ contains each set $A$, in the collection) is called a **family** (or **collection**) of sets indexed by the set $\mathbb{N}$ of all positive integers. A positive integer $i$ used to label a set $A$ in the collection is called an **index**.

The collection $\mathcal{A}$ is also sometimes denoted $\\{ \mathcal{A}_i \\}_{i \in \mathbb{N}}$ or $\\{\mathcal{A}_i | i = 1, 2, 3, \dots \\}$

Let $A_i = \\{ i \\}$ for each $i = 1, 2, 3, \dots$. Then $\mathcal{A} = \\{A_i | i \in \mathbb{N} \\} = \\{\\{ 1 \\}, \\{ 2 \\}, \\{ 3 \\}, \dots \\}$ is a collection of **singleton** sets. Note that if positive integers $i$ and $j$ are two distinct indices, then $A_i \cap A_j = \emptyset$. For this reason we say that this family of sets is **pairwise disjoint** (or **mutually disjoint**).

Let $B_i = \\{ 1, 2, 3, \dots, i \\}$ for each $i = 1, 2, 3, \dots$ so that $\mathcal{B} = \\{\\{ 1 \\}, \\{ 1, 2 \\}, \\{ 1, 2, 3 \\}, \dots \\}$. In this example, for any two indices $i$ and $j$, $i \lt j$ implies $B_i \subseteq B_j$. For this reason $\mathcal{B}$ is called an **increasing** family of sets.

Let $C_i = [i, \infty)$ for each $i = 1, 2, 3, \dots$ so that $\mathcal{C} = \\{C_i | i \in \mathbb{N} \\}$ is a family of closed, unbounded intervals satisfying the condition $i \lt j$ implies $C_j \subseteq C_i$. Any family of sets indexed by $\mathbb{N}$ possessing this property is called a **decresing** family of sets. In particular, a collection of intervals satisfying this property is called a **family of nested intervals**.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 124, 125)