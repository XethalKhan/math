# Continuous ("nice enough")

## Informal definition

Provided $f(x)$ is **nice enough** we have,

$$
\lim\limits_{x \rightarrow a} f(x) = f(a)
$$

$$
\lim\limits_{x \rightarrow a^{-}} f(x) = f(a)
$$

$$
\lim\limits_{x \rightarrow a^{+}} f(x) = f(a)
$$

## Formal definition 1

A function $f(x)$ is said to be **continuous** at $x = a$ if

$$
\lim\limits_{x \rightarrow a} f(x) = f(a)
$$

A function is said to be **continuous on the interval** $[a, b]$ if it is **continuous** at each point in the interval.

If $f(x)$ is **continuous** at $x = a$ then,

$$
\lim\limits_{x \rightarrow a} f(x) = f(a)
\\;\\;\\;
\lim\limits_{x \rightarrow a^{-}} f(x) = f(a)
\\;\\;\\;
\lim\limits_{x \rightarrow a^{+}} f(x) = f(a)
$$

## Formal definition 2

Let $f(x)$ be a function defined on an interval that contains $x = a$. Then we say that $f(x)$ is **continuous** at $x = a$ if for every number $\epsilon \gt 0$ there is some number $\delta \gt 0$ such that

$$
| f(x) - f(a) | \lt \epsilon
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
0 \lt | x - a | \lt \delta
$$

## Reference

1. [Paul's online notes - Calculus I - Limits - Limit Properties](https://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties.aspx)
2. [Paul's online notes - Calculus I - Limits - Continuity](https://tutorial.math.lamar.edu/Classes/CalcI/Continuity.aspx)
3. [Paul's online notes - Calculus I - Limits - The Definition of the Limit](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx)