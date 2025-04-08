# Bayes theorem

Let $A_1, \dots , A_k$ be a partition of $\Omega$ such that $\mathbb{P}(A_i) \gt 0$ for each $i$. If $\mathbb{P}(B) \gt 0$ then, for each $i = 1, \dots ,k$,

$$
\mathbb{P}(A_i | B) = \frac{\mathbb{P}(B | A_i) \mathbb{P}(A_i)}{\sum_j \mathbb{P}(B | A_j) \mathbb{P}(A_j)}
$$

## Note

We call $\mathbb{P}(A_i)$ the **prior probability of $A$** and $\mathbb{P}(A_i | B)$ the **posterior probability of $A$**.

## Proof

We apply the definition of **conditional probability** twice, followed by the **law of total probability**

$$
\mathbb{P}(A_i | B) = \frac{\mathbb{P}(A_i \cap B)}{\mathbb{P}(B)}
\\;\\;\\;
\text{ Definition of Conditional probability }
$$

$$
= \frac{\mathbb{P}(B | A_i) \mathbb{P}(A_i)}{\mathbb{P}(B)}
\\;\\;\\;
\text{ Definition of Conditional probability }
\\;\\;\\;
\mathbb{P}(B | A_i) = \frac{\mathbb{P}(A_i \cap B)}{\mathbb{P}(A_i)}
$$

$$
= \frac{\mathbb{P}(B | A_i) \mathbb{P}(A_i)}{\sum_j \mathbb{P}(B | A_j) \mathbb{P}(A_j)}
\\;\\;\\;
\text{ Law of total probability }
$$

## Example

I divide my email into three categories: $A_1 = \text{ spam }, A_2 = \text{ low priority and } A_3 = \text{high priority}$. From previous experience I find that $\mathbb{P}(A_1) = .7, \mathbb{P}(A_2) = .2 \text{ and } \mathbb{P}(A_3) = .1$. Of course, $.7 + .2 + .1 = 1$. Let $B$ be the event that the email contains the word “free.” From previous experience, $\mathbb{P}(B | A_1) = .9, \mathbb{P}(B | A_2) = .01, \mathbb{P}(B | A_3) = .01$. (Note: $.9 + .01 + .01 \neq 1.$) I receive an email with the word “free.” What is the probability that it is spam?

Bayes’ theorem yields,

$$
\mathbb{P}(A_1 | B) = \frac{.9 × .7}{(.9 × .7) + (.01 × .2) + (.01 × .1)} = .995.
$$

## Reference

1. Larry Wasserman **All of statistics** (page 12, 13)