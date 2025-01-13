# Limit properties

First, we will assume that $\lim\limits_{x \rightarrow a} f(x)$ and $\lim\limits_{x \rightarrow a} g(x)$ exist and that $c$ is any constant. Then,

## 1.

$$
\lim\limits_{x \rightarrow a} [c f(x)] = c \lim\limits_{x \rightarrow a} f(x)
$$

In other words, we can “factor” a multiplicative constant out of a limit.

## 2. 

$$
\lim\limits_{x \rightarrow a} [f(x) \pm g(x)] = \lim\limits_{x \rightarrow a} f(x) \pm \lim\limits_{x \rightarrow a} g(x)
$$

So, to take the limit of a sum or difference all we need to do is take the limit of the individual parts and then put them back together with the appropriate sign. This is also not limited to two functions. This fact will work no matter how many functions we’ve got separated by “+” or “-”.

## 3.

$$
\lim\limits_{x \rightarrow a} [f(x) g(x)] = \lim\limits_{x \rightarrow a} f(x) \lim\limits_{x \rightarrow a} g(x)
$$

We take the limits of products in the same way that we can take the limit of sums or differences. Just take the limit of the pieces and then put them back together. Also, as with sums or differences, this fact is not limited to just two functions.

## 4.

$$
\lim\limits_{x \rightarrow a} [\frac{f(x)}{g(x)}] = \frac{\lim\limits_{x \rightarrow a} f(x)}{\lim\limits_{x \rightarrow a} g(x)}
\\;\\;\\;\\;\\;
\text{ provided }
\\;\\;\\;\\;\\;
\lim\limits_{x \rightarrow a} g(x) \neq 0
$$

As noted in the statement we only need to worry about the limit in the denominator being zero when we do the limit of a quotient. If it were zero we would end up with a division by zero error and we need to avoid that.

## 5.

$$
\lim\limits_{x \rightarrow a} [f(x)]^{n} = [\lim\limits_{x \rightarrow a} f(x)]^{n},
\\;\\;\\;\\;\\;
\text{ where } 
n
\text{ is any real number }
$$

In this property $n$ can be any real number (positive, negative, integer, fraction, irrational, zero, etc.). In the case that $n$ is an integer this rule can be thought of as an extended case of 3.

For example, consider the case of $n = 2$.

$$
\lim\limits_{x \rightarrow a} [ f(x) ]^{2} = \lim\limits_{x \rightarrow a} [ f(x) f(x) ] =
\lim\limits_{x \rightarrow a} f(x) \lim\limits_{x \rightarrow a} f(x)
\\;\\;\\;\\;\\;
\text{ using property 3 }
$$

$$
= [ \lim\limits_{x \rightarrow a} f(x)]^{2}
$$

The same can be done for any integer $n$.

## 6.

$$
\lim\limits_{x \rightarrow a} [\sqrt[n]{f(x)}] = \sqrt[n]{ \lim\limits_{x \rightarrow a} f(x) }
$$

This is just a special case of the previous example.

$$
\lim\limits_{x \rightarrow a} [\sqrt[n]{f(x)}] = \lim\limits_{x \rightarrow a} [f(x)]^{\frac{1}{n}}
$$

$$
= [ \lim\limits_{x \rightarrow a} f(x)]^{\frac{1}{n}}
$$

$$
= \sqrt[n]{\lim\limits_{x \rightarrow a} f(x)}
$$

## 7.

$$
\lim\limits_{x \rightarrow a} c = c
\\;\\;\\;\\;\\;
c \text{ is any real number }
$$

In other words, the limit of a constant is just the constant. You should be able to convince yourself of this by drawing the graph of $f(x) = c$.

## 8.

$$
\lim\limits_{x \rightarrow a} x = a
$$

As with the last one you should be able to convince yourself of this by drawing the graph of $f(x) = x$.

## 9.

$$
\lim\limits_{x \rightarrow a} x^n = a^n
$$

This is really just a special case of property 5 using $f(x) = x$.

## Note

Note that all these properties also hold for the two one-sided limits as well we just didn’t write them down with one sided limits to save on space.

## Reference

1. [Paul's online notes - Calculus I - Limits - Limit Properties](https://tutorial.math.lamar.edu/Classes/CalcI/LimitsProperties.aspx)