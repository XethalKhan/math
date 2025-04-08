# Transformation of several random variables

In some cases we are interested in transformations of several random variables. For example, if $X$ and $Y$ are given random variables, we might want to know the distribution of $\frac{X}{Y}, X + Y , max{X, Y} \text{ or } min{X, Y}$. Let $Z = r(X, Y)$ be the function of interest. The steps for finding $f_{Z}$ are the same as before

1. For each $z$, find the set $A_{z} = {(x, y): r(x, y) \leq z}$
2. Find the CDF

$$
F_{Z}(z) = \mathbb{P}(Z \leq z) = \mathbb{P}(r(X, Y) \leq z) = \mathbb{P}({(x, y): r(x, y) \leq z}) = \int \int_{A_{z}} f_{X, Y}(x, y) \\; dx \\; dy
$$

## TODO - Example 2.48

## Reference

1. Larry Wasserman **All of statistics** (page 42)