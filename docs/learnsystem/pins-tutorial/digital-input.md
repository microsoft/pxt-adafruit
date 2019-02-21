# Digital Input

Digital input is where a pin will detect the presence of a voltage level that is either "high" or "low". When you read a digital pin in your program, these voltage levels are given to you as just the [boolean](/types/boolean) values of ``true`` for high and ``false`` for low.

What the level of high or low is depends on where the microcontroller on the @boardname@ has set the voltage _threshold_ for each. This is somewhere near the supply voltage for high (the voltage at the **3.3V** pin) and near ground voltage for low (the voltage at **GND** pin, or **0V**).

## Materials

You'll need a few things to perform the mini experiments for the following sections. 

* (3) Alligator clip leads
* Light switch (optional)
* Pushbutton switch (optional)
* Variable resistor - use you own [graphite resistor](/learnsystem/pins-tutorial/make-a-resistor)


## Read the Pin

A digital read operation just returns a `true` if the input voltage on the pin is at a high level. It returns `false` if the input voltage is near the low level. On the @boardname@ you read the input value of a pin with ``||pins:digital read pin||`` block.

```block
let inputValue = pins.A1.digitalRead()
```

A pin has a small range of voltage where it detects the input level as high. The diagram below shows that the **A1** pin is at the high level when its input voltage is in the range where the graph shows red.

![Pin input is high](/static/cp/learn/pins-tutorial/pin-level-high.jpg)

The second diagram is for the opposite condtion when the input level is low. At some point, as the voltage on pin **A1** is at or near 0V, the pin read will return ``false``.

![Pin input is low](/static/cp/learn/pins-tutorial/pin-level-low.jpg)

### ~ hint

**Mini Experiment #1**

**Setup**: Connect an alligator clip lead to the the **A1** pin. Download the following code to the board:

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

**Result**: The pixels show a different color for each input level, high and low.

### ~ 

### Switches and Buttons

Switches and buttons are the most common ways that people interact with electronic devices. A switch closes or opens a circuit and usually stays in one of those positions for some time. A button will close a circuit momentarily and then open it again when released.

The following diagram shows how a switch (figure A) or a button (figure B) completes an electrical circuit to turn on or off a light.

![Switch and button diagram](/static/cp/learn/pins-tutorial/switch-button.jpg)

In both circuits is light is the load for the power supply in the battery. Current will flow to the light when the circuit is complete. Unlike the circuits above, a switch or a button connected to a pin on the @boardname@ isn't used to supply power to a load like for a light. They are used to signal a logic condition of true or false by connecting the pin to a high or low voltage level. 

![Switch pin A1 to high](/static/cp/learn/pins-tutorial/switch-pin-a1.jpg)

Digital input electronics are designed to use an exrtremely small amount current when connected to a voltage source, like with the switch shown. The purpose is only to detect the voltage level present at the pin.

**Note**: Not all digital electronics will let you connect an input pin directly to a voltage source. Doing so can cause too much current to flow through the pin circuit possibly damaging it. Often a resistor is need between the in and the voltage supply to protect the input circuit. Fortunately, the @boardname@ has it's own protection for this allowing you to safely connect the pins to a voltage of 3.3V or less.

### ~ hint

**Mini Experiment #2**

**Setup**: Connect an alligator clip lead to the the **A1** pin. Clip another lead to the **3.3V** pin. Connect the other ends of the each lead to a terminal on a light switch. Download the following code to the board:

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

**Result**: The pixels show yellow when the light switch is on and blue when off.

**Optional test**: If you have a pushbutton to use, connect it to the @boardname@ like you did with the light switch. The LEDs should show yellow when you press the button down.

### ~ 

## Input States

If you read a digital pin that isn't connected to anything what value will it be? Well, you don't really know unless the pin is physically set to a default input state.

### Floating

```block
pins.A1.setPull(PinPullMode.PullNone)
```
![Floating pin diagram](/static/cp/learn/pins-tutorial/pin-floating.jpg)

### Pull down

```block
pins.A1.setPull(PinPullMode.PullDown)
```

![Pin pulled down diagram](/static/cp/learn/pins-tutorial/pin-pulldown.jpg)


### Pull up

```block
pins.A1.setPull(PinPullMode.PullUp)
```

![Pin pulled up diagram](/static/cp/learn/pins-tutorial/pin-pullup.jpg)


## Pin Events

### Pulse High

![Falling input pin event](/static/cp/learn/pins-tutorial/pin-event-high.jpg)

```block
pins.A1.onEvent(PinEvent.PulseHigh, function () {
	
})
```

### Pulse Low

![Falling input pin event](/static/cp/learn/pins-tutorial/pin-event-low.jpg)

```block
pins.A1.onEvent(PinEvent.PulseLow, function () {
	
})
```

### Rising Edge

![Rising input pin event](/static/cp/learn/pins-tutorial/pin-event-rise.jpg)

```block
pins.A1.onEvent(PinEvent.Rise, function () {
	
})
```

### Falling Edge

![Falling input pin event](/static/cp/learn/pins-tutorial/pin-event-fall.jpg)

```block
pins.A1.onEvent(PinEvent.Fall, function () {
	
})
```