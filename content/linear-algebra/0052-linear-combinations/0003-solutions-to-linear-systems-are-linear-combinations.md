# Solutions to Linear Systems are Linear Combinations

Denote the columns of the $m \times n$ matrix $A$ as the vectors $A_1, A_2, A_3, \dots , A_n$. Then $x \in \mathbb{C}^n$ is a solution to the linear system of equations $LS(A, b)$ if and only if $b$ equals the linear combination of the columns of $A$ formed with the entries of $x$,

$$
[x]_1 A_1 + [x]_2 A_2 + [x]_3 A_3 + \dots + [x]_n A_n = b
$$

## Proof

The proof of this theorem is as much about a change in notation as it is about making logical deductions. Write the system of equations $LS(A, b)$ as

$$
\displaylines{
a_{11} x_1 + a_{12} x_2 + a_{13} x_3 + . . . + a_{1n} x_n = b_1\\
a_{21} x_1 + a_{22} x_2 + a_{23} x_3 + . . . + a_{2n} x_n = b_2\\
........................................\\
a_{m1} x_1 + a_{m2} x_2 + a_{m3} x_3 + . . . + a_{mn} x_n = b_m
}
$$

Notice then that the entry of the coefficient matrix $A$ in row $i$ and column $j$ has two names: $a_{ij}$ as the coefficient of $x_j$ in equation $i$ of the system and $[A_j]_i$ as the $i$-th entry of the column vector in column $j$ of the coefficient matrix $A$. Likewise,entry $i$ of $b$ has two names: $b_i$ from the linear system and $[b]_i$ as an entry of a vector. Our theorem is an equivalence so we need to prove both “directions.”

$$
p: x \in \mathbb{C}^n \text{ is a solution to the linear system of equations } $LS(A, b)
$$

$$
q: b \text{ equals the linear combination of the columns of } A \text{ formed with the entries of } x
$$

### $p \leftarrow q$

Suppose we have the vector equality between $b$ and the linear combination of the columns of $A$. Then for $1 \leq i \leq m$,

$$
b_i = [b]_i
\\;\\;\\;
\text{ Definition - Column Vector }
$$

$$
= [[x]_1 A_1 + [x]_2 A_2 + [x]_3 A_3 + \dots + [x]_n A_n]_i
\\;\\;\\;
\text{ Hypothesis } q
$$

$$
= [[x]_1 A_1]_i + [[x]_2 A_2]_i + [[x]_3 A_3]_i + \dots + [[x]_n A_n]_i
\\;\\;\\;
\text{ Definition - Column Vector Addition }
$$

$$
= [x]_1 [A_1]_i + [x]_2 [A_2]_i + [x]_3 [A_3]_i + \dots + [x]_n [A_n]_i
\\;\\;\\;
\text{ Definition - Column Vector Scalar Multiplication }
$$

$$
= [x]_1 a_{i1} + [x]_2 a_{i2} + [x]_3 a_{i3} + \dots + [x]_n a_{in}
\\;\\;\\;
\text{ Definition - Column Vector }
$$

$$
= a_{i1} [x]_1 + a_{i2} [x]_2 + a_{i3} [x]_3 + \dots + a_{in} [x]_n
\\;\\;\\;
\text{ Property of Complex Numbers - Commutativity of Multiplication }
$$

This says that the entries of $x$ form a solution to equation $i$ of $LS(A, b)$ for all $1 \leq i \leq m$, in other words, $x$ is a solution to $LS(A, b)$.

### $p \rightarrow q$

Suppose now that $x$ is a solution to the linear system $LS(A, b)$. Then for all $1 \leq i \leq m$,

$$
[b]_i = b_i
\\;\\;\\;
\text{ Definition - Column Vector }
$$

$$
= a_{i1} [x]_1 + a_{i2} [x]_2 + a_{i3} [x]_3 + \dots + a_{in} [x]_n
\\;\\;\\;
\text{ Hypothesis } p
$$

$$
= [x]_1 a_{i1} + [x]_2 a_{i2} + [x]_3 a_{i3} + \dots + [x]_n a_{in}
\\;\\;\\;
\text{ Property of Complex Numbers - Commutativity of Multiplication }
$$

$$
= [x]_1 [A_1]_i + [x]_2 [A_2]_i + [x]_3 [A_3]_i + \dots + [x]_n [A_n]_i
\\;\\;\\;
\text{ Definition - Column Vector }
$$

$$
= [[x]_1 A_1]_i + [[x]_2 A_2]_i + [[x]_3 A_3]_i + \dots + [[x]_n A_n]_i
\\;\\;\\;
\text{ Definition - Column Vector Scalar Multiplication }
$$

$$
= [[x]_1 A_1 + [x]_2 A_2 + [x]_3 A_3 + \dots + [x]_n A_n]_i
\\;\\;\\;
\text{ Definition - Column Vector Scalar Addition }
$$

So the entries of the vector $b$, and the entries of the vector that is the linear combination of the columns of $A$, agree for all $1 \leq i \leq m$. By Definition Column Vector Equality we see that the two vectors are equal, as desired.

## Note

In other words, this theorem tells us that solutions to systems of equations are linear combinations of the $n$ column vectors of the coefficient matrix ($A_j$) which yield the constant vector $b$. Or said another way, a solution to a system of equations $LS(A, b)$ is an answer to the question "How can I form the vector $b$ as a linear combination of the columns of $A$ ?"

## Reference

1. [linear.ups.edu - theorem SLSLC, section Subspaces](http://linear.ups.edu/html/section-LC.html)