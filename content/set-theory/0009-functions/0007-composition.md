# Composition

Let $f$ and $g$ be **functions**. Consider the **relation**

$$
h = \\{ (x, z) | \text{ if there exists } y \text{ such that } (x, y) \in f \text{ and } (y, z) \in g \\}
$$

The relation $h$ is called the **composite** of $f$ and $g$, or simply **$g$ composition $f$**, and is denoted $h = g \circ f$.

Using standard functional notation, we see that $z = (g \circ f)(x)$ if and only if $y = f(x)$ and $z = g(y)$ for some $y$. If such a $y$ exists, we then have $z = g(y) = g(f(x))$. The equation $z = g(f(x))$ is the formula commonly used to calculate the rule of correspondence for $g \circ f$, given rules for $g$ and $f$.

Second, we note that $dom(g \circ f)$ is clearly contained as a subset in $dom(f)$. That is, in order to be in $dom(g \circ f)$, an object $x$ must first be in $dom(f)$. Furthermore, for each such $x$, the object $f(x)$ (i.e. $y$) must be in $dom(g)$. Indeed, $x \in dom(g \circ f)$ if and only if both these conditions are satisfied, so that

$$
dom(g \circ f) = \\{ x | x \in dom(f) \land f(x) \in dom(g) \\}
$$

Composition of functions is a **noncommutative** operation, that is, it is not the case that $f \circ g = g \circ f$ for all functions $f$ and $g$.

$$
f = \\{ (1, 3), (2, 7), (3, 10), (4, 17), (5, 20) \\}
$$

$$
g = \\{ (2, 6), (3, 4), (7, 10), (17, 10), (20, 10) \\}
$$

$$
h = \\{ (4, 3), (6, 5), (10, 20) \\}
$$

$$
f \circ h = \\{ (4, 10), (6, 20) \\}
$$

$$
h \circ g = \\{ (2, 5), (3, 3), (7, 20), (17, 20), (20, 20) \\}
$$

$$
g \circ h = \\{ (4, 3), (6, 5), (10, 20) \\}
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 261)