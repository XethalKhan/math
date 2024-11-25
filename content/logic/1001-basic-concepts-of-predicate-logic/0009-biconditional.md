# Biconditional

Let $p(x)$ and $q(x)$ be propositional functions over a domain of discourse $U$, with truth sets $P$ and $Q$, respectively. We define the truth set of **biconditional**

$$
p(x) \leftrightarrow q(x),
\\;\\;
p(x)
\\;\\;
\text{ if and only if }
\\;\\;
q(x)
\\;\\;
\text{ to be }
\\;\\;
(P' \cup Q) \cap (P \cup Q')
$$

Suppose that $p(x)$ and $q(x)$ are propositional functions such that the proposition $p(a) \leftrightarrow q(a)$ is tautology for every specific substitution of an element $a$ from $U$ for the variable $x$. We would certenly expect $p(x)$ and $q(x)$ to be logically equivalent (i.e. $P = Q$) over any domain of discourse. With this in mind we recall [theorem](./../0001-basic-concepts-of-propositional-logic/0010-selected-equivalences-of-propositional-calculus.md) $(p \leftrightarrow q) \leftrightarrow ((\neg p \land q) \lor (p \land \neg q))$ which leads to the definition.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 85)