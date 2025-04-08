# Conditional probability

If $\mathbb{P}(B) \gt 0$ then the **conditional probability of $A$ given $B$** is

$$
\mathbb{P}(A | B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} 
$$

Think of $\mathbb{P}(A | B)$ as the fraction of times $A$ occurs among those in which $B$ occurs. For any fixed $B$ such that $\mathbb{P}(B)\gt 0, \mathbb{P}( \bullet | B)$ is a probability (i.e., it satisfies the three axioms of probability). In particular, $\mathbb{P}(A | B) \geq 0, \mathbb{P}(\Omega | B) = 1$ and if $A_1, A_2, \dots$ are **disjoint** then $\mathbb{P}(\cup_{i = 1}^{\infty} A_i | B) = \sum_{i = 1}^{\infty} \mathbb{P}(A_i | B)$. But it is **in general not true** that $\mathbb{P}(A | B \cup C) = \mathbb{P}(A | B) + \mathbb{P}(A | C)$. The rules of probability apply to events on the left of the bar. In general it is **not the case** that $\mathbb{P}(A | B) = \mathbb{P}(B | A)$.

People get this confused all the time. For example, the probability of spots given you have measles is $1$ but the probability that
you have measles given that you have spots is not $1$. In this case, the difference between $\mathbb{P}(A | B)$ and $\mathbb{P} (B | A)$ is obvious but there are cases where it is less obvious. This mistake is made often enough in legal cases that it is sometimes called the **prosecutor’s fallacy**.

## Example

|     | $D$     | $D'$    |
|-----|---------|---------|
| $+$ | $0.009$ | $0.099$ |
| $-$ | $0.001$ | $0.891$ |

From the definition of conditional probability

### Probability of positive result, given you have disease

$$
\mathbb{P}(+ | D) = \frac{\mathbb{P}(+ \cap D)}{\mathbb{P}(D)} = \frac{.009}{.009 + .001} = .9
$$

### Probability of negative result, given you don't have disease

$$
\mathbb{P}(− | D') = \frac{\mathbb{P}(− \cap D')}{\mathbb{P}(D')} = \frac{.891}{.891 + .099} \approx .9
$$

Apparently, the test is fairly accurate. Sick people yield a positive 90 percent of the time and healthy people yield a negative about 90 percent of the time. Suppose you go for a test and get a positive. What is the probability you have the disease? Most people answer .90. The correct answer is

### Probability of having disease, give you tested positive

$$
\mathbb{P}(D | +) = \frac{\mathbb{P}(+ \cap D)}{\mathbb{P}(+)} = \frac{.009}{.009 + .099} \approx .08
$$

The lesson here is that you need to compute the answer numerically. Don’t trust your intuition.

## Lemma - conditional probability of independent events

If $A$ and $B$ are **independent events** then $\mathbb{P}(A | B) = \mathbb{P}(A)$. Also, for any pair of events $A$ and $B$,

$$
\mathbb{P}(A \cap B) = \mathbb{P}(A | B) \mathbb{P}(B) = \mathbb{P}(B | A) \mathbb{P}(A)
$$

From this lemma, we see that another interpretation of **independence** is that knowing $B$ doesn’t change the probability of $A$. The formula $\mathbb{P}(A \cap B) = \mathbb{P}(A) \mathbb{P}(B | A)$ is sometimes helpful for calculating probabilities.

## Summary

1. If $\mathbb{P}(B) \gt 0$, then $\mathbb{P}(A | B) = \mathbb{P}(A \cap B) \mathbb{P}(B)$.
2. $\mathbb{P}( \bullet | B)$ satisfies the axioms of probability, for fixed $B$. In general, $\mathbb{P}(A | \bullet )$ does not satisfy the axioms of probability, for fixed A.
3. In general, $\mathbb{P}(A | B) \neq \mathbb{P}(B | A)$.
4. $A$ and $B$ are independent if and only if $\mathbb{P}(A | B) = \mathbb{P}(A)$.

## Reference

1. Larry Wasserman **All of statistics** (page 10, 11, 12)