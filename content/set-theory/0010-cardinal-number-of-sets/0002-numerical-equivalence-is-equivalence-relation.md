# Numerical equivalence is equivalence relation

$\cong$ is an **equivalence relation** on the collection of all subsets of any given **universal set** $U$.

## Proof

### Reflexive

Let $A$ be any set. Clearly $A \cong A$, since $I_{A}: A \rightarrow A$ is one-to-one and onto.

### Symmetric

Assume that $A$ and $B$ are sets with $A \cong B$. Let $f: A \rightarrow B$ be a **bijection**. Then $f^{- 1}:B \rightarrow A$ is a **bijection**, so that $B \cong A$.

### Transitive

Suppose $A, B, \text{ and } C$ are sets with $A \cong B$ and $B \cong C$. Let $f: A \rightarrow B$ and $g: B \rightarrow C$ be **bijections**. We must provide a **bijection** $h: A \rightarrow C$. Let $h = g \circ f$. By **Properties of function composition with bijection**, $h$ is a **bijection**. Hence $A \cong C$, as desired.

## Example - equivalence

Let $A = {1, 2, 3, 4}$ and $X = {a, b, c, d}$. The mapping $f: A \rightarrow X$ given by $f(1) = c, f(2) = a, f(3) = d, f(4) = b$, is clearly a **bijection** between $A$ and $X$, so that $A \cong X$.

Note that the function $f$ is by no means the only bijection between $A$ and $X$; in fact there are as many bijections between $A$ and $X$ as there are arrangements of the letters $a, b, c, \text{ and } d$; that is, $4! = 24$.

## Example - non-equivalence

Let $B = {1, 2, 3}$ and $X = {a, b, c, d}$. Then there are precisely $4! = 24$ one-to-one mappings of $B$ into $X$. One example is $f(1) = a, f(2) = b, f(3) = c$. Clearly none of these mappings is **onto**. No bijection exists between $B$ and $X$, so that $B \not\cong X$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 278)