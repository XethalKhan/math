# Column Spaces and Consistent Systems

Suppose $A$ is an $m \times n$ matrix and $b$ is a vector of size $m$. Then $b \in \mathcal{C}(A)$ if and only if $LS(A, b)$ is consistent.

## Proof

$$
p: b \in \mathcal{C}(A)
$$

$$
q: LS(A, b) \text{ is consistent }
$$

### $p \rightarrow q$

Suppose $b \in \mathcal{C}(A)$. Then we can write $b$ as some linear combination of the columns of $A$. By Theorem **Solutions to Linear Systems are Linear Combinations** we can use the scalars from this linear combination to form a solution to $LS(A, b)$, so this system is consistent.

### $p \leftarrow q$

If $LS(A, b)$ is consistent, there is a solution that may be used with Theorem **Solutions to Linear Systems are Linear Combinations** to write $b$ as a linear combination of the columns of $A$. This qualifies $b$ for membership in $\mathcal{C}(A)$.

## Note

This theorem tells us that asking if the system $LS(A, b)$ is consistent is exactly the same question as asking if $b$ is in the **column space** of $A$. Or equivalently, it tells us that the column space of the matrix $A$ is precisely those vectors of constants, $b$, that can be paired with $A$ to create a system of linear equations $LS(A, b)$ that is consistent.

We can form the chain of equivalences

$$
b \in \mathcal{C}(A) \leftrightarrow LS(A, b) \text{ is consistent } \leftrightarrow Ax = b \text{ for some } x
$$

Thus, an alternative (and popular) definition of the column space of an $m \times n$ matrix $A$ is

$$
\mathcal{C}(A) = { y \in \mathbb{C}^m | y = Ax \text{ for some } x \in \mathbb{C}^n } = { Ax | x \in \mathbb{C}^n } \subseteq \mathbb{C}^m
$$

We recognize this as saying create all the matrix vector products possible with the matrix $A$ by letting $x$ range over all of the possibilities. By Definition of **Matrix Vector Product** we see that this means take all possible linear combinations of the columns of $A$ - precisely the definition of the column space (see definition **Column space of a Matrix**) we have chosen.

## Example TODO

## Reference

1. [linear.ups.edu - theorem CSCS, section Column and Row Spaces](http://linear.ups.edu/html/section-CRS.html)