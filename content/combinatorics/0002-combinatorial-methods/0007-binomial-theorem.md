# Binomial theorem

Let $X$ be one of the standard number systems $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$ or $\mathbb{C}$.

Let $x, y \in X$.

Then:

$$
\forall n \in Z_{\geq 0} : (x + y)^n = \sum^{n}_{k = 0} \binom{n}{k} x^{n - k} y^{k}
$$

$$
= x^{n} + \binom{n}{1} x^{n−1} y + \binom{n}{2} x^{n - 2} y^{2} + \binom{n}{3} x^{n - 3} y^{3} + \dots + \binom{n}{n} y^{n}
$$

## Proof

### Basis for the induction

For $n = 0$ we have:

$$
(x + y)^{0} = 1 = \binom{0}{0} x^{0 -0} y^{0} = \sum^{0}_{k = 0} \binom{0}{k} x^{0 - k} y^{k}
$$

### Induction Hypothesis

$$
(x + y)^n = \sum^{n}_{k = 0} \binom{n}{k} x^{n - k} y^{k}
$$

### Induction step

$$
(x + y)^{n + 1} = (x + y)(x + y)^{n}
$$

$$
= x \sum^{n}_{k = 0} \binom{n}{k} x^{n - k} y^{k} + y \sum^{n}_{k = 0} \binom{n}{k} x^{n - k} y^{k}
$$

$$
= \sum^{n}_{k = 0} \binom{n}{k} x^{n + 1 - k} y^{k} + \sum^{n}_{k = 0} \binom{n}{k} x^{n - k} y^{k + 1}
$$

$$
= \binom{n}{0} x^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\sum^{n}_{k = 1} \binom{n}{k} x^{n + 1 - k} y^{k}
\\;\\;\\;
+
\\;\\;\\;
\binom{n}{n} y^{n + 1}
\\;\\;\\;
+ 
\\;\\;\\;
\sum^{n - 1}_{k = 0} \binom{n}{k} x^{n - k} y^{k + 1}
$$

$$
= x^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
y^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\sum^{n}_{k = 1} \binom{n}{k} x^{n + 1 - k} y^{k}
\\;\\;\\;
+ 
\\;\\;\\;
\sum^{n - 1}_{k = 0} \binom{n}{k} x^{n - k} y^{k + 1}
$$

$$
= \binom{n + 1}{0} x^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\binom{n + 1}{n + 1} y^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\sum^{n}_{k = 1} \binom{n}{k} x^{n + 1 - k} y^{k}
\\;\\;\\;
+ 
\\;\\;\\;
\sum^{n}_{k = 1} \binom{n}{k - 1} x^{n + 1 - k} y^{k}
$$

$$
= \binom{n + 1}{0} x^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\binom{n + 1}{n + 1} y^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\sum^{n}_{k = 1} (\binom{n}{k} + \binom{n}{k - 1}) x^{n + 1 - k} y^{k}
$$

$$
= \binom{n + 1}{0} x^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\binom{n + 1}{n + 1} y^{n + 1}
\\;\\;\\;
+
\\;\\;\\;
\sum^{n}_{k = 1} \binom{n + 1}{k} x^{n + 1 - k} y^{k}
\\;\\;\\;
\text{ Pascals rule }
$$

$$
= \sum^{n + 1}_{k = 0} \binom{n + 1}{k} x^{n + 1 - k} y^{k}
$$

## Examples

### Cube of Sum

$$
(x + y)^{3} = x^{3} + 3 x^{2} y + 3 x y^{2} + y^{3}
$$

### Cube of Difference

$$
(x - y)^{3} = x^{3} - 3 x^{2} y + 3 x y^{2} - y^{3}
$$

### Fourth Power of Sum

$$
(x + y)^{4} = x^{4} + 4 x^{3} y + 6 x^{2} y^{2} + 4 x y^{3} + y^{4}
$$

### Fourth Power of Difference

$$
(x - y)^{4} = x^{4} - 4 x^{3} y + 6 x^{2} y^{2} - 4 x y^{3} + y^{4}
$$

### Fifth Power of Sum

$$
(x + y)^{5} = x^{5} + 5 x^{4} y + 10 x^{3} y^{2} + 10 x^{2} y^{3} + 5 x y^{4} + y^{5}
$$

### Fifth Power of Difference

$$
(x - y)^{5} = x^{5} - 5 x^{4} y + 10 x^{3} y^{2} - 10 x^{2} y^{3} + 5 x y^{4} - y^{5}
$$

### Sixth Power of Sum

$$
(x + y)^{6} = x^{6} + 6 x^{5} y + 15 x^{4} y^{2} + 20 x^{3} y^{3} + 15 x^{2} y^{4} + 6 x y^{5} + y^{6}
$$

### Sixth Power of Difference

$$
(x - y)^{6} = x^{6} - 6 x^{5} y + 15 x^{4} y^{2} - 20 x^{3} y^{3} + 15 x^{2} y^{4} - 6 x y^{5} + y^{6}
$$

## Reference

1. Joy Morris *Combinatorics* (page 26)
2. [Binomial theorem - proofwiki](https://proofwiki.org/wiki/Binomial_Theorem/Integral_Index) 