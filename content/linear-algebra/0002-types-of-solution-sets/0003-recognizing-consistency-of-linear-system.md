# Recognizing consistency of a linear system

Suppose $A$ is the **augmented matrix** of a system of linear equations with $n$ variables. Suppose also that $B$ is a row-equivalent matrix in reduced row-echelon form with $r$ nonzero rows. Then the system of equations is **inconsistent** if and only if column $n + 1$ of $B$ is a pivot column.

## Proof

$$
p = \text{ system of equations is inconsistent }
$$

$$
q = \text{ column } n + 1 \text{ of } B \text{ is a pivot column }
$$

We prove that $p \leftrightarrow q$, using proof technique equivalence.

### First we prove $q \rightarrow p$ (assume $q = T$)

The first half of the proof begins with the assumption that column $n + 1$ of $B$ is a pivot column. Then the leading 1 of row $r$ is located in column $n + 1$ of $B$ and so row $r$ of $B$ begins with $n$ consecutive zeros, finishing with the leading 1. This is a representation of the equation $0 = 1$, which is false. Since this equation is false for any collection of values we might choose for the variables, there are no solutions for the system of equations, and the system is inconsistent.

### Second, we prove $p \rightarrow q$ (assume $p = T$)

For the second half of the proof, we wish to show that if we assume the system is inconsistent, then column $n + 1$ of $B$ is a pivot column. But instead of proving this directly, we will form the logically equivalent statement that is the **contrapositive**, and prove that instead ($p \rightarrow q \leftrightarrow \neg q \rightarrow \neg p$). Turning the implication around, and negating each portion, we arrive at the logically equivalent statement: if column $n + 1$ of $B$ is not a pivot column, then the system of equations is consistent. Now we prover $\neg q \rightarrow \neg p$ which is equivalent to $p \rightarrow q$ (assume $q = F$).

If column $n + 1$ of $B$ is not a pivot column, the leading 1 for row $r$ is located somewhere in columns $1$ through $n$. Then every preceding row's leading 1 is also located in columns $1$ through $n$. In other words, since the last leading 1 is not in the last column, no leading 1 for any row is in the last column, due to the echelon layout of the leading 1's (Definition of [reduced row-echelon form](./../0001-systems-of-linear-equations/0021-reduced-row-echelon-form.md)). We will now construct a solution to the system by setting each dependent variable to the entry of the final column in the row with the corresponding leading 1, and setting each free variable to zero. That sentence is pretty vague, so let us be more precise. Using our notation for the sets $D$ and $F$ from the reduced row-echelon form:

$$
x_{d_i} = [B]\_{i, n + 1},
\\;\\;\\;
1 \leq i \leq r
\\;\\;\\;\\;\\;\\;
x_{f_i} = 0,
\\;\\;\\;
1 \leq i \leq n − r
$$

These values for the variables make the equations represented by the first $r$ rows of $B$ all true. Rows numbered greater than $r$ (if any) are all zero rows, hence represent the equation $0 = 0$ and are also all true. We have now identified one solution to the system represented by $B$, and hence a solution to the system represented by $A$. So we can say the system is [**consistent**](./0001-consistent-system.md).

## Reference

1. [linear.ups.edu - theorem RCLS, section Types of Solution Sets](http://linear.pugetsound.edu/html/section-TSS.html)

