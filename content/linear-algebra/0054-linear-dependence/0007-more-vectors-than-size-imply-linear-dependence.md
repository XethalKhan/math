# More Vectors than Size implies Linear Dependence

Suppose that $S = { u_1, u_2, u_3, \dots , u_n } \subseteq \mathbb{C}^m$ and $n \gt m$. Then $S$ is a **linearly dependent set**.

## Proof

Form the $m \times n$ matrix $A$ whose columns are $u_i, 1 \leq i \leq n$. Consider the homogeneous system $LS(A, 0)$. By Theorem **Homogeneous system with more variables than equations has infinite solutions** this system has infinitely many solutions. Since the system does not have a unique solution, Theorem **Linearly Independent Vectors and Homogeneous Systems** says the columns of $A$ form a **linearly dependent set**, as desired.

## Reference

1. [linear.ups.edu - theorem MVSLD, section Linear Independence](http://linear.ups.edu/html/section-LI.html)