# Digital data

Besides turning on LEDs or sending a pulse to notify some other device, the digital pins can send data as binary numbers. Together, multiple signals can create several bits or digits of a binary number. Each digit of course is 2 times the place value of the previous one, `2**0`, `2**1`, `2**2`, and so on. If 3 digital signals use to represent a binary number, and if all of the signals are at the high level, the 3 bit binary number is `111`. This means that each signal gives three different values of `1 * 2**0`, `1 * 2**1`, and `1 * 2**3`. That equals `1 + 2 + 4` in decimal which makes the number `7`.

## Parallel data

Since each pin can only signal one of two values at any particular moment, one bit of a digital number can be represented at a pin. To send larger digital numbers with more bits, you'll need more pins. Each pin represents a differnet digit of the number. For a 3 digit number there are 3 bits. The first bit (right to left) is the 4's bit, the second is the 2's bit, and the third is the 1's bit. Each digit on the left has a value of 2 times the digit on the right. The number `7` is equal to `4 + 2 + 1` so as a 3 bit binary number it would be `111`. The number `3` is equal to `0 + 2 + 1` and its 3 bit binary number is `011`.

To send the number `7` we could use 3 ``||pins:digital write pin||`` blocks using pins **A1**, **A2**, and **A3** for each of the bits.

```block
pins.A1.digitalWrite(true)
pins.A2.digitalWrite(true)
pins.A3.digitalWrite(true)
```

For the number `3` we would use the same blocks but with different logic values for some of the bits.

```block
pins.A1.digitalWrite(true)
pins.A2.digitalWrite(true)
pins.A3.digitalWrite(false)
```

Maybe you noticed that for the number `3` we use **A1** for the 1's digit, **A2** for the 2's digit, and **A3** for the 4's digit. In the following diagram, signals are place on three pins to send a different 3 bit number every 2 microseconds. The red numbers at the bottom show what the three values on the pins together are in decimal.

![Three bit parallel data](/static/cp/learn/pins-tutorial/digital-output/three-bit-parallel.jpg)

### Experiment: Send and receive parallel data

---

**Setup**:

1. Connect 3 alligator clip leads to pins **A1**, **A2**, and **A3**
2. Connect the other end of the **A1** lead to pin **A6**.
3. Connect the other end of the **A2** lead to pin **A5**.
4. Connect the other end of the **A3** lead to pin **A4**.

![Parallel data pin connections](/static/cp/learn/pins-tutorial/digital-output/parallel-data-pins.jpg)

3.  Download the following code to the board:

```blocks
let dataArray: number[] = []
let dataOut = 0
let dataIn = 0
dataArray = [7, 6, 5, 4, 3, 2, 1, 0]
forever(function () {
    dataIn = 0
    pause(300)
    if (pins.A4.digitalRead()) {
        dataIn += 4
    }
    if (pins.A5.digitalRead()) {
        dataIn += 2
    }
    if (pins.A6.digitalRead()) {
        dataIn += 1
    }
    light.setPixelColor(dataIn, 0xff0000)
    pause(500)
    light.clear()
    pause(500)
})
forever(function () {
    pause(2000)
    if (dataArray.length > 0) {
        dataOut = dataArray.shift()
        dataArray.push(dataOut)
        pins.A3.digitalWrite(false)
        pins.A2.digitalWrite(false)
        pins.A1.digitalWrite(false)
        if (dataOut > 3) {
            pins.A3.digitalWrite(true)
            dataOut = dataOut - 4
        }
        if (dataOut > 1 ) {
            pins.A2.digitalWrite(true)
            dataOut = dataOut - 2
        }
        if (dataOut > 0) {
            pins.A1.digitalWrite(true)
        }
    }
})
```

**Test**: Watch to see which LEDs are lighted while the program runs.

**Result**: The position of the each lighted LED should show that the digital number received at the input pins matches the order of the number sent at the write pins.

---

### Clocked input and output

If you looked at the code from the experiment you might have noticed that the ``||loops:forever||`` loop that reads the input pins has to pause for a shorter amount of time than the loop that writes the data on the output pins. This is so that the input loop won't miss reading a new value sent from the output loop. Instead of using an input loop we could use two more pins to send and receive a timing signal so input pins are read only when a new value is written.

This code change uses what is called _clocked_ input and output. We can switch the input code in the experiment to use clocked input by replacing the ``||loops:forever||`` with a ``||pins:on pin rise||`` event and then removing the input delay ``||loops:pause||``.

```block
pins.A7.onEvent(PinEvent.Rise, function () {} )
```

Now, once the ``||loops:forever||`` loop has written the new data values on the output pins, a quick trigger pulse is sent to pin **A7** from **A0** to clock the new input right after the data pins **A1**, **A2**, and **A3** have their new output.

```block
pins.A0.digitalWrite(true)
pins.A0.digitalWrite(false)
```

### Experiment: Clocked parallel data transfer

---

**Setup**:

1. Connect 3 alligator clip leads to pins **A0**, **A1**, **A2**, and **A3**
2. Connect the other end of the **A1** lead to pin **A6**.
3. Connect the other end of the **A2** lead to pin **A5**.
4. Connect the other end of the **A3** lead to pin **A4**.
5. Connect the other end of the **A0** lead to pin **A7**.

![Clocked parallel data connections](/static/cp/learn/pins-tutorial/digital-output/clocked-parallel.jpg)

3.  Download the following code to the board:

```blocks
let dataArray: number[] = []
let dataOut = 0
let dataIn = 0
dataArray = [7, 6, 5, 4, 3, 2, 1, 0]
pins.A7.onEvent(PinEvent.Rise, function () {
    dataIn = 0
    if (pins.A4.digitalRead()) {
        dataIn += 4
    }
    if (pins.A5.digitalRead()) {
        dataIn += 2
    }
    if (pins.A6.digitalRead()) {
        dataIn += 1
    }
    light.setPixelColor(dataIn, 0xff0000)
    pause(500)
    light.clear()
    pause(500)
})
forever(function () {
    pause(2000)
    if (dataArray.length > 0) {
        dataOut = dataArray.shift()
        dataArray.push(dataOut)
        pins.A3.digitalWrite(false)
        pins.A2.digitalWrite(false)
        pins.A1.digitalWrite(false)
        if (dataOut > 3) {
            pins.A3.digitalWrite(true)
            dataOut = dataOut - 4
        }
        if (dataOut > 1 ) {
            pins.A2.digitalWrite(true)
            dataOut = dataOut - 2
        }
        if (dataOut > 0) {
            pins.A1.digitalWrite(true)
        }
        pins.A0.digitalWrite(true)
        pins.A0.digitalWrite(false)
    }
})
```

**Test**: Watch to see which LEDs are lighted while the program runs.

**Result**: The position of the each lighted LED should show that the digital number received at the input pins matches the order of the number sent at the write pins.

---

## Serial data

It's not necessary to use a separate pin to transfer each bit of a digital number. Each bit of a number can be written out on one pin in a sequence. Once all of the bits of one number are written, the bits of the next number are written in a sequence too. The receiving device needs to properly assemble the bits to form a value. It also needs to know how many bits each number will have so it can start to assemble the next number. This method of sending and receiving data is call _serial data_ transfer.

In the following diagram several 3 bit numbers are written in series on the **A2** pin. The red numbers show what the binary digital numbers are in decimal.

![Three bit serial data](/static/cp/learn/pins-tutorial/digital-output/three-bit-serial.jpg)

Each bit of the 3 bit number is a digit. Each digit has a place value that is 2 times that of the next digit. The code to write a single number out on a pin as bits will have to factor out each place value to know whether to write a `1` or `0` for that bit. Here's some code that will convert a decimal number to bits and write them to the **A3** pin:

```blocks
let digitalNum = 0
let digitValue = 2**3
for (let i = 0; i < 3; i++) {
    if (digitalNum >= digitValue) {
        pins.A3.digitalWrite(true)
        digitalNum += -digitValue
    } else {
        pins.A3.digitalWrite(false)   
    }
    digitValue = digitValue / 2
    pause(10)
}
```

Reading a number at an input pin will require something that does the opposite. Each time a new bit is read on the input pin, the code which reads the bit will need multiply the current value of the digital number by 2 and then add in this next bit. To read one number at pin **A6**, the code might look like this:

```blocks
let bits = 0
let digitalNum = 0
for (let i = 0; i < 3; i++) {
    digitalNum = digitalNum * 2
    if (pins.A6.digitalRead()) {
        digitalNum += 1
    }
    bits += 1
    pause(10)
}
```

### Experiment: Read and write serial data

---

**Setup**:

1. Connect on end of an alligator clip lead to the **A1** pin.
2. Connect the other end of that lead to the **A6** pin.
3. Get another alligator clip lead and connect one end to the **A2** pin.
4. Connect the other end of the second lead to the **A5** pin.

![Serial pin connections](/static/cp/learn/pins-tutorial/digital-output/freq-divider.jpg)

5. Copy the following code into the editor.

```blocks
let digitValue = 0
let bits = 0
let dataOut = 0
let digitalNum = 0
let dataArray: number[] = []
let dataIn = 0
pins.A5.onEvent(PinEvent.Rise, function () {
    if (bits > 2) {
        light.setPixelColor(digitalNum, 0xff0000)
        digitalNum = 0
        bits = 0
    } else {
        light.clear()
    }
    digitalNum = digitalNum * 2
    if (pins.A6.digitalRead()) {
        digitalNum += 1
    }
    bits += 1
})
dataIn = 0
dataArray = [7, 6, 5, 4, 3, 2, 1, 0]
forever(function () {
    if (dataArray.length > 0) {
        dataOut = dataArray.shift()
        digitValue = 2 ** 3
        for (let i = 0; i < 3; i++) {
            if (dataOut >= digitValue) {
                pins.A1.digitalWrite(true)
                digitalNum += 0 - digitValue
            } else {
                pins.A1.digitalWrite(false)
            }
            pins.A2.digitalWrite(true)
            pins.A2.digitalWrite(false)
            digitValue = digitValue / 2
            pause(300)
        }
        dataArray.push(dataOut)
    }
})
```

**Test**: Watch to see which LEDs are lighted while the program runs.

**Result**: The position of the each lighted LED should show that the digital number received at the input pins matches the order of the number sent at the write pins.
