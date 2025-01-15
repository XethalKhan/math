# Composition of functions is associative

If $f, g \text{ and } h$ are *8functions**, then $f \circ (g \circ h) = (f \circ g) \circ h$.

## Proof

We may prove two functions equal by showing that

1. their domains are equal
2. their values are the same at each point in the common domain

### 1. Their domains are equal

$$
p: x \in dom(f \circ (g \circ h))
$$

$$
q: x \in dom((f \circ g) \circ h)
$$

#### $p \leftarrow q \\;\\;\\;\\;\\; dom((f \circ g) \circ h) \subseteq dom(f \circ (g \circ h))$

Let $x$ be an element of $dom((f \circ g) \circ h)$

The $x \in dom(h)$ and $h(x) \in dom(f \circ g)$

The latter property means that $h(x) \in dom(g)$ and $g(h(x)) \in dom(f)$. But since $x \in dom(h)$ and $h(x) \in dom(g)$ then $x \in dom(g \circ h)$.

Since $x \in dom(g \circ h)$ and $(g \circ h)(x) \in dom(f)$, then $x \in dom(f \circ (g \circ h))$, as desired.

Hence $dom((f \circ g) \circ h) \subseteq dom(f \circ (g \circ h))$

#### $p \rightarrow q \\;\\;\\;\\;\\; dom(f \circ (g \circ h)) \subseteq dom((f \circ g) \circ h)$

Let $x$ be an element of $dom(f \circ (g \circ h))$

Then $x \in dom(g \circ h)$ and $g(h(x)) \in dom(f)$.

The first property means that $x \in dom(h)$ and $h(x) \in dom(g)$. But since $h(x) \in dom(g)$ and $g(h(x)) \in dom(f)$, then $h(x) \in dom(f \circ g)$.

Since $x \in dom(h)$ and $h(x) \in dom(f \circ g)$, then $x \in ((f \circ g) \circ h)$.

Hence $dom(f \circ (g \circ h)) \subseteq dom((f \circ g) \circ h)$.

### 2. Their values are the same at each point in the common domain

Let $x \in dom((f \circ g) \circ h) [ = dom(f \circ (g \circ h)) ]$

Then

$$
((f \circ g) \circ h)(x) = ((f \circ g)(h(x))) = f(g(h(x))) = f((g \circ h)(x)) = (f \circ (g \circ h))(x)
$$

Since $((f \circ g) \circ h)(x) = (f \circ (g \circ h))(x)$ for any value of $x$ in the common domain of the two functions $f \circ (g \circ h)$ and $(f \circ g) \circ h$ we conclude that these two functions are actually the same, as desired.

## Note

Suppose now that $f: A \rightarrow B$ and $g: B \rightarrow C$ are **mappings**, where we make explicit note of the assumption that the codomain of the first mapping equals the domain of the second. Due to this assumption, we have that for any $x \in A = dom(f), f(x) \in B = dom(g)$. From this, we may easily conclude that the function $g \circ f$ has the domain $A$ and a range that is a subset of $C$. Therefore it is meaningful to refer to the mapping $g \circ f: A \rightarrow C$ whenever we are given mappings $f: A \rightarrow B$ and $g: B \rightarrow C$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 262)