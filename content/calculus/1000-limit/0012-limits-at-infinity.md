# Limits at infinity

## Informal definition

By **limits at infinity** we mean one of the following two limits.

$$
\lim\limits_{x \rightarrow \infty} f(x)
\\;\\;\\;\\;\\;
\lim\limits_{x \rightarrow - \infty} f(x)
$$

In other words, we are going to be looking at what happens to a function if we let $x$ get very large in either the positive or negative sense. Also, these limits may also have infinity as a value.

## Formal definition

### Limit at positive infinity

Let $f(x)$ be a function defined on $x \gt K$ for some $K$. Then we say that,

$$
\lim\limits_{x \rightarrow \infty} f(x) = L
$$

if for every number $\epsilon \gt 0$ there is some number $M \gt 0$ such that

$$
| f(x) - L | \lt \epsilon
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
x \gt M
$$

### Limit at negative infinity

Let $f(x)$ be a function defined on $x \lt K$ for some $K$. Then we say that,

$$
\lim\limits_{x \rightarrow - \infty} f(x) = L
$$

if for every number $\epsilon \gt 0$ there is some number $N \lt 0$ such that

$$
| f(x) - L | \lt \epsilon
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
x \lt N
$$

### Note

To see what these definitions are telling us here is a quick sketch illustrating limit at positive infinity. **Formal definition of limit at positive infinity** tells us is that no matter how close to $L$ we want to get, mathematically this is given by $| f(x) - L | \lt \epsilon$ for any chosen $\epsilon$, we can find another number $M$ such that provided we take any $x$ bigger than $M$, then the graph of the function for that $x$ will be closer to $L$ than either $L - \epsilon$ and $L + \epsilon$. Or, in other words, the graph will be in the shaded region as shown in the sketch below.

![Limit at positive infinity](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit_Files/image003.png)

Finally, note that the smaller we make $\epsilon$ the larger we’ll probably need to make $M$.

## Example

If $r$ is a positive rational number and $c$ is any real number then,

$$
\lim\limits_{x \rightarrow \infty} \frac{c}{x^r} = 0
$$

If $r$ is a positive rational number, $c$ is any real number and $x^r$ is defined for $x \lt 0$ then,

$$
\lim\limits_{x \rightarrow - \infty} \frac{c}{x^r} = 0
$$

The first part of this fact should make sense if you think about it. Because we are requiring $r \gt 0$ we know that $x^r$ will stay in the denominator. Next as we increase $x$ then $x^r$ will also increase. So, we have a constant divided by an increasingly large number and so the result will be increasingly small. Or, in the limit we will get zero.

The second part is nearly identical except we need to worry about $x^r$ being defined for negative $x$. This condition is here to avoid cases such as $r = \frac{1}{2}$. If this $r$ were allowed we’d be taking the square root of negative numbers which would be complex and we want to avoid that at this level.

Note as well that the sign of $c$ will not affect the answer. Regardless of the sign of $c$ we’ll still have a constant divided by a very large number which will result in a very small number and the larger $x$ get the smaller the fraction gets. The sign of $c$ will affect which direction the fraction approaches zero (i.e. from the positive or negative side) but it still approaches zero.

## Reference

1. [Paul's online notes - Calculus I - Limits - Limits At Infinity, Part I](https://tutorial.math.lamar.edu/Classes/CalcI/LimitsAtInfinityI.aspx)
2. [Paul's online notes - Calculus I - Limits - The Definition of the Limit](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx)