# One-sided inverse is sufficient

Suppose $A$ and $B$ are square matrices of size $n$ such that $AB = I_n$. Then $BA = I_n$.

## Proof

The matrix $I_n$ is **nonsingular** (since it row-reduces easily to $I_n$, Theorem **Nonsingular matrices row reduce to identity matrices**). So $A$ and $B$ are nonsingular by Theorem **Nonsingular product has nonsingular terms**, so in particular $B$ is nonsingular. We can therefore apply Theorem **Computing the Inverse of a Nonsingular Matrix** to assert the existence of a matrix $C$ so that $BC = I_n$. $B$ is nonsingular, so there must be a “right-inverse” for $B$, and we are calling it $C$.

Now

$$
BA = (BA) I_n
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Identity Matrix }
$$

$$
= (BA)(BC)
\\;\\;\\;
\text{ Theorem Computing the Inverse of a Nonsingular Matrix }
$$

$$
= B(AB)C
\\;\\;\\;
\text{ Theorem Matrix Multiplication is Associative }
$$

$$
= B I_n C
\\;\\;\\;
\text{ Hypothesis }
$$

$$
= BC
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Identity Matrix }
$$

$$
= I_n
\\;\\;\\;
\text{ Theorem Computing the Inverse of a Nonsingular Matrix }
$$

which is the desired conclusion.

## Note

This theorem tells us that if $A$ is nonsingular, then the matrix $B$ guaranteed by Theorem Computing the Inverse of a Nonsingular Matrix will be both a “right-inverse” and a “left-inverse” for $A$, so $A$ is invertible and $A^{-1} = B$.

## Reference

1. [linear.ups.edu - theorem OSIS, section Matrix Inverses and Nonsingular Matrices](http://linear.ups.edu/html/section-MINM.html)