# Determinant Expansion about Columns

Suppose that $A$ is a **square matrix** of size $n$. Then for $1 \leq j \leq n$

$$
det(A) = (- 1)^{1 + j} [A]_{1j} det(A(1 | j)) + (- 1)^{2 + j} [A]_{2j} det(A(2 | j)) + (- 1)^{3 + j} [A]_{3j} det(A(3 | j)) + \dots + 
(- 1)^{n + j} [A]_{nj} det(A(n | j))
$$

which is known as expansion about column $j$.

## Proof

$$
det(A) = det(A^t)
\\;\\;\\;
\text{ Theorem Determinant of a Transpose }
$$

$$
= \sum^{n}_{i = 1} (- 1)^{j + i} [A^t]_{ji} det(A^t(j | i))
\\;\\;\\;
\text{ Theorem Determinant expansion about rows }
$$

$$
= \sum^{n}_{i = 1} (- 1)^{j + i} [A^t]_{ji} det((A(i | j))^t)
\\;\\;\\;
\text{ Definition Transpose of a Matrix }
$$

$$
= \sum^{n}_{i = 1} (- 1)^{j + i} [A^t]_{ji} det(A(i | j))
\\;\\;\\;
\text{ Theorem Determinant of a Transpose }
$$

$$
= \sum^{n}_{i = 1} (- 1)^{j + i} [A]_{ij} det(A(i | j))
\\;\\;\\;
\text{ Definition Transpose of a Matrix }
$$

$$
= \sum^{n}_{i = 1} (- 1)^{i + j} [A]_{ij} det(A(i | j))
\\;\\;\\;
\text{ Commutativity of Addition }
$$

## Examples TODO TCSD

## Reference

1. [linear.ups.edu - theorem DEC, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)