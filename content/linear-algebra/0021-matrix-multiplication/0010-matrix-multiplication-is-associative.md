# Matrix Multiplication is associative

Suppose $A$ is an $m \times n$ matrix, $B$ is an $n \times p$ matrix and $D$ is a $p \times s$ matrix. Then $A(BD) = (AB)D$.

## Proof

A matrix equality, so we will go entry-by-entry, no surprise there. For $1 \leq i \leq m, 1 \leq j \leq s$,

$$
[A (B D)]_{ij} = \sum^{n}_{k = 1} [A]_{ik} [BD]_{kj}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{n}_{k = 1} [A]_{ik} \sum^{p}_{l = 1} [B]_{kl} [D]_{lj}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{n}_{k = 1} \sum^{p}_{l = 1} [A]_{ik} [B]_{kl} [D]_{lj}
\\;\\;\\;
\text{ Distributivity }
$$

We can switch the order of the summation since these are finite sums,

$$
= \sum^{p}_{l = 1} \sum^{n}_{k = 1} [A]_{ik} [B]_{kl} [D]_{lj}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

As $[D]_{lj}$ does not depend on the index $k$, we can use distributivity to move it outside of the inner sum,

$$
= \sum^{p}_{l = 1} [D]_{lj} \sum^{n}_{k = 1} [A]_{ik} [B]_{kl}
\\;\\;\\;
\text{ Distributivity }
$$

$$
= \sum^{p}_{l = 1} [D]_{lj} [AB]_{il}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{p}_{l = 1} [AB]_{il} [D]_{lj}
\\;\\;\\;
\text{ Commutativity of Multiplication }
$$

$$
= [(AB)D]_{ij}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

So the matrices $(AB)D$ and $A(BD)$ are equal, entry-by-entry, and by the definition of **Matrix Equality** we can say they are equal matrices.

## Note

This theorem says matrix multipication is associative, it means we do not have to be careful about the order in which we perform matrix multiplication, nor how we parenthesize an expression with just several matrices multiplied togther.

## Reference

1. [linear.ups.edu - theorem MMA, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)