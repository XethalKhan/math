# Elementary matrices do row operations

Suppose that $A$ is an $m \times n$ matrix, and $B$ is a matrix of the same size that is obtained from $A$ by a single **row operation**. Then there is an elementary matrix of size $m$ that will convert $A$ to $B$ via matrix multiplication on the left. More precisely,

1. If the row operation swaps rows $i$ and $j$, then $B = E_{i, j} A$.
2. If the row operation multiplies row $i$ by $\alpha$, then $B = E_{i}(\alpha) A$.
3. If the row operation multiplies row $i$ by $\alpha$ and adds the result to row $j$, then $B = E_{i, j}(\alpha) A$.

## Proof

In each of the three conclusions, performing the row operation on $A$ will create the matrix $B$ where only one or two rows will have changed. So we will establish the equality of the matrix entries row by row, first for the unchanged rows, then for the changed rows, showing in each case that the result of the matrix product is the same as the result of the row operation. Here we go.

### 1. If the row operation swaps rows $i$ and $j$, then $B = E_{i, j} A$.

Row $k$ of the product $E_{i, j} A$, where $k \neq i, k \neq j$, is unchanged from $A$,

$$
[E_{i, j} A]_{kl} = \sum^{n}_{p = 1} [E_{i, j}]_{kp} [A]_{pl}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [E_{i, j}]_{kk} [A]_{kl} + \sum^{n}_{p = 1 \text{ and } p \neq k} [E_{i, j}]_{kp} [A]_{pl}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= 1 [A]_{kl} + \sum^{n}_{p = 1 \text{ and } p \neq k} 0 [A]_{pl}
\\;\\;\\;
\text{ Definition Elementry Matrices }
$$

$$
= [A]_{kl}
$$

Row $i$ of the product $E_{i, j} A$ is row $j$ of $A$

$$
[E_{i, j} A]_{il} = \sum^{n}_{p = 1} [E_{i, j}]_{ip} [A]_{pl}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [E_{i, j}]_{ij} [A]_{jl} + \sum^{n}_{p = 1 \text{ and } p \neq i} [E_{i, j}]_{ip} [A]_{pl}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= 1 [A]_{jl} + \sum^{n}_{p = 1 \text{ and } p \neq i} 0 [A]_{pl}
\\;\\;\\;
\text{ Definition Elementry Matrices }
$$

$$
= [A]_{jl}
$$

So the matrix product $E_{i, j} A$ is the same as the row operation that swaps rows $i$ and $j$.

### 2. If the row operation multiplies row $i$ by $\alpha$, then $B = E_{i}(\alpha) A$.

Row $k$ of the product $E_{i}(\alpha) A$, where $k \neq i$, is unchanged from $A$,

$$
[E_{i}(\alpha) A]_{kl} = \sum^{n}_{p = 1} [E_{i}(\alpha)]_{kp} [A]_{pl}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [E_{i}(\alpha)]_{kk} [A]_{kl} + \sum^{n}_{p = 1 \text{ and } p \neq k} [E_{i}(\alpha)]_{kp} [A]_{pl}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= 1 [A]_{kl} + \sum^{n}_{p = 1 \text{ and } p \neq k} 0 [A]_{pl}
\\;\\;\\;
\text{ Definition Elementry Matrices }
$$

$$
= [A]_{kl}
$$

Row $i$ of the product $E_{i}(\alpha) A$ is $\alpha$ times row $i$ of $A$,

$$
[E_{i}(\alpha) A]_{il} = \sum^{n}_{p = 1} [E_{i}(\alpha)]_{ip} [A]_{pl}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [E_{i}(\alpha)]_{ii} [A]_{il} + \sum^{n}_{p = 1 \text{ and } p \neq i} [E_{i}(\alpha)]_{ip} [A]_{pl}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= \alpha [A]_{il} + \sum^{n}_{p = 1 \text{ and } p \neq i} 0 [A]_{pl}
\\;\\;\\;
\text{ Definition Elementry Matrices }
$$

$$
= \alpha [A]_{il}
$$

So the matrix product $E_{i}(\alpha) A$ is the same as the row operation that swaps multiplies row $i$ by $\alpha$.

### 3. If the row operation multiplies row $i$ by $\alpha$ and adds the result to row $j$, then $B = E_{i, j}(\alpha) A$.

Row $k$ of the product $E_{i, j}(\alpha) A$, where $k \neq j$, is unchanged from $A$,

$$
[E_{i, j}(\alpha) A]_{kl} = \sum^{n}_{p = 1} [E_{i, j}(\alpha)]_{kp} [A]_{pl}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [E_{i, j}(\alpha)]_{kk} [A]_{kl} + \sum^{n}_{p = 1 \text{ and } p \neq k} [E_{i, j}(\alpha)]_{kp} [A]_{pl}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= 1 [A]_{kl} + \sum^{n}_{p = 1 \text{ and } p \neq k} 0 [A]_{pl}
\\;\\;\\;
\text{ Definition Elementry Matrices }
$$

$$
= [A]_{kl}
$$

Row $j$ of the product $E_{i, j}(\alpha) A$, is $\alpha$ times row $i$ of $A$ and then added to row $j$ of $A$,

$$
[E_{i, j}(\alpha) A]_{jl} = \sum^{n}_{p = 1} [E_{i, j}(\alpha)]_{jp} [A]_{pl}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

$$
= [E_{i, j}(\alpha)]_{jj} [A]_{jl} + [E_{i, j}(\alpha)]_{ji} [A]_{il}  + \sum^{n}_{p = 1 \text{ and } p \neq i, j} [E_{i, j}(\alpha)]_{jp} [A]_{pl}
\\;\\;\\;
\text{ Commutativity of Addition }
$$

$$
= 1 [A]_{jl} + \alpha [A]_{il}  + \sum^{n}_{p = 1 \text{ and } p \neq i, j} 0 [A]_{pl}
\\;\\;\\;
\text{ Definition Elementry Matrices }
$$

$$
= [A]_{jl} + \alpha [A]_{il}
$$

So the matrix product $E_{i, j}(\alpha) A$ is the same as the row operation that multiplies row $i$ by $\alpha$ and adds the result to row $j$.

## Reference

1. [linear.ups.edu - theorem EMDRO, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)