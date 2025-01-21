# Properties of function composition with injection and surjection

Let $f: X \rightarrow Y$ and $g: Y \rightarrow Z$ so that $g \circ f: X \rightarrow Z$. Then:

1. If $f$ and $g$ are **injective**, $g \circ f$ is **injective**.
2. If $f$ and $g$ are **surjective**, $g \circ f$ is **surjective**.
3. If $g \circ f$ is **injective**, then $f$ is **injective**.
4. If $g \circ f$ is **surjective**, then $g$ is **surjective**.

## Proof

### 3. If $g \circ f$ is **injective**, then $f$ is **injective**.

Given that $g \circ f$ is **injective**, we use the condition in Theorem [**Injective mapping and mapping composition theorem**](./0010-injective-mapping-and-mapping-composition-theorem.md), to prove $f$ is injective.

To set up such a proof, we let $W$ be a set and let $h$ and $k$ be mappings of $W$ into $X$ such that $f \circ h = f \circ k$. We must prove that $h = k$.

Now since $f \circ h = f \circ k$, then $g \circ (f \circ h) = g \circ (f \circ k)$, where both these mappings send $W$ to $Z$.

By [**associativity of composition**](./0009-composition-of-functions-is-associative.md), we may deduce $(g \circ f) \circ h = (g \circ f) \circ k$. Since $g \circ f$ is **injective**, then by Theorem [**Injective mapping and mapping composition theorem**](./0010-injective-mapping-and-mapping-composition-theorem.md), we may "cancel" $g \circ f$ on the left to conclude $h = k$, as desired.

### 4. If $g \circ f$ is **surjective**, then $g$ is **surjective**.

To prove $g$ is surjective, let $z \in Z$ be given. We must show there exists $y \in Y$ such that $g(y) = z$. Now since $g \circ f$ maps $X$ onto $Z$, by hypothesis, then corresponding to this $z$ (using specialization), there is an element $x \in X$ such that $z = (g \circ f)(x)$. Since $(g \circ f)(x) = g(f(x))$ and since $f(x) \in Y$, our choice of the desired $y$ is now clear. Let $y = f(x)$. We reiterate that $y \in Y$ and note that $g(y) = g(f(x)) = z$, as desired.

## Reference

1. Ronald P. Morash, *Bridge to abstract math. Mathematical proof and structures* (page 267, 268)