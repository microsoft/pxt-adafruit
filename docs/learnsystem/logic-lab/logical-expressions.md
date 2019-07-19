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

## Logic explorer

Make an array of two values as logical inputs. Add a variable ``||variables:Q||`` to receive the resulting value of a logical expression.

```blocks
let inputs = [false, true]
let Q = false
```

### Single input loop

To start with, we'll make a single input expression test for the input variable ``||variables:A||``. Get a ``||loops:for element||`` loop and put it in the ``||loops:on start||``. Rename the ``||variables:index||`` variable to ``||variables:A||`` and switch the ``||variables:list||`` variable to ``||variables:inputs||``.

```blocks
let inputs = [false, true]
let Q = false
for (let A of inputs) {
    Q = false
    if (Q) {
        light.setAll(0x0000ff)
    } else {
        light.setAll(0xff8000)
    }
    pause(500)
    light.clear()
    pause(500)
}
```

### Identity test

```block
let A = false
let Q = A
```
A | Q = A
-|-
**false** | ``[light.setAll(0xff8000)]``
**true** | ``[light.setAll(0x0000ff)]``

### NOT test

Replace the ``||logic:false||`` in the ``||variables:Q||`` equation with a ``||logic:not||`` operator. Pull the ``||variables:A||`` variable down from the ``||loops:for element||`` loop and drop it inside the ``||logic:not||`` operator.

```block
let A = false
let Q = !A
```
A | ~A
-|-
**false** | ``[light.setAll(0x0000ff)]``
**true** | ``[light.setAll(0xff8000)]``

### Two input loop

Go get another ``||loops:for element||`` loop and put it in so that it surrounds all the inside the first loop. Rename the ``||variables:index||`` variable to ``||variables:B||`` and switch the ``||variables:list||`` variable to ``||variables:inputs||``.

```blocks
let inputs = [false, true]
let Q = false
for (let A of inputs) {
    for (let B of inputs) {
        Q = !A
        if (Q) {
            light.setAll(0x0000ff)
        } else {
            light.setAll(0xff8000)
        }
        pause(500)
        light.clear()
        pause(500)
    }
}
```
### OR test

Now, grab a ``||logic:or||`` operator and replace the ``||logic:not||`` in the ``||variables:Q||`` equation.

```block
let A = false
let B = false
let Q = A || B
```
#### Truth table

A | B | A + B
-|-|-
**false** | **false** |  ``[light.setAll(0xff8000)]``
**false** | **true** |  ``[light.setAll(0x0000ff)]``
**true** | **false** |  ``[light.setAll(0x0000ff)]``
**true** | **true** |  ``[light.setAll(0x0000ff)]``

### AND test

Now, switch the ``||logic:or||`` operator in the ``||variables:Q||`` equation to the ``||logic:and||`` operator:

```block
let A = false
let B = false
let Q = A && B
```

#### Truth table

A | B | A · B
-|-|-
**false** | **false** |  ``[light.setAll(0xff8000)]``
**false** | **true** |  ``[light.setAll(0xff8000)]``
**true** | **false** |  ``[light.setAll(0xff8000)]``
**true** | **true** |  ``[light.setAll(0x0000ff)]``

### XOR test

To test XOR, change the ``||logic:LOGIC||`` block in the ``||variables:Q||`` equation to look like this:

```block
let A = false
let B = false
let Q = (A || B) && !(A && B)
```

A | B | A ⊕ B
-|-|-
**false** | **false** |  ``[light.setAll(0xff8000)]``
**false** | **true** |  ``[light.setAll(0x0000ff)]``
**true** | **false** |  ``[light.setAll(0x0000ff)]``
**true** | **true** |  ``[light.setAll(0xff8000)]``