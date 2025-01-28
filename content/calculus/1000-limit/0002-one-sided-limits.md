# One sided limits

## Right-handed limit

### Informal definition

We say

$$
\lim\limits_{x \rightarrow a^+} f(x) = L
$$

provided we can make $f(x)$ as close to $L$ as we want for all $x$ sufficiently close to $a$ with $x \gt a$ without actually letting $x$ be $a$.

### Formal definition

For the right-hand limit we say that,

$$
\lim\limits_{x \rightarrow a^+} f(x) = L
$$

if for every number $\epsilon \gt 0$ there is some number $\delta \gt 0$ such that

$$
| f(x) - L | \lt \epsilon
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
0 \lt | x - a | \lt \delta
\\;\\;\\;
(\text{ or } a \lt x \lt a + \delta)
$$

## Left-handed limit

We say

$$
\lim\limits_{x \rightarrow a^-} f(x) = L
$$

provided we can make $f(x)$ as close to $L$ as we want for all $x$ sufficiently close to $a$ with $x \lt a$ without actually letting $x$ be $a$.

## Formal definition

For the left-hand limit we say that,

$$
\lim\limits_{x \rightarrow a^-} f(x) = L
$$

if for every number $\epsilon \gt 0$ there is some number $\delta \gt 0$ such that

$$
| f(x) - L | \lt \epsilon
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
- \delta \lt x - a \lt 0
\\;\\;\\;
(\text{ or } a - \delta \lt x \lt a)
$$

## Reference

1. [Paul's online notes - Calculus I - Limits - One-sided Limit](https://tutorial.math.lamar.edu/Classes/CalcI/OneSidedLimits.aspx)
2. [Paul's online notes - Calculus I - Limits - The Definition of the Limit](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx)