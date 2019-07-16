# Logical expressions

## Notation

Logical values are expressed in a way similar to mathmatical equations. Variables in logical expressions though have only two possible values ``true`` or ``false``. For and equation using a logical expression, equivalancy result on each side of the equal sign ,``=``, will be only ``true`` or ``false`` too.

The following list shows the basic notation elements for logical expressions.

* ``~A``: the inverse (**NOT**) of ``A``, when ``A`` is **true**, ``~A`` is ``false``
* ``A+B``: the value of ``A`` **OR** ``B``
* ``A·B``: the value of ``A`` **AND** ``B``
* ``A⊕B``: the value of the exclusive OR (**XOR**) of ``A`` with ``B``
* ``Q``: equivalent result (OUTPUT) value of a logical expression

A resulting value, ``Q``, from a logical expression in is shown like:

``Q`` = ``A+B``

An equation to show logically equivalent expressions (where both sides have the same resulting value) can look like this:

``~(A+B)`` = ``~A·~B``

## Logical Operators

### NOT (Negation)

``Q = ~A``

```block
let A = false
let Q = !A
```

#### Truth Table

A | ~A
-|-
F | T
T | F

### OR (Disjunction)

``Q = A+B``

```block
let A = false
let B = false
let Q = A || B
```
#### Truth Table

A | B | A + B
-|-|-
F | F | F
T | F | T
F | T | T
T | T | T

### AND (Conjunction)

``Q = A·B``

```block
let A = false
let B = false
let Q = A && B
```
#### Truth Table

A | B | A · B
-|-|-
F | F | F
T | F | F
F | T | F
T | T | T

### NOR

``Q = ~(A+B)``

```block
let A = false
let B = false
let Q = !(A || B)
```

A | B | ~(A + B)
-|-|-
F | F | T
T | F | F
F | T | F
T | T | F

### NAND

``Q = ~(A·B)``

```block
let A = false
let B = false
let Q = !(A && B)
```

A | B | ~(A · B)
-|-|-
F | F | T
T | F | T
F | T | T
T | T | F

### XOR #xor

``Q = A⊕B``

```block
let A = false
let B = false
let Q = (A || B) && !(A && B)
```

A | B | A · B
-|-|-
F | F | F
T | F | T
F | T | T
T | T | F
