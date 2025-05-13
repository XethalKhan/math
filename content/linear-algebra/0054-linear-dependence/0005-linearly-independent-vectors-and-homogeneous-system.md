# Linearly Independent Vectors and Homogeneous Systems

Suppose that $S = { v_1, v_2, v_3, \dots , v_n } \subseteq \mathbb{C}^m$ is a set of vectors and $A$ is the $m \times n$ matrix whose columns are the vectors in $S$. Then $S$ is a **linearly independent** set if and only if the **homogeneous system** $LS(A, 0)$ has a unique solution.

## Proof

$$
p: S \text{ is linearly independent set of vectors}
$$

$$
q: LS(A, 0) \text{ has a unique solution }
$$

### $p \leftarrow q$

Suppose that $LS(A, 0)$ has a unique solution. Since it is a homogeneous system, this solution must be the trivial solution $x = 0$. By Theorem **Solutions to Linear Systems are Linear Combinations**, this means that the only relation of linear dependence on $S$ is the trivial one. So $S$ is linearly independent.

### $p \rightarrow q$

We will prove the contrapositive $\neg q \rightarrow \neg p$. Suppose that $LS(A, 0)$ does not have a unique solution. Since it is a homogeneous system, it is consistent (Theorem **Homogeneous systems are consistent**), and so must have infinitely many solutions (Theorem **Possible solution sets for linear systems**). One of these infinitely many solutions must be nontrivial (in fact, almost all of them are), so choose one. By Theorem **Solutions to Linear Systems are Linear Combinations** this nontrivial solution will give a nontrivial relation of linear dependence on $S$, so we can conclude that $S$ is a linearly dependent set.

## Note

Since this theorem is an equivalence, we can use it to determine the linear independence or dependence of any set of column vectors, just by creating a matrix and analyzing the row-reduced form.

## Examples TODO

## Reference

1. [linear.ups.edu - theorem LIVHS, section Linear Independence](http://linear.ups.edu/html/section-LI.html)