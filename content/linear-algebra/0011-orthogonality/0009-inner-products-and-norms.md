# Inner products and norms

Suppose that $u$ is a vector in $\mathbb{C}^{m}$. Then

$$
\| u \|^{2} = ⟨u, u⟩
$$

## Proof

$$
\| u \|^{2} = ( \sqrt{\sum_{i=1}^{m} | [u]\_i |^{2}} )^{2}
\\;\\;\\;
\text{ Definition Norm of a Vector }
$$

$$
= \sum_{i=1}^{m} | [u]\_i |^{2}
$$

$$
= \sum_{i=1}^{m} \overline{[u]\_i} [u]\_i
\\;\\;\\;
\text{ Definition Modulus of Complex Numbers }
$$

$$
= ⟨u, u⟩
\\;\\;\\;
\text{ Definition Inner Product }
$$

## Note

When our vectors have entries only from the real numbers this theorem says that the dot product of a vector with itself is equal to the length of the vector squared.

## Reference

1. [linear.ups.edu - theorem IPN, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)
