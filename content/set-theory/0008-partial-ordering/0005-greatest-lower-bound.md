# Greatest lower bound

Let $(A, \leq)$ be a partially ordered set, and let $X$ be a subset of $A$. An element $L$ of $A$ is said to be the **greatest lower bound** of $X$, denoted $L = glb X$ or $L = inf X$, if $L$ is the **greatest element** of the set of all lower bounds of $X$ in $A$.

The expression $inf$ is abbreviation for the Latin *infinum*. The subset $X = (0, 1)$ of the **poset** $(\mathbb{R}, \leq)$ has $(- \infty, 0]$ as its set of lower bounds. Since $0$ is clearly the **greatest element** of $(- \infty, 0]$, then $0 = glb X$. The set $Y = [0, 1)$ also has $(- \infty, 0]$ as its set of lower bounds, so that $0 = glb Y$, also. Note that, in the first case, $glb X \not \in X$, whereas $glb Y \in Y$ in the second case.

By theorem [**Greatest/least element in a subset of a poset is unique**](./0003-greatest-least-element-in-subset-of-poset-is-unique.md) a $glb$, if it exists is unique. But a subset of a **poset** may fail to have $glb$. For one thing, the subset may not be bounded below, in which case its set of all lower bounds is empty and so has no greatest element. Another possibility is that the subset might be bounded below, but its set of all lower bounds may fail to have a greatest element.

## Example

Poset $(\mathbb{R}, \leq)$ and $X = \\{ r \in \mathbb{R} | r^2 \geq 2 \\}$

$\sqrt{2}$ is lower bound but $\sqrt{2} \not \in \mathbb{R}, \sqrt{2} \in \mathbb{Q}$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 247, 248)