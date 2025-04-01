# Matrix inverse of a matrix inverse

Suppose $A$ is an invertible matrix. Then $A^{- 1}$ is invertible and $(A^{- 1})^{- 1} = A$.

## Proof

We examine if $A$ is a suitable inverse for $A^{- 1}$ (by definition, the opposite is true).

### First - inverse on left side

$$
A A^{- 1} = I_n
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

and

### Second - inverse on right side

$$
A^{- 1} A = I_n
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

The matrix $A$ has met all the requirements to be the inverse of $A^{- 1}$, and so is invertible and we can write $A = (A^{- 1})^{- 1}$.

## Reference

1. [linear.ups.edu - theorem MIMI, section Matrix Inverses and Systems of Linear Equations](http://linear.ups.edu/html/section-MISLE.html)
