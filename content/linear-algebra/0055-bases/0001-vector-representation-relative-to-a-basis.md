# Vector Representation Relative to a Basis

Suppose that $V$ is a **vector space** and $B = \\{ v_1, v_2, v_3, \dots , v_m \\}$ is a **linearly independent** set that **spans** $V$. Let $w$ be any vector in $V$. Then there exist **unique** scalars $a_1, a_2, a_3, \dots , a_m$ such that

$$
w = a_1 v_1 + a_2 v_2 + a_3 v_3 + \dots + a_m v_m
$$

## Proof

That $w$ can be written as a **linear combination** of the vectors in $B$ follows from the **spanning** property of the set (Definition **Spanning set of vector space**). This is good, but not the meat of this theorem. We now know that for any choice of the vector $w$ there exist some scalars that will create $w$ as a linear combination of the basis vectors. The real question is: Is there more than one way to write $w$ as a linear combination of $\\{ v_1, v_2, v_3, \dots , v_m \\}$? Are the scalars $a_1, a_2, a_3, \dots , a_m$ unique?

Assume there are two different linear combinations of $\\{ v_1, v_2, v_3, \dots , v_m \\}$ that equal the vector $w$. In other words there exist scalars $a_1, a_2, a_3, \dots , a_m$ and $b_1, b_2, b_3, \dots , b_m$ so that

$$
w = a_1 v_1 + a_2 v_2 + a_3 v_3 + \dots + a_m v_m
$$

$$
w = b_1 v_1 + b_2 v_2 + b_3 v_3 + \dots + b_m v_m
$$

Then notice that

$$
0 = w + (- w)
\\;\\;\\;
\text{ Property 6 of Vector space - Additive Inverses }
$$

$$
= w + (- 1) w
\\;\\;\\;
\text{ Theorem Additive Inverses from Scalar Multiplication }
$$

$$
= (a_1 v_1 + a_2 v_2 + a_3 v_3 + \dots + a_m v_m) + (- 1)(b_1 v_1 + b_2 v_2 + b_3 v_3 + \dots + b_m v_m)
$$

$$
= (a_1 v_1 + a_2 v_2 + a_3 v_3 + \dots + a_m v_m) + (- b_1 v_1 - b_2 v_2 - b_3 v_3 - \dots - b_m v_m)
\\;\\;\\;
\text{ Property 8 of Vector space - Distributivity across Vector Addition }
$$

$$
= (a_1 - b_1) v_1 + (a_2 - b_2) v_2 + (a_3 - b_3) v_3 + \dots + (a_m - b_m) v_m
\\;\\;\\;
\text{ Property 3 and 9 of Vector space - Commutativity and Distributivity across Scalar Addition }
$$

But this is a relation of **linear dependence on a linearly independent set of vectors**! Now we are using the other assumption about $B$, that $\\{ v_1, v_2, v_3, \dots , v_m \\}$ is a linearly independent set. So by Definition of **Linear Independence** it must happen that the scalars are all zero. That is,

$$
(a_i - b_i) = 0 \rightarrow a_i = b_i, 1 \leq i \leq m
$$

And so we find that the scalars are unique.

## Note

This is a very typical use of the hypothesis that a set is linearly independent — obtain a relation of linear dependence and then conclude that the scalars must all be zero. The result of this theorem tells us that we can write any vector in a vector space as a linear combination of the vectors in a linearly independent spanning set, but only just. There is only enough raw material in the spanning set to write each vector one way as a linear combination. So in this sense, we could call a linearly independent spanning set a “minimal spanning set.” These sets are so important that we will give them a simpler name (“basis”) and explore their properties further.

## Reference

1. [linear.ups.edu - theorem VRRB, section Linear Independence and Spanning Sets](http://linear.ups.edu/html/section-LISS.html)