# Elementary row operations are reversible

Every **row operation** performed on a **matrix** can be reversed.

## Proof

For any matrix $A$

1. the effect of swapping rows is reversed by swapping them back
2. multiplying a row by a nonzero scalar $k$ is undone by multiplying by $\frac{1}{k}$
3. adding a multiple of row $i$ to row $j$ (with $i \neq j$) is undone by substracting the same multiple of row $i$ from row $j$.

$$
A \xrightarrow{\rho_i \leftrightarrow \rho_j} B \xrightarrow{\rho_j \leftrightarrow \rho_i} A
$$

$$
A \xrightarrow{k \rho_i} B \xrightarrow{\frac{1}{k} \rho_i} A
$$

$$
A \xrightarrow{k \rho_i + \rho_j} B \xrightarrow{-k \rho_i + \rho_j} A
$$

## Reference

1. Jim Hefferson, *Linear Algebra* (page 52)