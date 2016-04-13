# Rotation

Get a rotation angle in degrees inferred from the accelerometer readings.

```sig
input.rotation(Rotation.Roll);
```

### Parameters

* kind: [String](/reference/types/string) - one of values specifying the kind of rotation: ``pitch`` (up/down around the ``x`` axis); ``roll`` (left/right around the ``y`` axis)

### Returns

* [Number](/reference/types/number) - angle, in degrees.

### Example: micro:bit leveller

The following example uses the `rotation` and the `plot leds` function to help you move the BBC micro:bit until it's level: when it is level, a smiley shows up on the screen. When running this code in a web browser, move your mouse to simulate the rotation.

```sig
basic.forever(() => {
    let pitch = input.rotation(Rotation.Pitch)
    let roll = input.rotation(Rotation.Roll)
    if (Math.abs(pitch) < 10 && Math.abs(roll) < 10) {
        basic.plotLeds(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .
`)
    } else {
        basic.plotLeds(`
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #
`)
    }
})
```

### See also

[acceleration](/reference/input/acceleration), [compass-heading](/reference/input/compass-heading)

