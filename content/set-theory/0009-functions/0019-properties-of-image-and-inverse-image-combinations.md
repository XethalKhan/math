# Properties of image and inverse image combinations

Given a mapping $f: A \rightarrow B$

1. $M \subseteq f^{- 1}(f(M))$ for any subset $M$ of $A$
2. $f(f^{- 1}(N)) \subseteq N$ for any subset $N$ of $B$
3. $M = f^{- 1}(f(M))$ for each subset $M$ of $A$ if and only if $f$ is **injective**
4. $f(f^{- 1}(N)) = N$ for each subset $N$ of $B$ if and only if $f$ is **surjective**

## Proof

### 1. $M \subseteq f^{- 1}(f(M))$ for any subset $M$ of $A$

Let $x \in M$. To prove $x \in f^{- 1}(f(M))$, we need only show $f(x) \in f(M)$. Since $x \in M$, the latter statement is true.

### 2. $f(f^{- 1}(N)) \subseteq N$ for any subset $N$ of $B$

Let $y \in f(f^{- 1}(N))$. We claim $y \in N$. Now we know there exists $x \in f^{- 1}(N)$ such that $y = f(x)$. Since $x \in f^{- 1}(N)$, then $f(x) \in N$. Since $y = f(x)$, we conclude $y \in N$, as desired.

### 3. $M = f^{- 1}(f(M))$ for each subset $M$ of $A$ if and only if $f$ is **injective**

$$
p: M = f^{- 1}(f(M))
$$

$$
q: f \text{ is injective }
$$

$p \rightarrow q$

Suppose $M = f^{- 1}(f(M))$ for every subset $M$ of $A$. To prove $f$ **injective**, let $x_1, x_2 \in A$ and suppose $f(x_1) = f(x_2)$. We claim $x_1 = x_2$. Letting $M = \\{ x_1 \\}$, we note that $f^{- 1}(f(M)) \subseteq M$ for this particular set $M$, because of our hypothesis. But $f(x_2) = f(x_1) \in f(M)$ so $x_2 \in f^{- 1}(f(M))$. Since $f^{- 1}(f(M)) \subseteq M = \\{ x_1 \\}$, we have $x_2 \in\\{ x_1 \\}$, so that $x_1 = x_2$ as desired.

$p \leftarrow q$

Conversely, suppose $f$ is **injective**. Let $M \subseteq A$ and recall from **property 1 of this theorem** that $M \subseteq f^{- 1}(f(M))$. To prove equality, we need only show $f^{- 1}(f(M)) \subseteq M$. Let $x \in f^{- 1}(f(M))$. Then $f(x) \in f(M)$ so that $f(x) = f(m)$ for some $m \in M$. Since $f$ is **one-to-one**, we conclude $x = m$. Since $m \in M$ and $x = m$, we conclude $x \in M$, as desired.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 271, 272)