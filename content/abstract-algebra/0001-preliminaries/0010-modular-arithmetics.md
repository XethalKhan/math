# Modular arithmetics

When $a = qn + r$, where $q$ is the quotient and $r$ is the remainder upon dividing $a$ by $n$, we write $a\\;mod\\;n = r$.

$$
3
\\;
mod
\\;
2
=
1
\\;\\;\\;
\text{ since }
\\;\\;\\;
3 = 1 \times 2 + 1
$$

$$
6
\\;
mod
\\;
2
=
0
\\;\\;\\;
\text{ since }
\\;\\;\\;
6 = 3 \times 2 + 0
$$

$$
11
\\;
mod
\\;
3
=
2
\\;\\;\\;
\text{ since }
\\;\\;\\;
11 = 3 \times 3 + 2
$$

$$
62
\\;
mod
\\;
85
=
62
\\;\\;\\;
\text{ since }
\\;\\;\\;
62 = 0 \times 85 + 62
$$

$$
-2
\\;
mod
\\;
15
=
13
\\;\\;\\;
\text{ since }
\\;\\;\\;
-2 = -1 \times 15 + 13
$$

If $a$ and $b$ are integers and $n$ is a positive integer, then $a \\; mod \\; n = b$ if and only if $n | a - b$.

The integers $mod \\; n$ also partitions $\mathbb{Z}$ into $n$ different **equivalence classes**, we will denote the set of these equivalence classes by $\mathbb{Z}_n$. Consider the integers modulo $12$ and the corresponding partition of the integers:

$$
[0] = \\{\dots , -12, 0, 12, 24, \dots\\}
$$

$$
[1] = \\{\dots , -11, 1, 13, 25, \dots\\}
$$

$$
\dots
$$

$$
[11] = \\{\dots , -1, 11, 23, 35, \dots\\}
$$

For two integers $a$ and $b$, we define **addition modulo $n$** to be $(a + b) \\; mod \\; n$; that is the remainder when $a + b$ is divided by $n$. Similarly, **multiplication modulo $n$** is defined as $(a b) \\; mod \\; n$, the remainder when $a b$ is divided by $n$.

## Reference

1. Joseph A. Gallian, *Contemporary Abstract Algebra* (page 7)
2. [abstract.pugetsound.edu section 3.1., sunsection The integers mod n](http://abstract.pugetsound.edu/aata/groups-section-mod-n-sym.html)