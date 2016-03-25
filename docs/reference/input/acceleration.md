# Acceleration

Get the acceleration value (milli g-force), in one of three specified dimensions.

```sig
input.acceleration(Dimension.X);
```

### Parameters

* dimension : [String](/microbit/reference/types/string) - one of three values specifying the axis of acceleration: ``x`` (left/right); ``y`` (forward/backwards); ``z`` (up/down)

### Returns

* [Number](/microbit/reference/types/number) - acceleration, in milli-gravities. When the micro:bit is laying flat with the screen up, x=0, y=0 and z=-1023.

### Example: bar chart

Use the ``plot bar chart`` to visual the acceleration on the LED screen.

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration("x"), 1023)
})
```

### Example: micro:bit leveller

The following example uses the `acceleration` and the `plot` function to help you move the micro:bit until it's level (the centre LED is *on* when the device is level). When running this code in a web browser, move your mouse to simulate the accelerometer.

```blocks
basic.forever(() => {
    let ax = input.acceleration(Dimension.X)
    let x = pins.map(-1023, 1023, 0, 4, ax)
    let ay = input.acceleration("y")
    let y = pins.map(-1023, 1023, 0, 4, ay)
    basic.clearScreen()
    led.plot(x, y)
})
```

### Lessons

[zoomer](/microbit/lessons/zoomer)

### See also

[compass-heading](/microbit/input/compass-heading), [lightlevel](/microbit/input/lightlevel)

