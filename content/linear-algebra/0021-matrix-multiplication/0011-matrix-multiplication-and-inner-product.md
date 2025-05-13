# Matrix multiplication and inner product

If we consider the vectors $u, v \in \mathbb{C}^m$ as $m \times 1$ matrices then

$$
⟨u, v⟩ = \overline{u}^t v
$$

## Proof

$$
⟨u, v⟩ = \sum^{m}_{k = 1} \overline{[u]_k} [v]_k
\\;\\;\\;
\text{ Definition Inner Product }
$$

$$
= \sum^{m}_{k = 1} \overline{[u]_{k1}} [v]_{k1}
\\;\\;\\;
\text{ Column vectors as matrices }
$$

$$
= \sum^{m}_{k = 1} [\overline{u}]_{k1} [v]_{k1}
\\;\\;\\;
\text{ Complex conjugate }
$$

$$
= \sum^{m}_{k = 1} [\overline{u^{t}}]_{1k} [v]_{k1}
\\;\\;\\;
\text{ Transpose of a Matrix }
$$

$$
= [\overline{u^t} v]_{11}
\\;\\;\\;
\text{ Theorem Entries of Matrix Product }
$$

To finish we just blur the distinction between a $1 \times 1$ matrix ($\overline{u^t} v$) and its lone entry.

## Note

The statement of our theorem is technically inaccurate. If we upgrade the vectors $u, v$ to matrices with a single column, then the expression $\overline{u^t} v$ is a $1 \times 1$ matrix, though we will treat this small matrix as if it was simply the scalar quantity in its lone entry. When we apply this theorem there should not be any confusion.

## Reference

1. [linear.ups.edu - theorem MMIP, section Matrix Multiplication](http://linear.ups.edu/html/section-MM.html)