# Adjoint of an adjoint

Suppose that $A$ is a matrix. Then $(A^{*})^{*} = A$.

## Proof

$$
(A^{*})^{*} = \Big(\overline{(A^{*})} \Big)^{t}
\\;\\;\\;\\;\\;
\text{ Definition Adjoint }
$$

$$
= \overline{\Big((A^{*}) \Big)^{t}}
\\;\\;\\;\\;\\;
\text{ Theorem Matrix Conjugation and Transpose }
$$

$$
= \overline{ \Bigg( \Big( ( \overline{A} )^{t} \Big)^{t} \Bigg) }
\\;\\;\\;\\;\\;
\text{ Definition Adjoint }
$$

$$
= \overline{( \overline{A} ) }
\\;\\;\\;\\;\\;
\text{ Theorem Transpose of a Transpose }
$$

$$
= A
\\;\\;\\;\\;\\;
\text{ Theorem Conjugate of Conjugate of Matrix }
$$

## Reference

1. [linear.ups.edu - theorem AA, section Matrix operations](http://linear.ups.edu/html/section-MO.html)