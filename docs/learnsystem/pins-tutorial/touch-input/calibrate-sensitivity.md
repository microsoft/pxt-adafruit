# Calibration and sensitivity

![Touch pad and coin sensor](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/calibrate-sensitivity-header.jpg)

## Calibration

In order for a ``||input:on touch||`` event to detect a touch properly, the untouched pin's [sense value](#sense-value) is set as the touch [threshold](#threshold) for the sensor connected to it. A _threshold_ is a value, that when reached, will cause something to happen. Depending on what is connected to the pin, either nothing or some larger object, the pin will read sense value based on the amount of [capacitance](/learnsystem/pins-tutorial/devices/capacitors) measured at the pin. This is, of course, a different value when the pin or sensor object is touched and untouched.

To properly detect a touch, the sense level the untouched case must be known. A sense level for a touch will be somewhat greater than the untouched level. When a program is started, the pins set for touch events are calibrated for the untouched sense levels. This is brief process where the pin input is read several times to find a reasonable value of sense level for when the pin, or something connected to it is untouched.

Calibration automatically sets a threshold (the minimum sense value) for what is considered as a touch. You may need to recalibrate your touch input if there is a change of sensor or in the environment. If you connect a different sensor object to a pin without restarting your program, your touch event may indicate a touch when there isn't one or it may never detect a touch at all. Also, if the temperature or humidity changes significantly, the electrical characteristics of a sensor might change. You may observe over time that it might detect a touch before your finger reaches it, being too sensitive, or that you have to press on the object more firmly, for a longer time before the touch is detected.

If you change the sensor object or find that it doesn't sense a touch as it did before, you can recalibrate.

```block
input.touchA1.calibrate()
```

### Experiment: Change sensors

If a pin is calibrated to one sensor it may not sense properly if a different sensor is connected later. The pin needs calibration to match the new sensor or it may indicate a touch even though it's not touched.

**Setup**:

1. Connect one end of an alligator clip lead to a large coin and leave the other lead unclipped.

![Coin used as a sensor clipped to lead](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/calibrate-sensor.jpg)

2. Copy the following code into the editor and download it to your board.

```blocks
input.touchA4.onEvent(ButtonEvent.Down, function () {
    light.setAll(0x00ff00)
    music.playTone(494, music.beat(BeatFraction.Half))
})
input.touchA4.onEvent(ButtonEvent.Up, function () {
    light.clear()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    input.touchA4.calibrate()
})
```

**Test**: Touch pin **A4** and then lift your finger. Connect the other alligator clip lead to pin **A4**. Try touching and untouching the coin. Press button **A** to calibrate and touch the coin again.

![Calibrating for a new sensor](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/calibrate.gif)

**Result**: The LED pixels will light green when the pin is touched. When the coin is attached to the pin, the pixel light green and stay on even when you lift your finger. After calibration, the  LEDs go on when you touch the coin and off when you untouch the coin.

## Sensitivity

### Threshold #threshold

As mentioned earlier, calibration sets the threshold for the range of sense values that mean a touch occurred. If you want to control the sensitivity of your touch sensor instead of using calibration to do it, you can set your own threshold to trigger touch events:

```block
input.touchA4.setThreshold(400)
```

Touch pins return sense reading values between `0` and `1023`. Setting the threshold to a lower value makes the sensor object more sensitive (a touch is detected more quickly and further away) and higher values make it less sensitive. 

### Experiment: Sensitivity tester

---

Touch events in your programs happen when pin sense values reach the threshold value set for the pin. You can adjust the touch threshold to cause input events to happen when the sensor is either pressed firmly or if your finger is nearby, or maybe just coming close to touching the sensor. Increasing the threshold will cause the sensor to need a firm press to create the event while lowering the threshold triggers an event when the sensor is pressed lightly or just when your finger is very close.

**Setup**:

1. Connect a coin or other small conductive object to pin **A4** with an alligator clip lead.

![Connect a sensor object to pin A4](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/sensitivity-test.jpg)

2. Copy the following code into the editor and download it to your board.

```blocks
let touched = false
input.touchA4.onEvent(ButtonEvent.Down, function () {
    touched = true
    light.setAll(0x00ff00)
})
input.touchA4.onEvent(ButtonEvent.Up, function () {
    touched = false
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (sensitivity < 1000) {
        sensitivity += 100
    } else {
        light.setAll(0xff0000)
    }
    input.touchA4.setThreshold(sensitivity)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (sensitivity > 100) {
        sensitivity += -100
    } else {
        light.setAll(0xff0000)
    }
    input.touchA4.setThreshold(sensitivity)
})
let sensitivity = 10
input.touchA4.setThreshold(10)
forever(function () {
    if (!touched) {
        light.graph(1000 - sensitivity, 1000)
    }
    pause(500)
})
```

**Test**: Use the sensitivity meter to find the touch threshold for a sensor. Adjust the input threshold until the green pixels light showing a touch. Reduce the threshold until the green pixels go off. Button **A** increases sensitivity and button **B** decreases sensitivity. Touch the sensor to see if the pixels light green.

![Sensitivity meter test](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/sensitivity-meter.gif)

**Result**: The pixels will only light green when you touch the sensor. The threshold is adjusted to not create a touch input event until you actually touch the sensor.

### Sense value #sense-value

There's always an input reading from a touch pin. This reading is a sense value related to the capacitance measured at the pin. When and object enters the [electric field](/learnsystem/pins-tutorial/devices/capacitors#electric-field) present for the sensor connected to the pin, the sense value will change. You can read this sense value directly to know how much a sensor is influenced by an object coming near it.

```block
let sense = input.touchA2.value()
```

The sense values range from `0` to `1023` where `0` means nothing is affecting the electric field at the pin and `1023` means that the field is greatly affected by some additional object.

Using the sense value lets you control how you want to respond to what's happening at your sensor. The ``||input:on touch||`` events are set to occur only when the sense value reaches the calibrated threshold or it reaches a threshold you have set. By reading the sense value though, you can detect and observe the proximity of an object near your sensor.

### Experiment: Hover pad #hover-pad

---

**Setup**:

1. Cut out a rectangle about the size of your hand from a piece of cardboard.

![Cardboard rectangles for hover pad](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/hover-pad-cardboard.jpg)

2. Place it on some aluminum foil and cut the foil slightly larger than the cardboard rectangle.

![Cut out foil for hover pad](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/hover-pad-foil.jpg)

3. Fold the edges of the aluminum foil around the cardboard and tape them to uncovered side of the cardboard.

![Tape the foil to the cardboard](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/hover-pad-taped.jpg)

4. Connect an alligator clip lead to edge of the pad. Connect the other end of the lead to pin **A3**.

![Hover pad connected to board](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/hover-pad-connect.jpg)

5. Copy the following code into the editor and download it to your board.

```blocks
let offset = 51
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (offset > 50) {
        offset += -50
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (offset < 971) {
        offset += 50
    }
})
forever(function () {
    light.graph(input.touchA3.value() - offset, 1023 - offset)
    pause(200)
})
```

**Test**: Move your hand close to the pad. Move it over and away from the pad. Also, try placing your hand close to the pad and then slowly pull it away. Adjust the sensitivity of the pad until your hand is detected at a short distance from it. Pressing button **A** increases sensitivity and pressing button **B** reduces sensitivity. 

![Hand moving over the hover pad](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/hover-pad.gif)

**Result**: The pixel graph on the board will show more pixels when you're close to the pad. The pixel graph will show less pixels when you move away.

### Experiment: Gesture sensor

---

Sometimes multiple sensors or are used to generate one input action. This is case when detecting the direction of motion with a hand or finger swipe.

**Setup**:

1. Make a second hover pad just like the one in the previous [Hover pad](#hover-pad) experiment.
2. Connect an alligator clip lead to one hover pad.
3. Connect the other end of the alligator lead to pin **A3**.
4. Connect an another alligator clip lead to the second hover pad.
5. Connect the other end of that alligator lead to pin **A4**.
6. Place the two hover pads next to each other with a small gap in between (1/4 inch or 7mm).
7. Make the pad connected to pin **A3** be on the left and the pad connected to **A4** be on the right.

![Hand swipe sensor with two hover pads](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/swipe-sensor.jpg)


8. Copy the following code into the editor and download it to your board.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (offset > 50) {
        offset += -50
    }
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (offset < 971) {
        offset += 50
    }
})
let offset = 0
offset = 1001
forever(function () {
    if (input.touchA3.value() > offset) {
        light.showRing(
            `red red red red red black black black black black`
        )
    } else if (input.touchA4.value() > offset) {
        light.showRing(
            `black black black black black green green green green green`
        )
    } else {
        light.clear()
    }
    pause(200)
})
```

**Test**: Place your hand over one of the hover pads. Lift and lower your hand to observe the pixels turn on and off. Adjust the sensitivity of the pads until your hand is detected at a short distance from them. Pressing button **A** increases sensitivity and pressing button **B** reduces sensitivity. Move your hand right-to-left and left-to-right across the pads.

![Two hover pads for a swipe sensor](/static/cp/learn/pins-tutorial/touch-input/calibrate-sensitivity/gesture-sensor.gif)

**Result**: Red pixels will light in the direction of your hand motion when you move right-to-left. Green pixels will light when you move your hand left-to-right.
