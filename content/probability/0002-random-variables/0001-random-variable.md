# Random variable

A **random variable** is a mapping

$$
X: \Omega \rightarrow \mathbb{R}
$$

that assigns a real number $X(\omega)$ to each outcome $\omega$.

Given a random variable $X$ and a subset $A$ of the real line $\mathbb{R}$, define $X^{- 1}(A) = \\{ \omega \in \Omega: X(\omega) \in \mathbb{R} \\}$ and let

$$
\mathbb{P}(X \in A) = \mathbb{P}(X^{- 1}(A)) = \mathbb{P}( \\{ \omega \in \Omega: X(\omega) \in A \\})
$$

$$
\mathbb{P}(X = x) = \mathbb{P}(X^{- 1}(x)) = \mathbb{P}( \\{ \omega \in \Omega; X(\omega) = x \\})
$$

Notice that $X$ denotes the random variable and $x$ denotes a particular value of $X$.

## Example

Flip a coin four times. Let $X(\omega)$ be the number of heads in the sequence $\omega$. For example, if $\omega = HHTH$, then $X(\omega) = 3$.

$$
\Omega = \\{TTTT, HTTT, THTT, TTHT, TTTH, HHTT, HTHT, HTTH, THHT, THTH, TTHH, HHHT, HHTH, HTHH, THHH, HHHH \\}
$$

$$
X(TTTT) = 0
$$

$$
X(HTTT) = X(THTT) = X(TTHT) = X(TTTH) = 1
$$

$$
X(HHTT) = X(HTHT) = X(HTTH) = X(THHT) = X(THTH) = X(TTHH) = 2
$$

$$
X(HHHT) = X(HHTH) = X(HTHH) = X(THHH) = 3
$$

$$
X(HHHH) = 4
$$

$$
X^{- 1}(0) = \\{ TTTT \\}
$$

$$
X^{- 1}(1) = \\{ HTTT, THTT, TTHT, TTTH \\}
$$

$$
X^{- 1}(2) = \\{ HHTT, HTHT, HTTH, THHT, THTH, TTHH \\}
$$

$$
X^{- 1}(3) = \\{ HHHT, HHTH, HTHH, THHH \\}
$$

$$
X^{- 1}(4) = \\{ HHHH \\}
$$

$$
X^{- 1}( \\{ 0, 1 \\} ) = \\{ TTTT, HTTT, THTT, TTHT, TTTH \\}
$$

$$
X^{- 1}( \\{ 0, 4 \\} ) = \\{ TTTT, HHHH \\}
$$

$$
\mathbb{P}( X \in \\{ 0, 4 \\} )
\\;
= \mathbb{P}(X^{- 1}(\\{ 0, 4 \\}))
\\;
= \mathbb{P}( \\{ \omega \in \Omega: X(\omega) \in \\{ 0, 4 \\} \\} )
\\;
= \mathbb{P}( \\{ TTTT, HHHH \\} )
$$

$$
\mathbb{P}(X = 3)
\\;
= \mathbb{P}(X^{- 1}(3))
\\;
= \mathbb{P}( \\{ \omega \in \Omega; X(\omega) = 3 \\} )
\\;
= \mathbb{P}( \\{ HHHT, HHTH, HTHH, THHH \\} )
$$

## Reference

1. Larry Wasserman **All of statistics** (page 19, 20)