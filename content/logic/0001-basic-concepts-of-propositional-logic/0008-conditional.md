# Conditional

Given statements $p$ and $q$, we define the statement **$p$ implies $q$** denoted $p \rightarrow q$, also read **if $p$ then $q$** is true except in the case where $p$ is true and $q$ is false. Such a statement is called a **conditional**.

The component statements $p$ and $q$ are called the **premise** and **conclusion**, respectively.

| $p$   | q | $\neg p$  | $\neg q$  | $p \rightarrow q$ | $q \rightarrow p$ | $\neg p \rightarrow \neg q$ | $\neg q \rightarrow \neg p$ |
|-------|---|-----------|-----------|-------------------|-------------------|-----------------------------|-----------------------------|
| T     | T | F         | F         | T                 | T                 | T                           | T                           |
| T     | F | F         | T         | F                 | T                 | T                           | F                           |
| F     | T | T         | F         | T                 | F                 | F                           | T                           |
| F     | F | T         | T         | T                 | T                 | T                           | T                           |

If $p \rightarrow q$ is a conditional, then the corresponding conditional $\neg q \rightarrow \neg p$ is called its **contrapositive**, $q \rightarrow p$ is called its **converse**, and $\neg p \rightarrow \neg q$ is called its **inverse**.

If $p$ and $q$ are **statement forms** such that **conditional** $p \rightarrow q$ is a **tautology**, we say that this conditional statement is an **implication** and that **$p$ logically implies $q$**. Because this situation means that $q$ is true under all truth conditions for which $p$ is true (i.e. the truth of $p$ *forces* $q$ to be true), we say that $p$ is a **stronger** statement form than $q$, or that $q$ is weaker than $p$ in this case.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 61, 65)