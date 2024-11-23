# Symmetrix matrices are square

Suppose that $A$ is a **symmetric matrix**. Then $A$ is **square**.

## Proof

We start by specifying $A$'s size, without assuming it is square, since we are trying to prove that, so we cannot also assume it. Suppose $A$ is an $m \times n$ matrix. Because $A$ is symmetric, we know by definition that $A = A^t$. So, in particular, **Matrix Equality** requires that $A$ and $A^t$ must have the same size. The size of $A^t$ is $n \times m$. Because $A$ has $m$ rows and $A^t$ has $n$ rows, we conclude that $m = n$, and hence $A$ must be square by Definition of square matrices.

## Reference

1. [linear.ups.edu - theorem SMS, section Matrix operations](http://linear.ups.edu/html/section-MO.html)