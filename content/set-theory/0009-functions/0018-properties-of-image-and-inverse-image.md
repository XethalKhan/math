# Properties of image and inverse image

Let $f: A \rightarrow B$. Then

1. $f(\emptyset) = \emptyset$
2. $f^{- 1}(\emptyset) = \emptyset$
3. $A = f^{- 1}(B)$
4. $rng(f) = f(A)$
5. If $M_1, M_2 \subseteq A$ with $M_1 \subseteq M_2$ then $f(M_1) \subseteq f(M_2)$
6. If $N_1, N_2 \in B$ with $N_1 \subseteq N_2$, then $f^{- 1}(N_1) \subseteq f^{- 1}(N_2)$

## Proof

### 1. $f(\emptyset) = \emptyset$

To prove $f(\emptyset) = \emptyset$, we assume $y \in f(\emptyset)$. By definition of **image**, we may then assert there exists $m \in \emptyset$ such that $y = f(m)$. But the statement "$\exists m \in \emptyset$" is a contradiction.

### 6. If $N_1, N_2 \in B$ with $N_1 \subseteq N_2$, then $f^{- 1}(N_1) \subseteq f^{- 1}(N_2)$

Let $N_1$ and $N_2$ be subsets of $B$ with $N_1 \subseteq N_2$. To prove $f^{- 1}(N_1) \subseteq f^{- 1}(N_2)$, suppose $x \in f^{- 1}(N_1)$. To show $x \in f^{- 1}(N_2)$, we need only show $f(x) \in N_2$. Now since $x \in f^{- 1}(N_1)$, we have $f(x) \in N_1$. Since $N_1 \subseteq N_2$, we conclude $f(x) \in N_2$, as desired.

## Example

If $f(x) = x^2$ maps $\mathbb{R}$ to $\mathbb{R}$ , then $f([- 1, 1]) = [0, 1]$, whereas $f^{- 1}([0, 4]) = [- 2, 2]$. Also, $f^{- 1}(\\{ 9 \\}) = \\{- 3, 3 \\}$, whereas $f^{- 1}(\\{ - 9 \\}) = \emptyset$. Furthermore, $f(\mathbb{R}) = [0, \infty)$, the range of $f$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 271)