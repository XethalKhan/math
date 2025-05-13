# Matrix multiplication and adjoints

Suppose $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix. Then $(AB)^{*} = B^{*} A^{*}$.

## Proof

$$
(AB)^{*} = (\overline{AB})^t
\\;\\;\\;
\text{ Definition Adjoint }
$$

$$
= (\overline{A} \\; \overline{B})^t
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Complex Conjugate }
$$

$$
= (\overline{B})^t (\overline{A})^t
\\;\\;\\;
\text{ Theorem Matrix Multiplication and Transposes }
$$

$$
= B^{*} A^{*}
\\;\\;\\;
\text{ Definition Adjoint }
$$

## Reference

1. [linear.ups.edu - theorem MMAD, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)
