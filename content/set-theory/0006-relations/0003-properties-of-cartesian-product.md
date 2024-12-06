# Properties of cartesian product

Let $W, X, Y \text{ and } Z$ be arbitrary sets. Then

1. $(X \cup Y) \times Z = (X \times Z) \cup (Y \times Z)$
2. $(X \cap Y) \times Z = (X \times Z) \cap (Y \times Z)$
3. $(X - Y) \times Z = (X \times Z) - (Y \times Z)$
4. $(W \times X) \cap (Y \times Z) = (W \cap Y) \times (X \cap Z)$
5. $(W \times X) \cup (Y \times Z) = (W \cup Y) \times (X \cup Z)$
6. $W \subseteq X \land Y \subseteq Z \rightarrow W \times Y \subseteq X \times Z$
7. $X \times \emptyset = \emptyset \times X = \emptyset$
8. $X \times Y = X \times Z \land X \neq \emptyset \rightarrow Y = Z$
9. $X \times Y = Y \times X \land X \neq \emptyset \land Y \neq \emptyset \rightarrow X = Y$
10. $X \times Y = \emptyset \rightarrow X = \emptyset \lor Y = \emptyset$

## Proof

### 1. $(X \cup Y) \times Z = (X \times Z) \cup (Y \times Z)$

$$
\text{Hypothesis } a \in (X \cup Y) \times Z \leftrightarrow
$$

$$
a = (x, z) \text{ for some object } x \in X \cup Y \text{ and } z \in Z \leftrightarrow
$$

$$
a = (x, z) \text{ where } x \in X \lor x \in Y \text{ and } z \in Z \leftrightarrow
$$

$$
a = (x, z) \text{ where either } x \in X \land z \in Z \text{ or } x \in Y \land z \in Z \leftrightarrow
$$

$$
\text{ either } a \in X \times Z \text{ or } a \in Y \times Z
$$

$$
a \in (X \times Z) \cup (Y \times Z)
$$

## 2. $(X \cap Y) \times Z = (X \times Z) \cap (Y \times Z)$

$$
\text{Hypothesis } a \in (X \cap Y) \times Z \leftrightarrow
$$

$$
a = (x, z) \text{ for some object } x \in X \cap Y \text{ and } z \in Z \leftrightarrow
$$

$$
a = (x, z) \text{ where } x \in X \land x \in Y \text{ and } z \in Z \leftrightarrow
$$

$$
a = (x, z) \text{ where } x \in X \land z \in Z \text{ and } x \in Y \land z \in Z \leftrightarrow
$$

$$
a \in X \times Z \text{ and } a \in Y \times Z
$$

$$
a \in (X \times Z) \cap (Y \times Z)
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 229, 230)