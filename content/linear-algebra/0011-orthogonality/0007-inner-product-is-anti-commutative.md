# Inner product is anti-commutative

Suppose that $u$ and $v$ are vectors in $\mathbb{C}^{m}$. Then $⟨u, v⟩ = \overline{⟨v, u⟩}$.

## Proof

$$
⟨u, v⟩ = \sum_{i=1}^{m} \overline{[u]\_i} [v]\_i
\\;\\;\\;
\text{ Definition Inner Product }
$$

$$
= \sum_{i=1}^{m} \overline{[u]\_i} \overline{\overline{[v]\_i}}
\\;\\;\\;
\text{ Theorem Complex Conjugate Twice }
$$

$$
= \sum_{i=1}^{m} \overline{[u]\_i \overline{[v]\_i}}
\\;\\;\\;
\text{ Theorem Complex Conjugate Respects Multiplication }
$$

$$
= \overline{(\sum_{i=1}^{m} [u]\_i \overline{[v]\_i})}
\\;\\;\\;
\text{ Theorem Complex Conjugate Respects Addition }
$$

$$
= \overline{(\sum_{i=1}^{m} \overline{[v]\_i} [u]\_i)}
\\;\\;\\;
\text{ Property Commutativity of Multiplication of Complex Numbers }
$$

$$
= \overline{⟨v, u⟩}
\\;\\;\\;
\text{ Definition Inner Product }
$$

## Reference

1. [linear.ups.edu - theorem IPAC, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)
