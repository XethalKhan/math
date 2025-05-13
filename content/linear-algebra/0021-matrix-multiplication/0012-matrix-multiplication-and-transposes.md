# Matrix multiplication and transposes

Suppose $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix. Then $(AB)^t = B^t A^t$.

## Proof

This theorem may be surprising but if we check the sizes of the matrices involved, then maybe it will not seem so far-fetched. First, $AB$  has size $m \times p$, so its transpose has size $p \times m$. The product of $B^t$ with $A^t$ is a $p \times n$ matrix times an $n \times m$ matrix, also resulting in a $p \times m$ matrix. So at least our objects are compatible for equality (and would not be, in general, if we did not reverse the order of the matrix multiplication).

Here we go, entry-by-entry. For $1 \leq i \leq m, 1 \leq j \leq p$,

$$
[(AB)^t]_{ji} = [AB]_{ij}
\\;\\;\\;
\text{ Definition Transpose of a Matrix }
$$

$$
= \sum^{n}_{k = 1} [A]_{ik} [B]_{kj}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{n}_{k = 1} [B]_{kj} [A]_{ik}
\\;\\;\\;
\text{ Commutativity of Multiplication }
$$

$$
= \sum^{n}_{k = 1} [B^t]_{jk} [A^t]_{ki}
\\;\\;\\;
\text{ Definition Transpose of a Matrix }
$$

$$
= [B^t \\; A^t]_{ij}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

So the matrices $(AB)^t$ and $B^t A^t$ are equal, entry-by-entry, and by the definition of **Matrix Equality** we can say they are equal matrices.

## Note

This theorem seems odd at first glance, since we have to switch the order of $A$ and $B$. But if we simply consider the sizes of the matrices involved, we can see that the switch is necessary for this reason alone. That the individual entries of the products then come along to be equal is a bonus.

## Reference

1. [linear.ups.edu - theorem MMT, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)
