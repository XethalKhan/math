# Function

A **function** is a **relation** $R$ having the property that if $(x, y) \in R$ and $(x, z) \in R$ then $y = z$.

Following custom, we will most often use $f, g, h$ and so on, rather than $R$, to denote relations that are functions. If $R$ is any relation, then by definition **Domain and range of relation**, for each $x \in dom(R)$, there exists **at least one** object $y \in rng(R)$ such that $(x, y) \in R$. If $f$ is a function, then by this definition, for each $x \in dom(f)$, there exists **at most one** object $y \in rng(f)$ such that $(x, y) \in f$. In other words, every element $x$ in the domain of a function $f$ has a unique corresponding $y$ in the range of $f$ such that $(x, y) \in f$.

If $f$ is a function, then each $x \in dom(f)$ can be viewed as determining a unique corresponding $y \in rng(f)$. For this reason we often refer to this $y$ as **the value of the function $f$ at $x$**, or simply "$f$ of $x$", and write $y = f(x)$, rather than $(x, y) \in f$ or $x f y$. In addition, when $f$ is a function the set $rng(f)$ is sometimes refered to as the **image** of $f$, denoted $im(f)$.

When the rule method is used to describe a function, the rule is usually one that specifies a relationship between each $x \in dom(f)$ and its corresponding $y$, such as $y = f(x) = x^3, y = g(x) = sin^{- 1}(x)$ or "$y$ is the biological father of $x$". This functions are most often described by designating the domain and specifying such a rule, often called the **rule of correspondence**. When a function is defined by a rule of correspondence $y = f(x)$, the latter is often referred to as **functional notation**, in contrast to ordered pair notation. We can express in these terms what is meant by **equality of functions**: two functions $f$ and $g$ are equal if and only if

1. $dom(f) = dom(g)$
2. $f(x) = g(x)$ for all $x$ in the common domain

## Examples

$$
f_1 = \\{ (2, 3), (3, 5), (4, 7), (5, 9) \\}
$$

$$
f_2 = \\{ (a, z), (b, y), \dots (y, b), (z, a) \\}
$$

$$
f_3 = \\{ (1, 1), (2, 2), \dots (99, 99), (100, 100) \\}
$$

$$
R_1 = \\{ (1, a), (1, b), \dots (1, z) \\}
$$

$$
R_2 = \\{ (1, 1), (1, -1), (4, 2), (4, -2), (9, 3), (9, -3) \\}
$$

$f_1, f_2, f_3$ are functions, $R_1, R_2$ are not functions

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 253)