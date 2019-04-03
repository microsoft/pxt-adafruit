# On and off signals

A simpe use of a digital output pin is to write a steady high or low signal. This might be used to turn something connected to the pin either on or off. 

## On signal

To send an on signal you write a `true` value in ``||pins:digital write pin||`` to make the pin output go to the high level.

```block
pins.A1.digitalWrite(true)
```

The voltage output at the pin is set to the high level, near 3.3 v.

![Pin A1 at high level](/static/cp/learn/pins-tutorial/digital-output/pin-high-level.jpg)

## Off signal

To set an output pin to low you write out a `false` value in ``||pins:digital write pin||``.

```block
pins.A1.digitalWrite(false)
```

![Pin A1 at low level](/static/cp/learn/pins-tutorial/digital-output/pin-low-level.jpg)

In this example, the output level on pin **A1** is switched to high when button **A** is pressed and it's switched to low when button **B** is pressed:

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

![Connect pin A1 to A2](/static/cp/learn/pins-tutorial/digital-output/connect-a1-a2.jpg)

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

**Test**: Press button **A** to output an "on" signal at pin **A1**  and press button **B** to output an "off" signal.

![Send and on/off signal to yourself](/static/cp/learn/pins-tutorial/digital-output/on-off-self.gif)

**Result**: The pixels show red when button **A** is pressed and then will go off when button **B** is pressed.

### Experiment: Turn on and off an your own LED

---

**Setup**:

1. Connect the [anode lead](/learnsystem/pins-tutorial/devices/led-connections) (+) of the LED to on end of an [output resistor](/learnsystem/pins-tutorial/devices/make-a-resistor#output-resistor) with alligator clip lead.
2. Connect the other end of the output resistor to the **A2** pin.
3. Connect the cathode (-) lead of the LED to the **GND** pin with another alligator lead.

![Connect lead to pin A1](/static/cp/learn/pins-tutorial/digital-output/led-connection.jpg)

4.  Download the following code to the board:

```blocks
pins.A2.digitalWrite(false)
input.buttonA.onEvent(ButtonEvent.Click, function () {
    pins.A2.digitalWrite(true)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    pins.A2.digitalWrite(false)
})
```

**Test**: Press button **A** to output an "on" signal at pin **A2**  and press button **B** to output an "off" signal.

![Turn LED on and off with buttons](/static/cp/learn/pins-tutorial/digital-output/press-on-off-led.gif)

**Result**: The LED lights when button **A** is press and turns off when button **B** is pressed.
