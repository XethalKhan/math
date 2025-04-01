# Limit inequality over interval for f under g

If $f(x) \leq g(x)$ for all $x$ on $[a, b]$ (except possibly at $x = c$) and $a \leq c \leq b$ then,

$$
\lim\limits_{x \rightarrow c} f(x) \leq \lim\limits_{x \rightarrow c} g(x)
$$

Note that this fact should make some sense to you if we assume that both functions are **nice enough / continuous**. If both of the functions are “nice enough” to use the limit evaluation fact then we have,

$$
\lim\limits_{x \rightarrow c} f(x) = f(c) \leq g(c) = \lim\limits_{x \rightarrow c} g(x)
$$

The inequality is true because we know that $c$ is somewhere between $a$ and $b$ and in that range we also know $f(x) \leq g(x)$.

Note that we don’t really need the two functions to be nice enough for the fact to be true, but it does provide a nice way to give a quick “justification” for the fact.

Also, note that we said that we assumed that $f(x) \leq g(x)$ for all $x$ on $[a, b]$ (except possibly at $x = c$). Because limits do not care what is actually happening at $x = c$ we don’t really need the inequality to hold at that specific point. We only need it to hold around $x = c$ since that is what the limit is concerned about.

## Reference

1. [Paul's online notes - Calculus I - Limits - Computing Limits](https://tutorial.math.lamar.edu/Classes/CalcI/ComputingLimits.aspx)