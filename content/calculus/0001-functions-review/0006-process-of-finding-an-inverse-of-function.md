# Process of finding an inverse of a function

Given the function $f(x)$ we want to find the inverse function, $f^{−1}(x)$.

1. First, replace $f(x)$ with $y$. This is done to make the rest of the process easier.
2. Replace every $x$ with a $y$ and replace every $y$ with an $x$.
3. Solve the equation from Step 2 for $y$. This is the step where mistakes are most often made so be careful with this step.
4. Replace $y$ with $f^{−1}(x)$. In other words, we’ve managed to find the inverse at this point!
5. Verify your work by checking that

$$
(f \circ f^{-1})(x) = x
$$

and

$$
(f^{-1} \circ f)(x) = x
$$

are both true. This work can sometimes be messy making it easy to make mistakes so again be careful.

The graph of the inverse is a reflection of the actual function about the line $y = x$. This will always be the case with the graphs of a function and its inverse.

PUT SOME IMAGE OF GRAPH OF INVERSE FUNCTION

## Examples

Given $f(x) = 3 x − 2$ find $f^{−1}(x)$

So, let’s get started. We’ll first replace $f(x)$ with $y$.

$$
y = 3 x − 2
$$

Next, replace all $x$’s with $y$ and all $y$’s with $x$.

$$
x = 3 y − 2
$$

Now, solve for $y$

$$
x + 2 = 3 y
$$

$$
\frac{1}{3}(x + 2) = y
$$

$$
\frac{x}{3} + \frac{2}{3} = y
$$

Finally replace $y$ with $f^{−1}(x)$

$$
f^{−1}(x) = \frac{x}{3} + \frac{2}{3}
$$

Now, we need to verify the results.

$$
(f \circ f^{−1})(x) = f(f^{−1}(x))
$$

$$
= f(\frac{x}{3} + \frac{2}{3})
$$

$$
= 3 (\frac{x}{3} + \frac{2}{3}) - 2
$$

$$
= x + 2 - 2
$$

$$
= x
$$

## Reference

1. [Paul's online notes - Calculus I - Review - Inverse Functions](https://tutorial.math.lamar.edu/Classes/CalcI/InverseFunctions.aspx)