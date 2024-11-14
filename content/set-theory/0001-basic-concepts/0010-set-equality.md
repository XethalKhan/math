# Set equality

## Informal definition

Let $A$ and $B$ be sets. We will regard the statement **A equals B**, denoted $A = B$, to mean that $A$ and $B$ have precisely the same elements.

$$
A = \\{x \in \mathbb{N} | 3 \lt x \lt 9\\}
\\;\\;\\;
B = \\{4, 5, 6, 7, 8\\}
\\;\\;\\;
A = B
$$

Our informal description of set equality highlights the basic fact that a set is completely determined by its elements. Sets that are indeed equal often appear, or are presented in a form, quite different from each other, with the burden of proof of equality on the reader.

## Formal definition (equivalence relation)

Sets $A$ and $B$ are equal if and only if every element of $A$ is also an element of $B$ and every element of $B$ is also an element of $A$.

Every set equals itself $A = A$ and $B = B$ (reflexive property)  
Given sets $A$ and $B$, if $A = B$ then $B = A$ (symmetric property)  
Given sets $A, B \text{ and } C$, if $A = B$ and $B = C$, then $A = C$ (transitive property)  

## Formal definition (proposition logic)

We say that $A$ equals $B$ (denoted $A = B$) if and only if the statement $(\forall x)((x \in A) \iff (x \in B))$ is true.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 10, 116)
