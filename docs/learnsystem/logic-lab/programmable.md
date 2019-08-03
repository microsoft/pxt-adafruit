# Programmable logic

Logic gates are formed by connecting transistors together on a semiconductor material to make an integrated circuit. The wafers, or chips, of semiconductor contain lots of logic gates that make up different types of devices which work together to read, store, calculate, and transmit digital information.

Most integrated circuits contain a specific arrangement logic gates at the time they are manufactured. Because of their physical and chemical properties, some semiconductors can let you change connections between the gates after the device is manufactured. By applying special voltages at programming pins, a custom arrangement of gates can be "programmed" into the integrated circuit. These types of semiconductors are part of a category of electronics called _Programmable Logic Devices (PLD)_. There are many different kinds. Some of them you program only once and others you can erase the original gate arrangement and program in new ones multiple times.

We can use the @boardname@ to create our own PLD. The digital pins are the inputs for the logic circuits. The logic gates we program are logical expressions in code that combine the digital inputs we read from the pins. The result of the expression is written to a digital output pin.

## Board PLD

The physical idea of using your board as a PLD looks like this:

![Board with to logic inputs and one output](/static/cp/learn/logic-lab/pld/cpx-pld.png)

The logic inputs for `A` and `B` are connected to digital input pins. The resulting output `Q` is connected to a digital output pin. We can make a general representation of your board as a PLD by selecting some digital pins to use as inputs and outputs for our programmable logic.

![Combinatorial XOR first version](/static/cp/learn/logic-lab/pld/generic-pld.png)

By "connecting" the pins together with code, we can program virtual logic gates and make the board act like a PLD. With multiple pins and some more code, we can even create a combined logic circuit.

![Combinatorial XOR first version](/static/cp/learn/logic-lab/pld/not-and-or.png)

## Logic observer

As easy way to see what the outputs of our PLD are, we'll use the **A6** pin as a logic observer input and display green pixels when an output of the PLD is `true` and yellow pixels when ``false``.

```blocks
forever(function () {
    if (pins.A6.digitalRead()) {
        light.setAll(0x00ff00)
    } else {
        light.setAll(0xffff00)
    }
    pause(100)
})
```

## Programmable NOT gate

The **NOT** gate takes the logic value of the input and inverts it at the output. This is a single input gate using just the **A4** pin for input.

![NOT gate with pin assignments](/static/cp/learn/logic-lab/pld/not-gate-pins.png)

The **NOT** gate is wired using alligator test clips as shown in the following diagram. The output pin **A1** is connected to the observer at pin **A6**.

![NOT gate wiring diagram](/static/cp/learn/logic-lab/pld/not-gate-pld.png)

The script to program the **NOT** gate is simply a logical inverse of ``||pins:digital read pin||`` inside a ``||pins:digital write pin||``.

```block
pins.A1.digitalWrite((!pins.A4.digitalRead()))
```

## Programmable OR gate

The **OR** gate takes two inputs and makes the output ``true`` if any input is ``true``. The **A4** and **A7** pins are the inputs.

![OR gate with pin assignments](/static/cp/learn/logic-lab/pld/or-gate-pins.png)

The **OR** gate is wired using alligator test clips as shown in this diagram. The output pin **A2** is connected to the observer at pin **A6**.

![OR gate wiring diagram](/static/cp/learn/logic-lab/pld/or-gate-pld.png)

The script to program an **OR** gate is two ``||pins:digital read pin||`` blocks, connected with an ``||logic:or||``, inside a ``||pins:digital write pin||``.

```block
pins.A2.digitalWrite(pins.A4.digitalRead() || pins.A7.digitalRead())
```

## Programmable AND gate

The **AND** gate takes two inputs and makes the output ``true`` if both inputs are ``true``. The **A4** and **A7** pins are the inputs.

![AND gate with pin assignments](/static/cp/learn/logic-lab/pld/and-gate-pins.png)

The **AND** gate is wired using alligator test clips as shown in the next diagram. The output pin **A3** is connected to the observer at pin **A6**.

![AND gate wiring diagram](/static/cp/learn/logic-lab/pld/and-gate-pld.png)

The script for an **AND** gate is two ``||pins:digital read pin||`` blocks, connected with an ``||logic:and||``, inside a ``||pins:digital write pin||``.

```block
pins.A3.digitalWrite(pins.A4.digitalRead() && pins.A7.digitalRead())
```

## Combined logic

You can program your board to have multiple logic gates that operate on the two inputs. Just combine the three logic gate scripts from above into one ``||loops:forever||`` loop.

```blocks
forever(function () {
    pins.A1.digitalWrite((!pins.A4.digitalRead()))
    pins.A2.digitalWrite(pins.A4.digitalRead() || pins.A7.digitalRead())
    pins.A3.digitalWrite(pins.A4.digitalRead() && pins.A7.digitalRead())
    pause(100)
})
```

### Input tests

You can test different input combinations by connecting the other ends of alligator clip leads on pins **A4** and **A7** to either **GND** or **3.3V**. The **GND** pin will make a ``false`` input value and **3.3V** will make a ``true`` input value. Move the other end alligator clip lead connected to the observer pin **A6** to each of the outputs **A1**, **A2**, and **A3** to see the result of the logic operation programmed for those pins.

As an example, here's the truth table with pin voltages for the **NOT** operation:

A4 | A1 | Pixels
-|-|-
GND | 3.3V | ``[light.setAll(0x00ff00)]``
3.3V | GND | ``[light.setAll(0xffff00)]``
<br/>

Do test connections for the inputs and check the results for the **OR** and **AND** outputs.

#### OR truth table

A4 | A7 | A2 | Pixels
-|-|-|-
GND | GND | ? | ?
GND | 3.3V | ? | ?
3.3V | GND | ? | ?
3.3V | 3.3V | ? | ?

#### AND truth table

A4 | A7 | A3 | Pixels
-|-|-|-
GND | GND | ? | ?
GND | 3.3V | ? | ?
3.3V | GND | ? | ?
3.3V | 3.3V | ? | ?

### XOR device

As we learned earlier, the **XOR** gate operation is made up from several other gates. The result `Q` was made from this expression in code:

```block
let A = false
let B = false
let Q = (!A && B) || (A && !B)
```

We'll make an **XOR** gate by programming a combined logic device for it. This time let's say that the whole @boardname@ is a programmed **XOR** gate. 

![XOR symbol with board image](/static/cp/learn/logic-lab/pld/xor-cpx.png)

Let's use the same wiring diagram as we did for the **OR** gate using **A4** and **A7** as input pins with **A2** connected to the observer pin **A6**.

![XOR gate wiring diagram](/static/cp/learn/logic-lab/pld/xor-gate-pld.png)

Our logic gate script is a bit different this time. To simplify forming the expression for **XOR**, we'll assign variables to the input and output values. 

```blocks
let A = false
let B = false
let Q = false
forever(function () {
    A = pins.A4.digitalRead()
    B = pins.A7.digitalRead()
    Q = !(A) && B || A && !(B)
    pins.A2.digitalWrite(Q)
    pause(100)
})
```

Connect the inputs for **A4** and **A7** according to the **XOR** truth table and see if the outputs in the table match your results.

A4 | A7 | A2 | Pixels
-|-|-|-
GND | GND | GND | ``[light.setAll(0xffff00)]``
GND | 3.3V | 3.3V | ``[light.setAll(0x00ff00)]``
3.3V | GND |  3.3V | ``[light.setAll(0x00ff00)]``
3.3V | 3.3V | GND | ``[light.setAll(0xffff00)]``