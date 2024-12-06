# Exponential notation in groups

If $G$ is a group and $g \in G$, then we define $g^{0} = e$. For $n \in \mathbb{N}$, we define

$$
g^{n} = \underbrace{g \circ g \circ \dots \circ g}\_{n \text{ times}}
\\;\\;\\;
\text{ and }
\\;\\;\\;
g^{-n} = \underbrace{g^{-1} \circ g^{-1} \circ \dots \circ g^{-1}}_{n \text{ times}}
$$

Unlike for real numbers, in an abstract group we do not permit noninteger exponents such as $g^{\frac{1}{2}}$.

When $n$ is negative, we define $g^{n} = (g^{-1})^{|n|}$

One must be careful with this notation when dealing with a specific group whose binary operation is addition and is denoted by $+$. In this case, the definitions and group properties expressed in multiplicative notation must be translated to additive notation. For example, the inverse of $g$ is written as $-g$. Likewise, for example, $g^{3}$ means $g + g + g$ and is usually written as $3 g$, whereas $g^{-3}$ means $(-g) + (-g) + (-g)$ and is written as $-3g$. When additive notation is used, do not interpert $n g$ as combining $n$ and $g$ under the group operation; $n$ may not even be an element of the group.

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 49, 50)
2. [abstract.pugetsound.edu section 3.2. Definitions and examples](https://abstract.ups.edu/abstract.ups.edu/aata/groups-section-defnitions.html)