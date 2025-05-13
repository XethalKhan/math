# Cantor-Bernstein-Schröder Theorem

Given sets $A$ and $B$, if $A \preceq B$ and $B \preceq A$, then $A \cong B$

That is:

If $\exists f: S \rightarrow T$ and $\exists g: T \rightarrow S$ where $f$ and $g$ are both **injections**, then there exists a **bijection** from $S$ to $T$.

## Proof

Suppose $S \preceq T$ and $T \preceq S$.

By definition, we have that there exist injections $f: S \rightarrow T$ and $g: T \rightarrow S$.

We are going to try to build a sequence $t_1, s_1, t_2, s_2, t_3 \dots$ as follows.

Consider any $t_1 \in T$. By **Law of Excluded Middle** there are two choices:

$$
\exists s_1 \in S: f(s_1) = t_1
\\;\\;\\;
\text{ or }
\\;\\;\\;
\not \exists s_1 \in S: f(s_1) = t_1
$$

Suppose $\exists s_1 \in S: f(s_1) = t_1$. Because $f$ is **injective**, such an $s_1$ is **unique**. So we can choose $s_1 = f^{- 1}(t_1)$.

Again, by **Law of Excluded Middle** there are two further choices:

$$
\exists t_2 \in T: g(t_2) = s_1
\\;\\;\\;
\text{ or }
\\;\\;\\;
\not \exists t_2 \in T: g(t_2) = s_1
$$

Suppose $\exists t_2 \in T: g(t_2) = s_1$. Because $f$ is **injective**, such an $t_2$ is **unique**. Similarly, we choose $s_2=f^{- 1}(t_2)$, if it exists.

This process goes on until one of the following happens:

1. We reach some $s_n \in S$ such that $\not \exists t \in T: g(t) = s_n$. This may be possible because $g$ may not be a **surjection**.
2. We reach some $t_n \in T$ such that $\not \exists s \in S: f(s) = t_n$. This may be possible because $f$ may not be a **surjection**.
3. The process goes on for ever.

For each $t \in T$, then, there is a well-defined process which turns out in one of the above three ways.

We **partition** $T$ up into three subsets that are **mutually disjoint**:

1. Let $T_{A} = \\{ \text{ all } t \in T \text{ such that the process ends with some } s_n \\}$
2. Let $T_{B} = \\{ \text{ all } t \in T \text{ such that the process ends with some } t_n \\}$
3. Let $T_{C} = \\{ \text{ all } t \in T \text{ such that the process goes on for ever } \\}$

We can do exactly the same thing with the elements of $S$:

1. Let $S_{A} = \\{ \text{ all } s \in S \text{ such that the process ends with some } t_n \\}$
2. Let $S_{B} = \\{ \text{ all } s \in S \text{ such that the process ends with some } s_n \\}$
3. Let $S_{C} = \\{ \text{ all } s \in S \text{ such that the process goes on for ever } \\}$

What we need to do is show that $S \cong T$. We do this by showing that $S_{A} \cong T_{A}, S_{B} \cong T_{B} \text{ and } S_{C} \cong T_{C}$.

### Showing that $S_{A} \cong T_{A}$

The **restriction** of $f$ to $S_{A}$ is a **bijection** from $S_{A}$ to $T_{A}$.

To do this we need to show that:

1. $s \in S_{A} \rightarrow f(s) \in T_{A}$
2. $\forall t \in T_{A}: \exists s \in S_{A}: f(s) = t$

#### For $s \in S_{A} \rightarrow f(s) \in T_{A}$

Let $s \in S_{A}$.

Then the process applied to $s$ ends in $S$, which means $s \in dom(f)$.

Now consider the process applied to $f(s)$. Its first step leads us back to $s$. Then it continues the process, applied to $s$, and ends up in $S$. Thus $f(s) \in T_{A}$. Thus $s \in S_{A} \rightarrow f(s) \in T_{A}$.

#### For $\forall t \in T_{A}: \exists s \in S_{A}: f(s) = t$

Now suppose $t \in T_{A}$.

Then the process applied to $t$ ends in $S$ (by definition of $T_{A}$). In particular, it must have a first stage, otherwise it would end in $T$ with $t$ itself. Hence $t = f(s)$ for some $s$.

But the process applied to this $s$ is the same as the continuation of the process applied to $t$, and therefore it ends in $S$. Thus $s \in S_{A}$ as required.

Hence the restriction of $f$ to $S_{A}$ is a **bijection** from $S_{A}$ to $T_{A}$.

### Showing that $S_{B} \cong T_{B}$

We can use the same argument as for $S_{A} \cong T_{A}$ to show that $g: T_{B} \rightarrow S_{B}$ is also a **bijection**.

Hence $g^{- 1}: S_{B} \rightarrow T_{B}$ is a bijection.

### Showing that $S_{C} \cong T_{C}$

Finally, suppose $t \in T_{C}$.

Because $f$ is an **injection**, $t = f(s)$ for some $s$, and the process applied to $t$ must start (since it never ends, per definition of $T_{C}$).

This $s$ must belong to $S_C$, because the process starting from $s$ is the same as the process starting from $t$ after the first step.

This never ends, as $t \in T_{C}$.

---

Now we can define a bijection $h: S \rightarrow T$ as follows:

$$
h(x) = \begin{cases}
    f(x): x \in S_A \\
    f(x): x \in S_C \\
    g^{-1}(x): x \in S_B
\end {cases}
$$

## Reference

1. [Cantor-Bernstein-Schröder Theorem - proofwiki](https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem)
2. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 285, 286)