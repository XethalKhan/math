# Equivalences involving compound predicates

Let $p(x)$ and $q(x)$ be predicates over a domain of discourse $U$ with truth sets $P$ and $Q$. Then

$$
\neg((\forall x)(p(x))) \leftrightarrow (\exists x)(\neg p(x))
\\;\\;\\;\\;\\;
P \neq U \leftrightarrow P' \neq \emptyset
$$

$$
\neg((\exists x)(p(x))) \leftrightarrow (\forall x)(\neg p(x))
\\;\\;\\;\\;\\;
P = \emptyset \leftrightarrow P' = U
$$

$$
((\forall x)(p(x) \land q(x))) \leftrightarrow (\forall x)(p(x)) \land (\forall x)(q(x))
\\;\\;\\;\\;\\;
P \cap Q = U \leftrightarrow P = U \text{ and } Q = U
$$

$$
((\exists x)(p(x) \land q(x))) \leftrightarrow (\exists x)(p(x)) \land (\exists x)(q(x))
\\;\\;\\;\\;\\;
P \cap Q \neq U \leftrightarrow P \neq U \text{ or } Q \neq U
$$

For any propositional function $p(x, y)$ in two variables

$$
(\forall x)(\forall y)(p(x, y)) \leftrightarrow (\forall y)(\forall x)(p(x, y))
$$

$$
(\exists x)(\exists y)(p(x, y)) \leftrightarrow (\exists y)(\exists x)(p(x, y))
$$

$$
\neg((\forall x)(\exists y)(p(x, y))) \leftrightarrow (\exists x)(\forall y)(\neg p(x, y))
$$

$$
\neg((\exists x)(\forall y)(p(x, y))) \leftrightarrow (\forall x)(\exists y)(\neg p(x, y))
$$

$$
\neg((\forall x)(\forall y)(p(x, y))) \leftrightarrow (\exists x)(\exists y)(\neg p(x, y))
$$

$$
\neg((\exists x)(\exists y)(p(x, y))) \leftrightarrow (\forall x)(\forall y)(\neg p(x, y))
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 95 - 107)