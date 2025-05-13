# Matrix multiplication and Zero matrix

Suppose $A$ is an $m \times n$ matrix. Then

$$
A 0_{n \times p} = 0_{m \times p}
$$

$$
0_{p \times m} A = 0_{p \times n}
$$

## Proof

We will prove $A 0_{n \times p} = 0_{m \times p}$. Entry-by-entry, for $1 \leq i \leq m, 1 \leq j \leq p$,

$$
[A 0_{n \times p}]_{ij} = \sum^{n}_{k = 1} [A]_{ik} [0_{n \times p}]_{kj}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= \sum^{n}_{k = 1} [A]_{ik} 0
\\;\\;\\;
\text{ definition Zero Matrix }
$$

$$
= \sum^{n}_{k = 1} 0
$$

$$
= 0
$$

$$
= [0_{m \times p}]_{ij}
\\;\\;\\;
\text{ definition Zero Matrix }
$$

## Reference

1. [linear.ups.edu - theorem MMZM, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)