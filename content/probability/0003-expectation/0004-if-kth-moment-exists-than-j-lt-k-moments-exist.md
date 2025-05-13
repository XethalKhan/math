# $k$-th moment exist and $j \lt k$ than $j$-th moment exist

If the $k$th moment exists and if $j \lt k$ then the $j$th moment exists.

## Proof

We have

$$
\mathbb{E}(|X|^{j}) = \int^{\infty}_{- \infty} | x |^{j} \\; f_{X}(x) \\; dx
$$

$$
= \int_{| x | \leq 1} | x |^{j} f_{X}(x) \\; dx + \int_{| x | \gt 1} | x |^{j} f_{X}(x) \\; dx
$$

We have seperated integral into two integrals. First is from $-1$ up to $1$ (expressed as absolute value $| x | \leq 1$). Second one is from $- \infty$ up to $- 1$, and from $1$ up to $\infty$ (expressed as absolute value $| x | \gt 1$). Pay attention to the $\leq$ in following steps.

$$
\leq \int_{| x | \leq 1} f_{X}(x) \\; dx + \int_{| x | \gt 1} | x |^{k} f_{X}(x) \\; dx
$$

### Notice

Powers of numbers in range between $- 1$ and $1$ are getting smaller and smaller as power increases. In $\int_{| x | \leq 1} | x |^{j} f_{X}(x) \\; dx $ once we remove $| x |^{j}$ we have

$$
\int_{| x | \leq 1} | x |^{j} f_{X}(x) \\; dx \leq \int_{| x | \leq 1} f_{X}(x) \\; dx
$$

$k$ is bigger than $j$ so

$$
\int_{| x | \gt 1} | x |^{j} f_{X}(x) \\; dx \leq \int_{| x | \gt 1} | x |^{k} f_{X}(x) \\; dx
$$

### Wrapping up

$$
\leq \int_{| x | \leq 1} f_{X}(x) \\; dx + \int_{| x | \gt 1} | x |^{k} f_{X}(x) \\; dx \leq 1 + \mathbb{E}(|X|^{k}|) \lt \infty
$$

$\mathbb{E}(|X|^{k}|)$ satisfies the condition for existance of moment that $\mathbb{E}(|X|^{k}|) \lt \infty$, and increasing $\mathbb{E}(|X|^{k}|)$ that condition still holds. We showed that $\mathbb{E}(|X|^{j}|) \lt \infty$ and proved that its a moment, concluding our proof.

## Reference

1. Larry Wasserman **All of statistics** (page 49, 50)