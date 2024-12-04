# Reduced row-echelon form is unique

Suppose that $A$ is an $m \times n$ matrix and that $B$ and $C$ are $m \times n$ matrices that are row-equivalent to $A$ and in reduced row-echelon form. Then $B = C$.

## Proof

We need to begin with no assumptions about any relationships between $B$ and $C$, other than they are both in reduced row-echelon form, and they are both row-equivalent to $A$.

If $B$ and $C$ are both row-equivalent to $A$, then they are row-equivalent to each other. Repeated row operations on a matrix combine the rows with each other using operations that are linear, and are identical in each column. A key observation for this proof is that each individual row of $B$ is linearly related to the rows of $C$. This relationship is different for each row of $B$, but once we fix a row, the relationship is the same across columns. More precisely, there are scalars $\delta_{i k}, 1 \leq i, k \leq m$ such that for any $1 \leq i \leq m, 1 \leq j \leq n$,

$$
[B]\_{ij} = \sum_{k = 1}^{m} \delta_{i k} [C]_{k j}
$$

You should read this as saying that an entry of row $i$ of $B$ (in column $j$) is a linear function of the entries of all the rows of $C$ that are also in column $j$, and the scalars ($\delta_{i k}$) depend on which row of $B$ we are considering (the $i$ subscript on $\delta_{i k}$), but are the same for every column (no dependence on $j$ in $\delta_{i k}$). This idea may be complicated now, but will feel more familiar once we discuss **linear combinations** and moreso when we discuss **row spaces**. This completes our exploitation of the row-equivalence of $B$ and $C$.

We now repeatedly exploit the fact that $B$ and $C$ are in reduced row-echelon form. Recall that a pivot column is all zeros, except a single one. More carefully, if $R$ is a matrix in reduced row-echelon form, and $d_{l}$ is the index of a pivot column, then $[R]\_{k d_{l}} = 1$ precisely when $k = l$ and is otherwise zero. Notice also that any entry of $R$ that is both below the entry in row $l$ and to the left of column $d_{l}$ is also zero (with below and left understood to include equality). In other words, look at examples of matrices in reduced row-echelon form and choose a leading 1 (with a box around it). The rest of the column is also zeros, and the lower left “quadrant” of the matrix that begins here is totally zeros.

Assuming no relationship about the form of $B$ and $C$, let $B$ have $r$ nonzero rows and denote the pivot columns as $D = \\{d_1, d_2, d_3, \dots, d_r\\}$. For $C$ let $r'$ denote the number of nonzero rows and denote the pivot columns as $D' = \\{d'_1, d'_2, d'_3, \dots, d'_r\\}$ (Definition Reduced Row Echelon Form). There are four steps in the proof, and the first three are about showing that $B$ and $C$ have the same number of pivot columns, in the same places. In other words, the “primed” symbols are a necessary fiction.

First Step. Suppose that $d_1 \lt d'_1$. Then

$$
1 = [B]_{1 d_1} \text{ Definition Reduced Row Echelon Form }
$$

$$
= \sum_{k = 1}^{m} \delta_{1 k} [C]_{k d_1}
$$

$$
= \sum_{k = 1}^{m} \delta_{1 k} (0)
\\;\\;\\;
d_1 \lt d'_1
$$

$$
= 0
$$
 
The entries of $C$ are all zero since they are left and below of the leading 1 in row 1 and column $d'_1$ of $C$. This is a contradiction, so we know that $d_1 \gte d'_1$. By an entirely similar argument, reversing the roles of $B$ and $C$, we could conclude that $d_1 \lte d'_1$. Together this means that $d_1 = d'_1$.

Second Step. Suppose that we have determined that $d_1 = d'_1, d_2 = d'_2, d_3 = d'_3, \dots d_p = d'_p$. Let us now show that $d_{p + 1} = d'_{p + 1}$. Working towards a contradiction, suppose that $d_{p + 1} \lt d'_{p + 1}$. For $1 \lte l \lte p$,

$$
0 = [B]_{p + 1, d_l}
\\;\\;\\;
\text{ Definition Reduced Row Echelon Form }
$$

$$
= \sum_{k = 1}^{m} \delta_{p + 1, k} [C]_{k d_l}
$$

$$
= \sum_{k = 1}^{m} \delta_{p + 1, k} [C]_{k d'_l}
$$

$$
= \delta_{p + 1, l} [C]_{l d'_l} + \sum_{k = 1\\;k \neq l}^{m} \delta_{p + 1, k}[C]_{k d'_l}
\\;\\;\\;
\text{ Definition CACN }
$$

$$
= \delta_{p + 1, l}(1) + \sum_{k = 1\\;k \neq l}^{m} \delta_{p + 1, k}(0)
\\;\\;\\;
\text{ Definition Reduced Row Echelon Form }
$$

$$
= \delta_{p + 1, l}
$$

-----------------STIGAO DO OVDE !!! ----------------
 
Now,
1
=
[
B
]
p
+
1
,
d
p
+
1
Definition RREF
=
m
∑
k
=
1
 
δ
p
+
1
,
k
[
C
]
k
d
p
+
1
=
p
∑
k
=
1
 
δ
p
+
1
,
k
[
C
]
k
d
p
+
1
+
m
∑
k
=
p
+
1
 
δ
p
+
1
,
k
[
C
]
k
d
p
+
1
Property AACN
=
p
∑
k
=
1
 
(
0
)
[
C
]
k
d
p
+
1
+
m
∑
k
=
p
+
1
 
δ
p
+
1
,
k
[
C
]
k
d
p
+
1
=
m
∑
k
=
p
+
1
 
δ
p
+
1
,
k
[
C
]
k
d
p
+
1
=
m
∑
k
=
p
+
1
 
δ
p
+
1
,
k
(
0
)
d
p
+
1
<
d
′
p
+
1
=
0
 
This contradiction shows that  
d
p
+
1
≥
d
′
p
+
1
 . By an entirely similar argument, we could conclude that  
d
p
+
1
≤
d
′
p
+
1
 , and therefore  
d
p
+
1
=
d
′
p
+
1
 .

Third Step. Now we establish that  
r
=
r
′
 . Suppose that  
r
′
<
r
 . By the arguments above, we know that  
d
1
=
d
′
1
 ,  
d
2
=
d
′
2
 ,  
d
3
=
d
′
3
 , …,  
d
r
′
=
d
′
r
′
 . For  
1
≤
ℓ
≤
r
′
<
r
 ,
0
=
[
B
]
r
d
ℓ
Definition RREF
=
m
∑
k
=
1
 
δ
r
k
[
C
]
k
d
ℓ
=
r
′
∑
k
=
1
 
δ
r
k
[
C
]
k
d
ℓ
+
m
∑
k
=
r
′
+
1
 
δ
r
k
[
C
]
k
d
ℓ
Property AACN
=
r
′
∑
k
=
1
 
δ
r
k
[
C
]
k
d
ℓ
+
m
∑
k
=
r
′
+
1
 
δ
r
k
(
0
)
Property AACN
=
r
′
∑
k
=
1
 
δ
r
k
[
C
]
k
d
ℓ
=
r
′
∑
k
=
1
 
δ
r
k
[
C
]
k
d
′
ℓ
=
δ
r
ℓ
[
C
]
ℓ
d
′
ℓ
+
r
′
∑
k
=
1
k
≠
ℓ
 
δ
r
k
[
C
]
k
d
′
ℓ
Property CACN
=
δ
r
ℓ
(
1
)
+
r
′
∑
k
=
1
k
≠
ℓ
 
δ
r
k
(
0
)
Definition RREF
=
δ
r
ℓ
 
Now examine the entries of row  
r
  of  
B
 ,
[
B
]
r
j
=
m
∑
k
=
1
 
δ
r
k
[
C
]
k
j
=
r
′
∑
k
=
1
 
δ
r
k
[
C
]
k
j
+
m
∑
k
=
r
′
+
1
 
δ
r
k
[
C
]
k
j
Property CACN
=
r
′
∑
k
=
1
 
δ
r
k
[
C
]
k
j
+
m
∑
k
=
r
′
+
1
 
δ
r
k
(
0
)
Definition RREF
=
r
′
∑
k
=
1
 
δ
r
k
[
C
]
k
j
=
r
′
∑
k
=
1
 
(
0
)
[
C
]
k
j
=
0
 
So row  
r
  is a totally zero row, contradicting that this should be the bottommost nonzero row of  
B
 . So  
r
′
≥
r
 . By an entirely similar argument, reversing the roles of  
B
  and  
C
 , we would conclude that  
r
′
≤
r
  and therefore  
r
=
r
′
 . Thus, combining the first three steps we can say that  
D
=
D
′
 . In other words,  
B
  and  
C
  have the same pivot columns, in the same locations.

Fourth Step. In this final step, we will not argue by contradiction. Our intent is to determine the values of the  
δ
i
j
 . Notice that we can use the values of the  
d
i
  interchangeably for  
B
  and  
C
 . Here we go,
1
=
[
B
]
i
d
i
Definition RREF
=
m
∑
k
=
1
 
δ
i
k
[
C
]
k
d
i
=
δ
i
i
[
C
]
i
d
i
+
m
∑
k
=
1
k
≠
i
 
δ
i
k
[
C
]
k
d
i
Property CACN
=
δ
i
i
(
1
)
+
m
∑
k
=
1
k
≠
i
 
δ
i
k
(
0
)
Definition RREF
=
δ
i
i
 
and for  
ℓ
≠
i
 
0
=
[
B
]
i
d
ℓ
Definition RREF
=
m
∑
k
=
1
 
δ
i
k
[
C
]
k
d
ℓ
=
δ
i
ℓ
[
C
]
ℓ
d
ℓ
+
m
∑
k
=
1
k
≠
ℓ
 
δ
i
k
[
C
]
k
d
ℓ
Property CACN
=
δ
i
ℓ
(
1
)
+
m
∑
k
=
1
k
≠
ℓ
 
δ
i
k
(
0
)
Definition RREF
=
δ
i
ℓ
 
Finally, having determined the values of the  
δ
i
j
 , we can show that  
B
=
C
 . For  
1
≤
i
≤
m
 ,  
1
≤
j
≤
n
 ,
[
B
]
i
j
=
m
∑
k
=
1
 
δ
i
k
[
C
]
k
j
=
δ
i
i
[
C
]
i
j
+
m
∑
k
=
1
k
≠
i
 
δ
i
k
[
C
]
k
j
Property CACN
=
(
1
)
[
C
]
i
j
+
m
∑
k
=
1
k
≠
i
 
(
0
)
[
C
]
k
j
=
[
C
]
i
j
 
So  
B
  and  
C
  have equal values in every entry, and so are the same matrix.

http://linear.pugetsound.edu/html/section-RREF.html#theorem-RREFU

