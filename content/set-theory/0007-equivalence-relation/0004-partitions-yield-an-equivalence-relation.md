# Partitions yield an equivalence relation

Let $A$ be a nonempty set and $\mathfrak{B}$ a **partition** on $A$. Define a **relation** $R$ on $A$ by the rule $x R y$ if and only if there exists a cell $X \in \mathfrak{B}$ such that $x \in X$ and $y \in X$. Then $R$ is an **equivalence relation** on $A$.

## Proof

We must prove that $R$ is reflexive, symmetric and transitive.

(R) Let $x \in A$ be given. By definition of **partitions** (3rd property) $x$ lies in some **cell** of the partition. Clearly $x$ lies in the same cell as itself so that $x R x$.

(S) Given $x, y \in A$, suppose $x R y$ so that $x$ and $y$ lie in some **cell** of $\mathfrak{B}$. Clearly then $x$ and $y$ lie in that same **cell** in $\mathfrak{B}$, so that $y R x$, as desired.

(T) Given $x, y, z \in A$, suppose that $x R y$ and $y R z$. To prove that $x R z$, we must show that there is some cell $X \in \mathfrak{B}$ such that $x \in X$ and $z \in X$. Now, since $x R y$, then there is a cell $X_1$ in $\mathfrak{B}$ such that both $x$ and $y$ are elements of $X_1$. Since $y R z$ there is a cell $X_2$ containing both $y$ and $z$. Since $y \in X_1 \cap X_2$ then $X_1 = X_2$, by definition of **partition** (2nd property). Let $X$ be this set $X_1(=X_2)$ and note that $x$ and $z$ lie in $X$ as desired.

Because the **equivalence relation** is derived from a given partition $\mathfrak{B}$ of $A$ in a canonical way, we label it by the symbol $A / \mathfrak{B}$ and call it the **equivalence relation determined by the partition $\mathfrak{B}$**

## Example

Given the partition $\mathfrak{B} = \\{ \\{ 2 \\}, \\{ 1, 3, 4 \\}, \\{ 5 \\} \\} $ of the set $A = \\{ 1, 2, 3, 4, 5 \\}$ list explicitly the ordered pairs in the corresponding equivalence relation $A / \mathfrak{B}$.

$A / \mathfrak{B} = \\{ (2, 2), (1, 1), (3, 3), (4, 4), (1, 3), (3, 1), (1, 4), (4, 1), (3, 4), (4, 3), (5, 5) \\}$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 241)