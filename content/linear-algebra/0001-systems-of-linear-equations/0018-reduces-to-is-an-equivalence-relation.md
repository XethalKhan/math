# Between matrices "reduces to" is an equivalence relation

We say that matrices that reduce to each other are "equivalent with respect to the relationship of row reducability"

## Proof

We must check the conditions of equivalence relationship

1. reflexivity - any matrix reduces to itself
2. symmetry - if $A$ reduces to $B$, then $B$ reduces to $A$
3. transitivity - if $A$ reduces to $B$ and $B$ reduces to $C$, then $A$ reduces to $C$

Reflexivity is easy, any matrix reduces to itself in zero row operations.

That the relationship is symmetric we have by lemma [Elementary row operations are reversible](./0017-elementary-row-operations-are-reversible.md) - if $A$ reduces to $B$ by some row operations, than $B$ reduces to $A$ by reversing those operations.

For transitivity suppose that $A$ reduces to $B$ and that $B$ reduces to $C$. Linking the reduction steps from $A \rightarrow \dots \rightarrow B$ with those from $B \rightarrow \dots \rightarrow C$ gives a reduction from $A$ to $C$.

## Reference

1. Jim Hefferson, *Linear Algebra* (page 50)