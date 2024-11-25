# Right and left cancellation in groups

If $G$ is a group and $a, b, c \in G$, then $ba = ca$ implies $b = c$ and $ab = ac$ implies $b = c$.

## Proof

Suppose $ba = ca$. Let $a^{-1}$ be an inverse of $a$. Then, multiplying on the right by $a^{-1}$ yields $(ba)a^{-1} = (ca)a^{-1}$. Associativity yields $b(aa^{-1}) = c(aa^{-1})$. Then $be = ce$ and therefore $b = c$.

Suppose $ab = ac$. Multiplying on the left by $a^{-1}$ yields $a^{-1}(ab) = a^{-1}(ac)$. Associativity yields $(a^{-1}a)b = (a^{-1}a)c$. Then $eb = ec$ and therefore $b = c$.

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 49)
2. [abstract.pugetsound.edu Proposition 3.22](https://abstract.ups.edu/abstract.ups.edu/aata/groups-section-defnitions.html)