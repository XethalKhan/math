# Substitution rule

$$
\int f(g(x)) g'(x) dx = \int f(u) du, \text{ where, } u = g(x)
$$

## Example - indefinite integral

$$
\int 18 x^2 \sqrt[4]{6 x^3 + 5} dx
$$

$$
u = 6 x^3 + 5
$$

$$
du = 18 x^2 dx
$$

$$
\int 18 x^2 \sqrt[4]{6 x^3 + 5} dx = \int (6 x^3 + 5)^{\frac{1}{4}} (18 x^2 dx) = \int u^{\frac{1}{4}} du
$$

$$
\int u^{\frac{1}{4}} du = \frac{4}{5} u^{\frac{5}{4}} + c = \frac{4}{5} (6 x^3 + 5)^{\frac{5}{4}} + c
$$

## Example - definite integral

$$
\int^{0}_{- 2} 2 t^2 \sqrt{1 - 4 t^3} dt
$$

$$
u = 1 - 4 t^3
\\;\\;\\;
du = - 12 t^2 dt \rightarrow t^2 dt = -\frac{1}{12} du
$$

$$
t = - 2 \rightarrow u = 1 - 4(- 2)^{3} = 33
$$

$$
t = 0 \rightarrow u = 1 - 4(0)^3 = 1
$$

$$
\int^{0}_{- 2} 2 t^2 \sqrt{1 - 4 t^3} dt
\\;\\;\\;
= -\frac{1}{6} \int^{1}_{33} u^{\frac{1}{2}} du
\\;\\;\\;
= -\frac{1}{9} u^{\frac{3}{2}} |^{1}_{33}
$$

$$
\int^{0}_{- 2} 2 t^2 \sqrt{1 - 4 t^3} dt
\\;\\;\\;
= -\frac{1}{9} u^{\frac{3}{2}} |^{1}_{33}
\\;\\;\\;
= -\frac{1}{9} - (- \frac{1}{9}(33)^{\frac{3}{2}})
\\;\\;\\;
= \frac{1}{9}(33 \sqrt{33} - 1)
$$


## Note

There are a couple of general rules that we will need to remember when doing these problems. First, when doing a substitution remember that when the substitution is done all the $x$’s in the integral (or whatever variable is being used for that particular integral) should all be substituted away. This includes the $x$ in the $dx$. After the substitution only $u$’s should be left in the integral. Also, sometimes the correct substitution is a little tricky to find and more often than not there will need to be some manipulation of the differential or integrand in order to actually do the substitution.

Also, many integrals will require us to break them up so we can do multiple substitutions so be on the lookout for those kinds of integrals/substitutions.

## Reference

1. [Paul's online notes - Calculus I - Integrals - Substitution Rule for Indefinite Integrals](https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleIndefinite.aspx)
2. [Paul's online notes - Calculus I - Integrals - More Substitution Rule](https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleIndefinitePtII.aspx)
3. [Paul's online notes - Calculus I - Integrals - Substitution Rule for Definite Integrals](https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleDefinite.aspx)