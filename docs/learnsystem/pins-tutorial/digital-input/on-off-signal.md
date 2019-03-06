# On and off signalling

```block
pins.A1.digitalWrite(true)
```

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

### ~ hint

**Wiring LEDs**

LEDs are diodes which are an elecronic devices that only allow current to go through them in one direction. This means that LEDs (and other diodes) have positive (+) and negative (-) sides to them. For an LED to work it needs to be connected to a voltage source with the correct side. The voltage supply side of the diode is the positive (+) side, this is called the _anode_. The negative side is called the _cathode_. 

![LED polarity diagram](/static/cp/learn/pins-tutorial/digital-output/led-polarity.jpg)

Because diodes are made of semiconductor material, they have a very specific voltage where they will turn on. If the supply voltage you're using is more than then turn on voltage, you need a resistor between one of the LED leads and the connection to either **GND** or the supply voltage.

![LED with resisitor diagram](/static/cp/learn/pins-tutorial/digital-output/led-connection.jpg)

### ~