# Additive inverses are unique

Suppose that $V$ is a **vector space**. For each $u \in V$, the **additive inverse**, $-u$, is unique.

## Proof

To prove uniqueness, a standard technique is to suppose the existence of two objects. So let $-u_1$ and $-u_2$ be two additive inverses for $u$. Then

$$
-u_1 = - u_1 + 0
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

$$
= - u_1 + (u + - u_2)
\\;\\;\\;
\text{ Property 6 of Vector space - Additive inverse }
$$

$$
= (- u_1 + u) + -u_2
\\;\\;\\;
\text{ Property 4 of Vector space - Additive Associativity }
$$

$$
= 0 + - u_2
\\;\\;\\;
\text{ Property 6 of Vector space - Additive inverse }
$$

$$
= - u_2
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

So the two additive inverses are really the same.

## Reference

1. [linear.ups.edu - theorem AIU, section Vector Spaces](http://linear.ups.edu/html/section-VS.html)