# Statement form

When dealing with expressions such as $\neg p, p \land q \text{ and } p \lor \neg q$, in a case where $p$ and $q$ are variables representing unknown statements with unknown truth values, we refer to these expressions as **statement forms**.

A statement form becomes a statement when in a specific statement is substituted each of its unknowns (the latter sometimes referred to as components). As it stands, a statement form is neither true nor false; indeed our immediate interest is to determine under what truth conditions a given statement form is true and when it is false.

The most convenient device for illustrating the truth values of a compound statement form under the various possible truth conditions is **the truth table**.

| $p$   | $q$   | $r$   | $\neg p$  | $\neg p \land q$  | $p \land r$   | $(\neg p \land q) \lor (p \land r)$   |
|-------|-------|-------|-----------|-------------------|---------------|---------------------------------------|
| T     | T     | T     | F         | F                 | T             | T                                     |
| T     | T     | F     | F         | F                 | F             | F                                     |
| T     | F     | T     | F         | T                 | T             | T                                     |
| T     | F     | F     | F         | F                 | F             | F                                     |
| F     | T     | T     | T         | T                 | F             | T                                     |
| F     | T     | F     | T         | T                 | F             | T                                     |
| F     | F     | T     | T         | F                 | F             | F                                     |
| F     | F     | F     | T         | F                 | F             | F                                     |

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 56, 57)
