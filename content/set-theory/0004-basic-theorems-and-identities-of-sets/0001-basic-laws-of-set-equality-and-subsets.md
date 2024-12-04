# Basic laws of set equality and subsets

For sets $X$ and $Y$ in any universal set $U$:

1. $X = X$ (reflexive property of equality)
2. $X \subseteq X$ (reflexive property of subset relation)
3. if $X = Y$, then $Y = X$ (symmetric property of equality)
4. $X = Y$ if and only if $X \subseteq Y$ and $Y \subseteq X$ (includes antysimmetric property of subset)
5. if $X = Y$ and $Y = Z$, then $X = Z$ (transitive property of equality)
6. if $X \subseteq Y$ and $Y \subseteq Z$, then $X \subseteq Z$ (transitive property of subset relation)
7. $\emptyset \subseteq X$
8. $X \subseteq U$

## Proof

### 2. $X \subseteq X$ (reflexive property of subset relation)

Let $A$ be arbitrary set. By definition $A \subseteq A$ has the meaning $(\forall x)((x \in A) \rightarrow (x \in A))$. But the predicate $(x \in A) \rightarrow (x \in A)$ has the form $p \rightarrow p$ for any substitution of a particular object for $x$ and so is true for any substitution, since $p \rightarrow p$ is tautology. Hence the statement $(\forall x)((x \in A) \rightarrow (x \in A))$ is true, as is (consequently) the statement $A \subseteq A$.

### 4. $X = Y$ if and only if $X \subseteq Y$ and $Y \subseteq X$ (includes antysimmetric property of subset)

The definition $A = B$ is $(\forall x)((x \in A) \leftrightarrow (x \in B))$, whereas $A \subseteq B$ is defined by $(\forall x)((x \in A) \rightarrow (x \in B))$. Therefore, out theorem asserts that $(\forall x)((x \in A) \leftrightarrow (x \in B))$ is logically equivalent to the conjunction $(\forall x)((x \in A) \rightarrow (x \in B)) \land (\forall x)((x \in B) \rightarrow (x \in A))$.

Using the tautology $(p \leftrightarrow q) \leftrightarrow ((p \rightarrow q) \land (q \rightarrow p))$ and the theorem $(\forall x)(p(x) \land q(x)) \leftrightarrow (\forall x)(p(x)) \land (\forall x)(q(x))$ of the predicate calculus, we observe

$$
(\forall x)((x \in A) \leftrightarrow (x \in B))
$$

$$
\leftrightarrow (\forall x)(((x \in A) \rightarrow (x \in B)) \land ((x \in B) \rightarrow (x \in A)))
\\;\\;\\;
\text{ using }
(p \leftrightarrow q) \leftrightarrow ((p \rightarrow q) \land (q \rightarrow p))
$$

$$
\leftrightarrow (\forall x)((x \in A) \rightarrow (x \in B)) \land (\forall x)((x \in B) \rightarrow (x \in A))
\\;\\;\\;
\text{ using }
(\forall x)(p(x) \land q(x)) \leftrightarrow (\forall x)(p(x)) \land (\forall x)(q(x))
$$

### 7. $\emptyset \subseteq X$

Let $A$ be arbitrary set. By definition $\emptyset \subseteq A$ has the meaning $(\forall x)((x \in \emptyset) \rightarrow (x \in A))$. But the predicate $x \in \emptyset$ is false for any object $x$, so that the conditional $(x \in \emptyset) \rightarrow (x \in A)$ is true for any $x$, regardless of the truth value of the predicate $x \in A$. Hence the statement $(\forall x)((x \in \emptyset) \rightarrow (x \in A))$ is true, so that $\emptyset \subseteq A$ is true, as claimed.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 40, 116)