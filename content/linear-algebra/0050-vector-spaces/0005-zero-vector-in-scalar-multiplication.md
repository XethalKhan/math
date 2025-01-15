# Zero vector in scalar multiplication

Suppose that $V$ is a **vector space** and $\alpha \in \mathbb{C}$. Then $\alpha 0 = 0$.

## Proof

Notice that $\alpha$ is a scalar, $0$ is a vector, so Property 2 of Vector space - Scalar Closure means $\alpha 0$ is again a **vector**. As such, $\alpha 0$ has an additive inverse, $- (\alpha 0)$ by Property 6 of vector space - Additive Inverses.

$$
\alpha 0 = 0 + \alpha 0
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

$$
= (- (\alpha 0) + \alpha 0) + \alpha 0
\\;\\;\\;
\text{ Property 6 of Vector space - Additive inverse }
$$

$$
= - (\alpha 0) + (\alpha 0 + \alpha 0)
\\;\\;\\;
\text{ Property 4 of Vector space - Additive Associativity }
$$

$$
= - (\alpha 0) + \alpha (0 + 0)
\\;\\;\\;
\text{ Property 8 of Vector space - Distributivity across Vector Addition }
$$

$$
= - (\alpha 0) + \alpha 0
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

$$
= 0
\\;\\;\\;
\text{ Property 6 of Vector space - Additive inverse }
$$

## Reference

1. [linear.ups.edu - theorem ZVSM, section Vector Spaces](http://linear.ups.edu/html/section-VS.html)
