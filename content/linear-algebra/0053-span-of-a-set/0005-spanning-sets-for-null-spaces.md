# Spanning sets for null spaces

Suppose that $A$ is an $m \times n$ matrix, and $B$ is a row-equivalent matrix in **reduced row-echelon form**. Suppose that $B$ has $r$ pivot columns, with indices given by $D = \\{ d_1, d_2, d_3, \dots , d_r \\}$, while the $n - r$ non-pivot columns have indices $F = \\{ f_1, f_2, f_3, \dots , f_{n - r}, n + 1 \\}$. Construct the $n - r$ vectors $z_j, 1 \leq j \leq n - r$ of size $n$,

$$
[z_j]_i =
\begin{cases}
    1               & \text{if } i \in F, i = f_j\\
    0               & \text{if } i \in F, i \neq f_j\\
    -[B]_{k, f_j}   & \text{if } i \in D, i = d_k\\
\end{cases}
$$

Then the null space of $A$ is given by

$$
N(A) = ⟨\\{z_1, z_2, z_3, \dots , z_{n - r}\\}⟩
$$

## Proof

Consider the homogeneous system with $A$ as a **coefficient matrix**, $LS(A, 0)$. Its set of solutions, $S$, is by Definition **Null Space of a Matrix**, the null space of $A, N(A)$. Let $B'$ denote the result of row-reducing the augmented matrix of this homogeneous system. Since the system is **homogeneous**, the final column of the augmented matrix will be all zeros, and after any number of **row operations**, the column will still be all zeros. So $B'$ has a final column that is totally zeros.

Now apply Theorem **Vector Form of Solutions to Linear Systems** to $B'$, after noting that our homogeneous system must be consistent (Theorem **Homogeneous systems are consistent**). The vector $c$ has zeros for each entry that has an index in $F$. For entries with their index in $D$, the value is $-[B']_{k, n + 1}$, but for $B'$ any entry in the final column (index $n + 1$) is zero. So $c = 0$. The vectors $z_j, 1 \leq j \leq n - r$ are identical to the vectors $u_j, 1 \leq j \leq n - r$ described in Theorem **Vector Form of Solutions to Linear Systems**. Putting it all together and applying Definition **Span of a Set of Column Vectors** in the final step,

$$
N(A) = S
$$

$$
= \\{ c + \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_{n - r} u_{n - r} | \alpha_1, \alpha_2, \alpha_3, \dots , \alpha_{n - r} \in \mathbb{C} \\}
$$

$$
= \\{ \alpha_1 u_1 + \alpha_2 u_2 + \alpha_3 u_3 + \dots + \alpha_{n - r} u_{n - r} | \alpha_1, \alpha_2, \alpha_3, \dots , \alpha_{n - r} \in \mathbb{C} \\}
$$

$$
= ⟨\\{ z_1, z_2, z_3, \dots , z_{n - r} \\}⟩
$$

## Example = TODO

## Reference

1. [linear.ups.edu - theorem SSNS, section Spanning Sets](http://linear.ups.edu/html/section-SS.html)
