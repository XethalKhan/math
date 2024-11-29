# Transpose and matrix addition

Suppose that $A$ and $B$ are $m \times n$ matrices. Then $(A + B)^t = A^t + B^t$.

## Proof

The statement to be proved is an equality of matrices, so we work entry-by-entry and use definition of Matrix Equality. Realize too that while $A$ and $B$ are $m \times n$ matrices, the conclusion is a statement about the equality of two $n \times m$ matrices. So we begin with: for $1 \leq i \leq n, 1 \leq j \leq m$,

$$
[(A + B)^t]\_{ij} = [A + B]\_{ji} \text{ Definition Transpose of a Matrix }
$$

$$
= [A]\_{ji} + [B]\_{ji} \text{ Definition Matrix Addition }
$$

$$
= [A^t]\_{ij} + [B^t]\_{ij} \text{ Definition Transpose of a Matrix }
$$

$$
= [A^t + B^t]\_{ij} \text{ Definition Matrix Addition }
$$ 

Since the matrices $(A + B)^t$ and $A^t + B^t$ agree at each entry, definition Matrix Equality tells us the two matrices are equal.

## Reference

1. [linear.ups.edu - theorem TMA, section Matrix operations](http://linear.ups.edu/html/section-MO.html)