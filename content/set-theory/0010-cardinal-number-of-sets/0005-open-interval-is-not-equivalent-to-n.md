# Open interval is not equivalent to $\mathbb{N}$

The open unit interval $(0, 1)$ is not numerically equivalent to $\mathbb{N}$

## Proof

In fact, we will show that every one-to-one mapping of $\mathbb{N}$ into $(0, 1)$ must fail to be **onto**; that is, every listing of the elements of $(0, 1)$ must leave out some element of $(0, 1)$.

It is a known fact that every element $x$ in $(0, 1)$ can be represented by a decimal expansion, say, $x = d_1, d_2, d_3, \dots$ We can guarantee that each such expansion is uniquely determined by $x$ if we agree to dispense with the usual convention involving infinite strings of nines. It is normally understood that any terminating decimal (like $.168$) is also represented by a decimal involving an infinite string of nines ($.167999 \dots$ in this case), thus providing a situation in which two different decimal expansions correspond to the same number. We hereby, and for the course of the current proof, disallow that understanding by outlawing the use of decimals ending in
an infinite string of nines.

So, let us assume that the elements of $(0, 1)$ have been listed in sequence $x_1, x_2, x_3, \dots$ , where

$$
x_1 = a_{11} a_{12} a_{13} \dots
$$

$$
x_2 = a_{21} a_{22} a_{23} \dots
$$

$$
x_3 = a_{31} a_{32} a_{33} \dots
$$

We now proceed to construct a decimal corresponding to a real number between $0$ and $1$ that cannot possibly be on the list. Let us denote this number $y = b_1, b_2, b_3, \dots$, where $b_1 = 4$, if $a_{11} \neq 4$ and $b_1 = 7$, if $a_{11} = 4$. Also, $b_i = a_{1i}$ for $i \geq 2$. Clearly $y \neq x_1$, because the decimal expansion of $y$ differs from that of $x_1$, in the first place.

In general, let $b_i = 4$, if $a_{ii} \neq 4$ and $b_i = 7$, if $a_{ii} = 4$. Note that, for each $i = 1, 2, 3, \dots$, we have $y \neq x_i$, because the decimal expansion of $y$ differs from that of $x_i$ in the $i$-th place. We have constructed a new decimal, different from any of those listed, contradicting the assumption that a listing of all such decimals is possible.

## Note

And so we see that there are at least two levels of infinite cardinality, or two infinite cardinal numbers. It can be proved that $(0, 1) \cong \mathbb{R}$, so that the "level of infinity" uncovered in this theorem is actually that of the real number system. Following convention, let us now agree to denote the cardinal number of $\mathbb{N}$ (and of $\mathbb{Z}, \mathbb{Q}^{+}, \text{ and } \mathbb{Q}$) by the symbol $\aleph_0$ (pronounced **aleph-null**, "aleph" is the first letter of the Hebrew alphabet). The cardinal number of $\mathbb{R}$ [and of $(0, 1)$ and $\mathbb{C}$] is denoted by $c$ and is called the **cardinal number of the continuum**.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 282, 283)