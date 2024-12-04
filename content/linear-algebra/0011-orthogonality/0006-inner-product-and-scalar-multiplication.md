# Inner product and scalar multiplication

Suppose $u, v \in \mathbb{C}^{m}$ and $\alpha \in \mathbb{C}$. Then

1. $⟨\alpha u, v⟩ = \overline{\alpha} ⟨u, v⟩$
2. $⟨u, \alpha v⟩ = \alpha ⟨u, v⟩$

## Proof

### 1. $⟨\alpha u, v⟩ = \overline{\alpha} ⟨u, v⟩$

$$
⟨\alpha u, v⟩ = \sum_{i=1}^{m} \overline{[\alpha u]\_i} [v]\_i
\\;\\;\\;
\text{ Definition Inner Product }
$$

$$
= \sum_{i=1}^{m} \overline{\alpha [u]\_i} [v]\_i
\\;\\;\\;
\text{ Definition Column Vector Scalar Multiplication }
$$

$$
= \sum_{i=1}^{m} \overline{\alpha} \overline{[u]\_i} [v]\_i
\\;\\;\\;
\text{ Theorem Complex Conjugate Respects Multiplication }
$$

$$
= \overline{\alpha} \sum_{i=1}^{m} \overline{[u]\_i} [v]\_i
\\;\\;\\;
\text{ Property Distributivity of Complex Numbers }
$$

$$
= \overline{\alpha}⟨u, v⟩
\\;\\;\\;
\text{ Definition Inner Product }
$$

## Reference

1. [linear.ups.edu - theorem IPSM, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)
