# Matrix multiplication and identity matrix

Suppose $A$ is an $m \times n$ matrix. Then

$$
A \\; I_n = A
$$

$$
I_m \\; A = A
$$

## Proof

We will prove $A \\; I_n = A$. Entry-by-entry, For $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[A \\; I_n]_{ij} = \sum^{n}_{k = 1} [A]_{ik} [I_n]_{kj}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [A]_{ij} [I_n]_{jj} + \sum^{n}_{k = 1 \text{ and } k \neq j} [A]_{ik} [I_n]_{kj}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= [A]_{ij} (1) + \sum^{n}_{k = 1 \text{ and } k \neq j} [A]_{ik} (0)
\\;\\;\\;
\text{ Definition Identity Matrix }
$$

$$
= [A]_{ij} + \sum^{n}_{k = 1 \text{ and } k \neq j} 0
$$

$$
= [A]_{ij}
$$

So the matrices $A$ and $AI_n$ are equal, entry-by-entry, and by the definition of **Matrix Equality** we can say they are equal matrices.

## Note

It is this theorem that gives the identity matrix its name. It is a matrix that behaves with matrix multiplication like the scalar 1 does with scalar multiplication. To multiply by the identity matrix is to have no effect on the other matrix.

## Reference

1. [linear.ups.edu - theorem MMIM, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)