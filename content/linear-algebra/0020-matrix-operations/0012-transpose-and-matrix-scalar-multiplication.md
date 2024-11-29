# Transpose and matrix scalar multiplication

Suppose that $\alpha \in \mathbb{C}$ and $A$ is an $m \times n$ matrix. Then $(\alpha A)^t = \alpha A^t$.

## Proof

The statement to be proved is an equality of matrices, so we work entry-by-entry and use definition of Matrix Equality. For $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[(\alpha A)^t]\_{ji} = [\alpha A]\_{ij} \text{ Definition Transpose of a Matrix }
$$

$$
= \alpha [A]\_{ij} \text{ Definition Matrix Scalar Multiplication }
$$

$$
= \alpha [A^t]\_{ji} \text{ Definition Transpose of a Matrix }
$$

$$
= [\alpha A^t]\_{ji} \text{ Definition Matrix Scalar Multiplication}
$$ 

Since the matrices $(\alpha A)^t$ and $\alpha A^t$ agree at each entry, definition of Matrix Equality tells us the two matrices are equal.

## Reference

1. [linear.ups.edu - theorem TMSM, section Matrix operations](http://linear.ups.edu/html/section-MO.html)