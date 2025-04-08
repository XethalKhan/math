# Independence on multiple experiments

Consider $n$ random experiments with sample spaces $\Omega_1, \dots , \Omega_n$. The set $\Omega = \Omega_1 \times \dots \times \Omega_n$ is the sample space expressing all possible results of the experiments. The experiments are independent if for all sets $A_1 \times \dots \times A_n$ with $A_i \subseteq \Omega_i$,

$$
\mathbb{P}(A_1 \times \dots \times A_n) = \mathbb{P}(A_1) \dots \mathbb{P}(An)
$$

## Example

In two independent die throwing experiments $\Omega = { 1, \dots , 6 } \times { 1, \dots , 6 }$ and

$$
\mathbb{P}(\text{ first die is } 3, \text{ second die is } 4)
= \mathbb{P}(\text{ first die is } 3) \times \mathbb{P}(\text{ second die is } 4)
= \frac{1}{6} \times \frac{1}{6} = \frac{1}{36}
$$

## Reference

1. [Probability - The analysis of data - Volume 1 - 1.5. Conditional Probability and Independence](http://theanalysisofdata.com/probability/1_5.html)