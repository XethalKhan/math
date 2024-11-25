# For every quantifier

If $p(x)$ is a propositional function with variable $x$ and domain of discourse $U$, then:

The sentence **for all** $x, p(x)$, symbolized $(\forall x)(p(x))$, is a **proposition** that is true if and only if the **truth set** $P$ of $p(X)$ equals $U$.

$$
(\forall x)(x^2 \gt 0) = T
$$

It's important to understand that an expression $(\forall x)(p(x))$ is a **proposition** and not a **predicate**, even though it involves a variable. Unlike a propositional function, its truth value does not depend on the variable $x$, but only on the propositional function $p(x)$ and the domain of discourse $U$. Notice that the statement $(\forall x)(p(x))$ is true precisely when the statement $p(a)$ is true for every possible substitution of a specific object $a$ from the domain of discourse $U$.

$$
p(n): n \text{ is even, } P = \\{\dots, -4, -2, 0, 2, 4, \dots \\}
$$

$$
q(n): n \text{ is odd, } Q = \\{\dots, -3, -1, 1, 3, 5, \dots \\}
$$

$$
r(n): n \text{ is divisible by } 4, R = \\{\dots, -8, -4, 0, 4, 8, \dots \\}
$$

$$
s(n): n \text{ is divisible by } 3, S = \\{\dots, -6, -3, 0, 3, 6, \dots \\}
$$

$$
(\forall n)(\neg p(n)) = F \text{ since } P' \neq U \text{ every integer is not even }
$$

$$
\neg((\forall n)(p(n))) = T \text{ since } (\forall n)(\neg p(n)) = F
$$

$$
(\forall n)(r(n) \rightarrow p(n)) = T \text{ for every integer } n \text{ if } n \text{ is multiple of } 4 \text{ then } n \text{ is even}
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 88 - 90)