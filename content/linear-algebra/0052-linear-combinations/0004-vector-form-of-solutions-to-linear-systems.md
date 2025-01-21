# Vector Form of Solutions to Linear Systems

Suppose that $[A | b]$ is the **augmented matrix** for a consistent linear system $LS(A, b)$ of $m$ equations in $n$ variables. Let $B$ be a row-equivalent $m \times (n + 1)$ matrix in **reduced row-echelon form**. Suppose that $B$ has $r$ pivot columns, with indices $D = \\{d_1, d_2, d_3, \dots , d_r \\}$, while the $n - r$ non-pivot columns have indices in $F = \\{ f_1, f_2, f_3, \dots , f_{n - r}, n + 1 \\}$. Define vectors $c, u_j, 1 \leq j \leq n - r$ of size $n$ by

$$
[c]_i =
\begin{cases}
    0               & \text{if } i \in F\\
    [B]_{k, n+ 1}   & \text{if } i \in D, i = d_k
\end{cases}
$$

$$
[u_j]_i =
\begin{cases}
    1               & \text{if } i \in F, i = f_j\\
    0               & \text{if } i \in F, i \neq f_j\\
    -[B]_{k, f_j}   & \text{if } i \in D, i = d_k\\
\end{cases}
$$

Then the set of solutions to the system of equations $LS(A, b)$ is

$$
S = \\{c + \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_{n - r} u_{n - r} | \alpha_1, \alpha_2, \alpha_3, \dots , \alpha_{n - r} \in \mathbb{C} \\}
$$

## Proof

First, $LS(A, b)$ is equivalent to the linear system of equations that has the matrix $B$ as its **augmented matrix** (Theorem **Row-equivalent matrices represent equivalent systems**), so we need only show that $S$ is the solution set for the system with $B$ as its augmented matrix. The conclusion of this theorem is that the solution set is equal to the set $S$, so we will apply Definition **Set Equality**.

We begin by showing that every element of $S$ is indeed a solution to the system. Let $\alpha_1, \alpha_2, \alpha_3, \dots , \alpha_{n - r}$ be one choice of the scalars used to describe elements of $S$. So an arbitrary element of $S$, which we will consider as a proposed solution is

$$
x = c + \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_{n - r} u_{n - r}
$$

When $r + 1 \leq l \leq m$, row $l$ of the matrix $B$ is a zero row, so the equation represented by that row is always true, no matter which solution vector we propose. So concentrate on rows representing equations $1 \leq l \leq r$. We evaluate equation $l$ of the system represented by $B$ with the proposed solution vector $x$ and refer to the value of the left-hand side of the equation as $\beta_l$,

$$
\beta_l = [B]_{l1} [x]_1 + [B]_{l2} [x]_2 + [B]_{l3} [x]_3 + \dots + [B]_{ln} [x]_n
$$

Since $[B]_{l d_{i}} = 0$ for all $1 \leq i \leq r$, except that $[B]_{l d_{l}} = 1$, we see that $\beta_l$ simplifies to

$$
\beta_{l} = [x]_{d_{l}} + [B]_{l f_1} [x]_{f_1} + [B]_{l f_2} [x]_{f_2} + [B]_{l f_3} [x]_{f_3} + \dots + [B]_{l f_{n - r}} [x]_{f_{n - r}}
$$

Notice that for $1 \leq i \leq n - r$

$$
[x]_{f_i} = [c]_{f_i} + \alpha_1 [u_1]_{f_i} + \alpha_2 [u_2]_{f_i} + \dots + \alpha_i [u_i]_{f_i} + \dots + \alpha_{n - r} [u_{n - r}]_{f_i}
$$

$$
= 0 + \alpha_1 (0) + \alpha_2 (0) + \dots + \alpha_i (1) + \dots + \alpha_{n - r} (0)
$$

$$
= \alpha_i
$$

So $\beta_l$ simplifies further, and we expand the first term

$$
\beta_l = [x]_{d_l} + [B]_{l f_1} \alpha_1 + [B]_{l f_2} \alpha_2 + [B]_{l f_3} \alpha_3 + \dots + [B]_{l f_{n - r}} \alpha_{n - r}
$$

$$
= [c + \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_{n - r} u_{n - r}]_{d_l} + [B]_{l f_1} \alpha_1 + [B]_{l f_2} \alpha_2 + [B]_{l f_3} \alpha_3 + \dots + [B]_{l f_{n - r}} \alpha_{n - r}
$$

$$
= [c]_{d_l} + \alpha_1 [u_1]_{d_l} + \alpha_2 [u_2]_{d_l} + \alpha_3 [u_3]_{d_l} + \dots + \alpha_{n - r} [u_{n - r}]_{d_l} + [B]_{l f_1} \alpha_1 + [B]_{l f_2} \alpha_2 + [B]_{l f_3} \alpha_3 + \dots + [B]_{l f_{n - r}} \alpha_{n - r}
$$

$$
= [B]_{l, n + 1} + \alpha_1 (- [B]_{l f_1}) + \alpha_2 (- [B]_{l f_2}) + \alpha_3 (- [B]_{l f_3}) + \dots + \alpha_{n - r} (- [B]_{l f_{n - r}}) + [B]_{l f_1} \alpha_1 + [B]_{l f_2} \alpha_2 + [B]_{l f_3} \alpha_3 + \dots + [B]_{l f_{n - r}} \alpha_{n - r}
$$

$$
= [B]_{l, n + 1}
$$

So $β_{l}$ began as the left-hand side of equation $l$ of the system represented by $B$ and we now know it equals $[B]_{l, n + 1}$, the constant term for equation $l$ of this system. So the arbitrarily chosen vector from $S$ makes every equation of the system true, and therefore is a solution to the system. So all the elements of $S$ are solutions to the system.

For the second half of the proof, assume that $x$ is a solution vector for the system having $B$ as its augmented matrix. For convenience and clarity, denote the entries of $x$ by $x_i$, in other words, $x_i = [x]_i$. We desire to show that this solution vector is also an element of the set $S$. Begin with the observation that a solution vector's entries makes equation $l$ of the system true for all $1 \leq l \leq m$,

$$
[B]_{l, 1} x_1 + [B]_{l, 2} x_2 + [B]_{l, 3} x_3 + \dots + [B]_{l, n} x_n = [B]_{l, n + 1}
$$

When $l \leq r$, the pivot columns of $B$ have zero entries in row $l$ with the exception of column $d_l$, which will contain a $1$. So for $1 \leq l \leq r$, equation $l$ simplifies to

$$
1 x_{d_l} + [B]_{l, f_1} x_{f_1} + [B]_{l, f_2} x_{f_2} + [B]_{l, f_3} x_{f_3} + \dots + [B]_{l, f_{n - r}} x_{f_{n - r}} = [B]_{l, n + 1}
$$

This allows us to write,

$$
[x]_{d_l} = x_{d_l}
$$

$$
= [B]_{l, n + 1} - [B]_{l, f_1} x_{f_1} - [B]_{l, f_2} x_{f_2} - [B]_{l, f_3} x_{f_3} - \dots - [B]_{l, f_{n - r}} x_{f_{n - r}}
$$

$$
= [c]_{d_l} + x_{f_1}[u_1]_{d_l} + x_{f_2} [u_2]_{d_l} + x_{f_3} [u_3]_{d_l} + \dots + x_{f_{n - r}} [u_{n - r}]_{d_{l}}
$$

$$
= [c + x_{f_1} u_1 + x_{f_2} u_2 + x_{f_3} u_3 + \dots + x_{f_{n - r}} u_{n - r}]_{d_l}
$$

This tells us that the entries of the solution vector $x$ corresponding to dependent variables (indices in $D$), are equal to those of a vector in the set $S$. We still need to check the other entries of the solution vector $x$ corresponding to the free variables (indices in $F$) to see if they are equal to the entries of the same vector in the set $S$. To this end, suppose $i \in F$ and $i = f_j$. Then

$$
[x]_i = x_i = x_{f_j}
$$

$$
= 0 + 0 x_{f_1} + 0 x_{f_2} + 0 x_{f_3} + \dots + 0 x_{f_{j - 1}} + 1 x_{f_{j}} + 0 x_{f_{j + 1}} + \dots + 0 x_{f_{n - r}}
$$

$$
= [c]_i + x_{f_1} [u_1]_i + x_{f_2} [u_2]_i + x_{f_3} [u_3]_i + \dots + x_{f_j} [u_j]_i + \dots + x_{f_{n - r}} [u_{n - r}]_i
$$

$$
= [c + x_{f_1} u_1 + x_{f_2} u_2 + \dots + x_{f_{n - r}} u_{n - r}]_i
$$

So entries of $x$ and $c + x_{f_1} u_1 + x_{f_2} u_2 + \dots + x_{f_{n - r}} u_{n - r}$ are equal and therefore by Definition **Column Vector Equality** they are equal vectors. Since $x_{f_1}, x_{f_2}, x_{f_3}, \dots , x_{f_{n - r}}$ are scalars, this shows us that $x$ qualifies for membership in $S$. So the set $S$ contains all of the solutions to the system.

## Note

Note that both halves of the proof of this theorem indicate that $\alpha_i = [x]_{f_i}$. In other words, the arbitrary scalars, $\alpha_i$, in the description of the set $S$ actually have more meaning — they are the values of the free variables $[x]_{f_i}, 1 \leq i \leq n - r$. So we will often exploit this observation in our descriptions of solution sets.

## Example = TODO Example VFSAI

## Reference

1. [linear.ups.edu - theorem VFSLS, section Subspaces](http://linear.ups.edu/html/section-LC.html)
