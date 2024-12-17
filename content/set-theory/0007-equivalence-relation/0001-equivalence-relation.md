# Equivalence relation

Let $A$ be a set and $E$ be a relation on $A$. We say that $E$ is an **equivalence relation on $A$** if and only if $E$ is **reflexive** on $A$, **symmetric** and **transitive** (RST).

## Example

Show that the relation $E$ on $A = \mathbb{R} - \\{ 0 \\}$ defined by $E = \\{(x, y) | x y \gt 0 \\}$ is an equivalence relation on $A$.

To show $E$ is **reflexive**, let $x \in A$ be given. Note that $(x, x) \in E$ means that $x^2 \gt 0$, clearly a true statement.

For **symmetry**, suppose $x, y \in \mathbb{R}$ and $x E y$, so that $x y \gt 0$. Since $x y = y x$, we conclude $y x \gt 0$ so that $y E x$ as desired.

As to **transitivity**, suppose $x, y, z \in \mathbb{R}$, that $x E y$ and $y E z$. To prove $x E z$, we need that $x z \gt 0$. We proceed by division into cases $x \gt 0$ and $x \lt 0$.

If $x \gt 0$, then since $x y \gt 0$, we have $y \gt 0$. Since $y \gt 0$ and $y z \gt 0$, then $z \gt 0$. Since $x \gt 0$ and $z \gt 0$, we conclude $x z \gt 0$.

If $x \lt 0$, then since $x y \gt 0$, we have $y \lt 0$. Since $y \lt 0$ and $y z \gt 0$, then $z \lt 0$. Since $x \lt 0$ and $z \lt 0$, we conclude $x z \gt 0$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 236)