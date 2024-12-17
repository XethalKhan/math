# Properties of equivalence classes

Let $R$ be an **equivalence relation** on a nonemtpy set $A$. For each $x \in A$, let $[x] = \\{ y \in A | x R y \\}$ be the **equivalence class of $x$**. Then

1. $[x] \neq \emptyset$ for each $x \in A$
2. If $x, y \in A$ then either $[x] = [y]$ or $[x] \cap [y] = \emptyset$
3. $\bigcup ([x] | x \in A) = A$

## Proof

### 1. $[x] \neq \emptyset$ for each $x \in A$

Given $x \in A$, we note that $x R x$, since $R$ is reflexive. Hence $x \in [x]$, which is thereby nonempty.

### 2. If $x, y \in A$ then either $[x] = [y]$ or $[x] \cap [y] = \emptyset$

$$
p: [x] = [y]
\\;\\;\\;
q: [x] \cap [y] = \emptyset
\\;\\;\\;
\text{ Prove } p \lor q
$$

Suppose $[x] \cap [y] \neq \emptyset$, so there exists $z \in [x] \cap [y]$. We claim that $[x] = [y]$, and we will prove this by mutual inclusion.

To show $[x] \subseteq [y]$, suppose $w \in [x]$. To conclude $w \in [y]$, we must prove $y R w$. Since $z \in [x]$, we have $x R z$. Since $z \in [y]$, we have $y R z$. Since $w \in [x]$, we have $x R w$. Since $x R z$, then by symmetry $z R x$. Then since $y R z$ and $z R x$, we have $y R x$ by transitivity. Finally, since $y R x$ and $x R w$, we have by transitivity $y R w$, our desired result. Hence $[x] \subseteq [y]$.

To show $[y] \subseteq [x]$, suppose $w \in [y]$. To conclude $w \in [x]$, we must prove $x R w$. Since $z \in [x]$, we have $x R z$. Since $z \in [y]$, we have $y R z$. Since $w \in [y]$, we have $x R y$. Since $y R z$, then by symmetry $z R y$. Then since $x R z$ and $z R y$, we have $x R y$ by transitivity. Finally, since $x R y$ and $y R w$, we have by transitivity $x R w$, our desired result. Hence $[y] \subseteq [x]$.

### 3. $\bigcup ([x] | x \in A) = A$

Cleary $\bigcup ([x] | x \in A) \subseteq A$, since each **equivalence class** is a subset of $A$. Conversly, if $y \in A$, then $y \in [y]$, as noted in point 1, so that $y \in [x]$ for some $x \in A$ and therefore $y \in \bigcup ([x] | x \in A)$, as desired.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 242)