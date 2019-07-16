# Logic Gates

In the real world digital devices aren't using logical expressions, which is just abstract Boolean mathmatics, but they implement these expressions in hardware. The logical express are translated into device structures called _logic gates_. A logic gate is both a symbolic representation of a logical operation and, when used in digital electronics, it can be an actual circuit in hardware.

Each of the operators we learned about in the logical expressions section have a gate symbol. The symbol takes the place of the operator and the variables are the inputs to the gate. The resulting value from the expression equation is the output of the gate.

## Gate Symbols

### NOT

![NOT gate symbol](/static/cp/learn/logic-lab/logic-gates/not-gate.png)

### OR

![OR gate symbol](/static/cp/learn/logic-lab/logic-gates/or-gate.png)

### AND

![AND gate symbol](/static/cp/learn/logic-lab/logic-gates/and-gate.png)

### Exclusive OR (XOR)

![XOR gate symbol](/static/cp/learn/logic-lab/logic-gates/xor-gate.png)

## Combined logic

When you connect multiple gates together then you have a combined logic system or _combinatorial logic_. The XOR gate can appear as a single (discrete) logical element but it can be replaced with AND, OR, and NOT gates to have the same output.

Back in [Logical Expressions](/learnsystem/logic-lab/logical-expressions#xor) we saw that there was no operator to use in code for XOR so it was made up by using AND, OR, and NOT operators:

```block
let A = false
let B = false
let Q = (A || B) && !(A && B)
```
And, expressed in Boolean arithmetic it is:

``A⊕B`` = ``(A+B) · ~(A·B)``

Doing the same thing with gates and replacing the XOR symbol gives us:

![combinatorial-xor](/static/cp/learn/logic-lab/logic-gates/combinatorial-xor.png)
