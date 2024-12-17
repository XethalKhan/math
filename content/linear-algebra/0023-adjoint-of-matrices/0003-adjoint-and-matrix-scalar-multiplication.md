# Adjoint and matrix scalar multiplication

Suppose $\alpha \in \mathbb{C}$ is a scalar and $A$ is a matrix. Then $(\alpha A)^{*} = \overline{\alpha} A^{*}$.

## Proof

$$
(\alpha A)^{*} = (\overline{\alpha A})^{t}
\\;\\;\\;\\;\\;
\text{ Definition Adjoint }
$$

$$
= (\overline{\alpha} \overline{A})^{t}
\\;\\;\\;\\;\\;
\text{ Theorem Conjugation Respects Matrix Scalar Multiplication }
$$

$$
= \overline{\alpha} (\overline{A})^{t}
\\;\\;\\;\\;\\;
\text{ Theorem Transpose and Matrix Scalar Multiplication }
$$

$$
= \overline{\alpha} A^{*}
\\;\\;\\;\\;\\;
\text{ Definition Adjoint }
$$

## Reference

1. [linear.ups.edu - theorem AMSM, section Matrix operations](http://linear.ups.edu/html/section-MO.html)