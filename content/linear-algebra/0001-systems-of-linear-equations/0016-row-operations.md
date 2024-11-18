# Row operations

The following 3 operations will transform an $m \times n$ matrix into a different matrix of the same size, and each is known as **row operation**:

1. Swap locations of two rows
2. Multiply each entry of a single row by a nonzero quantity
3. Multiply each entry of one row by some quantity and add these values to the entries in the same columns of a second row. Leave the first row the same after this operation, but replace the second row by the new values.

We will use a symbolic shorthand to describe these row operations:

1. $R_i \leftrightarrow R_j$ - swap the locations of rows $i$ and $j$
2. $\alpha R_i$ - multiply row $i$ by nonzero scalar $\alpha$
3. $\alpha R_i + R_j$ - multiply row $i$ by the scalar $\alpha$ and add to row $j$

## Reference

1. [linear.ups.edu - definition RO, section Reduced Row-Echelon form](http://linear.ups.edu/html/section-RREF.html)