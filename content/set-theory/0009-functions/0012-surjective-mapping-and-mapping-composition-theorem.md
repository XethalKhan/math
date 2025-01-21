# Surjective mapping and mapping composition theorem

Let $X$ be a nonempty set and let $f: X \rightarrow Y$ be a **mapping**. Then $f$ is **surjective** if and only if for any set $Z$ and for any mappings $g: Y \rightarrow Z$ and $h: Y \rightarrow Z$ such that $g \circ f= h \circ f$, we have $g = h$.

## Proof

$$
p: f \text{ is surjective }
$$

$$
q: g = h
$$

### $p \rightarrow q$

Assume $f$ maps $X$ onto $Y$, let $Z$ be a set, and let $g$ and $h$ be mappings of $Y$ into $Z$ such that $g \circ f = h \circ f$. To prove $g = h$, let $y$ be an arbitrary element of $Y$. We must prove that $g(y) = h(y)$. Since $f$ is **surjective**, there exists $x \in X$ such that $f(x) = y$. Since $g \circ f = h \circ f$, by assumption, then $(g \circ f)(x) = (h \circ f)(x)$ so that $g(f(x)) = h(f(x))$. Since $y = f(x)$, we conclude $g(y) = h(y)$, as desired. We may express the latter argument in the form of a proof by transitivity by the string

$$
g(y) = g(f(x)) = (g \circ f)(x) = (h \circ f)(x) = h(f(x)) = h(y)
$$

### 2. $p \leftarrow q$

We will do a proof by contrapositive $\neg p \rightarrow \neg q$.

We begin by assuming $f$ is **not** surjective.

Our goal is to contradict the hypothesis by producing a set $Z$ and distinct mappings $g$ and $h$ of $Y$ into $Z$ such that $g \circ f = h \circ f$.

Now since $f$ is **not onto**, there exists $y_0 \in Y$ such that $y_0 \not \in rng(f)$.

Let $x_0 \in X$ (which we have assumed to be nonempty) and note that $y_0 \neq f(x_0)$, since $y_0 \not \in rng(f)$.

It is now time that we define $Z$, $g$, and $h$. Let $Z = Y$, let $g: Y \rightarrow Z$ be the identity mapping, and let $h: Y \rightarrow Z$ be defined by the rule $h(y) = y$ if $y \neq y_0$ and $h(y) = f(x_0)$ if $y = y_0$.

Since $y_0 \neq f(x_0)$, then $g$ and $h$ are clearly distinct mappings from $Y$ to $Z$.

Finally, if $x$ is any element of $X$, we have

$$
(g \circ f)(x) = g(f(x)) = f(x) = h(f(x)) = (h \circ f)(x)
$$

so that the mappings $g \circ f$ and $h \circ f$ are identical, as required.

The key assertion $f(x) = h(f(x))$ is valid because $h$ is the identity mapping except at $y_0$. By our construction, we know $f(x)$ does not equal $y_0$ for any $x \in X$ so that our conclusion $h(f(x)) = f (x)$ is warranted.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 266, 267)