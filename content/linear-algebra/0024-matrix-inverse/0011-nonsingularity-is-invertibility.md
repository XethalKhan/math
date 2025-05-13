# Nonsingularity is invertibility

Suppose that $A$ is a **square matrix**. Then $A$ is **nonsingular** if and only if $A$ is invertible.

## Proof

$$
p: A \text{ is nonsingular }
$$

$$
q: A \text{ is invertible }
$$

### $p \leftarrow q$

Since $A$ is **invertible**, we can write $I_n = AA^{-1}$ (Definition of **Matrix Inverse**). Notice that $I_n$ is nonsingular (Theorem **Nonsingular matrices row reduce to identity matrices**) so Theorem **Nonsingular product has nonsingular terms** implies that $A$ (and $A^{-1}$) is **nonsingular**.

### $p \rightarrow q$

Suppose now that $A$ is **nonsingular**. By Theorem **Computing the Inverse of a Nonsingular Matrix** we find $B$ so that $AB = I_n$. Then Theorem **One-sided inverse is sufficient** tells us that $BA = I_n$. So $B$ is $A$'s inverse, and by construction, $A$ is invertible.

## Reference

1. [linear.ups.edu - theorem NI, section Matrix Inverses and Nonsingular Matrices](http://linear.ups.edu/html/section-MINM.html)