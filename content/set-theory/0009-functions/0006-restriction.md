# Restriction

Let $f: A \rightarrow B$ be a mapping, and let $X \subseteq A$. We define a new mapping, **the restriction of $f$ to $X$**, denoted $f/X$ by $f/X: X \rightarrow B$ where $f/X(x) = f(x)$ for all $x \in X$.

Note that given $f: A \rightarrow B$ and a subset $X$ of $A$, a mapping $g: X \rightarrow B$ equals $f/X$, if and only if $g(x) = f(x)$ for all $x \in X$.

The function $g(x) = \sqrt{x}$ is not the inverse of $f(x) = x^2$ for $dom(f) = dom(g) = \mathbb{R}$, but it is an inverse of the restriction $f/X$ where $X = [0, +\infty)$.

$$
g(-10000) = \sqrt{-10000}
\\;\\;\\;\\;\\;
g(10000) = \sqrt{10000} = 100
$$

$$
f(-100) = (-100)^2 = 10000
\\;\\;\\;\\;\\;
f(100) = f/X(100) = 100^2 = 10000
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 260)