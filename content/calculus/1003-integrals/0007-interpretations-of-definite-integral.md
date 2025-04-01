# Interpretations of Definite integral

First, as we alluded to in the [Riemann sum](./0004-riemann-sum.md) one possible interpretation of the definite integral is to give the net area between the graph of $f(x)$ and the $x$-axis on the interval $[a, b]$. So, the net area between the graph of $f(x) = x^2 + 1$ and the $x$-axis on $[0, 2]$ is,

$$
\int^{2}_{0} x^2 + 1 dx = \frac{14}{3}
$$

Another interpretation is sometimes called the **Net Change Theorem**. This interpretation says that if $f(x)$ is some quantity (so $f'(x)$ is the rate of change of $f(x)$) then,

$$
\int^{b}_{a} f'(x) dx = f(b) − f(a)
$$

is the net change in $f(x)$ on the interval $[a, b]$. In other words, compute the definite integral of a rate of change and you’ll get the net change in the quantity. We can see that the value of the definite integral, $f(b) - f(a)$, does in fact give us the net change in $f(x)$ and so there really isn’t anything to prove with this statement. This is really just an acknowledgment of what the definite integral of a rate of change tells us.

If $s(t)$ is the function giving the position of some object at time $t$ we know that the velocity of the object at any time $t$ is: $v(t) = s'(t)$. Therefore, the displacement of the object from time $t_1$ to time $t_2$ is,

$$
\int^{t_2}_{t_1} v(t) dt = s(t_2) - s(t_1)
$$

Note that in this case if $v(t)$ is both positive and negative (i.e. the object moves to both the right and left) in the time frame this will NOT give the total distance traveled. It will only give the displacement, i.e. the difference between where the object started and where it ended up. To get the total distance traveled by an object we’d have to compute,

$$
\int^{t_2}_{t_1} | v(t) | dt
$$

It is important to note here that the Net Change Theorem only really makes sense if we’re integrating a derivative of a function.

## Reference

1. [Paul's online notes - Calculus I - Integrals - Definition of the Definite Integral](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDefiniteIntegral.aspx)
