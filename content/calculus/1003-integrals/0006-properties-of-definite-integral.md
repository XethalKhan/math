# Properties of definite integral

## 1.

$$
\int^{b}_{a} f(x) dx = - \int^{a}_{b} f(x) dx
$$

We can interchange the limits on any definite integral, all that we need to do is tack a minus sign onto the integral when we do.

## 2.

$$
\int^{a}_{a} f(x) dx = 0
$$

If the upper and lower limits are the same then there is no work to do, the integral is zero.

## 3.

$$
\int^{b}_{a} c f(x) dx = c \int^{b}_{a} f(x) dx
$$

where $c$ is any number. So, as with limits, derivatives, and indefinite integrals we can factor out a constant.

## 4.

$$
\int^{b}_{a} f(x) \pm g(x) dx = \int^{b}_{a} f(x) dx \pm \int^{b}_{a} g(x) dx
$$

We can break up definite integrals across a sum or difference.

## 5.

$$
\int^{b}_{a} f(x) dx = \int^{c}_{a} f(x) dx + \int^{b}_{c} f(x) dx \text{ where } c \text{ is any number. }
$$

This property is more important than we might realize at first. One of the main uses of this property is to tell us how we can integrate a function over the adjacent intervals, $[a, c]$ and $[c, b]$. Note however that $c$ doesn’t need to be between $a$ and $b$.

## 6.

$$
\int^{b}_{a} f(x) dx = \int^{b}_{a} f(t) dt
$$

The point of this property is to notice that as long as the function and limits are the same the variable of integration that we use in the definite integral won’t affect the answer.

## 7.

$$
\int^{b}_{a} c \\; dx = c (b - a), c \text{ is any number.}
$$

## 8.

$$
\text{ If } f(x) \geq 0 \text{ for } a \leq x \leq b \text{ then } \int^{b}_{a} f(x) dx \geq 0
$$

## 9.

$$
\text{ If } f(x) \geq g(x) \text{ for } a \leq x \leq b \text{ then } \int^{b}_{a} f(x) dx \geq \int^{b}_{a} g(x) dx
$$

## 10.

$$
\text{ If } m \leq f(x) \leq M \text{ for } a \leq x \leq b \text{ then } m (b - a) \leq \int^{b}_{a} f(x) dx \leq M (b - a)
$$

## 11.

$$
| \int^{b}_{a} f(x) dx | \leq \int^{b}_{a} | f(x) | dx
$$

## Reference

1. [Paul's online notes - Calculus I - Integrals - Definition of the Definite Integral](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDefiniteIntegral.aspx)