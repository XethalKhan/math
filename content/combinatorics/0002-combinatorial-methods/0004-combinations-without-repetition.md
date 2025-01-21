# Combinations without repetition

A combination involves choosing items from a finite population in which every item is uniquely identified, but the order in which the choices are made is unimportant.

An example of this is choosing a set of problems for an exam. Although the order in which the questions are arranged may make the exam more or less intimidating, what really matters is which questions are on the exam, and which are not.

Let $n$ be a positive natural number, and $0 \leq r \leq n$. Assume that we have $n$ distinct objects. An **$r$-combination** of the $n$ objects is a subset consisting of $r$ of the objects.

## Formula

The number of **$r$-combinations** of $n$ objects is

$$
\frac{n!}{r!(n − r)!}
$$

## Proof

Suppose that we knew there are $k$ unordered $r$-subsets of $n$ objects (i.e. $r$-combinations). For each of these $k$ unordered subsets, there are $r!$ ways in which we could order the elements. This tells us that

$$
k \times r! = \frac{n!}{(n − r)!}
$$

Rearranging the equation, we obtain

$$
k = \frac{n!}{r!(n − r)!}
$$

## Notation

We use $\binom{n}{r}$ to denote the number of $r$-combinations of n objects, so

$$
\binom{n}{r} = \frac{n!}{r!(n − r)!}
$$

## Note

Notice that when $r = n$, we have

$$
\binom{n}{n} = \frac{n!}{n!(n − n)!} = \frac{n!}{n!0!} = \frac{n!}{n!} = 1
$$

coinciding with our earlier observation that there is only one way in which all of the $n$ objects can be chosen. Similarly,

$$
\binom{n}{0} = \frac{n!}{0!(n − 0)!} = 1
$$

there is exactly one way of choosing none of the $n$ objects.

## Example

For a magic trick, you ask a friend to draw three cards from a standard deck of 52 cards. How many possible sets of cards might they have chosen?

$$
\binom{52}{3} = \frac{52!}{3!(52 − 3)!} = \frac{52 \times 51 \times 50}{3 \times 2} = \frac{132600}{6} = 22100
$$

## Reference

1. Joy Morris *Combinatorics* (page 22, 23, 25)