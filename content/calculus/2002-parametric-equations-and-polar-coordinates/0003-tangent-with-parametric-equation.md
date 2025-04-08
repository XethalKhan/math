# Tangent with parametric equation

We want to find the tangent lines to the parametric equations given by,

$$
x = f(t)
\\;\\;\\;
y = g(t)
$$

To do this let’s first recall how to find the tangent line to $y = F(x)$ at $x = a$. Here the tangent line is given by,

$$
y = F(a) + m(x - a), \text{ where } m = \frac{dy}{dx} |_{x = a} = F'(a)
$$

So, just for a second let’s suppose that we were able to eliminate the parameter from the parametric form and write the parametric equations in the form $y = F(x)$. Now, plug the parametric equations in for $x$ and $y$. Yes, it seems silly to eliminate the parameter, then immediately put it back in, but it’s what we need to do in order to get our hands on the derivative. Doing this gives,

$$
g(t) = F(f(t))
$$

Now, differentiate with respect to $t$ and notice that we’ll need to use the Chain Rule on the right-hand side.

$$
g'(t) = F'(f(t)) f'(t)
$$

Let’s do another change in notation. We need to be careful with our derivatives here. Derivatives of the lower case function are with respect to $t$ while derivatives of upper case functions are with respect to $x$. So, to make sure that we keep this straight let’s rewrite things as follows.

$$
\frac{dy}{dt} = F'(x) \frac{dx}{dt}
$$

## Reference

1. [Paul's online notes - Calculus II - Parametric Equations and Polar Coordinates - Tangents with Parametric Equations](https://tutorial.math.lamar.edu/Classes/CalcII/ParaTangent.aspx)
