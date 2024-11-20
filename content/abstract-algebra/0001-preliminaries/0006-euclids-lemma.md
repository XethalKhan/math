# Euclids lemma

Let $a$ and $b$ be integers and $p$ be a **prime number**. If $p | ab$, then either $p | a$ or $p | b$.

## Proof

Suppose that $p$ dos not divide $a$. We must show that $p | b$. SInce $gcd(a, p) = 1$ (corollary of *GCD is a linear combination*), there exist integers $r$ and $s$ such that $ar + ps = 1$. So

$$
b = b \times 1 = b(ar + ps) = (ab)r + p(bs)
$$

Since $p$ divides $ab$ (by hypothesis) and itself (by definition of prime numbers), $p$ must divide $b = (ab)r + p(bs)$.

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 6)
2. [abstract.pugetsound.edu section The Division Algorithm, Lemma 2.13](http://abstract.pugetsound.edu/aata/integers-section-division-algorithm.html)