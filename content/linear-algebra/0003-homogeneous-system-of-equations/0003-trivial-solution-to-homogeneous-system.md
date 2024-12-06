# Trivial Solution to Homogeneous Systems of Equations

Suppose a homogeneous system of linear equations has $n$ variables. The solution $x_1 = 0, x_2 = 0, \dots , x_n = 0$ (i.e. $x = 0$) is called the **trivial solution**.

## Example

Homogeneous system

$$
\displaylines{
- 7 x_1 - 6 x_2 - 12 x_3 = 0\\
5 x_1 + 5 x_2 + 7 x_3 = 0\\
x_1 + 4 x_3 = 0
}
$$

whose augmented matrix row-reduces to

$$
\begin{bmatrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0
\end{bmatrix}
$$

By **Theorem Homogeneous Systems are Consistent** , the system is consistent, and so the computation $n - r = 3 − 3 = 0$ means the solution set contains just a single solution. Then, this lone solution must be the trivial solution.

## Reference

1. [linear.ups.edu - definition TSHSE, section Homogeneous Systems of Equations](http://linear.ups.edu/html/section-HSE.html)