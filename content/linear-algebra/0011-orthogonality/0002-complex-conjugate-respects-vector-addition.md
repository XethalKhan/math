# Complex conjugate respects vector addition

Suppose $x$ and $y$ are two vectors from $\mathbb{C}^m$. Then

$$
\overline{x + y} = \overline{x} + \overline{y}
$$

## Proof

For each $1 \leq i \leq m$,

$$
[\overline{x + y}]\_{i} = \overline{[x + y]\_{i}}
\\;\\;\\;
\text{ Definition Complex Conjugate of Complex Vector }
$$

$$
= \overline{[x]\_{i} + [y]\_{i}}
\\;\\;\\;
\text{ Definition Column Vector Addition }
$$

$$
= \overline{[x]\_{i}} + \overline{[y]\_i}
\\;\\;\\;
\text{ Theorem Complex Conjugate Respects Addition }
$$

$$
= [\overline{x}]\_{i} + [\overline{y}]\_{i}
\\;\\;\\;
\text{ Definition Complex Conjugate of Column Vector }
$$

$$
=[\overline{x} + \overline{y}]\_{i}
\\;\\;\\;
\text{ Definition Column Vector Addition }
$$

Then by definition for Column Vector Equality we have $\overline{x + y} = \overline{x} + \overline{y}$.

## Reference

1. [linear.ups.edu - theorem CRVA, section Orthogonality](http://linear.pugetsound.edu/html/section-O.html)