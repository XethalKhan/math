# Derivative

The **derivative of $f(x)$** with respect to $x$ is the function $f'(x)$ and is defined as,

$$
f'(x) = \lim\limits_{h \rightarrow 0} \frac{f(x + h) - f(x)}{h}
$$

## Note

Derivatives will not always exist. Note as well that this doesn’t say anything about whether or not the derivative exists anywhere else. For example, the derivative of the absolute value function exists at every point except at $x = 0$, because limit $\lim\limits_{h \rightarrow 0} \frac{f(x + h) - f(x)}{h}$ of absolute value function doesn't exist at $x = 0$.

## Notation

The typical derivative notation is the “prime” notation. However, there is another notation that is used on occasion so let’s cover that.

Given a function $y = f(x)$ all of the following are equivalent and represent the derivative of $f(x)$ with respect to $x$.

$$
f'(x) = y' = \frac{df}{dx} = \frac{dy}{dx} = \frac{d}{dx}(f(x)) = \frac{d}{dx}(y)
$$

Because we also need to evaluate derivatives on occasion we also need a notation for evaluating derivatives when using the fractional notation. So, if we want to evaluate the derivative at $x = a$ all of the following are equivalent.

$$
f'(a) = \left.y'\right|_{x = a} = \left.\frac{df}{dx}\right|_{x = a} = \left.\frac{dy}{dx}\right|_{x = a}
$$

Note as well that on occasion we will drop the $(x)$ part on the function to simplify the notation somewhat. In these cases the following are equivalent.

$$
f'(x) = f'
$$

## Reference

1. [Paul's online notes - Calculus I - Derivatives - The Definition of the Derivative](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDerivative.aspx)