# Integration by parts

## Indefinite integral

We’ll start with the product rule.

$$
(f g)' = f' g + f g'
$$

Now, integrate both sides of this.

$$
\int (f g)' dx = \int f' g + f g' dx
$$

The left side is easy enough to integrate (we know that integrating a derivative just “undoes” the derivative) and we’ll split up the right side of the integral.

$$
fg = \int f' g dx + \int f g' dx
$$

Note that technically we should have had a constant of integration show up on the left side after doing the integration. We can drop it at this point since other constants of integration will be showing up down the road and they would just end up absorbing this one.

Finally, rewrite the formula as follows and we arrive at the integration by parts formula.

$$
\int f g' dx = f g - \int f' g dx
$$

This is not the easiest formula to use however. So, let’s do a couple of substitutions.

$$
u = f(x)
\\;\\;\\;
v = g(x)
\\;\\;\\;
du = f'(x) dx
\\;\\;\\;
dv = g'(x) dx
$$

Using these substitutions gives us the formula that most people think of as the integration by parts formula.

$$
\int u \\; dv = u v - \int v \\; du
$$

To use this formula, we will need to identify $u$ and $dv$, compute $du$ and $v$ and then use the formula. Note as well that computing $v$ is very easy. All we need to do is integrate $dv$.

$$
v = \int dv
$$

One of the more complicated things about using this formula is you need to be able to correctly identify both the $u$ and the $dv$. It won’t always be clear what the correct choices are and we will, on occasion, make the wrong choice. This is not something to worry about. If we make the wrong choice, we can always go back and try a different set of choices.

### Example

$$
\int x e^{6x} \\; dx
$$

$$
u = x
\\;\\;\\;
dv = e^{6x} \\; dx
$$

$$
du = dx
\\;\\;\\;
v = \int e^{6x} \\; dx = \frac{1}{6} e^{6x}
$$

$$
\int x e^{6x} \\; dx = \frac{x}{6} e^{6x} - \int \frac{1}{6} e^{6x} \\; dx
\\;\\;\\;
= \frac{x}{6} e^{6x} - \frac{1}{36} e^{6x} + c
$$

## Definite integral

$$
\int^{b}_{a} u \\; dv = u v |^{b}_{a} - \int^{b}_{a} v \\; du
$$

### Example

$$
\int^{2}_{- 1} x e^{6x} \\; dx
$$

$$
\int^{2}_{- 1} x e^{6x} \\; dx = \frac{x}{6} e^{6x} |^{2}_{- 1} - \frac{1}{6} \int^{2}_{- 1} e^{6x} \\; dx
$$

$$
= \frac{x}{6} e^{6x} |^{2}_{- 1} - \frac{1}{36} e^{6x} |^{2}_{- 1}
$$

$$
= \frac{11}{36} e^{12} + \frac{7}{36} e^{- 6}
$$

## Reference

1. [Paul's online notes - Calculus II - Integration Techniques - Integration by Parts](https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx)