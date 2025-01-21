# Pascals rule

Let $\binom{n}{k}$ be a [**binomial coefficient**](./0005-binomial-coefficient.md)

For positive integers $n, k$ with $1 \leq k \leq n$:

$$
\binom{n}{k - 1} + \binom{n}{k} = \binom{n + 1}{k}
$$

## Proof (direct)

Let $n, k \in \mathbb{N}$ with $1 \leq k \leq n$.

$$
\binom{n}{k} + \binom{n}{k - 1} = \frac{n!}{k! (n - k)!} + \frac{n!}{(k - 1)! (n - (k - 1))!}
\\;\\;\\;
\text{ Definition of Binomial Coefficient }
$$

$$
= \frac{n! (n - (k - 1))}{k! (n - k)! (n - (k - 1))} + \frac{n! k}{(k - 1)! (n - (k - 1))! k}
\\;\\;\\;
\text{ Multiply by } 1
$$

$$
= \frac{n! (n - k + 1)}{k! (n - k + 1)!} + \frac{n! k}{k! (n - k + 1)!}
\\;\\;\\;
\text{ Definition of Factorial }
$$

$$
= \frac{n! (n - k + 1) + n! k}{k! (n - k + 1)!}
\\;\\;\\;
\text{ Addition of fractions }
$$

$$
= \frac{n! (n - k + 1 + k)}{k! (n - k + 1)!}
$$

$$
= \frac{n! (n + 1)}{k! (n - k + 1)!}
$$

$$
= \frac{(n + 1)!}{k! (n - k + 1)!}
\\;\\;\\;
\text{ Definition of Factorial }
$$

$$
= \binom{n + 1}{k}
\\;\\;\\;
\text{ Definition of Binomial Coefficient }
$$

## Reference

1. [Pascals rule - proofwiki](https://proofwiki.org/wiki/Pascal%27s_Rule)