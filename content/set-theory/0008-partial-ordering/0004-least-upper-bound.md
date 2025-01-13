# Least upper bound

Let $(A, \leq)$ be a partially ordered set, and let $X$ be a subset of $A$. An element $U$ of $A$ is said to be the **least upper bound** of $X$, denoted $U = lub X$ or $U = sup X$, if $U$ is the **least element** of the set of all upper bounds of $X$ in $A$.

The expression $sup$ is abbreviation for the Latin *supremum*. The subset $X = (0, 1)$ of the **poset** $(\mathbb{R}, \leq)$ has $[1, \infty)$ as its set of upper bounds. Since $1$ is clearly the **least element** of $[1, \infty)$, then $1 = lub X$. The set $Y = (0, 1]$ also has $[1, \infty)$ as its set of upper bounds, so that $1 = lub Y$, also. Note that, in the first case, $lub X \not \in X$, whereas $lub Y \in Y$ in the second case.

By theorem [**Greatest/least element in a subset of a poset is unique**](./0003-greatest-least-element-in-subset-of-poset-is-unique.md) a $lub$, if it exists is unique. But a subset of a **poset** may fail to have $lub$. For one thing, the subset may not be bounded above, in which case its set of all upper bounds is empty and so has no least element. Another possibility is that the subset might be bounded above, but its set of all upper bounds may fail to have a least element.

## Example

Poset $(\mathbb{R}, \leq)$ and $X = \\{ r \in \mathbb{R} | r^2 \leq 2 \\}$

$\sqrt{2}$ is upper bound but $\sqrt{2} \not \in \mathbb{R}, \sqrt{2} \in \mathbb{Q}$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 247, 248)