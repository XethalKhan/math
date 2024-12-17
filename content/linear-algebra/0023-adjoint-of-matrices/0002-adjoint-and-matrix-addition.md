# Adjoint and matrix addition

Suppose $A$ and $B$ are matrices of the same size. Then $(A + B)^{*} = A^{*} + B^{*}$.

## Proof

$$
(A + B)^{*} = (\overline{A + B})^{t}
\\;\\;\\;\\;\\;
\text{ Definition Adjoint }
$$

$$
= (\overline{A} + \overline{B})^{t}
\\;\\;\\;\\;\\;
\text{ Theorem Conjugate Respects Matrix Addition }
$$

$$
= (\overline{A})^{t} + (\overline{B})^{t}
\\;\\;\\;\\;\\;
\text{ Theorem Transpose and Matrix Addition }
$$

$$
= A^{*} + B^{*}
\\;\\;\\;\\;\\;
\text{ Definition Adjoint }
$$

## Reference

1. [linear.ups.edu - theorem AMA, section Matrix operations](http://linear.ups.edu/html/section-MO.html)