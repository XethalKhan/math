# Finite additivity of probability

For every finite sequence $A_1, \dots , A_{N}$ of pairwise disjoint events ($A_i \cap A_j = \emptyset$ whenever $i \neq j$),

$$
\mathbb{P}(A_1 \cup \dots \cup A_{N}) = \mathbb{P}(A_1) + \dots + \mathbb{P}(A_{N})
$$

## Proof

We will use third axiom of probability - if $A1, A2,...$ are disjoint then $\mathbb{P}(\displaystyle\bigcup_{i = 1}^{\infty} A_i) = \displaystyle\sum_{i = 1}^{\infty} \mathbb{P}(A)$

Since there are $N$ finite events, and third axiom of probability assumes infinite number of events, we will set $E_{k} = \emptyset$ for every $k \gt N$. We get

$$
\mathbb{P}(A_{1} \cup \dots \cup A_{N}) = \mathbb{P}(\displaystyle\bigcup^{\infty}_{i = 1} A_{i}) = \displaystyle\sum^{\infty}_{i = 1} \mathbb{P}(A_{i}) = \mathbb{P}(A_1) + \dots + \mathbb{P}(A_{N}) + 0
$$

The last equality is the same as our proposition.

## Reference

1. [Probability - The analysis of data - Volume 1 - 1.2. The Probability Function](http://theanalysisofdata.com/probability/1_2.html)