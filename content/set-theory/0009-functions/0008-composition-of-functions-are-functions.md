# Composition of functions are functions

If $f$ and $g$ are **functions**, then the **composition** $g \circ f$ is a function.

## Proof

To prove that $g \circ f$ is a **function**, assume that the ordered pairs $(x, z_1)$ and $(x, z_2)$ are in $g \circ f$. Our claim is that $z_1 = z_2$. By definition of [**composition**](./0007-composition.md), there exist objects $y_1$ and $y_2$ such that $(x, y_1) \in f$ and $(y_1, z_1) \in g$, $(x, y_2) \in f$ and $(y_2, z_2) \in g$. Since $f$ is a **function**, we conclude that $y_1 = y_2$. We will denote this common value by $y$. Since $g$ is a **function** and both $(y, z_1)$ and $(y, z_2)$ are elements of $g$, we conclude that $z_1 = z_2$ as desired.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 261)