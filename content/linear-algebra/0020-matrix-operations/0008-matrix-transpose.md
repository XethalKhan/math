# Transpose of a Matrix

## Informal definition

Informally, to transpose a matrix is to build a new matrix by swapping its rows and columns.

## Formal definition

Given an $m \times n$ matrix $A$, its transpose is the $n \times m$ matrix $A^t$ given by

$$
[A^t]_{ij} = [A]_{ji}, 1 \leq i \leq n, 1 \leq j \leq m
$$

## Example

$$
D =
\begin{bmatrix}
    3 & 7 & 2 & -3\\
    -1 & 4 & 2 & 8\\
    0 & 3 & -2 & 5
\end{bmatrix}
$$

$$
D^t =
\begin{bmatrix}
    3 & -1 & 0\\
    7 & 4 & 3\\
    2 & 2 & -2\\
    -3 & 8 & 5
\end{bmatrix}
$$

## Reference

1. [linear.ups.edu - definition TM, section Matrix operations](http://linear.ups.edu/html/section-MO.html)