# Inner product and vector addition

Suppose $u, v, w \in \mathbb{C}^m$. Then

1. $⟨u + v, w⟩ = ⟨u, w⟩ + ⟨v, w⟩$
2. $⟨u, v + w⟩ = ⟨u, v⟩ + ⟨u, w⟩$

## Proof

### 1. $⟨u + v, w⟩ = ⟨u, w⟩ + ⟨v, w⟩$

$$
⟨u + v, w⟩ = \sum_{i=1}^{m} \overline{[u + v]\_{i}} [w]\_i
\\;\\;\\;
\text{ Definition of Inner Product }
$$

$$
= \sum_{i=1}^{m} (\overline{[u]\_{i} + [v]\_{i}}) [w]\_{i}
\\;\\;\\;
\text{ Definition of Column Vector Addition }
$$

$$
= \sum_{i=1}^{m} (\overline{[u]\_{i}} + \overline{[v]\_{i}}) [w]\_{i}
\\;\\;\\;
\text{ Theorem Complex Conjugate Respects Addition }
$$

$$
= \sum_{i=1}^{m} \overline{[u]\_{i}} [w]\_{i} + \overline{[v]\_{i}} [w]\_{i}
\\;\\;\\;
\text{ Property Distributivity of Complex Numbers }
$$

$$
= \sum_{i=1}^{m} \overline{[u]\_{i}} [w]\_{i} + \sum_{i=1}^{m} \overline{[v]\_{i}} [w]\_{i}
\\;\\;\\;
\text{ Property Commutativity of Addition of Complex Numbers }
$$

$$
= ⟨u, w⟩ + ⟨v, w⟩
\\;\\;\\;
\text{ Definition of Inner Product }
$$

## Reference

1. [linear.ups.edu - theorem IPVA, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)