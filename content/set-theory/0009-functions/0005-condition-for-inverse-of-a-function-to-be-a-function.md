# Condition for inverse of a function to be a function

Let $f$ be a **function**. Then the inverse relation $f^{-1}$ is a function if and only if $f$ is **one-to-one**. We say that $f$ is **invertible** in this case.

## Proof

$$
p: f^{-1} \text{ is a function }
$$

$$
q: f \text{ is one-to-one }
$$

### $p \rightarrow q$

Assume that $f^{-1}$ is a function. To prove $f$ is **one-to-one** choose $x_1, x_2 \in dom(f)$ and assume $f(x_1) = f(x_2)$, we must prove $x_1 = x_2$. Letting $y = f(x_1) = f(x_2)$, we have that the ordered pairs $(y, x_1)$ and $(y, x_2)$ are both in $f^{-1}$ (using hypothesis and definition [**inverse of a function**](./0004-inverse-of-a-function.md)). Since $f^{-1}$ is a **function** (hypothesis $p$ and definition of [**function**](./0001-function.md)) we conclude $x_1 = x_2$.

### $p \leftarrow q$

Assume that $f$ is **one-to-one**. To prove that $f^{-1}$ is a function, choose $x \in dom(f)$. Letting $y = f(x)$, we have the ordered pair in $f^{-1}$ (using hypothesis and definition of [**inverse of a function**](./0004-inverse-of-a-function.md)). Since $f$ is one-to-one $(x, y)$ is unique ordered pair in $f$ that contains $x$ and $y$ (definition [**injective mapping**](./0003-injective-mapping.md)), thus $(y, x)$ is the only ordered pair in $f^{-1}$ that contains $x$ and $y$. In $f^{-1}$ every $y$ can only map to one $x$ therefore by definition of [**function**](./0001-function.md) $f^{-1}$ is a function.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 259)