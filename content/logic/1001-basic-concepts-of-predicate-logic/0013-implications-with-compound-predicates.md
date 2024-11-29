# Implications involving compound predicates

Let $p(x)$ and $q(x)$ be predicates over a domain of discourse $U$ with truth sets $P$ and $Q$. Then

$$
(\forall x)(p(x)) \lor (\forall x)(q(x)) \rightarrow (\forall x)(p(x) \lor q(x))
\\;\\;\\;\\;\\;
P = U \text{ or } Q = U \rightarrow P \cup Q = U
$$

$$
(\exists x)(p(x) \land q(x)) \rightarrow (\exists x)(p(x)) \land (\exists x)(q(x))
\\;\\;\\;\\;\\;
P \cap Q \neq \emptyset \rightarrow P \neq \emptyset \text{ and } Q \neq \emptyset
$$

$$
(\forall x)(p(x)) \rightarrow (\exists x)(p(x))
\\;\\;\\;\\;\\;
P = U \rightarrow P \neq \emptyset
\\;\\;\\;\\;\\;
\text{ we assume } U \neq \emptyset
$$

$$
(\forall x)(p(x)) \rightarrow p(a)
\\;\\;\\;\\;\\;
P = U \rightarrow a \in P
\\;\\;\\;\\;\\;
\text{ we assume } a \in U
$$

$$
p(a) \rightarrow (\exists x)(p(x))
\\;\\;\\;\\;\\;
a \in P \rightarrow P \neq \emptyset
\\;\\;\\;\\;\\;
\text{ we assume } a \in U
$$

For any propositional function $p(x, y)$ in two variables

$$
(\exists y)(\forall x)(p(x, y)) \rightarrow (\forall x)(\exists y)(p(x, y))
$$

$$
(\forall x)(\forall y)(p(x, y)) \rightarrow (\exists x)(\exists y)(p(x, y))
\\;\\;\\;\\;\\;
\text{ we assume } U_x \neq \emptyset \text{ and } U_y \neq \emptyset
$$