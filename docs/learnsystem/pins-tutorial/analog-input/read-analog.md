# Read analog

An analog input pin can read a voltage level that ranges from the supply voltage of your board 3.3 v (**3.3V**) down to 0 v (**GND**). The value returned to your program from reading the pin is not the actual voltage value but a number that is between `0` and `1023`. This is because the microcontroller on the board is a digital system and must convert the analog signal at an input pin to a digital number. The value representing the input voltage that is returned is _relative_ to the actual voltage level present at the pin.

Reading an analog input pin is quite simple. There's just one block to does it which returns a number that represents the input voltage level.

```block
let inputValue = pins.A3.analogRead()
```

## Voltage range

The voltage input to an analog pin is limited to a range set by the [reference voltage](/learnsystem/pins-tutorial/analog-input/analog-to-digital#reference-voltage) (usually the supply voltage) and **GND** (0 volts). If a device connected to the pin provides a signal within this range, your program, with the ``||pins:read analog pin||`` block, will read a value for signal at a particular moment. Often, your program will read an analog pin frequently to monitor changes in voltage that mean different things.

For example, you could have a strain gauge that is placed under a floor mat at the entrance to a room. You can use the @boardname@ as a scale to see how heavy someone or something is that just entered the room. You could read the input from the strain gauge to determine if the object is has a light, moderate, or heavy weight.

```blocks
let weight = 0
forever(function () {
    weight = pins.A4.analogRead()
    if (weight < 350) {
        light.setAll(0x00ff00)
    } else if (weight < 700) {
        light.setAll(0xff8000)
    } else {
        light.setAll(0xff0000)
        music.wawawawaa.play()
    }
    pause(500)
})
```

### Experiment: Voltage meter

---

Different voltage levels can be input to a pin using a connection to a variable resistor. The supply voltage **3.3V** pin is connected to one end of the [resistor](/learnsystem/pins-tutorial/devices/make-a-resistor#input-resistor) and the **GND** pin is connected to the other end. A third lead is set as the _tap_ to the variable resistance so when connected to a pin, some voltage between 3.3 v and 0 v is at the input.

**Setup**:

1. Connect one end of an alligator clip lead to the one side of the variable resistor.
2. Connect the other clip of that lead to the **3.3V** pin.
3. Connect one end of a second alligator clip lead to the other side of the variable resistor.
4. Connect the other clip of that lead to the **GND** pin.
5. Get a third alligator clip lead and connect one end to the **A3** pin. This is the tap lead.

![Connect a variable input resistor](/static/cp/learn/pins-tutorial/analog-input/variable-resistor.jpg)

6. Download the following code to the board:

```blocks
forever(function () {
    light.graph(pins.A3.analogRead())
})
```

**Test**: Slide the free end of the alligator clip lead that is connected to the **A3** pin across the surface of the resistor several times (if you're using a mechanical variable resistor, connect the tap lead to the center pin on that resistor).

![Graph the voltage on the pixels](/static/cp/learn/pins-tutorial/analog-input/voltage-meter.gif)

**Result**: The pixels on the board will show the voltage level as tap lead is moved from a low voltage position to a high voltage position.

---

## Setting input voltage

You can tie an analog pin to a specific input voltage using a voltage divider. If you connect the pin to a fixed point in a resistor series, you can divide the source voltage. This uses the ratio of the resistance at the pin to the entire resistance across the **3.3V** and **GND** pins. It's connected like this:

![Voltage divider circuit](/static/cp/learn/pins-tutorial/analog-input/voltage-divider-circuit.jpg)

In this diagram the **A3** pin is tied to 20k ohms of resistance out of 30k ohms total. So, the voltage input to the pin is two-thirds of the supply voltage. That is ``3.3 * 2 / 3`` or `2.2` volts.

### Experiment: Voltage calibrator

---

You can detect when half of the supply voltage is input at a pin when the value from ``||pins:analog read pin||`` is near `512`. This will help you connect the tap lead connected to pin **A3** to accurately divide resistance. The pixels will flash blue when the voltage is too high or flash red when it's too low. When the voltage is in the one-half range, the pixels flash bright white.

**Setup**:

1. Connect one end of an alligator clip lead to the one side of the variable resistor.
2. Connect the other clip of that lead to the **3.3V** pin.
3. Connect one end of a second alligator clip lead to the other side of the variable resistor.
4. Connect the other clip of that lead to the **GND** pin.
5. Get a third alligator clip lead and connect one end to the **A3** pin. This is the tap lead.

![Connect a variable input resistor](/static/cp/learn/pins-tutorial/analog-input/variable-resistor.jpg)

6. Download the following code to the board:

```blocks
let inputValue = 0
forever(function () {
    light.clear()
    pause(200)
    inputValue = pins.A3.analogRead()
    if (inputValue < 488) {
        for (let i = 0; i <= 5 - 1; i++) {
            light.setPixelColor(i, 0xff0000)
        }
    } else if (inputValue > 535) {
        for (let j = 0; j <= 5 - 1; j++) {
            light.setPixelColor(j + 5, 0x0000ff)
        }
    } else {
        light.setAll(0xffffff)
    }
    pause(200)
})
```
**Test**: Slide the free end of the alligator clip lead that is connected to the **A3** pin across the surface of the resistor until you see the white pixels flash. Check to see that the tap position on the resistor at its center.

![Show the half voltage level on the pixels](/static/cp/learn/pins-tutorial/analog-input/voltage-calibrator.gif)

**Result**: The pixels flash white near or at the center of the resistor. If the resistance is too high, the pixels are blue. If the resistance is too low, the pixels flash red.
