# Complex conjugate respects vector scalar multiplication

Suppose $x$ is a vector from $\mathbb{C}^m$, and $\alpha \in \mathbb{C}$ is a scalar. Then

$$
\overline{\alpha x} = \overline{\alpha}\\;\overline{x}
$$

## Proof

For $1 \leq i \leq m$,

$$
[\overline{\alpha x}]\_{i} = \overline{[\alpha x]\_{i}}
\\;\\;\\;
\text{ Definition Complex Conjugate of Column Vector }
$$

$$
= \overline{\alpha [x]\_{i}}
\\;\\;\\;
\text{ Definition Column Vector Scalar Multiplication }
$$

$$
= \overline{\alpha} \\; \overline{[x]\_{i}}
\\;\\;\\;
\text{ Theorem Complex Conjugate Respects Multiplication }
$$

$$
= \overline{\alpha} \\; [\overline{x}]\_{i}
\\;\\;\\;
\text{ Definition Complex Conjugate of Column Vector }
$$

$$
= [\overline{\alpha} \overline{x}]\_{i}
\\;\\;\\;
\text{ Definition Column Vector Scalar Multiplication }
$$
 

Then by definition for Column Vector Equality we have $\overline{\alpha x} = \overline{\alpha} \\; \overline{x}$.

## Reference

1. [linear.ups.edu - theorem CRSM, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)