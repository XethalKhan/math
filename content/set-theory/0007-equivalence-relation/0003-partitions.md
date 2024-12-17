# Partitions

Let $A$ be a set. A collection $\mathfrak{B}$ of subsets of $A$ is said to be **partition of $A$** if and only if:

1. $S \neq \emptyset$ for each $S \in \mathfrak{B}$
2. If $S_1, S_2 \in \mathfrak{B}$, then either $S_1 = S_2$ or $S_1 \cap S_2 = \emptyset$
3. For each $a \in A$, there is some $S \in \mathfrak{B}$ such that $a \in S$.

In symbols $\bigcup (S | S \in \mathfrak{B}) = A$

The elements of $\mathfrak{B}$ are often refered to as **cells** of the partition. Condition 1 states that each cell is nonempty. Condition 2 asserts that any two cells are either identical or disjoint. Condition 3 requires that every element of $A$ fall within at least one of the cells.

## Example

The division of the real numbers into positive and negative numbers and zero is an example of a three-celled partition on $\mathbb{R}$. Cells consisting of all rational and irrational numbers provide a two-celled partition of $\mathbb{R}$, whereas the odd and even integers yield a two-celled partition of $\mathbb{Z}$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 240)