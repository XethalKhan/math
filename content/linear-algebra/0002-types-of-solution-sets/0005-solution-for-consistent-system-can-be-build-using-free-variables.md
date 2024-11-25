# Solution for consistent system can be build using free variables

Suppose $A$ is the augmented matrix of a consistent system of linear equations with $n$ variables. Suppose also that $B$ is a row-equivalent matrix in reduced row-echelon form with $i$ rows that are not completely zeros. Then the solution set can be described with $n − i$ free variables.

## Proof

Since matrix $B$ is in reduced row-echelon form by its [definition](./../0001-systems-of-linear-equations/0021-reduced-row-echelon-form.md) for rows that are not completely zero:

2. The leftmost nonzero entry of a row is equal to $1$
3. The leftmost nonzero entry of a row is the only nonzero entry in its column

we can conclude that the number of nonzero rows $i$ is equal to tnumber of **pivot columns** $r$ inside matrix $B$.

Using $n$ and $r$ with theorem [**Relationship between $r$ and $n$ from a consistent system**](./0004-consistent-system-r-and-n.md) we can determine solution of $A$.

## Reference

1. [linear.ups.edu - theorem FVCS, section Types of Solution Sets](http://linear.pugetsound.edu/html/section-TSS.html)