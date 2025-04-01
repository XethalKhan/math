# Riemann Sum

Let’s start out with $f(x) \geq 0$ on $[a, b]$ and we’ll divide the interval into $n$ subintervals each of length,

$$
\Delta x = \frac{b - a}{n}
$$

Note that the subintervals don’t have to be equal length, but it will make our work significantly easier. The endpoints of each subinterval are,

$$
x_0 = a
$$

$$
x_1 = a + \Delta x
$$

$$
x_2 = a + 2 \Delta x
$$

$$
\vdots
$$

$$
x_i = a + i \Delta x
$$

$$
\vdots
$$

$$
x_{n - 1} = a + (n - 1) \Delta x
$$

$$
x_n = a + n \Delta x = b
$$

Next in each interval,

$$
[x_0, x_1], [x_1, x_2], \dots , [x_{i - 1}, x_i], \dots , [x_{n - 1}, x_n]
$$

we choose a point $x^{\ast}_1, x^{\ast}_2, \dots , x^{\ast}_i, \dots x^{\ast}_n$. These points will define the height of the rectangle in each subinterval. Note as well that these points do not have to occur at the same point in each subinterval. However, they are usually the left end point of the interval, right end point of the interval or the midpoint of the interval.

![Image of data](https://tutorial.math.lamar.edu/Classes/CalcI/AreaProblem_Files/image012.gif)

The area under the curve on the given interval is then approximately,

$$
A \approx f(x^{\ast}_1) \Delta x + f(x^{\ast}_2) \Delta x + \dots + f(x^{\ast}_i) \Delta x + \dots + f(x^{\ast}_n) \Delta x
$$

Using summation notation the area estimation is,

$$
A \approx \sum_{i = 1}^{n} f(x^{\ast}_i) \Delta x
$$

The summation in the above equation is called a **Riemann Sum**.

To get a better estimation we will take $n$ larger and larger. In fact, if we let $n$ go out to infinity we will get the exact area. In other words,

$$
A = \lim\limits_{n \rightarrow \infty} \sum_{i = 1}^{n} f(x^{\ast}_i) \Delta x
$$

## Note

To this point we’ve required the function to be positive in our work. Many functions are not positive however. Using the technique in this section it looks like if the function is above the $x$-axis we will get a positive area and if the function is below the $x$-axis we will get a negative area.

In cases where the function is both above and below the $x$-axis the technique given in the section will give the net area between the function and the $x$-axis with areas below the $x$-axis negative and areas above the $x$-axis positive. So, if the net area is negative then there is more area under the $x$-axis than above while a positive net area will mean that more of the area is above the $x$-axis.

## Reference

1. [Paul's online notes - Calculus I - Integrals - Area Problem](https://tutorial.math.lamar.edu/Classes/CalcI/AreaProblem.aspx)