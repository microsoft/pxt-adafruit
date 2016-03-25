# Show LEDs

Display an image on the BBC micro:bit's [LED screen](/microbit/device/screen).

```sig
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    `
)
```

### Parameters

* ``leds`` - a series of LED on/off states that form an image (see steps below)
* (optional) ``ms`` - [Number](/microbit/reference/types/number) - time to wait after displaying image. In blocks, ``ms`` is 400 by default.

### Example - Block Editor

1. Open the `basic` category and select the `show leds` blocks.

```blocks
basic.showLeds(`
    # # . # #
    # # . # #
    . # # # .
    . # . # .
    . # . # .
    `
)
```

In JavaScript, the led off is represented by a `.` and the led on by a `#` character.

### Lessons

[smiley](/microbit/lessons/smiley), [flashing heart](/microbit/lessons/flashing-heart), [magic logo](/microbit/lessons/magic-logo)

### See also

[plot leds](/microbit/reference/led/plot-leds), [show animation](/microbit/reference/led/show-animation)

