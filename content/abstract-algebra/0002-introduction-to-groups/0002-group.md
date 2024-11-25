# Group

A **group** $(G, \circ)$ is a set $G$ together with a [**law of composition**](./0001-binary-operation.md) $(a, b) \rightarrow a \circ b$ that satisfies the following axioms:

1. The law of composition is **associative**. That is $(a \circ b) \circ c = a \circ (b \circ c)$ for all $a, b, c \in G$
2. There exists an element in $e \in G$, called the **identity element**, such that for any element $a \in G, a \circ e = e \circ a = a$
3. For each element $a \in G$, there exists an **inverse element** in $G$, denoted by $a^{-1}$, such that $a \circ a^{-1} = a^{-1} \circ a = e$

Be sure to verify **closure** when testing for a group.

A group $G$ with the property that $a \circ b = b \circ a$ for all $a, b \in G$ is called **abelian** or **commutative**. Groups not satisfying this property are said to be **nonabelian** or **noncommutative**.

The integers $\mathbb{Z} = \\{\dots, -2, -1, 0, 1, 2, \dots \\}$ form a group under the operation of addition.

The integers $\mathbb{Z}_n = \\{1, 2, \dots, n\\}$ form a group under addition modulo $n$.

**Cayley table** for $\mathbb{Z}_5$ under addition modulo $n$

| + | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 2 | 3 | 4 |
| 1 | 1 | 2 | 3 | 4 | 0 |
| 2 | 2 | 3 | 4 | 0 | 1 |
| 3 | 3 | 4 | 0 | 1 | 2 |
| 4 | 4 | 0 | 1 | 2 | 3 |

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 41)
2. [abstract.pugetsound.edu section 3.2. Definitions and Examples](https://abstract.ups.edu/abstract.ups.edu/aata/groups-section-defnitions.html)