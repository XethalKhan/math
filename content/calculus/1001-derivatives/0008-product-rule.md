# Product rule

If the two functions $f(x)$ and $g(x)$ are **differentiable** (i.e. the derivative exist) then the product is **differentiable** and,

$$
(f g)' = f' g + f g'
$$

## Note

Note that the product rule can be extended to more than two functions, for instance.

$$
(f g h)' = f' g h + f g' h + f g h'
$$

$$
(f g h w)' = f' g h w + f g' h w + f g h' w + f g h w'
$$

Deriving these products of more than two functions is actually pretty simple. For example, let’s take a look at the three function product rule.

First, we don’t think of it as a product of three functions but instead of the product rule of the two functions $f g$ and $h$ which we can then use the two function product rule on. Doing this gives,

$$
(f g h)' = ([f g] h)' = [f g]' h + [f g] h'
$$

Note that we put brackets on the $f g$ part to make it clear we are thinking of that term as a single function. Now all we need to do is use the two function product rule on the $[f g]'$ term and then do a little simplification.

$$
(f g h)' = [f' g + f g'] h + [f g] h' = f' g h + f g' h + f g h'
$$

Any product rule with more functions can be derived in a similar fashion.

## Reference

1. [Paul's online notes - Calculus I - Derivatives - Product and Quotient Rule](https://tutorial.math.lamar.edu/Classes/CalcI/ProductQuotientRule.aspx)