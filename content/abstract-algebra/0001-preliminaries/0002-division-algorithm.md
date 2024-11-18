# Division algorithm

Let $a$ and $b$ be integers, with $b > 0$. Then there exist unique integers $q$ and $r$ such that $a = b q + r$ where $0 \leq r \lt b$.

The integer $q$ in the division algorithm is called **the quotitient** upon dividing $a$ and $b$; the integer $r$ is called the **remainder** upon dividing $a$ by $b$.

## Proof

We will use existance and uniqueness type of proof.

### Existance of $q$ and $r$

Let $S = \\{a - bk | k \in \mathbb{Z} \land a - bk \geq 0\\}$.  

If $0 \in S$, then $b$ divides $a$, and we can let $q = \frac{a}{b}$ and $r = 0$.  

If $0 \notin S$, we can use the **well ordering principle**.

We must first show that $S$ is nonempty. If $a \gt 0$, than $a - b \times 0 \in S$. If $a \lt 0$, then $a - b(2a) = a(1 - 2b) \in S$. In either case $S \neq \emptyset$.

By the **well ordering principle**, $S$ must have a smallest member, say $r = a - bq$. Therefore, $a = bq + r, r \geq 0$.

We now show that $r \lt b$. Suppose $r \gt b$. Then $a - b(q +1) = a - bq - b = r - b \gt 0$. In this case we would have $a - b(q + 1)$ in the set $S$. But then $a - b(q + 1) \lt a - bq$, which would contradict the fact that $r = a - bq$ is the smallest member of $S$. So $r \leq b$. Since $0 \notin S, r \neq b$ and so $r \lt b$.

### Uniqueness of $q$ and $r$

Suppose there exists integers $r, r', q, q'$ such that $a = bq + r, 0 \leq r \lt b$ and $a = b q' + r', 0 \leq r' \lt b$. Then $b q + r = b q' + r'$. Assume that $r' \geq r$. From the last equation we have $b (q - q') = r' - r$, therefore $b$ must divide $r' - r$ and $0 \leq r' - r \leq r' \lt b$. This is possible only if $r' - r = 0$. Hence $r = r'$ and $q = q'$.

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 4)
2. [abstract.pugetsound.edu Theorem 2.9 - Division Algorithm](http://abstract.pugetsound.edu/aata/integers-section-division-algorithm.html)