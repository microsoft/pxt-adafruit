# Touch sensor objects

![Finger touch on pin A1](/static/cp/learn/pins-tutorial/touch-input/touch-sensors-header.jpg)

The metallic surface of the pins on the board is itself a touch sensor. You can connect other objects to the touch pins to make them behave as touch sensors too. The pins and objects connected to them form a [capacitor](/(/learnsystem/pins-tutorial/devices/capacitors) for which the microcontroller measures a change in electrical charge on to detect a touch.

## Touch events

A touch input detected on a pin is sent to your program using the ``||input:on touch||`` event.

```block
input.touchA1.onEvent(ButtonEvent.Click, function () {

})
```

Only some of the pins on your board are used for touch input. These are pins **A1** - **A7**. A pin is configured for touch input when ``||input:touch||`` with the pin name is selected for the pin in the ``||input:INPUT||`` block, such as ``||input:touch A4||``.

Different touch actions are set for a pin depending on how you want the touch event to occur. These are:

* ``click``: a brief touch and release of the pin or sensor object.
* ``long click``: a long duration touch and then a release of the pin or sensor object.
* ``down``: any touch of the pin or sensor object.
* ``up``: a release of the pin or sensor object.

The event actions are set in your program with these blocks:

```block
input.touchA1.onEvent(ButtonEvent.Click, function () {

})
input.touchA1.onEvent(ButtonEvent.LongClick, function () {

})
input.touchA1.onEvent(ButtonEvent.Down, function () {

})
input.touchA1.onEvent(ButtonEvent.Up, function () {

})
```

### Experiment: Touch events

---

**Setup**: Copy the following code into the editor and download it to you board.

```blocks
input.touchA2.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.rainbowAnimation, 500)
})
input.touchA3.onEvent(ButtonEvent.LongClick, function () {
    light.showAnimation(light.cometAnimation, 500)
})
input.touchA4.onEvent(ButtonEvent.Up, function () {
    light.showAnimation(light.colorWipeAnimation, 500)
})
input.touchA5.onEvent(ButtonEvent.Down, function () {
    light.showAnimation(light.theaterChaseAnimation, 500)
})
input.touchA1.onEvent(ButtonEvent.Click, function () {
    light.clear()
})
```

**Test**: Touch each pin based on the type of event chosen for the pin. Touching **A1** clears the animation shown from the previous touch.

* **A2** - click
* **A3** - long click
* **A4** - up
* **A5** - down

![Finger touch on pin A1](/static/cp/learn/pins-tutorial/touch-input/touch-events.jpg)

**Result**: The animation chosen for the touch event will display.

![Finger touch on different pins](/static/cp/learn/pins-tutorial/touch-input/touch-events.gif)

---

## Sensor objects

Connecting an object to a touch pin can make it touch sensor. The pin can adjust the way it measures the electrical effect of adding some more conductive surface to the pin. When some object is connected to a pin, it changes the [capacitance](/learnsystem/pins-tutorial/devices/capacitors) that is measured for the pin. When your program starts, it calibrates its measurement of capacitance for the pin surface and any object connected to it. This allows it to properly detect your touch. 

### Experiment: Coin sensor

A coin makes a good sensor because it's relatively small and very conductive. It allows the pin to be almost as sensitive as when nothing is connected and only the pin surface is used. A coin though, is a more convenient target for your finger.

**Setup**:

1. Connect one end of an alligator clip lead to a coin.
2. Connect the other end of the lead to pin **A4**.

![Coin connected to a touch pin](/static/cp/learn/pins-tutorial/touch-input/coin-sensor.jpg)

3. Copy the following code into the editor and download it to your board.

```blocks
input.touchA4.onEvent(ButtonEvent.Down, function () {
    light.setAll(0x00ff00)
    music.playTone(494, music.beat(BeatFraction.Half))
})
input.touchA4.onEvent(ButtonEvent.Up, function () {
    light.clear()
})
```

**Test**: Touch the coin and then lift your finger.

**Result**: The LED pixels will light green when the coin is touched. The LEDs will go off when the coin is not touched anymore.

![Coin sensor touch](/static/cp/learn/pins-tutorial/touch-input/coin-sensor.gif)


### Experiment: BAMO fruit keyboard

---

To illustrate using different kinds of objects as touch sensors, 4 pieces of fruit are connected to the touch pins on the board. A banana, apple, mango, and orange (B-A-M-O) are used but other types of fruit can be used too.

**Setup**:

1. Gather 4 pieces of fruit to use as sensor objects. Use fruit that has a peel that is both smooth and firm.

![BAMO fruit collection](/static/cp/learn/pins-tutorial/touch-input/bamo-fruit.jpg)

2. Connect an alligator clip lead to the first piece of fruit. Pierce the skin with one jaw of an alligator clip lead so that it's inside the fruit and the other jaw is on the outside of the fruit.

![Alligator lead clipped to fruit](/static/cp/learn/pins-tutorial/touch-input/banana-apple-connect.jpg)

3. Connect alligator clip leads to the other 3 pieces of fruit in the same way.
4. Connect the other ends of the alligator clip leads to pins **A1**, **A2**, **A5**, **A7**.

![BAMO fruit connected](/static/cp/learn/pins-tutorial/touch-input/bamo-connect.jpg)

6. Copy the following code into the editor and download it to your board.

```blocks
music.setVolume(180)
input.touchA7.onEvent(ButtonEvent.Down, function () {
    light.setAll(0xff0000)
    music.playTone(494, music.beat(BeatFraction.Half))
})
input.touchA2.onEvent(ButtonEvent.Down, function () {
    light.setAll(0x0000ff)
    music.playTone(392, music.beat(BeatFraction.Half))
})
input.touchA1.onEvent(ButtonEvent.Down, function () {
    light.setAll(0x00ff00)
    music.playTone(587, music.beat(BeatFraction.Half))
})
input.touchA5.onEvent(ButtonEvent.Down, function () {
    light.setAll(0xffff00)
    music.playTone(440, music.beat(BeatFraction.Half))
})
input.touchA7.onEvent(ButtonEvent.Up, function () {
    light.clear()
})
input.touchA5.onEvent(ButtonEvent.Up, function () {
    light.clear()
})
input.touchA2.onEvent(ButtonEvent.Up, function () {
    light.clear()
})
input.touchA1.onEvent(ButtonEvent.Up, function () {
    light.clear()
})
```

**Test**: Touch each piece of fruit. Touch them briefly at first (1 second) and then for a longer time (2-3 seconds).

**Result**: Touching each piece of fruit will display a different color on the LEDs and play a musical note.

![Touch each piece of fruit](/static/cp/learn/pins-tutorial/touch-input/bamo-fruit.gif)
