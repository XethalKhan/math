# Linearly Independent Vectors, $r$ and $n$

Suppose that $S = { v_1, v_2, v_3, \dots , v_n } \subseteq \mathbb{C}^m$ is a set of vectors and $A$ is the $m \times n$ matrix whose columns are the vectors in $S$. Let $B$ be a matrix in **reduced row-echelon form** that is row-equivalent to $A$ and let $r$ denote the number of pivot columns in $B$. Then $S$ is **linearly independent** if and only if $n = r$.

## Proof

Theorem **Linearly Independent Vectors and Homogeneous Systems** says the linear independence of $S$ is equivalent to the homogeneous linear system $LS(A, 0)$ having a unique solution. Since $LS(A, 0)$ is consistent (Theorem **Homogeneous systems are consistent**) we can apply Theorem **Relationship between $r$ and $n$ for a consistent system** to see that the solution is unique exactly when $n = r$.

## Examples TODO

## Reference

1. [linear.ups.edu - theorem LIVRN, section Linear Independence](http://linear.ups.edu/html/section-LI.html)
