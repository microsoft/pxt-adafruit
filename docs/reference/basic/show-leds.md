# Show LEDs

Display an image on the BBC micro:bit's [LED screen](/device/screen).

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
* (optional) ``ms`` - [Number](/reference/types/number) - time to wait after displaying image. In blocks, ``ms`` is 400 by default.

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

[smiley](/lessons/smiley), [flashing heart](/lessons/flashing-heart), [magic logo](/lessons/magic-logo)

### See also

[plot leds](/reference/led/plot-leds), [show animation](/reference/led/show-animation)

