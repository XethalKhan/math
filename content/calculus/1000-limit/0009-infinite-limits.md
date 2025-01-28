# Infinite limits

## Positive infinity

### Informal definition

We say

$$
\lim\limits_{x \rightarrow a} f(x) = \infty
$$

if we can make $f(x)$ arbitrarily large for all $x$ sufficiently close to $x = a$, from both sides, without actually letting $x = a$.

### Formal definition

Let $f(x)$ be a function defined on an interval that contains $x = a$, except possibly at $x = a$. Then we say that,

$$
\lim\limits_{x \rightarrow a} f(x) = \infty
$$

if for every number $M \gt 0$ there is some number $\delta \gt 0$ such that

$$
f(x) \gt M
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
0 \gt | x - a | \gt \delta
$$

## Negative infinity

### Informal definition

We say

$$
\lim\limits_{x \rightarrow a} f(x) = - \infty
$$

if we can make $f(x)$ arbitrarily large and negative for all $x$ sufficiently close to $x = a$, from both sides, without actually letting $x = a$.

### Formal definition

Let $f(x)$ be a function defined on an interval that contains $x = a$, except possibly at $x = a$. Then we say that,

$$
\lim\limits_{x \rightarrow a} f(x) = - \infty
$$

if for every number $N \gt 0$ there is some number $\delta \gt 0$ such that

$$
f(x) \gt N
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
0 \gt | x - a | \gt \delta
$$

## Note

In these two definitions note that $M$ must be a positive number and that $N$ must be a negative number. That’s an easy distinction to miss if you aren’t paying close attention.

![Positive infinite limit](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit_Files/image002.png)

What **formal definition for positive infinite limit** is telling us is that no matter how large we choose $M$ to be we can always find an interval around $x = a$, given by $0 \gt | x - a | \gt \delta$ for some number $\delta$, so that as long as we stay within that interval the graph of the function will be above the line $y = M$ as shown in the graph above. Also note that we don’t need the function to actually exist at $x = a$ in order for the definition to hold. This is also illustrated in the graph above.

Note as well that the larger $M$ is the smaller we’re probably going to need to make $\delta$.

To see an illustration of **formal definition for negative infinite limit** reflect the above graph about the $x$-axis and you’ll see a sketch.

## Reference

1. [Paul's online notes - Calculus I - Limits - Infinite Limits](https://tutorial.math.lamar.edu/Classes/CalcI/InfiniteLimits.aspx)
2. [Paul's online notes - Calculus I - Limits - The Definition of the Limit](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx)