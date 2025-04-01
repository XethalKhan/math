# Computing the Inverse of a Nonsingular Matrix

Suppose $A$ is a **nonsingular square matrix** of size $n$. Create the $n \times 2 n$ matrix $M$ by placing the $n \times n$ **identity matrix** $I_n$ to the right of the matrix $A$. Let $N$ be a matrix that is row-equivalent to $M$ and in **reduced row-echelon form**. Finally, let $J$ be the matrix formed from the final $n$ columns of $N$. Then $A J = I_n$.

## Proof

$A$ is nonsingular, so by **Theorem Nonsingular matrices row reduce to identity matrices** there is a sequence of row operations that will convert $A$ into $I_n$. It is this same sequence of row operations that will convert $M$ into $N$, since having the identity matrix in the first $n$ columns of $N$ is sufficient to guarantee that $N$ is in reduced row-echelon form.

If we consider the systems of linear equations, $LS(A, e_i), 1 \leq i \leq n$, we see that the aforementioned sequence of row operations will also bring the augmented matrix of each of these systems into reduced row-echelon form. Furthermore, the unique solution to $LS(A, e_i)$ appears in column $n + 1$ of the row-reduced augmented matrix of the system and is identical to column $n + i$ of $N$. Let $N_1, N_2, N_3, \dots , N_{2 n}$ denote the columns of $N$. So we find,

$$
A J = A [N_{n + 1} | N_{n + 2} | N_{n + 3} | \dots | N_{n + n}]
$$

$$
= [A N_{n + 1} | A N_{n + 2} | A N_{n + 3} | \dots | A N_{n + n}]
\\;\\;\\;
\text{ Definition Matrix Multiplication}
$$

$$
= [ e_1 | e_2 | e_3 | \dots | e_n ]
$$

$$
= I_n
\\;\\;\\;
\text{ Definition Identity Matrix }
$$

as desired.

## Note

We have to be just a bit careful here about both what this theorem says and what it does not say. If $A$ is a nonsingular matrix, then we are guaranteed a matrix $B$ such that $A B = I_n$, and the proof gives us a process for constructing $B$. However, the definition of the inverse of a matrix requires that $BA = I_n$ also. So at this juncture we must compute the matrix product in the “opposite” order before we claim $B$ as the inverse of $A$. However, we will soon see that this is always the case, in Theorem One-Sided Inverse is Sufficient.

## Example

$$
B =
\begin{bmatrix}
    - 7 & - 6 & - 12\\
    5 & 5 & 7\\
    1 & 0 & 4
\end{bmatrix}
$$

Exercising Theorem we set

$$
M =
\begin{bmatrix}
    - 7 & - 6 & - 12 & 1 & 0 & 0\\
    5 & 5 & 7 & 0 & 1 & 0\\
    1 & 0 & 4 & 0 & 0 & 1
\end{bmatrix}
$$

which row-reduces to

$$
N =
\begin{bmatrix}
    1 & 0 & 0 & - 10 & - 12 & - 9\\
    0 & 1 & 0 & \frac{13}{2} & 8 & \frac{11}{2}\\
    0 & 0 & 1 & \frac{5}{2} & 3 & \frac{5}{2}
\end{bmatrix}
$$

So

$$
B^{- 1} =
\begin{bmatrix}
    - 10 & - 12 & - 9\\
    \frac{13}{2} & 8 & \frac{11}{2}\\
    \frac{5}{2} & 3 & \frac{5}{2}
\end{bmatrix}
$$

once we check that $B^{- 1} B = I_3$ (the product in the opposite order is a consequence of the theorem).

## Reference

1. [linear.ups.edu - theorem CINM, section Matrix Inverses and Systems of Linear Equations](http://linear.ups.edu/html/section-MISLE.html)