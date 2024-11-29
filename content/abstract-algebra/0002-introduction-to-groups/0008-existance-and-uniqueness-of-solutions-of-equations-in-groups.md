# Existance and uniqueness of solutions of equations in groups

Let $G$ be a group and $A$ and $b$ be any two elements in $G$. Then the equation $ax = b$ (and $xa = b$ if group is **commutative** or **abelian**) has unique solution in $G$.

## Proof

Suppose that $ax = b$. We must show that such an $x$ exists. We acn perform an operation on both sides of $ax = b$ by $a^{-1}$ to find

$$
x = e x = a^{-1} a x = a^{-1} b
$$

To show uniqueness, suppose that $x_1$ and $x_2$ are both solutions of $ax = b$; then $a x_1 = b = a x_2$. So $x_1 = a^{-1} a x_1 = a^{-1} b = a^{-1} a x_2 = x_2$.

## Note

If the group $G$ is **abelian**, then we prove $x a = b$ in the same manner. If group is not **abelian** than $a x_1 = b$ and $x_2 a = b$ and $x_1 \neq x_2$.

## Reference

1. [abstract.pugetsound.edu Proposition 3.21](https://abstract.ups.edu/abstract.ups.edu/aata/groups-section-defnitions.html)