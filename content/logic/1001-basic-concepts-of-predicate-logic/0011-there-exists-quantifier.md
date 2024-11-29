# There exists quantifier

If $p(x)$ is a propositional function with variable $x$ and domain of discourse $U$, then:

The sentence **there exists** $x, p(x)$, symbolized $(\exists x)(p(x))$ is a **proposition** that is true if and only if the truth set $P$ of $p(x)$ is nonemtpy:

$$
(\exists x)(x^2 = 4) = T
\\;\\;\\;\\;\\;
(\exists x)(x^2 = -5) = F
$$

It's important to understand that an expression $(\exists x)(p(x))$ is a **proposition** and not a **predicate**, even tough it involves a variable. Unlike a propositional function, its truth value does not depend on the variable $x$, but only on the propositional function $p(x)$ and the domain of discourse $U$. Notice that the statement $(\exists x)(p(x))$ is true precisely when $p(a)$ is true for **at least one** substitution of an object $a$ from $U$.

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
(\exists n)(\neg p(n)) = T \text{ since } P' \neq \emptyset
$$

$$
\neg((\exists n)(p(n))) = F \text{ since } (\exists n)(p(n)) = T
$$

$$
(\exists n)(p(n) \land q(n)) = F \text{ since } P \cap Q = \emptyset
$$

$$
(\exists n)(p(n)) \land (\exists n)(q(n)) = T \text{ since } P \neq \text{ and } Q \neq \emptyset
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 88 - 90)