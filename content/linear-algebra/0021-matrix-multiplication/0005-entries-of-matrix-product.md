# Entries of matrix product

Suppose $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix. Then for $1 \leq i \leq m, 1 \leq j \leq p$, the individual entries of $AB$ are given by

$$
[AB]_{ij} = [A]_{i1} [B]_{1j} + [A]_{i2} [B]_{2j} + [A]_{i3} [B]_{3j} + \dots + [A]_{in} [B]_{nj} = \sum^{n}_{k = 1} [A]_{ik} [B]_{kj}
$$

## Proof

Let the vectors $A_1, A_2, A_3, \dots , A_n$ denote the columns of $A$ and let the vectors $B_1, B_2, B_3, \dots , B_p$ denote the columns of $B$. Then for $1 \leq i \leq m, 1 \leq j \leq p$,

$$
[AB]_{ij} = [AB_j]_i
\\;\\;\\;
\text{ Definition Matrix Multiplication}
$$

$$
= [[B_j]_1 A_1 + [B_j]_2 A_2 + \dots + [B_j]_n A_n]_i
\\;\\;\\;
\text{ definition Matrix-Vector Product}
$$

$$
= [[B_j]_1 A_1]_i + [[B_j]_2 A_2]_i + \dots + [[B_j]_n A_n]_i
\\;\\;\\;
\text{ definition Column Vector Addition}
$$

$$
= [B_j]_1 [A_1]_i + [B_j]_2 [A_2]_i + \dots + [B_j]_n [A_n]_i
\\;\\;\\;
\text{ definition Column Vector Scalar Multiplication}
$$

$$
= [B]_{1j} [A]_{i1} + [B]_{2j} [A]_{i2} + \dots + [B]_{nj} [A]_{in}
\\;\\;\\;
\text{ definition Matrix }
$$

$$
= [A]_{i1} [B]_{1j} + [A]_{i2} [B]_{2j} + \dots + [A]_{in} [B]_{nj}
\\;\\;\\;
\text{ definition Commutativity of Multiplication }
$$

$$
= \sum^{n}_{k = 1} [A]_{ik} [B]_{kj}
$$

## Example

$$
A =
\begin{bmatrix}
    1 & 2 & - 1 & 4 & 6\\
    0 & - 4 & 1 & 2 & 3\\
    - 5 & 1 & 2 & - 3 & 4
\end{bmatrix}
\\;\\;\\;
B = 
\begin{bmatrix}
    1 & 6 & 2 & 1\\
    - 1 & 4 & 3 & 2\\
    1 & 1 & 2 & 3\\
    6 & 4 & - 1 & 2\\
    1 & - 2 & 3 & 0
\end{bmatrix}
$$

$$
[AB]_{23} = [A]_{21} [B]_{13} + [A]_{22} [B]_{23} + [A]_{23} [B]_{33} + [A]_{24} [B]_{43} + [A]_{25} [B]_{53}
$$

$$
= (0)(2) + (- 4)(3) + (1)(2) + (2)(- 1) + (3)(3) = - 3
$$

$$
[AB]_{31} = [A]_{31} [B]_{11} + [A]_{32} [B]_{21} + [A]_{33} [B]_{31} + [A]_{34} [B]_{41} + [A]_{35} [B]_{51}
$$

$$
= (- 5)(1) + (1)(- 1) + (2)(1) + (- 3)(6) + (4)(1) = - 18
$$

## Reference

1. [linear.ups.edu - theorem EMP, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)