# Gauss method

If a linear system is changed to another by one of **equation operations**, then the two systems have the same **solution set**

## Proof

We take each equation operation in turn and show that the solution sets of the two systems are equal, using the definition of **set equality**.

### 1. Swapping

Consider a linear system

$$
\displaylines{
a_{11} x_1 + a_{12} x_2 + a_{13} x_3 + . . . + a_{1n} x_n = b_1\\
........................................\\
a_{i1} x_1 + a_{i2} x_2 + a_{i3} x_3 + . . . + a_{in} x_n = b_i\\
........................................\\
a_{j1} x_1 + a_{j2} x_2 + a_{j3} x_3 + . . . + a_{jn} x_n = b_j\\
........................................\\
a_{m1} x_1 + a_{m2} x_2 + a_{m3} x_3 + . . . + a_{mn} x_n = b_m
}
$$

The tuple $(s_1, s_2, . . . , s_n)$ satisfies this system if and only if substituting the values for the variables, the s'es for the x'es, gives a conjunction of true statements

$$
\displaylines{
a_{11} s_1 + a_{12} s_2 + a_{13} s_3 + . . . + a_{1n} s_n = b_1\\
........................................\\
a_{i1} s_1 + a_{i2} s_2 + a_{i3} s_3 + . . . + a_{in} s_n = b_i\\
........................................\\
a_{j1} s_1 + a_{j2} s_2 + a_{j3} s_3 + . . . + a_{jn} s_n = b_j\\
........................................\\
a_{m1} s_1 + a_{m2} s_2 + a_{m3} s_3 + . . . + a_{mn} s_n = b_m
}
$$

In a list of statements joined with **and** we can rearrange the order of the statements. Thus the requirement is met if and only if

$$
\displaylines{
a_{11} s_1 + a_{12} s_2 + a_{13} s_3 + . . . + a_{1n} s_n = b_1\\
........................................\\
a_{j1} s_1 + a_{j2} s_2 + a_{j3} s_3 + . . . + a_{jn} s_n = b_j\\
........................................\\
a_{i1} s_1 + a_{i2} s_2 + a_{i3} s_3 + . . . + a_{in} s_n = b_i\\
........................................\\
a_{m1} s_1 + a_{m2} s_2 + a_{m3} s_3 + . . . + a_{mn} s_n = b_m
}
$$

This is exactly the requirement that $(s_1, s_2, . . . , s_n)$ solves the system after the row swap.

### 2. Rescaling

Suppose $\alpha \neq 0$ is a number. Let us choose to multiply the terms of equation $i$ by $\alpha$ to build the new system of equations

$$
\displaylines{
a_{11} x_1 + a_{12} x_2 + a_{13} x_3 + . . . + a_{1n} x_n = b_1\\
a_{21} x_1 + a_{22} x_2 + a_{23} x_3 + . . . + a_{2n} x_n = b_2\\
........................................\\
\alpha a_{i1} x_1 + \alpha a_{i2} x_2 + \alpha a_{i3} x_3 + . . . + \alpha a_{in} x_n = \alpha b_i\\
........................................\\
a_{m1} x_1 + a_{m2} x_2 + a_{m3} x_3 + . . . + a_{mn} x_n = b_m
}
$$

Let $S$ denote the solutions to the system in the statement of the theorem, and let $T$ denote the solutions to the transformed system.

#### Show $S \subset T$

Suppose $(x_1, x_2, . . . , x_n) = (\beta_1, \beta_2, . . . , \beta_n) \in S$ is a solution to the original system. Ignoring the $i$-th equation for a moment we know it makes all the other equations of the transformed system true. We also know that

$$
a_{i1} x_1 + a_{i2} x_2 + a_{i3} x_3 + . . . + a_{in} x_n = b_i
$$

which we can multiply by $\alpha$ to make

$$
\alpha a_{i1} x_1 + \alpha a_{i2} x_2 + \alpha a_{i3} x_3 + . . . + \alpha a_{in} x_n = \alpha b_i
$$

This says that the $i$-th equation of the transformed system is also true, so we have established that $(\beta_1, \beta_2, . . . , \beta_n) \in T$ and therefore $S \subset T$.

#### Now show that $T \subset S$

Suppose $(x_1, x_2, . . . , x_n) = (\beta_1, \beta_2, . . . , \beta_n) \in T$ is a solution to the transformed system. Ignoring the $i$-th equation for a moment, we know it makes all the other equations of the original system true. We also know that

$$
\alpha a_{i1} x_1 + \alpha a_{i2} x_2 + \alpha a_{i3} x_3 + . . . + \alpha a_{in} x_n = \alpha b_i
$$

Which we can multiply by $\frac{1}{\alpha}$, since $\alpha \neq 0$, to get

$$
a_{i1} x_1 + a_{i2} x_2 + a_{i3} x_3 + . . . + a_{in} x_n = b_i
$$

This says that the $i$-th equation of the original system is also true, so we have established that $(\beta_1, \beta_2, . . . , \beta_n) \in S$ and therefore $T \subset S$.

