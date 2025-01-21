# Properties of function composition with bijection

Let $f : X \rightarrow Y$ and $g: Y \rightarrow Z$ so that $g \circ f : X \rightarrow Z$.

1. If $f$ and $g$ are **bijections**, then $g \circ f$ is a **bijection**.
2. If $g \circ f$ is a **bijection**, then $f$ is **injective** and $g$ is **surjective**.

## Proof

### 1. If $f$ and $g$ are **bijections**, then $g \circ f$ is a **bijection**

To prove $g \circ f$ is **bijection** we will prove its individual properties of **injection** and **surjection**

#### Injection

A mapping $f: X \rightarrow Y$ is **injective** whenever $x_1, x_2 \in X$ with $f(x_1) = f(x_2)$, then $x_1 = x_2$.

We will assume that $g \circ f$ is not **injective**, that there are $x_1$ and $x_2$ in $dom(g \circ f)$ such that $x_1 \neq x_2$ and $g(f(x_1)) = g(f(x_2)) = z \in Z$

For $z \in Z$ there is a $y \in Y$ such that $g(y) = z$ since $g$ is **bijection**.

For $y \in Y$ there is a $x \in X$ such that $f(x) = y$.

$$
g(f(x_1)) = g(y) = z = g(y) = g(f(x_2))
$$

Since $f$ is a **bijection** there can only be one $x$ that exists such that $f(x) = y$, so $x_1 = x_2$ which contradicts our assumption that $x_1 \neq x_2$. Because of that $g \circ f$ must be **injective**.

## Surjection

The mapping $f: X \rightarrow Y$ is **surjective** if and only if, for every $y \in Y$, there exists $x \in X$ such that $f(x) = y$.

We will assume that $g \circ f$ is not **surjective**, that there is $z \in Z$ for which there is no $x \in X$ such that $g(f(x)) = z$.

For $z \in Z$ there must be a $y \in Y$ such that $g(y) = z$ since $g$ is **bijection**.

For $y \in Y$ there must be an $x \in X$ such that $f(x) = y$ since $f$ is **bijection**.

Existance of $x$ such that $g(f(x)) = g(y) = z$ contradicts our assumption, thus $g \circ f$ is **surjection**.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 269)