# Elementary matrices are nonsingular

If $E$ is an **elementary matrix**, then $E$ is **nonsingular**.

## Proof

We show that we can row-reduce each elementary matrix to the **identity matrix**. Given an elementary matrix of the form $E_{i, j}$, perform the row operation that swaps row $j$ with row $i$. Given an elementary matrix of the form $E_{i}(\alpha)$, with $\alpha \neq 0$, perform the row operation that multiplies row $i$ by $\frac{1}{\alpha}$. Given an elementary matrix of the form $E_{i, j}(\alpha)$, with $\alpha \neq 0$, perform the row operation that multiplies row $i$ by $- \alpha$ and adds it to row $j$. In each case, the result of the single row operation is the identity matrix. So each elementary matrix is row-equivalent to the identity matrix, and by Theorem **Nonsingular matrices row reduce to identity matrices** is **nonsingular**.

## Reference

1. [linear.ups.edu - theorem EMN, section Determinant of a Matrix](http://linear.ups.edu/html/section-DM.html)
