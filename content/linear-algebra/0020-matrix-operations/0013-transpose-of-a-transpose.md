# Transpose of a transpose

Suppose that $A$ is an $m \times n$ matrix. Then $(A^t)^t = A$.

## Proof

We again want to prove an equality of matrices, so we work entry-by-entry and use definition of Matrix Equality. For $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[(A^t)^t]\_{ij} = [A^t]_{ji} \text{ Definition Transpose of a Matrix }
$$

$$
= [A]\_{ij} \text{ Definition Transpose of a Matrix }
$$

Since the matrices $(A^t)^t$ and $A$ agree at each entry, definition of Matrix Equality tells us the two matrices are equal.

## Reference

1. [linear.ups.edu - theorem TT, section Matrix operations](http://linear.ups.edu/html/section-MO.html)