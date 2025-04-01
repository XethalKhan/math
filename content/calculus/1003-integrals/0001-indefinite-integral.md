# Indefinite integral

Given a function, $f(x)$, an **anti-derivative** of $f(x)$ is any function $F(x)$ such that

$$
F'(x) = f(x)
$$

If $F(x)$ is any anti-derivative of $f(x)$ then the most general anti-derivative of $f(x)$ is called an **indefinite integral** and denoted,

$$
\int f(x) dx = F(x) + c,
\\;\\;\\;
c \text{ is an arbitrary constant }
$$

In this definition the $\int$ is called the **integral symbol**, $f(x)$ is called the **integrand**, $x$ is called the **integration variable** and the $c$ is called the **constant of integration**.

The process of finding the indefinite integral is called **integration** or **integrating** $f(x)$. If we need to be specific about the integration variable we will say that we are **integrating $f(x)$ with respect to $x$**.

$$
f(x) = \int f'(x) dx
$$

## Note

One of the more common mistakes that students make with integrals (both indefinite and definite) is to drop the $dx$ at the end of the integral. This is required! Think of the integral sign and the $dx$ as a set of parentheses. You already know and are probably quite comfortable with the idea that every time you open a parenthesis you must close it. With integrals, think of the integral sign as an “open parenthesis” and the $dx$ as a “close parenthesis”.

If you drop the $dx$ it won’t be clear where the integrand ends.

$$
\int x^4 + 3 x - 9 dx = \frac{1}{5} x^5 + \frac{3}{2} x^2 - 9 x + c
$$

$$
\int x^4 + 3 x dx - 9 = \frac{1}{5} x^5 + \frac{3}{2} x^2 + c - 9
$$

$$
\int x^4 dx + 3 x - 9 = \frac{1}{5} x^5 + c + 3 x - 9
$$

## Example

$$
f(x) = x^4 + 3 x - 9
$$

$$
f'(x) = 4 x^3 + 3
$$

$$
\int f(x) = \int x^4 + 3 x - 9 dx = \frac{1}{5} x^5 + \frac{3}{2} x^2 - 9 x + c
$$

## Reference

1. [Paul's online notes - Calculus I - Integrals - Indefinite integrals](https://tutorial.math.lamar.edu/Classes/CalcI/IndefiniteIntegrals.aspx)