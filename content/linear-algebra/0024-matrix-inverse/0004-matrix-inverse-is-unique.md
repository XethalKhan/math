# Matrix inverse is unique

Suppose the square matrix $A$ has an inverse. Then $A^{- 1}$ is **unique**.

## Proof

We will assume that $A$ has two inverses. The hypothesis tells there is at least one. Suppose then that $B$ and $C$ are both inverses for $A$, so we know by Definition of Matrix Inverse that $A B = B A = I_n$ and $A C = C A = I_n$. Then we have,

$$
B = B I_n
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Identity Matrix }
$$

$$
= B (A C)
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

$$
= (B A) C
\\;\\;\\;
\text{ Theorem Matrix Multiplication Associativity }
$$

$$
= I_n C
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

$$
= C
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Identity Matrix }
$$
 
## Reference

1. [linear.ups.edu - theorem MIU, section Matrix Inverses and Systems of Linear Equations](http://linear.ups.edu/html/section-MISLE.html)
