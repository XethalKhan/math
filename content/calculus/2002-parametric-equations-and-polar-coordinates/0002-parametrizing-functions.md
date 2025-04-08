# Parametrizing functions

Given a function or equation we might want to write down a set of parametric equations for it. In these cases we say that we **parameterize** the function.

Given the **ellipse**

$$
\frac{x^{2}}{a^{2}} + \frac{y^{2}}{b^{2}} = 1
$$

a set of parametric equations for it would be,

$$
x = a \\; cos(t)
\\;\\;\\;
y = b \\; sin(t)
$$

Every curve can be parameterized in more than one way. Any of the following will also parameterize the same ellipse.

$$
x = a \\; cos(\omega t)
\\;\\;\\;
y = b \\; sin(\omega t)
$$

$$
x = a \\; sin(\omega t)
\\;\\;\\;
y = b \\; cos(\omega t)
$$

$$
x = a \\; cos(\omega t)
\\;\\;\\;
y = - b \\; sin(\omega t)
$$

This set of parametric equations will trace out the ellipse starting at the point $(a, 0)$ and will trace in a counter-clockwise direction and will trace out exactly once in the range $0 \leq t \leq 2 \pi$.

Because a **circle** is nothing more than a special case of an ellipse we can use the parameterization of an ellipse to get the parametric equations for a circle centered at the origin of radius $r$ as well. One possible way to parameterize a circle is,

$$
x = r \\; cos(t)
\\;\\;\\;
y = r \\; sin(t)
$$

Finally, even though there may not seem to be any reason to, we can also parameterize functions in the form $y = f(x)$ or $x = h(y)$. In these cases we parameterize them in the following way,

$$
x = t \text{ and } y = f(t)
$$

$$
x = h(y) \text{ and } y = t
$$

## Reference

1. [Paul's online notes - Calculus II - Parametric Equations and Polar Coordinates - Parametric Equations and Curves](https://tutorial.math.lamar.edu/Classes/CalcII/ParametricEqn.aspx)