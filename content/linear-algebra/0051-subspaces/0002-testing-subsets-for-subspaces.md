# Testing subsets for subspaces

Suppose that $V$ is a **vector space** and $W$ is a **subset** of $V$, $W \subseteq V$. Endow $W$ with the same operations as $V$. Then $W$ is a **subspace** if and only if three conditions are met

1. $W$ is nonempty, $W \neq \emptyset$.
2. If $x \in W$ and $y \in W$, then $x + y \in W$.
3. If $\alpha \in \mathbb{C}$ and $x \in W$, then $\alpha x \in W$.

## Proof

$$
p: W \text{ is a subspace }
$$

$$
q: ( W \neq \emptyset )
\\;\\;\\;
\land
\\;\\;\\;
( x \in W \land y \in W \rightarrow x + y \in W)
\\;\\;\\;
\land
\\;\\;\\;
(\alpha \in \mathbb{C} \land x \in W \rightarrow \alpha x \in W)
$$

### $p \rightarrow q$

We have the hypothesis that $W$ is a subspace, so by **Property 5 of Vector space - Zero Vector** we know that $W$ contains a **zero vector**. This is enough to show that $W \neq \emptyset$. Also, since $W$ is a **vector space** it satisfies the additive and scalar multiplication closure properties (**Property 1 of Vector space - Additive Closure, Property 2 of Vector space - Scalar Closure**), and so exactly meets the second and third conditions. If that was easy, the other direction might require a bit more work.

### $p \leftarrow q$

We have three properties for our hypothesis, and from this we should conclude that $W$ has the ten defining properties of a vector space. The second and third conditions of our hypothesis are exactly **Property 1 of Vector space - Additive Closure** and **Property 2 of Vector space - Scalar Closure**. Our hypothesis that $V$ is a vector space implies that **Property 3 of Vector space - Commutativity**, **Property 4 of Vector space - Additive Associativity**, **Property 7 of Vector space - Scalar Multiplication Associativity**, **Property 8 of Vector space - Distributivity across Vector Addition**, **Property 9 of Vector space - Distributivity across Scalar Addition** and **Property 10 of Vector space - One** all hold. They continue to be true for vectors from $W$ since passing to a subset, and keeping the operation the same, leaves their statements unchanged. Eight down, two to go.

Suppose $x \in W$. Then by the third part of our hypothesis (scalar closure), we know that $(- 1) x \in W$. By **Theorem Additive Inverses from Scalar Multiplication** $(- 1) x = - x$, so together these statements show us that $- x \in W$. $- x$ is the additive inverse of $x$ in $V$, but will continue in this role when viewed as element of the subset $W$. So every element of $W$ has an additive inverse that is an element of $W$ and **Property 6 of Vector space - Additive Inverses** is completed. Just one property left.

While we have implicitly discussed the zero vector in the previous paragraph, we need to be certain that the zero vector (of $V$) really lives in $W$. Since $W$ is nonempty, we can choose some vector $z \in W$. Then by the argument in the previous paragraph, we know $- z \in W$. Now by **Property 6 of Vector space - Additive Inverses** for $V$ and then by the second part of our hypothesis (additive closure) we see that

$$
0 = z + (- z) \in W
$$ 

So $W$ contains the zero vector from $V$. Since this vector performs the required duties of a zero vector in $V$, it will continue in that role as an element of $W$. This gives us, **Property 5 of Vector space - ero Vector**, the final property of the ten required.

## Note

So just three conditions, plus being a subset of a known vector space, gets us all ten properties. Fabulous! This theorem can be paraphrased by saying that a subspace is “a nonempty subset (of a vector space) that is closed under vector addition and scalar multiplication.”

## Example - A subspace of $P_4$

$P_4$ is the vector space of polynomials with degree at most $4$. Define a subset $W$ as

$$
W = \\{ p(x) | p \in P_4, p(2) = 0 \\}
$$

so $W$ is the collection of those polynomials (with degree 4 or less) whose graphs cross the $x$-axis at $x = 2$. Whenever we encounter a new set it is a good idea to gain a better understanding of the set by finding a few elements in the set, and a few outside it. For example $x^2 - x - 2 \in W$, while $x^4 + x^3 - 7 \not \in W$.

Is $W$ nonempty? Yes, $x - 2 \in W$.

Additive closure? Suppose $p \in W$ and $q \in W$. Is $p + q \in W$? $p$ and $q$ are not totally arbitrary, we know that $p(2) = 0$ and $q(2) = 0$. Then we can check $p + q$ for membership in $W$,

$$
(p + q)(2) = p(2) + q(2)
\\;\\;\\;
\text{ Addition in } P_4
$$

$$
= 0 + 0
\\;\\;\\;
p \in W, q \in W
$$

$$
= 0
$$

so we see that $p + q$ qualifies for membership in $W$.

Scalar multiplication closure? Suppose that $\alpha \in \mathbb{C}$ and $p \in W$. Then we know that $p(2) = 0$. Testing $\alpha p$ for membership,

$$
(\alpha p)(2) = \alpha p(2)
\\;\\;\\;
\text{ Scalar multiplication in } P_4
$$

$$
= \alpha 0
\\;\\;\\;
p \in W
$$

$$
= 0
$$

so $\alpha p \in W$.

We have shown that $W$ meets the three conditions of this theorem and so qualifies as a **subspace** of $P_4$. Notice that by definition of **subspace** we now know that $W$ is also a **vector space**. So all the properties of a vector space and related theorems apply in full.

## Reference

1. [linear.ups.edu - theorem TSS, section Subspaces](http://linear.ups.edu/html/section-S.html)