# Particular Solution Plus Homogeneous Solutions

Suppose that $w$ is one solution to the linear system of equations $LS(A, b)$. Then $y$ is a solution to $LS(A, b)$ if and only if $y = w + z$ for some vector $z \in N(A)$.

## Proof

$$
p: y \text{ is a solution to } LS(A, b)
$$

$$
q: y = w + z \text{ for some } z \in N(A)
$$

Let $A_1, A_2, A_3, \dots , A_n$ be the columns of the **coefficient matrix** $A$.

### $p \leftarrow q$

Suppose $y = w + z$ and $z \in N(A)$. Then

$$
b = [w]_1 A_1 + [w]_2 A_2 + [w]_3 A_3 + \dots + [w]_n A_n
\\;\\;\\;
\text{ Theorem Solutions to Linear Systems are Linear Combinations }
$$

$$
= [w]_1 A_1 + [w]_2 A_2 + [w]_3 A_3 + \dots + [w]_n A_n + 0
\\;\\;\\;
\text{ Property 5 of Vector space - Zero vector }
$$

$$
= [w]_1 A_1 + [w]_2 A_2 + [w]_3 A_3 + \dots + [w]_n A_n + [z]_1 A_1 + [z]_2 A_2 + [z]_3 A_3 + \dots + [z]_n A_n
\\;\\;\\;
\text{ Theorem Solutions to Linear Systems are Linear Combinations }
$$

$$
= ([w]_1 + [z]_1) A_1 + ([w]_2 + [z]_2) A_2 + ([w]_3 + [z]_3) A_3 + \dots + ([w]_n + [z]_n) A_n
\\;\\;\\;
\text{ Vector space properties  }
$$

$$
= [w + z]_1 A_1 + [w + z]_2 A_2 + [w + z]_3 A_3 + \dots + [w + z]_n A_n
\\;\\;\\;
\text{ Column Vector Addition }
$$

$$
= [y]_1 A_1 + [y]_2 A_2 + [y]_3 A_3 + \dots + [y]_n A_n
\\;\\;\\;
\text{ Definition of } y
$$

Applying Theorem **Solutions to Linear Systems are Linear Combinations** we see that the vector $y$ is a solution to $LS(A, b)$.

### $p \rightarrow q$

Suppose $y$ is a solution to $LS(A, b)$. Then

$$
0 = b - b
$$

$$
= [y]_1 A_1 + [y]_2 A_2 + [y]_3 A_3 + \dots + [y]_n A_n - ([w]_1 A_1 + [w]_2 A_2 + [w]_3 A_3 + \dots + [w]_n A_n)
\\;\\;\\;
\text{ Theorem Solutions to Linear Systems are Linear Combinations }
$$

$$
= ([y]_1 + [w]_1) A_1 + ([y]_2 + [w]_2) A_2 + ([y]_3 + [w]_3) A_3 + \dots + ([y]_n + [w]_n) A_n
\\;\\;\\;
\text{ Vector space properties  }
$$

$$
= [y + w]_1 A_1 + [y + w]_2 A_2 + [y + w]_3 A_3 + \dots + [y + w]_n A_n
\\;\\;\\;
\text{ Column Vector Addition }
$$

By Theorem **Solutions to Linear Systems are Linear Combinations** we see that the vector $y - w$ is a solution to the homogeneous system $LS(A, 0)$ and by **Definition Null Space of a Matrix**, $y - w \in N(A)$. In other words, $y - w = z$ for some vector $z \in N(A)$. Rewritten, this is $y = w + z$, as desired.

## Note

This theorem tells us that in order to find all of the solutions to a linear system of equations, it is sufficient to find just one solution, and then find all of the solutions to the corresponding **homogeneous system**.

**Nonsingular coefficient matrices** lead to unique solutions for every choice of the vector of constants. What does this say about singular matrices? A singular matrix $A$ has a nontrivial null space (Theorem **Nonsingular matrices have trivial null spaces**). For a given vector of constants, $b$, the system $LS(A, b)$ could be inconsistent, meaning there are no solutions. But if there is at least one solution ($w$), then this Theorem tells us there will be infinitely many solutions because of the role of the infinite null space for a singular matrix. So a system of equations with a **singular** coefficient matrix never has a unique solution. With a singular coefficient matrix, either there are no solutions, or infinitely many solutions, depending on the choice of the vector of constants ($b$).

## Reference

1. [linear.ups.edu - theorem PSPHS, section Subspaces](http://linear.ups.edu/html/section-LC.html)