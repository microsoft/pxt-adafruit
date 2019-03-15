# Digital data

Besides turning on LEDs or sending a pulse to notify some other device, the digital pins can send data as binary numbers. Together, multiple signals can create several bits or digits of a binary number. Each digit of course is 2 times the place value of the previous one, `2**0`, `2**1`, `2**2`, and so on. So for 3 digital signals use to represent a binary number, if all of the signals are at the high level, the 3 bit binary number is `111`. This means that each signal gives three different values of `1 * 2**0`, `1 * 2**1`, and `1 * 2**3`. That equals `1 + 2 + 4` in decimal which makes the number `7`.

## Parallel data

Since each pin can only signal one of two values at any particular moment, on bit of a digital number can be represented at a pin. To send larger digital numbers with more bits, you'll need more pins. Each pin represents a differnet digit of the number. For a 3 digit number there is 3 bits. the first bit is the 1's bit, the second is the 2's bit, and the third is the 4's bit. Each digit has a value of 2 times the previous digit. The number `7` is equal to `4 + 2 + 1` so as a 3 bit binary number it would be `111`. The number `3` is equal to `2 + 1` and its 3 bit binary number is `011`.

To send the number `7` we could use 3 ``||pins:digital write pin||`` blocks using pins **A1**, **A2**, and **A3** for each of the bits.

```block
pins.A1.digitalWrite(true)
pins.A2.digitalWrite(true)
pins.A3.digitalWrite(true)
```

For the number `3` we would use the same blocks but with different logic values for the bits.

```block
pins.A1.digitalWrite(true)
pins.A2.digitalWrite(true)
pins.A3.digitalWrite(false)
```

Maybe you noticed that for the number `3` we use **A1** for the 1's digit, **A2** for the 2's digit, and **A3** for the 4's digit. In the following diagram, signals are place on three pins to send a different 3 bit number every 20 microseconds. The red numbers at the bottom show what the three values on the pins together are in decimal.

![Pin A1 at low level](/static/cp/learn/pins-tutorial/digital-output/three-bit-parallel.jpg)

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
    if (pins.A3.digitalRead()) {
        dataIn += 4
    }
    if (pins.A2.digitalRead()) {
        dataIn += 2
    }
    if (pins.A1.digitalRead()) {
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

## Serial data

```blocks
let dataArray: boolean[][] = []
let dataItem: boolean[] = []
let data2: boolean[] = []
let data1: boolean[] = []
let dataIn = 0
let data0: boolean[] = []
let data3: boolean[] = []


data0 = [true, false, true]
data1 = [false, false, true]
data2 = [true, false, false]
data3 = [true, true, true]
dataArray.push(data0)
dataArray.push(data1)
dataArray.push(data2)
dataArray.push(data3)

forever(function () {
    if (dataArray.length > 0) {
        dataItem = dataArray.shift()
        for (let bit of dataItem) {
            pins.A1.digitalWrite(bit)
            pins.A2.digitalWrite(true)
            pins.A2.digitalWrite(false)
            pause(300)
        }
        dataArray.push(dataItem)
    }
})
let digitalNum = 0
let bits = 0
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
```