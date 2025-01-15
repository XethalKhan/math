# Zero Scalar in Scalar Multiplication

Suppose that $V$ is a **vector space** and $u \in V$. Then $0 u = 0$.

## Proof

Notice that $0$ is a scalar, $u$ is a vector, so Property 2 of Vector space - Scalar Closure says $0 u$ is again a **vector**. As such, $0 u$ has an additive inverse, $- (0 u)$ by Property 6 of vector space - Additive Inverses.

$$
0 u = 0 + 0 u
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

$$
= (- (0 u) + 0 u) + 0 u
\\;\\;\\;
\text{ Property 6 of Vector space - Additive inverse }
$$

$$
= - (0 u) + (0 u + 0 u)
\\;\\;\\;
\text{ Property 4 of Vector space - Additive Associativity }
$$

$$
= - (0 u) + (0 + 0) u
\\;\\;\\;
\text{ Property 9 of Vector space - Distributivity across Scalar Addition }
$$

$$
= - (0 u) + 0 u
\\;\\;\\;
\text{ Property of Complex numbers - Zero COmplex Number }
$$

$$
= 0
\\;\\;\\;
\text{ Property 6 of Vector space - Additive inverse }
$$

## Reference

1. [linear.ups.edu - theorem ZSSM, section Vector Spaces](http://linear.ups.edu/html/section-VS.html)
