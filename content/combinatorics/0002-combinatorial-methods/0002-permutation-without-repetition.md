# Permutation without repetition

A **permutation** of $n$ distinct objects is an arrangment of those objects into an ordered line. If $1 \leq r \leq n$ (and $r$ is a natural number) then an **$r$-permutation** of $n$ objects is an arrangement of $r$ of the $n$ objects into an ordered line.

## Formula

The number of $r$-permutations of $n$ objects is

$$
n (n - 1) \dots (n - r + 1) = \frac{n!}{(n - r)!}
$$

## Proof

There are $n$ elements, so there are $n$ options for the first element.

Then there are $n − 1$ elements left that we haven't picked, so there are $n − 1$ options for the second element.

Then there are $n − 2$ elements left, so there are $n − 2$ options for the third element.

And so on, to the $r$-th element of our selection: we now have $n − (r − 1)$ possible choices.

Each mapping is independent of the choices made for all the other mappings, so by the **Product Rule for Counting**, the total number of ordered selections is

$$
P^n_r = n (n − 1) (n − 2) \dots (n −r + 1)
$$

$$
= n (n − 1) (n − 2) \dots (n−r+1) \frac{(n−r)!}{(n−r)!} \text{ multiplying top and bottom by } (n − r)!
$$

$$
= \frac{n!}{(n − r)!} \text{ simplifying the numerator }
$$

## Corollary

Number of permutations of $n$ objects is

$$
P^n_r = \frac{n!}{(n - n)!} = \frac{n!}{0!} = \frac{n!}{1} = n!
$$

## Example 1

The number of ways of choosing $4$ objects in order from a set of $52$ (for example, cards from a deck) is:

$$
P^{52}_{4} = 52 \times 51 \times 50 \times 49 = \frac{52!}{48!} = 6.497.400
$$

## Example 2

How many ways can you arrange the letters A, B, C and D?

$$
P^{4}_{4} = 4 \times 3 \times 2 \times 1 = \frac{4!}{0!} = 24
$$

Result:

ABCD, ABDC, ACBD, ACDB, ADBC, ADCB,
BACD, BADC, BCAD, BCDA, BDAC, BDCA,
CABD, CADB, CBAD, CBDA, CDAB, CDBA,
DABC, DACB, DBAC, DBCA, DCAB, DCBA

## Example 3

How many ways can you arrange two letters from the letters A, B, C and D?

$$
P^{4}_{2} = 4 \times 3 = \frac{4!}{2!} = \frac{24}{2} = 12
$$

Result: AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB, DC

## TODO

Review after defining **product rule**

## Reference

1. Joy Morris *Combinatorics* (page 19, 20)
2. [Number of permutations - proofwiki](https://proofwiki.org/wiki/Number_of_Permutations)