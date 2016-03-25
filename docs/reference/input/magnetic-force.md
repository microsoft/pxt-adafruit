# Magnetic Force

Get the magnetic force (micro Teslas), in one of three specified dimensions.

```sig
input.magneticForce(Dimension.X);
```

### Parameters

* dimension : [String](/microbit/reference/types/string) - one of three values specifying the axis of the force: ``x`` (left/right); ``y`` (forward/backwards); ``z`` (up/down); ``strength`` (the length of the vector)

### Returns

* [Number](/microbit/reference/types/number) - magnetic force, in micro-Teslas.

### Example: metal detector

The following example uses the `magnetic force` to control the brightness of the screen. When the magnetic force increases, the center LED will appear brighter.

```blocks
led.plot(2, 2)
basic.forever(() => {
    let f = input.magneticForce(Dimension.X)
    led.setBrightness(f / 2000)
})
```

### See also

[compass heading](/microbit/input/compass-heading)

