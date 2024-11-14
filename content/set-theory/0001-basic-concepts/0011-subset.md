# Subset

## Informal definition

Let $A$ and $B$ be sets. We regard the statement **A is a subset of B**, denoted $A \subseteq B$, to mean that every element of $A$ is also an element of $B$. We write $A \nsubseteq B$ to denote that $A$ is not a subset of $B$. Finally, we define **B is a superset of A** to mean $A \subseteq B$.

$$
\mathbb{N} \subseteq \mathbb{Z},
\\;\\;\\;
\mathbb{Z} \subseteq \mathbb{Q},
\\;\\;\\;
\mathbb{Q} \subseteq \mathbb{R},
\\;\\;\\;
\mathbb{R} \subseteq \mathbb{C}
$$

$$
A \subseteq A
\\;\\;\\;
B \subseteq B
\\;\\;\\;
\text{(reflexive property)}
$$

$$
\text{Subset relation is not symetric}
$$

$$
A \subseteq B
\\;\\;\\;
\text{and}
\\;\\;\\;
B \subseteq C
\\;\\;\\;
\text{than}
\\;\\;\\;
A \subseteq C
\\;\\;\\;
\text{(transitive property)}
$$

$$
A = \\{1, 2, 3\\}
\\;\\;\\;
3 \in A
\\;\\;
\text{and}
\\;\\;
\\{2, 3 \\} \subseteq A
\\;\\;
\text{are true}
\\;\\;\\;
\\;\\;\\;
\\;\\;\\;
3 \in A
\\;\\;
\text{and}
\\;\\;
3 \subseteq A
\\;\\;
\text{are false}
$$

There is a special danger of confusion in dealing with the subset relationship in connection with **the empty set** $\emptyset$. Consider the question whether $\emptyset \in A$ and/or $\emptyset \subseteq A$, where $A = \\{1, 2, 3\\}$

## Formal definition

We say that **A is a subset of B** ($A \subseteq B$) if and only if statement $(\forall x)((x \in A) \to (x \in B))$ is true.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 11, 116)