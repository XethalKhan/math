# Relation

## Informal definition

Let $A$ and $B$ be sets. A **relation from $A$ to $B$** is any subset $R$ of $A \times B$. If $A = B$ we say that $R$ is a relation on $A$.

The concept of **relation** is extraordinarily general. Examples of relations are easy to come by. On the other hand, we should not expect, in the absence of any assumptions about specific properties of a relation, that many general statements, that is theorems, can be proved about relations. It is only when we look at specific types of relations that any mathematically interesting theory begins to develop. Since a relation is among other things a **set**, specific relations may be described by either a **roster method** or the **rule method**. As was the case in describing general sets, a rule describing a relation must have the property that, given an ordered pair $(x, y)$, we must be able to determine, by the rule, whether or not $(x, y)$ lies in the relation. Relations having infinitely many ordered pairs must, of course, be described by the **rule method**.

We often deal with a generic relation $R$ by using the notation $xRy$, rather than $(x, y) \in R$. Also, it is common to identify a generic relation by some symbol, such as $\sim$, rather than by a letter, so that $x \sim y$ means the same thing as $(x, y) \in R$.

Let $A = \\{1, 2, 3\\}$ and $B = \\{ w, x, y, z\\}$. Then

$$
R_1 = \\{(1, x), (2, y), (3, z)\\}
$$

$$
R_2 = \\{(2, w), (2, x), (2, y), (3, z)\\}
$$

$$
R_3 = \\{(1, z), (2, z), (3, z)\\}
$$

are relations from $A$ to $B$.

The set $R_4 = \\{(x, 1), (x, 3)\\}$ is a relation from $B$ to $A$. Entire set $A \times B$ is itself a relation from $A$ to $B$, as is the empty set $\emptyset$.

$$
R_3 = \\{(a, b) | a \in A \land b = z\\}
$$

$$
R_2 = \\{(2, b) | b \in B\\} = \\{(a, b) | a = 2 \land b \in B\\}
$$

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 230)