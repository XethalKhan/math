# Matrix inverse of a scalar multiple

Suppose $A$ is an invertible matrix and $\alpha$ is a nonzero scalar. Then $(\alpha A)^{- 1} = \frac{1}{\alpha} A^{- 1}$ and $\alpha A$ is invertible.

## Proof

### First - inverse on left side

$$
(\frac{1}{\alpha} A^{- 1})(\alpha A) = (\frac{1}{\alpha} \alpha)(A^{- 1} A)
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Scalar Matrix Multiplication }
$$

$$
= 1 I_n
$$

$$
= I_n
$$

### Second - inverse on right side

$$
(\alpha A)(\frac{1}{\alpha} A^{- 1}) = (\alpha \frac{1}{\alpha})(A A^{- 1})
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Scalar Matrix Multiplication }
$$

$$
= 1 I_n
$$

$$
= I_n
$$

The matrix $\frac{1}{\alpha} A^{- 1}$ has met all the requirements to be the inverse of $\alpha A$, so we can write $(\alpha A)^{- 1} = \frac{1}{\alpha} A^{- 1}$.

## Reference

1. [linear.ups.edu - theorem MISM, section Matrix Inverses and Systems of Linear Equations](http://linear.ups.edu/html/section-MISLE.html)
