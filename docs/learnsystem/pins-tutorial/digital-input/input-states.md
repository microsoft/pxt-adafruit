# Input States

If you read a digital pin that isn't connected to anything what value will it be? Well, you don't really know unless the pin is physically set to a default input state. Most of the time a input pin is set to either read a `true` or `false` by default by _pulling_ the pin input high or low. A pull is a physical connection of the pin to either the supply voltage (**3.3V**) or **GND**. This is done inside the microcontroller using a built-in resistor that connects the pin to the high or low voltage source. So, if you read the pin when no input signal is present, it will read the value of the pull direction: `down = low` and `up = low`.

## Pull down

```block
pins.A1.setPull(PinPullMode.PullDown)
```

![Pin pulled down diagram](/static/cp/learn/pins-tutorial/digital-input/pin-pulldown.jpg)

### ~ hint

**Mini-experiment: Pull down test**

**Setup**: Connect an alligator clip lead to the the **A1** pin. Clip another lead to the **GND** pin. Download the following code to the board:

```blocks
pins.A1.setPull(PinPullMode.PullDown)
if (pins.A1.digitalRead()) {
    light.setAll(0xffff00)
} else {
    light.setAll(0x007fff)
}
```

**Test**: Observe the color of the pixels.

**Result**: The pixels show blue since ``||pins:digital read pin||`` returns `true`.

### ~

## Pull up

```block
pins.A1.setPull(PinPullMode.PullUp)
```

![Pin pulled up diagram](/static/cp/learn/pins-tutorial/digital-input/pin-pullup.jpg)

### ~ hint

**Mini-experiment: Pull up test**

**Setup**: Connect an alligator clip lead to the the **A1** pin. Clip another lead to the **3.3V** pin. Download the following code to the board:

```blocks
pins.A1.setPull(PinPullMode.PullDown)
if (pins.A1.digitalRead()) {
    light.setAll(0xffff00)
} else {
    light.setAll(0x007fff)
}
```

**Test**: Observe the color of the pixels.

**Result**: The pixels show yellow since ``||pins:digital read pin||`` returns `false`.

### ~

## Floating

```block
pins.A1.setPull(PinPullMode.PullNone)
```
![Floating pin diagram](/static/cp/learn/pins-tutorial/digital-input/pin-floating.jpg)

### ~ hint

**Mini-experiment: Floating pin test**

**Setup**: Connect an alligator clip lead to the the **A1** pin. Clip another lead to the **GND** pin. Download the following code to the board:

```blocks
pins.A1.setPull(PinPullMode.PullDown)
if (pins.A1.digitalRead()) {
    light.setAll(0xffff00)
} else {
    light.setAll(0x007fff)
}
```

**Test**: Observe the color of the pixels.

**Result**: The pixels show blue since ``||pins:digital read pin||`` returns `true`.

### ~

## External pull

![Floating pin diagram](/static/cp/learn/pins-tutorial/digital-input/external-pull.jpg)

### ~ hint

**Mini-experiment: External pull down**

**Setup**: Connect an alligator clip lead to the the **A1** pin. Clip another lead to the **GND** pin. Download the following code to the board:

```blocks
pins.A1.setPull(PinPullMode.PullNone)
if (pins.A1.digitalRead()) {
    light.setAll(0xffff00)
} else {
    light.setAll(0x007fff)
}
```

**Test**: Observe the color of the pixels.

**Result**: The pixels show blue since ``||pins:digital read pin||`` returns `true`.

### ~
