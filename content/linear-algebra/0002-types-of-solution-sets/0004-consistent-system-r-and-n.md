# Relationship between $r$ and $n$ for a consistent system

Suppose $A$ is the **augmented matrix** of a **consistent** system of linear equations with $n$ variables. Suppose also that $B$ is a row-equivalent matrix in reduced row-echelon form with $r$ pivot columns. Then $r \leq n$. If $r = n$, then the system has a unique solution, and if $r \lt n$, then the system has infinitely many solutions.

## Proof

This theorem has 3 implications that we must establish

### $r \leq n \rightarrow \text{ system is consistent}$

Notice first that $B$ has $n + 1$ columns, so there can be at most $n + 1$ pivot columns, i.e. $r \leq n + 1$. If $r = n + 1$, then every column of $B$ is a pivot column, and in particular, the last column is a pivot column. So [**Theorem Recognizing Consistency of a Linear System**](./0003-recognizing-consistency-of-linear-system.md) tells us that the system is inconsistent, contrary to our hypothesis. We are left with $r \leq n$.

### $r = n \rightarrow \text{ system has one solution }$

When $r = n$, we find $n − r = 0$ free variables (i.e. $F = \\{n + 1\\}$) and the only solution is given by setting the $n$ variables to the the first $n$ entries of column $n + 1$ of $B$.

### $r \lt n \rightarrow \text{ system has infinitely many solutions }$

When $r \lt n$, we have $n − r \gt 0$ free variables. Choose one free variable and set all the other free variables to zero. Now, set the chosen free variable to any fixed value. It is possible to then determine the values of the dependent variables to create a solution to the system. By setting the chosen free variable to different values, in this manner we can create infinitely many solutions.

## Reference

1. [linear.ups.edu - theorem CSRN, section Types of Solution Sets](http://linear.pugetsound.edu/html/section-TSS.html)