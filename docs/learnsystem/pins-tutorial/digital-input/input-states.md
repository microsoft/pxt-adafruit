# Input states

If you read a digital pin that isn't connected to anything what value will it be? Well, you don't really know unless the pin is physically set to a default input state. Most of the time a input pin is set to either read a `true` or `false` by default by _pulling_ the pin input high or low. A pull is a physical connection of the pin to either the supply voltage (**3.3V**) or **GND**. This is done inside the microcontroller using a built-in resistor that connects the pin to the high or low voltage source. So, if you read the pin when no input signal is present, it will read the value of the pull direction: `down = low` and `up = low`.

## Pull down

In order to have a pin read `false` by default, a pin is _pulled down_. This means that the pin is connected to low voltage so that it always reads `false` when no external voltage signal is present at its input. The pin will read `true` when an external voltage is applied to the pin that is near 3.3 v.

The pull _direction_ is set with the ``||pins:set pull pin||`` block:

```block
pins.A1.setPull(PinPullMode.PullDown)
```

In this simple example, the pull direction is down and the pixels will turn red when pin **A1** is connected to a high voltage.

```blocks
pins.A1.setPull(PinPullMode.PullDown)
forever(function() {
    if (pins.A1.digitalRead()) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
})
```

The condition in the ``||logic:if||`` block that causes the pixels to "turn on" is called _positive_ logic. The pixels turn on when the input state goes from low to high, in the positive direction.

In the following diagram, you see a resistor connecting the **A1** pin to **GND**, or low voltage. The this connection is shown inside a dashed box which means this happens inside the microcontroller when you pull the **A1** pin down with ``||pins:set pull pin||``.

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

To have a pin read `true` by default, a pin is _pulled up_. This means that the pin is connected to high voltage so that it always reads `true` when no external voltage signal is present at its input. The pin will read `false` when an external voltage is applied to the pin that is near 0 v.

The pull _direction_ is set to `down` with the ``||pins:set pull pin||`` block:

```block
pins.A1.setPull(PinPullMode.PullUp)
```

In this example, the condition is opposite that of when the pull was down. The pull direction is now up and the pixels will turn red when pin **A1** is connected to a low voltage.

```blocks
pins.A1.setPull(PinPullMode.PullUp)
forever(function() {
    if (!pins.A1.digitalRead()) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
})
```

The condition in the ``||logic:if||`` block that causes the pixels to "turn on" here uses _negative_ logic. The pixels turn on when the input state goes from high to low, in the negative direction.

In the following diagram, you see a resistor connecting the **A1** pin to **3.3V**, or high voltage. This time the connection shown inside the dashed box shows how the microcontroller pulls the **A1** pin up when you set the pull to up with ``||pins:set pull pin||``.

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

When a pin has no pull direction you can't be sure a `true` or a `false` is read for the pin. This is because the voltage level at the pin input is unknown. This input state is indeterminate and the pin has a _floating_ input because the voltage level could be either high or low. On the @boardname@ a pin is floating when you set the pull direction to `none`:

```block
pins.A1.setPull(PinPullMode.PullNone)
```
The diagram below shows the **A1** pin in a floating state since there is no pull resistor holding it to any voltage level.

![Floating pin diagram](/static/cp/learn/pins-tutorial/digital-input/pin-floating.jpg)

If you did the [Touch high and low](/learnsystem/pins-tutorial/digital-input/read-pin#experiment-01) experiment in the [Read a pin](/learnsystem/pins-tutorial/digital-input/read-pin) section, you may have noticed that pixels sometimes changed color between touches of the clip. This is because the **A1** pin had a floating input until you connected it to **3.3V** or **GND**.

### Experiment: Floating pin test

---

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

---

## External pull

Sometimes an electronic device connected to the pin on the @boardname@ will determine the pull direction. In that case, the device uses its own pull resistor to set the pull direction. The pull for the pin is set to `none` since the board isn't going to control the pull direction.

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
