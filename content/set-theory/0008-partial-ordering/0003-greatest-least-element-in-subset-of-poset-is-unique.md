# Greatest/least element in a subset of a poset is unique

Let $(A, \leq)$ be a **poset** and $X \subseteq A$. If $X$ has a greatest (respectively, least) element, then that element is unique.

## Proof

Let $u_1$ and $u_2$ be greatest elements of $X$. We claim that $u_1 = u_2$. Since $u_1$ is an **upper bound** for $X$ and $u_2 \in X$, then $u_2 \leq u_1$. Reversing the roles of $u_1$ and $u_2$ ($u_2$ is an **upper bound** for $X$ and $u_1 \in X$) we deduce $u_1 \leq u_2$. By **antisymmetry**, we conclude $u_1 = u_2$, as desired.

Let $l_1$ and $l_2$ be least elements of $X$. We claim that $l_1 = l_2$. Since $l_1$ is a **lower bound** for $X$ and $l_2 \in X$, then $l_2 \leq l_1$. Reversing the roles of $l_1$ and $l_2$ ($l_2$ is a **lower bound** for $X$ and $l_1 \in X$) we deduce $l_1 \leq l_2$. By **antisymmetry**, we conclude $l_1 = l_2$, as desired.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 247)