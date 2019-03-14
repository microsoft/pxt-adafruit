# Read a pin

A digital read operation returns a `true` if the input voltage on the pin is at a high level. It returns `false` if the input voltage is at the low level. On the @boardname@ you read the input value of a pin with ``||pins:digital read pin||`` block.

```block
let inputValue = pins.A1.digitalRead()
```

## Pin input

A pin has a small range of voltage where it detects the input level as high. The diagram below shows that the **A1** pin is at the high level when its input voltage is in the range where the graph shows red.

![Pin input is high](/static/cp/learn/pins-tutorial/digital-input/pin-level-high.jpg)

The second diagram is for the opposite condtion when the input level is low. At some point, as the voltage on pin **A1** is at or near **0V**, the pin read will return ``false``.

![Pin input is low](/static/cp/learn/pins-tutorial/digital-input/pin-level-low.jpg)

### Experiment: Touch high and low #experiment-01
---

**Setup**:

1. Connect an alligator clip lead to the **A1** pin.

![Connect lead to pin A1](/static/cp/learn/pins-tutorial/digital-input/connect-a1.jpg)

2. Download the following code to the board:

```blocks
forever(function () {
    if (pins.A1.digitalRead()) {
        light.setAll(0xffff00)
    } else {
        light.setAll(0x007fff)
    }
})
```

**Test**: Briefly touch the unclipped end of the alligator lead to both the **3.3V** pin and the **GND** pin.

![Touch clip to high and low voltage](/static/cp/learn/pins-tutorial/digital-input/touch-high-low.gif)

**Result**: The pixels show a different color for each input level, high and low.

#### ~ hint

Did you notice that sometimes the pixels changed color when your alligator clip wasn't touching either **3.3V** or **GND**? This is because the **A1** pin has a _floating_ input state. The reason for this is discussed in the [Input states](/learnsystem/pins-tutorial/digital-input/input-states) section.

#### ~

---

## Switches and buttons

Switches and buttons are the most common ways that people interact with electronic devices. A switch closes or opens a circuit and usually stays in one of those positions for some time. A button will close a circuit momentarily and then open it again when released. Here's a picture of a switch for a house light and a momentary pushbutton switch for a doorbell.

![Household switch and button](/static/cp/learn/pins-tutorial/digital-input/common-switches.jpg)

The following diagram shows how a switch (figure **A**) or a button (figure **B**) completes an electrical circuit to turn on or off a light.

![Switch and button diagram](/static/cp/learn/pins-tutorial/digital-input/switch-button.jpg)

In both circuits is light is the load for the power supply in the battery. Current will flow to the light when the circuit is complete. Unlike the circuits above, a switch or a button connected to a pin on the @boardname@ isn't used to supply power to a load like a light. They are used to signal a logic condition of true or false by connecting the pin to a high or low voltage level. 

![Switch pin A1 to high](/static/cp/learn/pins-tutorial/digital-input/switch-pin-a1.jpg)

Digital input electronics are designed to use an exrtremely small amount current when connected to a voltage source, like with the switch shown. The purpose is only to detect the voltage level present at the pin and not to use current to power anything.

### ~ hint

**Note**: Not all digital electronics will let you connect an input pin directly to a voltage source. Doing so can cause too much current to flow through the pin circuit possibly damaging it. Often a resistor is needed between the pin and the voltage supply to protect the input circuit. Fortunately, the @boardname@ has it's own protection for this allowing you to safely connect the pins to a voltage of **3.3V** or less.

### ~

### Experiment: Switch pin input to high #experiment-02
---

**Setup**: Connect an alligator clip lead to the the **A1** pin. Clip another lead to the **3.3V** pin. Connect the other ends of the each lead to a terminal on a light switch.

![Connect the switch to the board](/static/cp/learn/pins-tutorial/digital-input/switch-connect.jpg)

Download the following code to the board:

```blocks
pins.A1.setPull(PinPullMode.PullDown)
forever(function () {
    if (pins.A1.digitalRead()) {
        light.setAll(0xffff00)
    } else {
        light.setAll(0x007fff)
    }
})
```

**Test**: Turn the light switch on for a short time then turn it off.

![Switch to high](/static/cp/learn/pins-tutorial/digital-input/switch-high.gif)

**Result**: The pixels show yellow when the light switch is on and blue when off.

**Optional test**: If you have a pushbutton to use, connect it to the @boardname@ like you did with the light switch. The LEDs should show yellow when you press the button down.

---

In the experiment above, the ``||pins:set pull pin down||`` block was used in the ``||loops:on start||``. This is so that the pin will always read `false` until the switch is turned on. Using a pin pull is described more in the [Input states](/learnsystem/pins-tutorial/digital-input/input-states) section.