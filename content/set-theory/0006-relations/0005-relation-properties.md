# Relation properties

Let $A$ be a set and $R$ a relation on $A$. We say that

1. $R$ is **reflexive** on $A$ if and only if $x R x$ for all $x \in A$
2. $R$ is **symmetric** if and only if, for every $x, y \in A$, if $x R y$ then $y R x$
3. $R$ is **transitive** if and only if for every $x, y, z \in A$, if $x R y$ and $y R z$ then $x R z$
4. $R$ is **antisymmetric** if and only if, for every $x, y \in A$, if $x R y$ and $y R x$ then $x = y$

We will occasionally refer to these properties as R, S, T and AS, and to their negations NR, NS, NT and NAS

$$
R: (\forall x \in A)((x, x) \in R)
$$

$$
S: (\forall x, y \in A)((x, y) \in R \rightarrow (y, x) \in R)
$$

$$
T: (\forall x, y, z \in A)((x, y) \in R \land (y, z) \in R \rightarrow (x, z) \in R)
$$

$$
AS: (\forall x, y \in A)((x, y) \in R \land (y, x) \in R \rightarrow x = y)
$$

Consider the relation **less than** ($\lt$) on $\mathbb{R}$; that is, a pair $(x, y)$ is an element of this **relation** if and only if $x \lt y$.

This relation is **not reflexive** since it is false that $5 \lt 5$.

It is **not symmetric** since for example $8 \lt 9$ whereas it is not the case that $9 \lt 8$.

The relation is clearly **transitive** since $x \lt y$ and $y \lt z$ then $x \lt z$ for any real numbers $x, y, z$.

The relation **is antisymmetric**, altought only by means of logical technicality. The question is whether the statement "for all $x, y \in \mathbb{R}$ if $x \lt y$ and $y \lt x$, then $x = y$" is true. The answer is "yes" since the premise "$x \lt y$ and $y \lt x$" is false for any $x$ and $y$.

$$
p: x \lt y \land y \lt x = \text{ always F}
$$

$$
q: x = y \text{ maybe T maybe F}
$$

$$
p \rightarrow q = T
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 232)