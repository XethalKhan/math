# Properties of image and set operations

Let $f: A \rightarrow B$. Then:

1. $f^{- 1}(N_1 \cup N_2) = f^{- 1}(N_1) \cup f^{- 1}(N_2)$ and $f^{- 1}(N_1 \cap N_2) = f^{- 1}(N_1) \cap f^{- 1}(N_2)$ for any subsets $N_1$ and $N_2$ of $B$.
2. $f(M_1 \cup M_2) = f(M_1) \cup f(M_2)$ for any subsets $M_1$ and $M_2$ of $A$.
3. $f(M_1 \cap M_2) \subseteq f(M_1) \cap f(M_2)$ for any subsets $M_1$ and $M_2$ of $A$.
4. $f(M_1 \cap M_2) = f(M_1) \cap f(M_2)$ for any subsets $M_1$ and $M_2$ of $A$ if and only if $f$ is **injective**.

## Proof

### 3. $f(M_1 \cap M_2) \subseteq f(M_1) \cap f(M_2)$ for any subsets $M_1$ and $M_2$ of $A$.

Let $M_1$ and $M_2$ be subsets of $A$ and let $y \in f(M_1 \cap M_2)$. Then $y = f(m)$ for some $m \in M_1 \cap M_2$. Since $m \in M_1$, then $y \in f(M_1)$. Since $m \in M_2$, then $y \in f(M_2)$. Hence $y \in f(M_1) \cap f(M_2)$, as desired.

### 4. $f(M_1 \cap M_2) = f(M_1) \cap f(M_2)$ for any subsets $M_1$ and $M_2$ of $A$ if and only if $f$ is **injective**.

$$
p: f(M_1 \cap M_2) = f(M_1) \cap f(M_2)
$$

$$
q: f \text{ is injective }
$$

$p \leftarrow q$

Assume $f$ is **one-to-one** and let $y \in f(M_1) \cap f(M_2)$. To show $y \in f(M_1 \cap M_2)$, we must show there exists $m \in M_1 \cap M_2$ such that $y = f(m)$.

Now since $y \in f(M_1)$ then $y = f(m_1)$ for some $m_1 \in M_1$.

Since $y \in f(M_2)$, then $y = f(m_2)$ for some $m_2 \in M_2$.

Since $f(m_1) = y = f(m_2)$ and since $f$ is **one-to-one**, we may conclude $m_1 = m_2$.

Let the desired $m$ equal the common value of $m_1$ and $m_2$ noting that $y = f(m)$ and $m \in M_1 \cap M_2$ (since $m = m_1 \in M_1$ and $m = m_2 \in M_2$), as desired.

$p \rightarrow q$

TODO

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 272)