# Complex conjugate of matrix respects matrix addition

Suppose that $A$ and $B$ are $m \times n$ matrices. Then $\overline{A + B} = \overline{A} + \overline{B}$.

For $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[\overline{A + B}]\_{ij} = \overline{[A + B]\_{ij}} \text{ Definition Complex Conjugate of Matrix }
$$

$$
= \overline{[A]\_{ij} + [B]\_{ij}} \text{ Definition Matrix Addition }
$$

$$
= \overline{[A]\_{ij}} + \overline{[B]\_{ij}} \text{ Theorem Complex Conjugate Respects Addition }
$$

$$
= [\overline{A}]\_{ij} + [\overline{B}]\_{ij} \text{ Definition Complex Conjugate of Matrix }
$$

$$
= [\overline{A} + \overline{B}]\_{ij} \text{ Definition Matrix Addition }
$$ 

Since the matrices $\overline{A + B}$ and $\overline{A} + \overline{B}$ are equal in each entry, Definition Matrix Equality says that $\overline{A + B} = \overline{A} + \overline{B}$.

## Reference

1. [linear.ups.edu - theorem CRMA, section Matrix operations](http://linear.ups.edu/html/section-MO.html)