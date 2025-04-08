# $\mathbb{N}$ is numerically equivalent to $\mathbb{Q}$

$\mathbb{N}$ is **numerically equivalent** to $\mathbb{Q}$, in symbols $\mathbb{N} \cong \mathbb{Q}$

## Proof

We wish to define a **one-to-one mapping** of $\mathbb{N}$ onto $\mathbb{Q}$. To define a **bijection** between $\mathbb{N}$ and any set $X$, it is sufficient to create a scheme in which we "line up" the elements of $X$ in such a manner that every element of $X$ is accounted for. We then associate with each element of $X$ the positive integer corresponding to its place on the list, noting that the place of any given element of $X$ can be determined (if in no simpler way) by "counting" through the list until we arrive at that element.

The problem then for a given set $X$ we believe to be equivalent to $\mathbb{N}$ is to find such a scheme. In the case $X = \mathbb{Q}$ an ingenious scheme was developed by Cantor. We first show that $\mathbb{N}$ is equivalent to $\mathbb{Q}^{+}$, the positive rationals, by lining up the positive rationals according to the sum of their numerator and denominator.

|         | $1$               | $2$               | $3$               | $4$               | $\dots$ |
|---------|-------------------|-------------------|-------------------|-------------------|---------|
| $1$     | $\frac{1}{1}$ (A) | $\frac{1}{2}$ (B) | $\frac{1}{3}$ (D) | $\frac{1}{4}$ (G) | $\dots$ |
| $2$     | $\frac{2}{1}$ (C) | $\frac{2}{2}$ (E) | $\frac{2}{3}$ (H) | $\frac{2}{4}$     | $\dots$ |
| $3$     | $\frac{3}{1}$ (F) | $\frac{3}{2}$ (I) | $\frac{3}{3}$     | $\frac{3}{4}$     | $\dots$ |
| $4$     | $\frac{4}{1}$ (J) | $\frac{4}{2}$     | $\frac{4}{3}$     | $\frac{4}{4}$     | $\dots$ |
| $\dots$ | $\dots$           | $\dots$           | $\dots$           | $\dots$           | $\dots$ |

Note that repeats clearly occur in the array. In counting through the array of positive rationals, lined up as in figure above, we simply skip over any quotient of integers corresponding to a rational number that has already been accounted for. Thus we have $f(1) = 1, f(2) = \frac{1}{2}, f(3) = 2, f(4) = \frac{1}{3}, f(5) = 3, f(6) = \frac{1}{4}$, and so on. Note that we have skipped over $\frac{2}{2}$ in defining $f(5)$, since $\frac{2}{2} = 1$, and $1$ has already been accounted for, having been first in the array.

We move $A \rightarrow B \rightarrow C \rightarrow D \rightarrow E \rightarrow F \rightarrow G \rightarrow H \rightarrow I$.

With the equivalence of $\mathbb{N}$ and $\mathbb{Q}^{+}$ established, we may conclude $\mathbb{N} \cong \mathbb{Q}$ by showing $\mathbb{Q}^{+} \cong \mathbb{Q}$ (by transitivity of the $\cong$).

This we may do as follows. Let $\mathbb{Q}^{+} = {f(1), f(2), f(3), \dots }$ and let us set up the correspondence as in figure bellog

| $\mathbb{Q}^{+}$ | $\mathbb{Q}$ |
|------------------|--------------|
| $f(1)$           | $0$          |
| $f(2)$           | $f(1)$       |
| $f(3)$           | $- f(1)$     |
| $f(4)$           | $f(2)$       |
| $f(5)$           | $- f(2)$     |
| $f(6)$           | $f(3)$       |
| $f(7)$           | $- f(3)$     |

This mapping is clearly **onto** since every nonzero rational number is either equal to or is the negative of a positive rational number.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 281, 282)