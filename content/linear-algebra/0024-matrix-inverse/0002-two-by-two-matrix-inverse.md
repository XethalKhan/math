# Two-by-two matrix inverse

Suppose

$$
A =
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
$$

Then $A$ is invertible if and only if $ad − bc \neq 0$. When $A$ is invertible, then

$$
A^{− 1} = \frac{1}{ad - bc}
\\;\\;\\;
\begin{bmatrix}
d & −b\\
−c & a
\end{bmatrix}
$$

## Proof

$$
p: A \text{ is invertible }
$$

$$
q: ad − bc \neq 0
$$

### 1. $p \leftarrow q$

Assume that $ad − bc \neq 0$. We will use the definition of the inverse of a matrix to establish that $A$  has an inverse. Note that if $ad − bc \neq 0$ then the displayed formula for $A^{-1}$ is legitimate since we are not dividing by zero. Using this proposed formula for the inverse of $A$, we compute

$$
A A^{-1} =
\\;\\;\\;
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
(
\frac{1}{ad − bc}
\begin{bmatrix}
d & −b\\
−c & a
\end{bmatrix}
) =
\frac{1}{ad - bc}
\begin{bmatrix}
ad −bc & 0\\
0 & ad − bc
\end{bmatrix}
=
\begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}
$$

By definition of Matrix Inverse this is sufficient to establish that $A$ is invertible, and that the expression for $A^{-1}$ is correct.

### 2. $p \rightarrow q$

Assume that $A$ is invertible, and proceed with a proof by contradiction, by assuming also that $ad - bc = 0$ ($\neg q \rightarrow \neg p$).This translates to $ad = bc$. Let

$$
B = \begin{bmatrix}
e & f\\
g & h
\end{bmatrix}
$$

be a putative inverse of $A$.

This means that

$$
I_2 =
AB =
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
\begin{bmatrix}
e & f\\
g & h
\end{bmatrix}
=
\begin{bmatrix}
ae + bg & af + bh\\
ce + dg & cf + dh
\end{bmatrix}
$$

Working on the matrices on two ends of this equation, we will multiply the top row by $c$ and the bottom row by $a$.

$$
\begin{bmatrix}
c & 0\\
0 & a
\end{bmatrix}
=
\begin{bmatrix}
ace + bcg & acf + bch\\
ace + adg & acf + adh
\end{bmatrix}
$$

We are assuming that $ad = bc$, so we can replace two occurrences of $ad$ by $bc$ in the bottom row of the right matrix.

$$
\begin{bmatrix}
c & 0\\
0 & a
\end{bmatrix}
=
\begin{bmatrix}
ace + bcg & acf + bch\\
ace + bcg & acf + bch
\end{bmatrix}
$$

The matrix on the right now has two rows that are identical, and therefore the same must be true of the matrix on the left. Identical rows for the matrix on the left implies that $a = 0$ and $c = 0$.

With this information, the product $AB$ becomes

$$
\begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}
= I_2
= AB
=
\begin{bmatrix}
ae + bg & af + bh\\
ce + dg & cf + dh
\end{bmatrix}
=
\begin{bmatrix}
bg & bh\\
dg & dh
\end{bmatrix}
$$

So $bg = dh = 1$ and thus $b, g, d, h$ are all nonzero. But then $bh$ and $dg$ (the “other corners”) must also be nonzero, so this is (finally) a contradiction. So our assumption was false and we see that $ad − bc \neq 0$ whenever $A$ has an inverse.

## Note

This theorem is cute, and it is nice to have a formula for the inverse, and a condition that tells us when we can use it. However, this approach becomes impractical for larger matrices, even though it is possible to demonstrate that, in theory, there is a general formula. (Think for a minute about extending this result to just $3 \times 3$ matrices. For starters, we need 18 letters!) Instead, we will work column-by-column. Let us first work an example that will motivate the main theorem and remove some of the previous mystery.

## Example

Consider the matrix

$$
A = \begin{bmatrix}
1 & 2 & 1 & 2 & 1\\
−2 & −3 & 0 & −5 & −1\\
1 & 1 & 0 & 2 & 1\\
−2 & −3 & −1 & −3 & −2\\
−1 & −3 & −1 & −3 & 1
\end{bmatrix}
$$

For its inverse, we desire a matrix $B$ so that $AB = I_5$. Emphasizing the structure of the columns and employing the definition of matrix multiplication

$$
AB = I_5
$$

$$
A[B_1 | B_2 | B_3 | B_4 | B_5] = [e_1 | e_2 | e_3 | e_4 | e_5]
$$

$$
[AB_1 | AB_2 | AB_3 | AB_4 | AB_5] = [e_1 | e_2 | e_3 | e_4 | e_5]
$$

Equating the matrices column-by-column we have

$$
AB_1 = e_1
\\;\\;\\;
AB_2 = e_2
\\;\\;\\;
AB_3 = e_3
\\;\\;\\;
AB_4 = e_4
\\;\\;\\;
AB_5 = e_5
$$

Since the matrix $B$ is what we are trying to compute, we can view each column, $B_i$, as a column vector of unknowns. Then we have five systems of equations to solve, each with 5 equations in 5 variables. Notice that all 5 of these systems have the same coefficient matrix. We will now solve each system in turn.

Row-reduce the augmented matrix of the linear system $LS(A, e_1)$,

$$
\begin{bmatrix}
1 & 2 & 1 & 2 & 1 & 1\\
−2 & −3 & 0 & −5 & −1 & 0\\
1 & 1 & 0 & 2 & 1 & 0\\
−2 & −3 & −1 & −3 & −2 & 0\\
−1 & −3 & −1 & −3 & 1 & 0
\end{bmatrix}
\xrightarrow{RREF}
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & -3\\
0 & 1 & 0 & 0 & 0 & 0\\
0 & 0 & 1 & 0 & 0 & 1\\
0 & 0 & 0 & 1 & 0 & 1\\
0 & 0 & 0 & 0 & 1 & 1
\end{bmatrix}
; B_1 =
\begin{bmatrix}
−3\\
0\\
1\\
1\\
1
\end{bmatrix}
$$

Row-reduce the augmented matrix of the linear system $LS(A, e_2)$,

$$
\begin{bmatrix}
1 & 2 & 1 & 2 & 1 & 0\\
−2 & −3 & 0 & −5 & −1 & 1\\
1 & 1 & 0 & 2 & 1 & 0\\
−2 & −3 & −1 & −3 & −2 & 0\\
−1 & −3 & −1 & −3 & 1 & 0
\end{bmatrix}
\xrightarrow{RREF}
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 3\\
0 & 1 & 0 & 0 & 0 & -2\\
0 & 0 & 1 & 0 & 0 & 2\\
0 & 0 & 0 & 1 & 0 & 0\\
0 & 0 & 0 & 0 & 1 & -1
\end{bmatrix}
; B_2 =
\begin{bmatrix}
3\\
-2\\
2\\
0\\
-1
\end{bmatrix}
$$

Row-reduce the augmented matrix of the linear system $LS(A, e_3)$,

$$
\begin{bmatrix}
1 & 2 & 1 & 2 & 1 & 0\\
−2 & −3 & 0 & −5 & −1 & 0\\
1 & 1 & 0 & 2 & 1 & 1\\
−2 & −3 & −1 & −3 & −2 & 0\\
−1 & −3 & −1 & −3 & 1 & 0
\end{bmatrix}
\xrightarrow{RREF}
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 6\\
0 & 1 & 0 & 0 & 0 & -5\\
0 & 0 & 1 & 0 & 0 & 4\\
0 & 0 & 0 & 1 & 0 & 1\\
0 & 0 & 0 & 0 & 1 & -2
\end{bmatrix}
; B_3 =
\begin{bmatrix}
6\\
-5\\
4\\
1\\
-2
\end{bmatrix}
$$

Row-reduce the augmented matrix of the linear system $LS(A, e_4)$,

$$
\begin{bmatrix}
1 & 2 & 1 & 2 & 1 & 0\\
−2 & −3 & 0 & −5 & −1 & 0\\
1 & 1 & 0 & 2 & 1 & 0\\
−2 & −3 & −1 & −3 & −2 & 1\\
−1 & −3 & −1 & −3 & 1 & 0
\end{bmatrix}
\xrightarrow{RREF}
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & -1\\
0 & 1 & 0 & 0 & 0 & -1\\
0 & 0 & 1 & 0 & 0 & 1\\
0 & 0 & 0 & 1 & 0 & 1\\
0 & 0 & 0 & 0 & 1 & 0
\end{bmatrix}
; B_4 =
\begin{bmatrix}
-1\\
-1\\
1\\
1\\
0
\end{bmatrix}
$$

Row-reduce the augmented matrix of the linear system $LS(A, e_5)$,

$$
\begin{bmatrix}
1 & 2 & 1 & 2 & 1 & 0\\
−2 & −3 & 0 & −5 & −1 & 0\\
1 & 1 & 0 & 2 & 1 & 0\\
−2 & −3 & −1 & −3 & −2 & 0\\
−1 & −3 & −1 & −3 & 1 & 1
\end{bmatrix}
\xrightarrow{RREF}
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & -2\\
0 & 1 & 0 & 0 & 0 & 1\\
0 & 0 & 1 & 0 & 0 & -1\\
0 & 0 & 0 & 1 & 0 & 0\\
0 & 0 & 0 & 0 & 1 & 1
\end{bmatrix}
; B_5 =
\begin{bmatrix}
-2\\
1\\
-1\\
0\\
1
\end{bmatrix}
$$

We can now collect our 5 solution vectors into the matrix $B$,

$$
B = [B_1 | B_2 | B_3 | B_4 | B_5]
$$

$$
= \begin{bmatrix}
\\;\\;\\;
\begin{bmatrix}
−3\\
0\\
1\\
1\\
1
\end{bmatrix}
\\;\\;\\;
|
\\;\\;\\;
\begin{bmatrix}
3\\
-2\\
2\\
0\\
-1
\end{bmatrix}
\\;\\;\\;
|
\\;\\;\\;
\begin{bmatrix}
6\\
-5\\
4\\
1\\
-2
\end{bmatrix}
\\;\\;\\;
|
\\;\\;\\;
\begin{bmatrix}
-1\\
-1\\
1\\
1\\
0
\end{bmatrix}
\\;\\;\\;
|
\\;\\;\\;
\begin{bmatrix}
-2\\
1\\
-1\\
0\\
1
\end{bmatrix}
\\;\\;\\;
\end{bmatrix}
$$

$$
= \begin{bmatrix}
−3 & 3 & 6 & −1 & −2\\
0 & −2 & −5 & −1 & 1\\
1 & 2 & 4 & 1 & −1\\
1 & 0 & 1 & 1 & 0\\
1 & −1 & −2 & 0 & 1
\end{bmatrix}
$$

Notice how the five systems of equations in the preceding example were all solved by exactly the same sequence of row operations. Would it not be nice to avoid this obvious duplication of effort?

## Reference

1. [linear.ups.edu - theorem TTMI, section Matrix Inverses and Systems of Linear Equations](http://linear.ups.edu/html/section-MISLE.html)