# Nonsingular matrices and unique solutions

Suppose that $A$ is a square matrix. $A$ is a **nonsingular matrix** if and only if the system $LS(A, b)$ has a **unique solution** for every choice of the constant vector $b$.

## Proof

$$
p: A \text{ is nonsingular matrix }
$$

$$
q: \text{ system } LS(A, b) \text{ has a unique solution for every choice of the constant vector } b
$$

### $p \leftarrow q$

The hypothesis for this half of the proof is that the system $LS(A, b)$ has a unique solution for every choice of the constant vector $b$. We will make a very specific choice for $b: b = 0$. Then we know that the system $LS(A, 0)$ has a unique solution. But this is precisely the definition of what it means for $A$ to be nonsingular by definition. That almost seems too easy! Notice that we have not used the full power of our hypothesis, but there is nothing that says we must use a hypothesis to its fullest.

### $p \rightarrow q$

We assume that $A$ is nonsingular of size $n \times n$, so we know there is a sequence of row operations that will convert $A$ into the identity matrix $I_n$ (Theorem Nonsingular matrices row reduce to identity matrices). Form the augmented matrix $A' = [A | b]$ and apply this same sequence of row operations to $A'$. The result will be the matrix $B' = [I_n | c]$, which is in reduced row-echelon form with $r = n$. Then the augmented matrix $B'$ represents the (extremely simple) system of equations $x_i = [c]_i, 1 \leq i \leq n$. The vector $c$ is clearly a solution, so the system is consistent. With a consistent system, we use [**Theorem Solution for consistent system can be build using free variables**](./../0002-types-of-solution-sets/0005-solution-for-consistent-system-can-be-build-using-free-variables.md) to count free variables. We find that there are $n - r = n - n = 0$ free variables, and so we therefore know that the solution is unique.

## Note

This theorem helps to explain part of our interest in nonsingular matrices. If a matrix is nonsingular, then no matter what vector of constants we pair it with, using the matrix as the coefficient matrix will always yield a linear system of equations with a solution, and the solution is unique. To determine if a matrix has this property (nonsingularity) it is enough to just solve one linear system, the homogeneous system with the matrix as coefficient matrix and the zero vector as the vector of constants.

## Reference

1. [linear.ups.edu - theorem NMUS, section Nonsingular matrices](http://linear.ups.edu/html/section-NM.html)