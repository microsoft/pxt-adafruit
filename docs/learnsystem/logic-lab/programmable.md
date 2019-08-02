# Programmable Logic

Logic gates are formed by connecting transistors together on a semiconductor material to make an integrated circuit. The wafers, or chips, of semiconductor contain lots of logic gates that make up different types of devices which work together to read, store, calculate, and transmit digital information.

Most integrated circuits contain specific arrangement logic gates at the time they are manufactured. Because of their physical and chemical properties, some semiconductors can let you change connections between the gates after the device is manufactured. By applying special voltages at programming pins, a custom arrangement of gates can be "programmed" into the integrated circuit. These types of semicondutors are part of a category of electronics called _Programmable Logic Devices (PLD)_. There are many different kinds. Some of them you program only once and others you can erase the original gate arrangment and program in a new one.

We can use the @boardname@ to create our own PLD. The digital pins are the inputs for the logic circuits. The logic gates we program are logical expressions in code that combine the digital inputs we read from the pins. The result of the expression is written to a digital output pin.

## Board PLD

The physical idea of using your board as a PLD looks like this:

![Board with to logic inputs and one output](/static/cp/learn/logic-lab/pld/cpx-pld.png)

The logic inputs for `A` and `B` are connected to digital input pins. The resulting output `Q` is connected to a digital output pin. We can make a general representation of your board as a PLD by selecting some digital pins to use for input and output.

![Combinatorial XOR first version](/static/cp/learn/logic-lab/pld/generic-pld.png)

By "connecting" the pins together with code, we can program virtual logic gates to make a logic device from the board. With multiple pins and more code, we can even create a combined logic circuit.

![Combinatorial XOR first version](/static/cp/learn/logic-lab/pld/not-and-or.png)

## Logic observer

As a way to see what the current value the output of our PLD has, we'll use the **A6** pin as a logic observer input and display green pixels when the output of the PLD is `true` and yellow pixels when ``false``.

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

The NOT gate takes the logic value of the input and inverts it at the output. This is a single input gate using just the **A4** pin for input.

![NOT gate with pin assignments](/static/cp/learn/logic-lab/pld/not-gate-pins.png)

The NOT gate is wired using alligator test clips as shown in the following diagram. The output pin **A1** is connected to the observer at pin **A6**.

![NOT gate wiring diagram](/static/cp/learn/logic-lab/pld/not-gate-pld.png)

The script to program the NOT gate is simply one ``||pins:digital read pin||`` inside a ``||pins:digital write pin||``.

```block
pins.A1.digitalWrite((!pins.A4.digitalRead()))
```

## Programmable OR gate

![OR gate with pin assignments](/static/cp/learn/logic-lab/pld/or-gate-pins.png)

![OR gate wiring diagram](/static/cp/learn/logic-lab/pld/or-gate-pld.png)

```block
pins.A2.digitalWrite(pins.A4.digitalRead() || pins.A7.digitalRead())
```

## Programmable AND gate

![AND gate with pin assignments](/static/cp/learn/logic-lab/pld/and-gate-pins.png)

![AND gate wiring diagram](/static/cp/learn/logic-lab/pld/and-gate-pld.png)

```block
pins.A3.digitalWrite(pins.A4.digitalRead() && pins.A7.digitalRead())
```

## Combined logic

```blocks
forever(function () {
    pins.A1.digitalWrite((!pins.A4.digitalRead()))
    pins.A2.digitalWrite(pins.A4.digitalRead() || pins.A7.digitalRead())
    pins.A3.digitalWrite(pins.A4.digitalRead() && pins.A7.digitalRead())
    pause(100)
})
```

### XOR Device

```block
let A = false
let B = false
let Q = (!A && B) || (A && !B)
```

![Combinatorial XOR first version](/static/cp/learn/logic-lab/pld/xor-cpx.png)

```blocks
let A = false
let B = false
let Q = false
forever(function () {
    A = pins.A1.digitalRead()
    B = pins.A2.digitalRead()
    Q = !(A) && B || A && !(B)
    pins.A3.digitalWrite(Q)
    pause(100)
})
```

## One bit adder

## Two bit adder