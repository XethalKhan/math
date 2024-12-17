# Equivalence class

Given a relation $R$ on a set $A$, define for each $x \in A$ the set $[x]$ by the rule $[x] = \\{ y \in A | (x, y) \in R \\}$. The set $[x]$ is the **subset** of $A$ consisting of all elements of $A$ to which $x$ is related. If $R$ is an **equivalence relation** on $A$, we call $[x]$ the **equivalence class determined by $x$** and denote by the symbol $A / R$ the set $\\{[x] | x \in A \\}$ of all **equivalence classes**.

## Examples

### Example 1

The relation

$$
R_1 = \\{ (1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 3), (3, 2), (1, 3), (3, 1), (4, 5), (5, 4) \\}
$$

is not **equivalence relation** on

$$
A = \\{ 1, 2, 3, 4, 5 \\}
$$

$$
A / R_1 = \\{ \\{ 1, 2, 3 \\}, \\{2, 3 \\}, \\{4, 5 \\}, \\{4 \\} \\}
$$

$$
[1] = \\{ 1, 2, 3 \\}
\\;\\;\\;
[2] = \\{2, 3 \\}
\\;\\;\\;
[3] = \\{ 1, 2, 3 \\}
\\;\\;\\;
[4] = \\{4, 5 \\}
\\;\\;\\;
[5] = \\{4 \\}
$$

## Example 2

The relation

$$
R_2 = \\{ (2, 2), (3, 3), (4, 4), (5, 5), (3, 4), (4, 3), (3, 5), (5, 3), (4, 5), (5, 4) \\}
$$

is not **equivalence relation** on

$$
A = \\{ 1, 2, 3, 4, 5 \\}
$$

$$
A / R_2 = \\{ \\{2 \\}, \\{ 3, 4, 5 \\} \\}
$$

$$
[1] = \emptyset
\\;\\;\\;
[2] = \\{2 \\}
\\;\\;\\;
[3] = \\{ 3, 4, 5 \\}
\\;\\;\\;
[4] = \\{ 3, 4, 5 \\}
\\;\\;\\;
[5] = \\{ 3, 4, 5 \\}
$$

## Example 3

The relation

$$
R_3 = \\{ (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (2, 5), (5, 2), (3, 5), (5, 3), (2, 3), (3, 2) \\}
$$

is an **equivalence relation** on

$$
A = \\{ 1, 2, 3, 4, 5 \\}
$$

$$
A / R_3 = \\{ \\{ 1 \\}, \\{4 \\}, \\{2, 3, 5 \\} \\}
$$

$$
[1] = \\{ 1 \\}
\\;\\;\\;
[2] = \\{2, 3, 5 \\}
\\;\\;\\;
[3] = \\{2, 3, 5 \\}
\\;\\;\\;
[4] = \\{4 \\}
\\;\\;\\;
[5] = \\{2, 3, 5 \\}
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 238)