# Nonsingular product has nonsingular terms

Suppose that $A$ and $B$ are **square matrices** of size $n$. The product $AB$ is **nonsingular** if and only if $A$ and $B$ are both nonsingular.

## Proof

$$
p: AB \text{ is nonsingular }
$$

$$
q: A \text{ and } B \text{ are both nonsingular }
$$

### $p \rightarrow q$

For this portion of the proof we will form the logically-equivalent **contrapositive** and prove that statement using two cases. "$AB$ is nonsingular implies $A$ and $B$ are both nonsingular" becomes "$A$ or $B$ is singular implies $AB$ is singular." (Be sure to undertstand why the “and” became an “or”) $p \rightarrow q$ becomes $\neg q \rightarrow \neg p$.

#### Case 1.

Suppose $B$ is singular. Then there is a nonzero vector $z$ that is a solution to $LS(B, 0)$. So

$$
(AB)z = A(Bz)
\\;\\;\\;
\text{ Theorem Matrix Multiplication is Associative }
$$

$$
= A0
\\;\\;\\;
\text{ Theorem Systems of linear equations as matrix multiplication }
$$

$$
= 0
\\;\\;\\;
\text{ Theorem Matrix Multiplication and the Zero Matrix }
$$

With **Theorem Systems of linear equations as matrix multiplication** we can translate this vector equality to the statement that $z$ is a nonzero solution to $LS(AB, 0)$. Thus $AB$ is singular, as desired.

#### Case 2.

Suppose $A$ is singular, and $B$ is not singular. In other words, with Case 1 complete, we can be more precise about this remaining case and assume that $B$ is **nonsingular**. Because $A$ is singular, there is a nonzero vector $y$ that is a solution to $LS(A, 0)$. Now consider the linear system $LS(B, y)$. Since $B$ is nonsingular, the system has a unique solution (Theorem Nonsingular matrices have unique solutions), which we will denote as $w$. We first claim $w$ is not the zero vector either. Assuming the opposite, suppose that $w = 0$ (Proof Technique Contradiction). Then

$$
y = B w
\\;\\;\\;
\text{ Theorem Systems of linear equations as matrix multiplication }
$$

$$
y = B 0
\\;\\;\\;
\text{ Hypothesis }
$$

$$
= 0
$$

contrary to $y$ being nonzero. So $w \neq 0$. The pieces are in place, so here we go,

$$
(AB)w = A(Bw)
\\;\\;\\;
\text{ Theorem Matrix Multiplication is Associative }
$$

$$
= Ay
\\;\\;\\;
\text{ Theorem Systems of linear equations as matrix multiplication }
$$

$$
= 0
\\;\\;\\;
\text{ Theorem Systems of linear equations as matrix multiplication }
$$

With Theorem Systems of linear equations as matrix multiplication we can translate this vector equality to the statement that $w$ is a nonzero solution to $LS(AB, 0)$. Thus $AB$ is singular, as desired. And this conclusion holds for both cases.

### $p \leftarrow q$

Now assume that both $A$ and $B$ are nonsingular. Suppose that $x \in \mathbb{C}^n$ is a solution to $LS(AB, 0)$. Then

$$
0 = (AB)x
\\;\\;\\;
\text{ Theorem Systems of linear equations as matrix multiplication }
$$

$$
= A(Bx)
\\;\\;\\;
\text{ Theorem Matrix Multiplication is Associative }
$$

By Theorem Systems of linear equations as matrix multiplication, $Bx$ is a solution to $LS(A, 0)$, and by the definition of a nonsingular matrix, we conclude that $Bx = 0$. Now, by an entirely similar argument, the nonsingularity of $B$ forces us to conclude that $x = 0$. So the only solution to $LS(AB, 0)$ is the zero vector and we conclude that $AB$ is nonsingular by definition of Nonsingular Matrix.

## Note

The contrapositive of this entire result is interesting. It says that $A$ or $B$ (or both) is a singular matrix if and only if the product $AB$ is singular. 

## Reference

1. [linear.ups.edu - theorem NPNT, section Matrix Inverses and Nonsingular Matrices](http://linear.ups.edu/html/section-MINM.html)