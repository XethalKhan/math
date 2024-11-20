# Selected equivalences of propositional calculus

The followinf statement forms, each having the **biconditional** as main connective, are all **tautologies** (and thus equivalences)

$$
p \leftrightarrow p
\\;\\;\\;
\text{ reflexive property of equivalence }
$$

$$
p \leftrightarrow \neg (\neg p)
\\;\\;\\;
\text{ negation of negation }
$$

$$
\neg (p \land q) \leftrightarrow \neg p \lor \neg q
\\;\\;\\;
\text{ negation of conjunction (De Morgans law) }
$$

$$
\neg (p \lor q) \leftrightarrow \neg p \land \neg q
\\;\\;\\;
\text{ negation of disjunction (De Morgans law) }
$$

$$
\neg (p \rightarrow q) \leftrightarrow p \land \neg q
\\;\\;\\;
\text{ negation of conditional }
$$

$$
\neg (p \leftrightarrow q) \leftrightarrow (p \land \neg q) \lor (\neg p \land q)
\\;\\;\\;
\text{ negation of biconditional }
$$

$$
(p \lor q) \leftrightarrow (q \lor p)
\\;\\;\\;
\text{ commutativity of disjunction }
$$

$$
(p \land q) \leftrightarrow (q \land p)
\\;\\;\\;
\text{ commutativity of conjunction }
$$

$$
(p \lor q) \lor r \leftrightarrow p \lor (q \lor r)
\\;\\;\\;
\text{ associativity of disjunction }
$$

$$
(p \land q) \land r \leftrightarrow p \land (q \land r)
\\;\\;\\;
\text{ associativity of conjunction }
$$

$$
p \lor (q \land r) \leftrightarrow (p \lor q) \land (p \lor r)
\\;\\;\\;
\text{ disjunction distributes over conjunction }
$$

$$
p \land (q \lor r) \leftrightarrow (p \land q) \lor (p \land r)
\\;\\;\\;
\text{ conjunction distributes over disjunction }
$$

$$
(p \leftrightarrow q) \leftrightarrow ((p \rightarrow q) \land (q \rightarrow p))
\\;\\;\\;
\text{ biconditional law, strategy in iff proofs }
$$

$$
(p \rightarrow q) \leftrightarrow (\neg q \rightarrow \neg p)
\\;\\;\\;
\text{ equivalence of contrapositive }
$$

$$
(p \rightarrow q) \leftrightarrow (\neg p \land q)
\\;\\;\\;
\text{ }
$$

$$
(p \rightarrow (q \lor r)) \leftrightarrow ((p \land \neg q) \rightarrow r)
\\;\\;\\;
\text{ strategy for deriving conclusion } q \lor r
$$

$$
((p \lor q) \rightarrow r) \leftrightarrow ((p \rightarrow r) \lor (q \rightarrow r))
\\;\\;\\;
\text{ strategy for using hypothesis } p \lor q
$$

$$
(p \rightarrow (q \land r)) \leftrightarrow ((p \rightarrow q) \land (p \rightarrow r))
\\;\\;\\;
\text{ strategy for deriving conclusion } q \land r
$$

$$
((p \land q) \rightarrow r) \leftrightarrow ((p \rightarrow \neg r) \rightarrow \neg q)
\\;\\;\\;
\text{ indirect approach to using hypothesis } p \land q
$$

$$
((p \land q) \rightarrow r) \leftrightarrow ((p \rightarrow r) \lor (q \rightarrow r))
\\;\\;\\;
\text{ strategy for using hypothesis } p \land q
$$

$$
((p \land q) \rightarrow r) \leftrightarrow (p \rightarrow (q \rightarrow r))
\\;\\;\\;
\text{  }
$$

$$
(p \leftrightarrow q) \leftrightarrow (\neg q \leftrightarrow \neg p)
\\;\\;\\;
\text{  }
$$

All theorems can be proven with truth tables.

Biconditional law, strategy in iff proof indicates that if $p$ and $q$ are equivalent, than each implies the other. On the other hand, if it is known only that $p$ implies $q$, the possibility that $p$ and $q$ are equivalent is left open. In fact, the latter is true if and only if $q$ implies $p$.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 68, 69)