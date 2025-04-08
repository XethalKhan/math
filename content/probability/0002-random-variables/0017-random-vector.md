# Random vector

Let $X = (X_1, \dots , X_n)$ where $X_1, \dots ,X_n$ are random variables. We call $X$ a **random vector**. Let $f(x_1, \dots , x_n)$ denote the PDF. It is possible to define their marginals, conditionals etc. much the same way as in the bivariate case. We say that $X_1, \dots , X_n$ are **independent** if, for every $A_1, \dots , A_n$,

$$
\mathbb{P}(X_1 \in A_1, \dots , X_n \in A_n) = \prod^{n}_{i = 1} \mathbb{P}(X_i \in A_i)
$$

It suffices to check that 

$$
f(x_1, \dots ,x_n) = \prod^{n}_{i = 1} f_{X_i}(x_i)
$$

## Reference

1. Larry Wasserman **All of statistics** (page 38)