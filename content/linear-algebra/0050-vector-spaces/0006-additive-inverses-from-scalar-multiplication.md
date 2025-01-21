# Additive Inverses from Scalar Multiplication

Suppose that $V$ is a **vector space** and $u \in V$. Then $- u = (- 1) u$.

## Proof

$$
-u = - u + 0
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

$$
= - u + 0 u
\\;\\;\\;
\text{ Theorem Zero Scalar in Scalar multiplication }
$$

$$
= - u + (1 + (- 1)) u
\\;\\;\\;
\text{ Property of Complex Numbers - Additive Inverse }
$$

$$
= - u + (1 u + (- 1) u)
\\;\\;\\;
\text{ Property 9 of Vector space - Distributivity across Scalar Addition }
$$

$$
= - u + (u + (- 1) u)
\\;\\;\\;
\text{ Property 10 of Vector space - One }
$$

$$
= (- u + u) + (- 1) u
\\;\\;\\;
\text{ Property 4 of Vector space - Additive Associativity }
$$

$$
= 0 + (- 1) u
\\;\\;\\;
\text{ Property of Complex Numbers - Additive Inverse }
$$

$$
= (- 1) u
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

## Note

Because of this theorem, we can now write linear combinations like $6 u_1 + (- 4) u_2$ as $6 u_1 - 4 u_2$, even though we have not formally defined an operation called vector subtraction.

## Reference

1. [linear.ups.edu - theorem AISM, section Vector Spaces](http://linear.ups.edu/html/section-VS.html)
