# Laws of exponents in groups

For every group $G$ and its members $g, h \in G$

1. $g^{m} g^{n} = g^{m + n}$ for all $m, n \in \mathbb{Z}$
2. $(g^{m})^{n} = g^{m n}$ for all $m, n \in \mathbb{Z}$
3. $(g h)^{n} = (h^{-1} g^{-1})^{-n}$ for all $n \in \mathbb{Z}$

Furthermore, if $G$ is **abelian**, then $(g h)^{n} = g^{n} h^{n}$

## Proof

### 1. $g^{m} g^{n} = g^{m + n}$ for all $m, n \in \mathbb{Z}$

We prove this with division by cases

#### $m \gt 0$

and $n = 0 \rightarrow g^{m} g^{n} = g^{m} g^{0} = g^{m} e = g^{m} = g^{m + 0}$

and $n \gt 0$ to prove by mathematical induction, first we prove the base case $n = 1$.

$$
g^{m} g^{n} = g^{m} g^{1} = g^{m} g = g^{m + 1}
\\;\\;\\;
\text{ by definition of exponent }
$$

For inductive case we assume that all $n$ cases $n \geq 1$ hold, and we want to prove $n + 1$

$$
g^{m} g^{n + 1} = g^{m} (g^{n} g^{1}) = (g^{m} g^{n}) g = g^{m + n} g = g^{m + n + 1}
$$

and $n \lt 0, n = - m$

$$
g^{m} g^{n} = g^{m} g^{- m} = e = g^{0} = g^{m + n}
$$

and $n \lt 0, n \gt - m$, then $m = (m + n) - n$

$$
g^{m} g^{n} = g^{m + n - n} g^{n} = g^{m + n} g^{-n} g^{n} = g^{m + n} e = g^{m + n}
$$

and $n \lt 0, n \lt - m$, then $-n = -n + m - m$

$$
g^{m} g^{n} = g^{m} g^{(-1) (-n)} = g^{m} g^{(-1) (-n + m - m)} = g^{m} g^{(-1)(m)} g^{(-1)(-n - m)} = g^{m} g^{- m} g^{n + m} = e g^{n + m} = g^{n + m}
$$

------------------

#### $m \lt 0$

and $n = 0 \rightarrow g^{m} g^{n} = g^{m} g^{0} = g^{m} e = g^{m} = g^{m + 0}$

and $n \gt 0, n = -m$

$$
g^{m} g^{n} = g^{m} g^{- m} = e = g^{0} = g^{m - m} = g^{m + n}
$$

and $n \gt 0, n \gt -m$, then $- m = - m + n - n$

$$
g^{m} g^{n} = g^{(- 1)(- m)} g^{n} = g^{(- 1)(- m + n - n)} g^{n} = g^{(- 1)(n)} g^{(- 1)(- m - n)} g^{n} = g^{- n} g^{n} g^{m + n} = e g^{m + n} = g^{m + n}
$$

and $n \gt 0, n \lt -m$, then $n = n + m - m$

$$
g^{m} g^{n} = g^{m} g^{n + m - m} = g^{m} g^{- m} g^{n + m} = e g^{n + m} = g^{n + m}
$$

$n \lt 0$ to prove by mathematical induction first we prove the base case $n = - 1$

$$
g^{m} g^{n} = g^{m} g^{(- 1)(- n)} = g^{m} g^{(- 1)(1)} = g^{m} g^{- 1} = g^{m - 1} = g^{m + n}
$$

For inductive case we assume that all $- n$ cases, $- n \geq 1$ hold, and we want to prove $- n + 1 \xrightarrow{\times (- 1)} n - 1$

$$
g^{m} g^{(- 1)(- n + 1)} = g^{m} g^{n - 1} = g^{m} g^{n} g^{- 1} = g^{m + n} g^{- 1} = g^{m + n - 1}
$$

### 2. $(g^{m})^{n} = g^{m n}$ for all $m, n \in \mathbb{Z}$

We prove this with division by cases

#### $m \gt 0$

$n = 0$

$$
(g^m)^n = (g^m)^0 = e = g^{m \times 0} = g^{mn}
$$

$n \gt 0$

To prove by mathematical induction first we prove the base case $n = 1$.

$$
(g^m)^n = (g^m)^1 = g^m = g^{m \times 1} = g^{mn}
$$

For inductive case we assume that all $n$ cases, $n \geq 1$ hold, and we want to prove $n + 1$

$$
(g^m)^{n + 1} = (g^m)^n g^m = g^{mn} g^m = g^{mn + m} = g^{m(n + 1)}
$$

$n \lt 0$

$$
(g^m)^n = (g^m)^{(-1)(-n)} =  (g^{m (-n)})^{-1} = (g^1 g^{m (-n) - 1})^{-1} \text{ now using socks-shoe property } = g^{(-1)(m (-n) - 1)} g^{-1} = g^{mn + 1} g^{-1} = g^{mn}
$$

#### $m \lt 0$

$n = 0$

$$
(g^m)^n = (g^m)^0 = e = g^{m \times 0} = g^{mn}
$$

$n \gt 0$

To prove by mathematical induction first we prove the base case $n = 1$.

$$
(g^m)^n = (g^m)^1 = g^m = g^{m \times 1} = g^{mn}
$$

For inductive case we assume that all $n$ cases, $n \geq 1$ hold, and we want to prove $n + 1$

$$
(g^m)^{n + 1} = (g^m)^n (g^m)^1 = g^{mn} g^m = g^{mn + m} = g^{m(n + 1)}
$$

$n \lt 0$

$$
(g^m)^n = (g^m)^{(-1)(-n)} = (g^{m (-n)})^{-1} = (g^{m (-n) - 1} g^1)^{-1} \text{ now using socks-shoe property } = g^{-1} g^{(-1)(m (-n) - 1)} = g^{-1} g^{mn + 1} = g^{mn}
$$

### 3. $(g h)^{n} = (h^{-1} g^{-1})^{-n}$ for all $n \in \mathbb{Z}$

$$
(gh)^{n} = (gh)^{(-1)(-n)} = ((gh)^{(-1)})^{(-n)} \text{ now using socks-shoe property } = (h^{-1} g^{-1})^{-n}
$$