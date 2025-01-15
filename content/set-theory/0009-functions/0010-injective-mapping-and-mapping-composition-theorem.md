# Injective mapping and mapping composition theorem

Let $f: X \rightarrow Y$ be a **mapping**. Then $f$ is **injective** if and only if for any set $W$ and for any mappings $g: W \rightarrow X$ and $h: W \rightarrow X$ such that $f \circ g = f \circ h$, we have $g = h$.

## Proof

$$
p: f \text{ is one-to-one }
$$

$$
q: g = h
$$

Hypothesis:

### 1. $p \rightarrow q$

Assume $f$ is **one-to-one**; let $W$ be a set, and let $g: W \rightarrow X$ and $h: W \rightarrow X$ be mappings such that $f \circ g = f \circ h$. We claim that $g = h$.

Since $g$ and $h$ both have **domain** $W$, we need only show $g(w) = h(w)$ for all $w \in W$ (function equality, see [**functions**](./0001-function.md)). So let $w \in W$ be given. Now, by assumption, $f \circ g = f \circ h$ so that, in particular, $(f \circ g)(w) = (f \circ h)(w)$. Hence $f(g(w)) = f(h(w))$. Since $f$ is one-to-one, we conclude $g(w) = h(w)$, as desired.

### 2. $p \leftarrow q$

We will do a proof by contrapositive $\neg q \rightarrow \neg p$.

We begin by assuming $f$ is **not** one-to-one.

We must show that there exists a set $W$ and mappings $g: W \rightarrow X$ and $h: W \rightarrow X$ such that $f \circ g = f \circ h$, but $g \neq h$.

In the end, we want to show inequality of functions $g$ and $h$. Per [**function equality**](./0001-function.md) we must construct $g$ and $h$ in such a way that there exists a $w \in W$ such that $g(w) \neq h(w)$ while $(f \circ g)(w) = (f \circ h)(w)$.

Since $f$ is not **one-to-one**, there exist distinct elements $x_1, x_2 \in X$ such that $f(x_1) = f(x_2)$.

We define $W = \\{x_1, x_2 \\}$.

We define mapping $g: W \rightarrow X = \\{ (x_1, x_1), (x_2, x_2) \\}$

We define mapping $h: W \rightarrow X = \\{ (x_1, x_2), (x_2, x_1) \\}$

$$
(f \circ g)(x_1) = f(g(x_1)) = f(x_1) = f(x_2) = f(h(x_1)) = (f \circ h)(x_1)
$$

$$
(f \circ g)(x_2) = f(g(x_2)) = f(x_2) = f(x_1) = f(h(x_2)) = (f \circ h)(x_2)
$$

With our $W$ and mappings $g: W \rightarrow X \text{ and } h: W \rightarrow X$ our hypothesis holds, but because

$$
g(x_1) = x_1 = h(x_2) \neq h(x_1)
$$

$$
g(x_2) = x_2 = h(x_1) \neq h(x_2)
$$

$g \neq h$ as desired.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 263)
