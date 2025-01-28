# Limit

## Informal definition

We say that the limit of $f(x)$ is $L$ as $x$ approaches $a$ and write this as

$$
\lim\limits_{x \rightarrow a} f(x) = L
$$

provided we can make $f(x)$ as close to $L$ as we want for all $x$ sufficiently close to $a$, from both sides, without actually letting $x$ be $a$.

## Formal definition

Let $f(x)$ be a function defined on an interval that contains $x = a$, except possibly at $x = a$. Then we say that,

$$
\lim\limits_{x \rightarrow a} f(x) = L
$$

if for every number $\epsilon \gt 0$ there is some number $\delta \gt 0$ such that

$$
| f(x) - L | \lt \epsilon
\\;\\;\\;
\text{ whenever }
\\;\\;\\;
0 \lt | x - a | \lt \delta
$$

![Limit of a function](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit_Files/image001.png)

What the definition is telling us is that for any number $\epsilon \gt 0$ that we pick we can go to our graph and sketch two horizontal lines at $L + \epsilon$ and $L - \epsilon$ as shown on the graph above. Then somewhere out there in the world is another number $\delta \gt 0$, which we will need to determine, that will allow us to add in two vertical lines to our graph at $a + \delta$ and $a - \delta$.

If we take any $x$ in the pink region, i.e. between $a + \delta$ and $a - \delta$, then this $x$ will be closer to $a$ than either of $a + \delta$ and $a - \delta$. Or,

$$
| x - a | \lt \delta
$$

If we now identify the point on the graph that our choice of $x$ gives, then this point on the graph will lie in the intersection of the pink and yellow region. This means that this function value $f(x)$ will be closer to $L$ than either of $L + \epsilon$ and $L - \epsilon$. Or,

$$
| f(x) - L | \lt \epsilon
$$

If we take any value of $x$ in the pink region then the graph for those values of $x$ will lie in the yellow region.

Notice that there are actually an infinite number of possible $\delta$'s that we can choose. In fact, if we go back and look at the graph above it looks like we could have taken a slightly larger $\delta$ and still gotten the graph from that pink region to be completely contained in the yellow region.

Also, notice that as the definition points out we only need to make sure that the function is defined in some interval around $x = a$ but we don’t really care if it is defined at $x = a$. Remember that limits do not care what is happening at the point, they only care what is happening around the point in question.

## Reference

1. [Paul's online notes - Calculus I - Limits - The Limit](https://tutorial.math.lamar.edu/Classes/CalcI/TheLimit.aspx)
2. [Paul's online notes - Calculus I - Limits - The Definition of the Limit](https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx)