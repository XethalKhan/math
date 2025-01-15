# Scalar multiplication that equals the zero vector

Suppose that $V$ is a vector space and $\alpha \in \mathbb{C}$. If $\alpha u = 0$, then either $\alpha = 0$ or $u = 0$.

## Proof

We prove this theorem by breaking up the analysis into two cases. The first seems too trivial, and it is, but the logic of the argument is still legitimate.

### Case 1. Suppose $\alpha = 0$

In this case our conclusion is true (the first part of the either/or is true) and we are done. That was easy.

### Case 2. Suppose $\alpha \neq 0$

$$
u = 1 u
\\;\\;\\;
\text{ Property 10 of Vector space - One }
$$

$$
= (\frac{1}{\alpha} \alpha) u
\\;\\;\\;
\alpha \neq 0
\\;\\;\\;
\text{ Multiplicative Inverse of Complex Number }
$$

$$
= \frac{1}{\alpha} (\alpha u)
\\;\\;\\;
\text{ Property 7 of Vector space - Scalar Multiplication Associativity }
$$

$$
= \frac{1}{\alpha} (0)
\\;\\;\\;
\text{ Hypothesis }
$$

$$
= 0
\\;\\;\\;
\text{ Theorem Zero Vector in Scalar multiplication }
$$ 

So in this case, the conclusion is true (the second part of the either/or is true) and we are done since the conclusion was true in each of the two cases.

## Reference

1. [linear.ups.edu - theorem SMEZV, section Vector Spaces](http://linear.ups.edu/html/section-VS.html)