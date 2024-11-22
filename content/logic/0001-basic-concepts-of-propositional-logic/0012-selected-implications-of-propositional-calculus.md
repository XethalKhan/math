# Selected implications of propositional calculus

The following statement forms, each having the **conditional** as main connective, are all tautologies (and hence are implications)

$$
p \rightarrow p
\\;\\;\\;
\text{ reflexive property of implication }
$$

$$
((p \rightarrow q) \land (q \rightarrow r)) \rightarrow (p \rightarrow r)  
\\;\\;\\;
\text{ law of syllogism, transitive property of implication }
$$

$$
(p \land q) \rightarrow p
\\;\\;\\;
\text{ law of simplification }
$$

$$
p \rightarrow (p \lor q)
\\;\\;\\;
\text{ law of addition }
$$

$$
(p \land (p \rightarrow q)) \rightarrow q
\\;\\;\\;
\text{ law of detachment, modus ponens }
$$

$$
((p \rightarrow q) \land \neg q) \rightarrow \neg p  
\\;\\;\\;
\text{ indirect proof, proof by contradiction, reductio ad absurdum }
$$

$$
(p \leftrightarrow q) \rightarrow (q \leftrightarrow p)  
\\;\\;\\;
\text{ symmetric property of equivalence }
$$

$$
((p \leftrightarrow q) \land (q \leftrightarrow r)) \rightarrow (p \leftrightarrow r)  
\\;\\;\\;
\text{ transitive property of equivalence }
$$

$$
(p \rightarrow r) \rightarrow ((p \land q) \rightarrow r)  
\\;\\;\\;
\text{  }
$$

$$
((p \lor q) \land \neg p) \rightarrow q
\\;\\;\\;
\text{ law of disjunction, modus tolledo ponens }
$$

$$
\neg p \rightarrow (p \rightarrow q)
\\;\\;\\;
\text{ }
$$

$$
q \rightarrow (p \rightarrow q)
\\;\\;\\;
\text{ }
$$

$$
(p \leftrightarrow q) \rightarrow (p \rightarrow q)
\\;\\;\\;
\text{ }
$$

All theorems can be proven with truth tables.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 70)