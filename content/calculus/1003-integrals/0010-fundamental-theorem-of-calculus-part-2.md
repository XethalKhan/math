# Fundamental theorem of calculus - part 2

Suppose $f(x)$ is a **continuous** function on $[a, b]$ and also suppose that $F(x)$ is any anti-derivative for $f(x)$. Then,

$$
\int^{b}_{a} f(x) dx = F(x) |^{b}_{a} = F(b) - F(a)
$$

## Note

Let’s take a final look at the following integral.

$$
\int^{2}_{0} x^2 + 1 dx
$$

Both of the following are anti-derivatives of the integrand.

$$
F(x) = \frac{1}{3} x^3 + x \text{ and } F(x) = \frac{1}{3} x^3 + x - \frac{18}{31}
$$

Using the **Fundamental Theorem of Calculus** to evaluate this integral with the first anti-derivatives gives,

$$
\int^{2}_{0} x^2 + 1 \\; dx = (\frac{1}{3} x^3 + x) |^{2}_{0}
$$

$$
= \frac{1}{3} (2)^3 + 2 - (\frac{1}{3} (0)^3 + 0)
$$

$$
= \frac{14}{3}
$$

The constant that we tacked onto the second anti-derivative canceled in the evaluation step. So, when choosing the anti-derivative to use in the evaluation process make your life easier and don’t bother with the constant as it will only end up canceling in the long run.

Also, note that we’re going to have to be very careful with minus signs and parenthesis with these problems. It’s very easy to get in a hurry and mess them up.

## Reference

1. [Paul's online notes - Calculus I - Integrals - Computing Definite Integrals](https://tutorial.math.lamar.edu/Classes/CalcI/ComputingDefiniteIntegrals.aspx)