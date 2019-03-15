# On and off signals

The simplist function for a digital output pin is to write a steady high or low signal. This might tell a device connected to the pin to turn something on or off. 

## On signal

To send an on signal you write a `true` value in ``||pins:digital write pin||`` to make the pin output go to the high level.

```block
pins.A1.digitalWrite(true)
```

The voltage output at the pin to the high level, near 3.3 v.

![Pin A1 at high level](/static/cp/learn/pins-tutorial/digital-output/pin-high-level.jpg)

## Off signal

To set an output pin to low you write a `true` value in ``||pins:digital write pin||``.

```block
pins.A1.digitalWrite(false)
```

![Pin A1 at low level](/static/cp/learn/pins-tutorial/digital-output/pin-low-level.jpg)

```blocks
pins.A1.digitalWrite(false)
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(true)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(false)
})
```

### Experiment: Send yourself an on and off signal
---

**Setup**:

1. Connect an alligator clip lead to the **A1** pin.
2. Connect the other end of the lead to the **A2** pin.

![Connect lead to pin A1](/static/cp/learn/pins-tutorial/digital-input/connect-a1.jpg)

3.  Download the following code to the board:

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(true)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(false)
})
pins.A1.digitalWrite(false)
forever(function () {
    if (pins.A2.digitalRead()) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
})
```

**Test**: Briefly touch the unclipped end of the alligator lead to both the **3.3V** pin and the **GND** pin.

![Touch clip to high and low voltage](/static/cp/learn/pins-tutorial/digital-input/touch-high-low.gif)

**Result**: The pixels show a different color for each input level, high and low.

### Experiment: Turn on and off an LED
---

**Setup**:

1. Connect an alligator clip lead to the **A1** pin.
2. Connect the other end of the lead to the **A2** pin.

![Connect lead to pin A1](/static/cp/learn/pins-tutorial/digital-input/connect-a1.jpg)

3.  Download the following code to the board:

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(true)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A1.digitalWrite(false)
})
```

**Test**: Briefly touch the unclipped end of the alligator lead to both the **3.3V** pin and the **GND** pin.

![Touch clip to high and low voltage](/static/cp/learn/pins-tutorial/digital-input/touch-high-low.gif)

**Result**: The pixels show a different color fo