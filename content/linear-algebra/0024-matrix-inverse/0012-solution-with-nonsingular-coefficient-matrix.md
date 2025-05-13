# Solution with nonsingular coefficient matrix

Suppose that $A$ is **nonsingular**. Then the unique solution to $LS(A, b)$ is $A^{-1} b$.

## Proof

By Theorem **Nonsingular matrices have unique solutions** we know already that $LS(A, b)$ has a unique solution for every choice of $b$. We need to show that the expression stated is indeed a solution (the solution). That is easy, just “plug it in” to the vector equation representation of the system (Theorem **Systems of linear equations as matrix multiplication**),

$$
A(A^{- 1}b) = (AA^{-1})b
\\;\\;\\;
\text{ Theorem Matrix Multiplication is Associative }
$$

$$
= I_n b
\\;\\;\\;
\text{ Definition Matrix Inverse }
$$

$$
= b
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Identity Matrix }
$$

Since $Ax = b$ is true when we substitute $A^{-1}b$ for $x$, $A^{-1}b$ is a (the!) solution to $LS(A, b)$.

## Reference

1. [linear.ups.edu - theorem SNCM, section Matrix Inverses and Nonsingular Matrices](http://linear.ups.edu/html/section-MINM.html)