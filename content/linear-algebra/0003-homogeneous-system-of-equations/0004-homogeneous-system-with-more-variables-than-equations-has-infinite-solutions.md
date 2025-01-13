# Homogeneous system with more variables than equations has infinite solutions

Suppose that a homogeneous system of linear equations has $m$ equations and $n$ variables with $n \gt m$. Then the system has infinitely many solutions.

## Proof

$$
p = \text{ system is homogeneous }
$$

$$
q = n \gt m
$$

$$
r = \text{ system has infinitely many solutions }
$$

We want to prove $p \land q \rightarrow r$

We are assuming the system is homogeneous ($p = T$), so theorem [**Homogeneous Systems are Consistent**](./0002-homogeneous-systems-are-consistent.md) says it is consistent. Then the hypothesis that $n \gt m$ ($q = T$), together with theorem [**Consistent system with more variables than equations has infinite solutions**](./../0002-types-of-solution-sets/0007-consistent-system-with-more-variables-than-equations-has-infinite-solutions.md), gives infinitely many solutions.

$$
p = T
$$

$$
s = \text{ Homogeneous Systems are Consistent } = T
$$

$$
t = p \land s = \text{ system is consistent }
$$

$$
q = T
$$

$$
u = \text{ Consistent system with more variables than equations has infinite solutions } = T
$$

$$
t \land q \land u \rightarrow r
$$

## Reference

1. [linear.ups.edu - theorem HMVEI, section Homogeneous Systems of Equations](http://linear.ups.edu/html/section-HSE.html)