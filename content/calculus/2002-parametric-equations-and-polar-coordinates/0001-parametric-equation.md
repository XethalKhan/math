# Parametric equation

Not all curves or equations that we’d like to look at fall easily into form $y = f(x)$ or $x = h(y)$. Take, for example, a circle. It is easy enough to write down the equation of a circle centered at the origin with radius $r$.

$$
x^{2} + y^{2} = r^{2}
$$

However, we will never be able to write the equation of a circle down as a single equation in either of the forms above. Sure we can solve for $x$ or $y$ as the following two formulas show

$$
y = \pm \sqrt{r^{2} - x^{2}}
\\;\\;\\;
x = \pm \sqrt{r^{2} - y^{2}}
$$

but there are in fact two functions in each of these. Each formula gives a portion of the circle.

$$
y = \sqrt{r^{2} - x^{2}}
\\;
\text{ (top) }
\\;\\;\\;
x = \sqrt{r^{2} - y^{2}}
\\;
\text{ (right side)}
$$

$$
y = - \sqrt{r^{2} - x^{2}}
\\;
\text{ (bottom)}
\\;\\;\\;
x = - \sqrt{r^{2} - y^{2}}
\\;
\text{ (left side)}
$$

Unfortunately, we usually are working on the whole circle, or simply can’t say that we’re going to be working only on one portion of it. Even if we can narrow things down to only one of these portions the function is still often fairly unpleasant to work with.

There are also a great many curves out there that we can’t even write down as a single equation in terms of only $x$ and $y$. So, to deal with some of these problems we introduce **parametric equations**. Instead of defining $y$ in terms of $x (y = f(x))$ or $x$ in terms of $y (x = h(y))$ we define both $x$ and $y$ in terms of a third variable called a parameter as follows,

$$
x = f(t)
\\;\\;\\;
y = g(t)
$$

Each value of $t$ defines a point $(x, y) = (f(t), g(t))$ that we can plot. The collection of points that we get by letting $t$ be all possible values is the graph of the parametric equations and is called the **parametric curve**.

## Note

The equation involving only $x$ and $y$ will NOT give the direction of motion of the parametric curve. This is generally an easy problem to fix however with the derivatives of the parametric equations from the last example.

$$
\frac{dx}{dt} = f'(t)
\\;
\frac{dy}{dt} = g'(t)
$$

Let’s briefly acknowledge what happens by changing the $t$ to an $nt$ in these kinds of parametric equations. When we are dealing with cyclical parametric equations like the ones involving sines and cosines and they both have the same argument if we change the argument from $t$ to $nt$ we simply change the speed with which the curve is traced out. If $n \gt 1$ we will increase the speed and if $n \lt 1$ we will decrease the speed.

## Reference

1. [Paul's online notes - Calculus II - Parametric Equations and Polar Coordinates - Parametric Equations and Curves](https://tutorial.math.lamar.edu/Classes/CalcII/ParametricEqn.aspx)