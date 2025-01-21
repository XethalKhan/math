# Surjection

The mapping $f: A \rightarrow B$ is said to be **onto**, or a **function that maps $A$ onto $B$**, in case $rng(f) = B$. We also say that such a mapping is **surjective**, or a **surjection**.

If $f: A \rightarrow B$, then the general relationship between the **codomain** $B$ and $rng(f)$ is $rng(f) \subseteq B$. In general, we say that $f$ maps $A$ into $B$. In the special case, such as $f: \mathbb{R} \rightarrow [0, \infty), f(x) = x^2$, where $rng(f)$ equals $B$, we say that **$f$ maps $A$ onto $B$**.

The mapping $f: A \rightarrow B$ is onto if and only if, for every $y \in B$, there exists $x \in A$ such that $f(x) = y$. Unlike the **one-to-one** property, which depends only on the function part of a mapping, the **onto** property depends in a crucial way on the choice of **codomain**. In fact, given various mappings built on the same function, at most one of them can be onto. As one example, if $f: \mathbb{R} \rightarrow B, f(x) = sin(x)$, where $[- 1, 1] \subseteq B \subseteq \mathbb{R}$, $f$ is onto if and only if $B = [- 1, 1]$.

We suggested earlier that the **injective** and **surjective** properties of a mapping are, in a sense, companion properties. This fact may not be evident from a comparison of their definitions, but consider the following. A mapping $f: A \rightarrow B$ is one-to-one if and only if each $y \in B$ has at most one $x \in A$ such that $f(x) = y$, and onto if and only if each $y \in B$ has at least one $x \in A$ such that $f(x) = y$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 266)