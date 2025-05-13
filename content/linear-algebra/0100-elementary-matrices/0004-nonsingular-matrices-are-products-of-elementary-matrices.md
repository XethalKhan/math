# Nonsingular matrices are products of elementary matrices

Suppose that $A$ is a **nonsingular matrix**. Then there exists elementary matrices $E_1, E_2, E_3, \dots , E_t$ so that $A = E_1 E_2 E_3 \dots E_t$.

## Proof

Since $A$ is nonsingular, it is row-equivalent to the identity matrix by Theorem **Nonsingular matrices row reduce to identity matrices**, so there is a sequence of $t$ row operations that converts $I$ to $A$. For each of these row operations, form the associated elementary matrix from Theorem **Elementary matrices do row operations** and denote these matrices by $E_1, E_2, E_3, \dots , E_t$. Applying the first row operation to $I$ yields the matrix $E_1 I$. The second row operation yields $E_2(E_1 I)$, and the third row operation creates $E_3 E_2 E_1 I$. The result of the full sequence of $t$ row operations will yield $A$, so

$$
A = E_t \dots E_3 E_2 E_1 I = E_t \dots E_3 E_2 E_1
$$

Other than the cosmetic matter of re-indexing these elementary matrices in the opposite order, this is the desired result.

## Reference

1. [linear.ups.edu - theorem NMPEM, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)