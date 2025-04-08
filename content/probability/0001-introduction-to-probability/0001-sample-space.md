# Sample space

## Definition

The **sample space** $\Omega$ is the set of possible outcomes of an experiment. Points $\omega$ in $\Omega$ are called **sample outcomes, realizations, or elements**. Subsets of $\Omega$ are called **events**.

For a finite sample space $\Omega$, an event containing a single element $E = {\omega}, \omega \in \Omega$ is called an **elementary event**.

## Example

If we toss a coin twice then $\Omega = \\{HH, HT, TH, TT\\}$. The event that the first toss is heads is $A = \\{HH, HT\\}$.

## Summary of terminology using set theory

| Symbol                | Meaning                                           |
|-----------------------|---------------------------------------------------|
| $\Omega$              | Sample space                                      |
| $\omega$              | outcome (point or element)                        |
| $A$                   | event (subset of $\Omega$)                        |
| $A'$                  | complement of $A$ (not $A$)                       |
| $A \cup B$            | union ($A$ or $B$)                                |
| $A \cap B$ or $AB$    | intersection ($A$ and $B$)                        |
| $A − B$               | set difference ($\omega$ in $A$ but not in $B$)   |
| $A \subset B$         | set inclusion                                     |
| $\emptyset$           | null event (always false)                         |
| $\Omega$              | true event (always true)                          |

For an event $E$, the outcome of the random experiment $\omega \in \Omega$ is either in $E (\omega \in E)$ or not in $E (\omega \not \in E)$. In the first case, we say that the event $E$ occurred, and in the second case we say that the event $E$ did not occur. $A \cup B$ is the event of either $A$ or $B$ occurring and $A \cap B$ is the event of both $A$ and $B$ occurring. The complement $A'$ (in the complement, the universal set is taken to be $\Omega: A' = \Omega / A$) represents the event that $A$ did not occur. If the events $A$, $B$ are disjoint ($A \cap B = \emptyset$), the two events cannot happen at the same time, since no outcome of the random experiment belongs to both $A$ and $B$. If $A \subset B$, then $B$ occurring implies that $A$ occurs as well.

## Reference

1. Larry Wasserman **All of statistics** (page 3, 4)
2. [Probability - The analysis of data - Volume 1 - 1.1. Sample Space and Events](http://theanalysisofdata.com/probability/1_1.html)
3. [Probability - The analysis of data - Volume 1 - 1.2. The Probability Function](http://theanalysisofdata.com/probability/1_2.html)