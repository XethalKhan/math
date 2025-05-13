# Nonsingular matrices row reduce to identity matrices

Suppose that $A$ is a **square matrix** and $B$ is a row-equivalent matrix in **reduced row-echelon form**. Then $A$ is **nonsingular** if and only if $B$ is the **identity matrix**.

## Proof

$$
p: A \text{ is nonsingular }
$$

$$
q: B \text{ is identity matrix }
$$

### $p \leftarrow q$

Suppose $B$ is the identity matrix. When the augmented matrix $[A | 0]$ is row-reduced, the result is $[B | 0] = [I_n | 0]$. The number of nonzero rows is equal to the number of variables in the linear system of equations $LS(A, 0)$, so $n = r$ and [**Theorem Solution for consistent system can be build using free variables**](./../0002-types-of-solution-sets/0005-solution-for-consistent-system-can-be-build-using-free-variables.md) gives $n - r = 0$ free variables. Thus, the homogeneous system $LS(A, 0)$ has just one solution, which must be the trivial solution. This is exactly the definition of a nonsingular matrix.

### $p \rightarrow q$

If $A$ is nonsingular, then the homogeneous system $LS(A, 0)$ has a unique solution, and has no free variables in the description of the solution set. The homogeneous system is consistent per [**Theorem Homogeneous Systems are Consistent**](./../0003-homogeneous-system-of-equations/0002-homogeneous-systems-are-consistent.md) so [**Theorem Solution for consistent system can be build using free variables**](./../0002-types-of-solution-sets/0005-solution-for-consistent-system-can-be-build-using-free-variables.md) applies and tells us there are $n - r$ free variables. Thus, $n - r = 0$, and so $n = r$. So $B$ has $n$ pivot columns among its total of $n$ columns. This is enough to force $B$ to be the $n \times n$ identity matrix $I_n$.

## Note

Notice that since this theorem is an equivalence it will always allow us to determine if a matrix is either nonsingular or singular.

## Examples

### Singular matrix

$$
A =
\begin{bmatrix}
    1 & -1 & 2\\
    2 & 1 & 1\\
    1 & 1 & 0
\end{bmatrix}
\xrightarrow{RRFU}
\begin{bmatrix}
    1 & 0 & 1\\
    0 & 1 & -1\\
    0 & 0 & 0
\end{bmatrix}
= B
$$

Since $B$ is not the $3 \times 3$ identity matrix, this theorem tells us that $A$ is a singular matrix.

### Nonsingular matrix

$$
A =
\begin{bmatrix}
    -7 & -6 & -12\\
    5 & 5 & 7\\
    1 & 0 & 4
\end{bmatrix}
\xrightarrow{RRFU}
\begin{bmatrix}
    1 & 0 & 0\\
    0 & 1 & 0\\
    0 & 0 & 1
\end{bmatrix}
= B
$$

Since $B$ is an $3 \times 3$ identity matrix, this theorem tells us that $A$ is a singular matrix.

## Reference

1. [linear.ups.edu - theorem NMRRI, section Nonsingular matrices](http://linear.ups.edu/html/section-NM.html)