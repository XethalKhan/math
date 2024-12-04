# Inner product is positive

Suppose that $u$ is a vector in $\mathbb{C}^{m}$. Then $⟨u, u⟩ \geq 0$ with equality if and only if $u = $0.

Notice that this theorem contains three implications:

1. $u \in \mathbb{C}^{m} \rightarrow ⟨u, u⟩ \geq 0$
2. $u = 0 \rightarrow ⟨u, u⟩ = 0$
3. $⟨u, u⟩ = 0 \rightarrow u = 0$

The results contained in this theorem are summarized by saying “the inner product is positive definite.”

## Proof

From the proof of [Theorem Inner Product and Norms](./0009-inner-products-and-norms.md) we see that

$$
⟨u, u⟩ = |[u]\_1|^{2} + |[u]\_2|^{2} + |[u]\_3|^{2} + \dots + |[u]\_m|^{2}
$$

Since each modulus is squared, every term is positive, and the sum must also be positive. (Notice that in general the inner product is a complex number and cannot be compared with zero, but in the special case of $⟨u, u⟩$ the result is a real number.)

The phrase, “with equality if and only if” means that we want to show that the statement $⟨u, u⟩ = 0$ (i.e. with equality) is equivalent (“if and only if”) to the statement $u = 0$.

If $u = 0$, then it is a straightforward computation to see that $⟨u, u⟩ = 0$. In the other direction, assume that $⟨u, u⟩ = 0$. As before, $⟨u, u⟩$ is a sum of moduli. So we have

$$
0 = ⟨u, u⟩ = |[u]\_1|^{2} + |[u]\_2|^{2} + |[u]\_3|^{2} + \dots + |[u]\_m|^{2}
$$ 

Now we have a sum of squares equaling zero, so each term must be zero. Then by similar logic, $|[u]\_i| = 0$ will imply that $[u]\_i = 0$, since $0 + 0i$ is the only complex number with zero modulus. Thus every entry of $u$ is zero and so $u = 0$, as desired.

## Reference

1. [linear.ups.edu - theorem PIP, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)