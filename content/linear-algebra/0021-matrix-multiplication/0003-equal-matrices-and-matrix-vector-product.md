# Equal matrices and matrix-vector product

Suppose that $A$ and $B$ are $m \times n$ matrices such that $A x = B x$ for every $x \in \mathbb{C}^{n}$. Then $A = B$.

## Proof

We are assuming $A x = B x$ for all $x \in \mathbb{C}^{n}$, so we can employ this equality for any choice of the vector $x$. However, we will limit our use of this equality to the **standard unit vectors**, $e_j, 1 \leq j \leq n$. For all $1 \leq j \leq n, 1 \leq i \leq m$,

$$
[A]_{ij} = 0 [A]_{i 1} + \dots + 0 [A]_{i, j - 1} + 1 [A]_{ij} + 0 [A]_{i, j + 1} + \dots + 0 [A]_{i n}
$$

$$
= [e_j]_1 [A]_{i 1} + [e_j]_2 [A]_{i 2} + [e_j]_3 [A]_{i 3} + \dots + [e_j]_n [A]_{i n}
\\;\\;\\;
\text{ Commutativity of Multiplication, Complex Numbers }
$$

$$
= [A]_{i 1} [e_j]_1 + [A]_{i 2} [e_j]_2 + [A]_{i 3} [e_j]_3 + \dots + [A]_{i n} [e_j]_n
$$

$$
= [A e_j]_i
\\;\\;\\;
\text{ Definition Matrix-Vector product }
$$

$$
= [B e_j]_i
\\;\\;\\;
\text{ Hypothesis }
$$

$$
= [B]_{i 1} [e_j]_1 + [B]_{i 2} [e_j]_2 + [B]_{i 3} [e_j]_3 + \dots + [B]_{i n} [e_j]_n
\\;\\;\\;
\text{ Definition Matrix-Vector product }
$$

$$
= [e_j]_1 [B]_{i 1} + [e_j]_2 [B]_{i 2} + [e_j]_3 [B]_{i 3} + \dots + [e_j]_n [B]_{i n}
\\;\\;\\;
\text{ Commutativity of Multiplication, Complex Numbers }
$$

$$
= [B]_{i 1} + \dots + 0 [B]_{i, j - 1} + 1 [B]_{ij} + 0 [B]_{i, j + 1} + \dots + 0 [B]_{i n}
$$

$$
= [B]_{i j}
$$

So by Definition Matrix Equality the matrices $A$ and $B$ are equal, as desired.

## Reference

1. [linear.ups.edu - theorem EMMVP, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)