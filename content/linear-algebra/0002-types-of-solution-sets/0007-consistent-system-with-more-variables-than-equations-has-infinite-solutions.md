# Consistent system with more variables than equations has infinite solutions

Suppose a consistent system of linear equations has $m$ equations in $n$ variables. If $n \gt m$, then the system has infinitely many solutions.

## Proof

Suppose that the augmented matrix of the system of equations is row-equivalent to $B$, a matrix in reduced row-echelon form with $r$ nonzero rows. Because $B$ has $m$ rows in total, the number of nonzero rows is less than or equal to $m$. In other words, $r \leq m$. Follow this with the hypothesis that $n \gt m$ and we find that the system has a solution set described by at least one free variable because

$$
n − r \geq n − m \gt 0
$$

A consistent system with free variables will have an infinite number of solutions, as given by [**Theorem Relationship between $r$ and $n$ for a consistent system**](./0004-consistent-system-r-and-n.md).

## Reference

1. [linear.ups.edu - theorem CMVEI, section Types of Solution Sets](http://linear.pugetsound.edu/html/section-TSS.html)