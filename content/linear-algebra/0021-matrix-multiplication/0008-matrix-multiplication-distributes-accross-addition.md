# Matrix Multiplication Distributes Across Addition

Suppose $A$ is an $m \times n$ matrix and $B$ and $C$ are $n \times p$ matrices and $D$ is a $p \times s$ matrix. Then

$$
A (B + C) = A B + A C
$$

$$
(B + C) D = B D + C D
$$

## Proof

We will do $A (B + C) = A B + A C$. Entry-by-entry, for $1 \leq i \leq m, 1 \leq j \leq p$,

$$
[A (B + C)]_{ij} = \sum^{n}_{k = 1} [A]_{ik} [B + C]_{kj}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{n}_{k = 1} [A]_{ik} ([B]_{kj} + [C]_{kj})
\\;\\;\\;
\text{ Matrix Addition }
$$

$$
= \sum^{n}_{k = 1} [A]_{ik} [B]_{kj} + [A]_{ik} [C]_{kj}
\\;\\;\\;
\text{ Distributivity }
$$

$$
= \sum^{n}_{k = 1} [A]_{ik} [B]_{kj} + \sum^{n}_{k = 1} [A]_{ik} [C]_{kj}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= [AB]_{ij} + [AC]_{ij}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [AB + AC]_{ij}
\\;\\;\\;
\text{ Matrix Addition }
$$

So the matrices $A (B + C)$ and $A B + A C$ are equal, entry-by-entry, and by the definition of **Matrix Equality** we can say they are equal matrices.

## Reference

1. [linear.ups.edu - theorem MMDAA, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)