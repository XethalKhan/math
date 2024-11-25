# Conditional

Let $p(x)$ and $q(x)$ be propositional functions over a domain of discourse $U$, with truth sets $P$ and $Q$, respectively. We define the truth set of **conditional**

$$
p(x) \rightarrow q(x),
\\;\\;
\text{ if }
\\;\\;
p(x)
\\;\\;
\text{ then }
\\;\\;
q(x)
\\;\\;
\text{ to be }
\\;\\;
P' \cup Q
$$

Suppose that $p(x)$ and $q(x)$ are propositional functions such that the proposition $p(a) \leftrightarrow q(a)$ is tautology for every specific substitution of an element $a$ from $U$ for the variable $x$. We would certenly expect $p(x)$ and $q(x)$ to be logically equivalent (i.e. $P = Q$) over any domain of discourse. With this in mind we recall [theorem](./../0001-basic-concepts-of-propositional-logic/0010-selected-equivalences-of-propositional-calculus.md) $(p \rightarrow q) \leftrightarrow (\neg p \lor q)$ which leads to the definition.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 85)