# Matrix inverse socks and shoes

Suppose $A$ and $B$ are invertible matrices of size $n$. Then $A B$ is an invertible matrix and $(A B)^{- 1} = B^{- 1} A^{- 1}$.

## Proof

### First - inverse on left side

$$
(B^{- 1} A^{- 1}) (A B) = B^{- 1}(A^{- 1} A) B
\\;\\;\\;
\text{ Theorem Matrix Multiplication Associativity }
$$

$$
= B^{- 1} I_n B
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

$$
= B^{- 1} B
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Identity Matrix }
$$

$$
= I_n
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

### Second - inverse on right side

$$
(A B)(B^{- 1} A^{- 1}) = A (B B^{- 1}) A^{- 1}
\\;\\;\\;
\text{ Theorem Matrix Multiplication Associativity }
$$

$$
= A I_n A^{- 1}
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

$$
= A A^{- 1}
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Identity Matrix }
$$

$$
= I_n
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

So the matrix $B^{- 1} A^{- 1}$ has met all of the requirements to be $AB$'s inverse, so $(A B)^{- 1} = B^{- 1} A^{- 1}$

## Reference

1. [linear.ups.edu - theorem SS, section Matrix Inverses and Systems of Linear Equations](http://linear.ups.edu/html/section-MISLE.html)
