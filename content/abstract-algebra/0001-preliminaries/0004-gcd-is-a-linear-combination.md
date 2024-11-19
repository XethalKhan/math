# GCD is a linear combination

For any nonzero integers $a$ and $b$, there exists integers $s$ and $t$ such that $gcd(a, b) = as + bt$. Moreover, $gcd(a, b)$ is the smallest positive integer of the form $as + bt$.

## Proof

Consider the set $S = \\{am + bn | m, n \in \mathbb{Z} \land am + bn \gt 0\\}$. Since $S$ is obviously nonempty, the **well ordering principle** asserts that $S$ has a smallest member, say $d = as + bt$. We claim that $d = gcd(a, b)$.

We will use **division algorithm** to show that $d$ divides $a$. We write $a = dq + r$, where $0 \leq r \lt d = as + bt$. If $r \gt 0$, then

$$
r = a - dq
$$

$$
= a - (as + bt)q
$$

$$
= a - asq - btq
$$

$$
= a(1 - sq) + b(-tq) \in S
$$

Since $r \lt d$ (by division algorithm), this contradicts that $d$ is the smallest member of $S$. So $r = 0$ and $d$ divides $a$.

We will use **division algorithm** to show that $d$ divides $b$. We write $b = dq + r$, where $0 \leq r \lt d = as + bt$. If $r \gt 0$, then

$$
r = b - dq
$$

$$
= b - (as + bt)q
$$

$$
= b - asq - btq
$$

$$
= a(-sq) + b(1 - tq) \in S
$$

Since $r \lt d$ (by division algorithm), this contradicts that $d$ is the smallest member of $S$. So $r = 0$ and $d$ divides $b$.

This proves that $d$ is a common divisor of $a$ and $b$. Now we want to prove that it is the greatest of all common divisors.

Suppose that $d'$ is another common divisor of $a$ and $b$ and write $a = d' h$ and $b = d' k$. Then

$$
d = as + bt
$$

$$
= (d' h) s + (d' k) t
$$

$$
= d' (hs + kt) + 0
$$

so by division algorithm, $d'$ is a divisor of $d$. Thus among all common divisors of $a$ and $b$, $d$ is the greatest.

## Corollary

Let $a$ and $b$ be two integers that are **relatively prime**. Then there exist integers $s$ and $t$ such that $as + bt = 1$.

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 5)
2. [abstract.pugetsound.edu section The Division Algorithm, Theorem 2.10 and Corollary 2.11](http://abstract.pugetsound.edu/aata/integers-section-division-algorithm.html)

