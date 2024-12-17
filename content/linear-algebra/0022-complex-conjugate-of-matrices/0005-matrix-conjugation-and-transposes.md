# Matrix conjugation and transposes

Suppose that $A$ is an $m \times n$ matrix. Then $\overline{(A^{t})} = (\overline{A})^{t}$.

## Proof

For $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[\overline{(A^{t})}]_{ji} = \overline{[A^{t}]_{ji}}
\\;\\;\\;\\;\\;
\text{ Definition Complex Conjugate of Matrix }
$$

$$
= \overline{[A]_{ij}}
\\;\\;\\;\\;\\;
\text{ Definition Transpose of a Matrix }
$$

$$
= [\overline{A}]_{ij}
\\;\\;\\;\\;\\;
\text{ Definition Complex Conjugate of a Matrix }
$$

$$
= [(\overline{A})^{t}]_{ji}
\\;\\;\\;\\;\\;
\text{ Definition Transpose of a Matrix }
$$ 

Since the matrices $\overline{(A^t)}$ and $(\overline{A})^t$ are equal in each entry, Definition Matrix Equality says that $\overline{(A^t)} = (\overline{A})^t$.

## Reference

1. [linear.ups.edu - theorem MCT, section Matrix operations](http://linear.ups.edu/html/section-MO.html)