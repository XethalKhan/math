# Basic properties of probability

One can derive many properties of $\mathbb{P}$ from the axioms, such as:

$$
\mathbb{P}(\emptyset)=0
$$

$$
\mathbb{P}(A') = 1 − \mathbb{P}(A)
$$

$$
0 \leq P(A) \leq 1
$$

$$
A \subset B \rightarrow \mathbb{P}(A) \leq \mathbb{P}(B)
$$

$$
A \cap B = \emptyset \rightarrow \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)
$$

## Proof

### 1. $\mathbb{P}(\emptyset)=0$

Using the second and third axioms of probability,

$$
1 = \mathbb{P}(\Omega)
\\;\\;\\;
=
\\;\\;\\;
\mathbb{P}(\Omega \cup \emptyset \cup \emptyset \cup \dots)
\\;\\;\\;
=
\\;\\;\\;
\mathbb{P}(\Omega) + \mathbb{P}(\emptyset) + \mathbb{P}(\emptyset) + \dots = 1 + \mathbb{P}(\emptyset) + \mathbb{P}(\emptyset) + \dots
$$

implying that $\mathbb{P}(\emptyset) = 0$ (since $\mathbb{P}(A) \geq 0$ for all $A$).

### 2. $\mathbb{P}(A') = 1 − \mathbb{P}(A)$

By [**finite additivity**](./0004-finite-additivity-of-probability.md)

$$
1 = \mathbb{P}(\Omega) = \mathbb{P}(A \cup A') = \mathbb{P}(A) + P(A')
$$

### 3. $0 \leq P(A) \leq 1$

We will use proposition $\mathbb{P}(A') = 1 − \mathbb{P}(A)$. Since all probabilities are non-negative (second axiom of probability $\mathbb{P}(A) \geq 0$ for every $A$) we have

$$
\mathbb{P}(A') = 1 − \mathbb{P}(A) \geq 0
$$

proving that $\mathbb{P}(A) \leq 1$

### 5. $A \cap B = \emptyset \rightarrow \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$

See [**Finite additivity of probability**](./0004-finite-additivity-of-probability.md)

## Reference

1. Larry Wasserman **All of statistics** (page 6)
2. [Probability - The analysis of data - Volume 1 - 1.2. The Probability Function](http://theanalysisofdata.com/probability/1_2.html)