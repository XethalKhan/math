# Properties of bijection and identity mapping

Given sets $A$ and $B$

1. The identity mapping $I_A: A \rightarrow A$ on $A$ is a **bijection**.
2. If $f: A \rightarrow B$ is a **bijection**, so is $f^{-1}: B \rightarrow A$
3. If $f: A \rightarrow B$ is a **bijection**, then $f^{-1} \circ f = I_A$, and $f \circ f^{-1} = I_B$

## Proof

### 3. If $f: A \rightarrow B$ is a **bijection**, then $f^{-1} \circ f = I_A$, and $f \circ f^{-1} = I_B$

Since $f$ is a **one-to-one mapping** of $A$ onto $B$, then by **Property 2 of this theorem**, $f$ is a **bijection** from $B$ to $A$. Hence by [**Property 1 of theorem - Properties of function composition with bijection**](./0015-properties-of-function-composition-with-bijection.md), $f^{-1} \circ f$ is a **bijection** from $A$ to $A$, while $f \circ f^{-1}$ is a **bijection** from $B$ to $B$. To show $f^{-1} \circ f = I_A$, let $x \in A$; we need only show that $(f^{-1} \circ f)(x) = x$; that is, $f^{-1}(f(x)) = x$, or the ordered pair $(f(x), x) \in f^{-1}$ which is equivalent to $(x, f (x)) \in f$, evidently a true statement. To show $f \circ f^{-1} = I_B$ let $y \in B$. We claim that $f(f^{-1}(y)) = y$. For this, we need only that $(f^{-1}(y), y) \in f$. The latter is true since $(y, f^{-1}(y)) \in f^{-1}$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 269)