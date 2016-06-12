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

* `leds` is a [String](/reference/types/string) that shows which LEDs are on and off.
* `ms` is an optional [Number](/reference/types/number) that shows how many milliseconds to wait after showing a picture.
If you are programming with blocks, `ms` starts out as 400 milliseconds.

### Example

Open the `basic` card in the Block Editor and select the `show leds` blocks.

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

If you are programming in JavaScript, `#` means an LED that is turned on and `.` means an LED that is turned off.

### See also

[plot leds](/reference/led/plot-leds), [show animation](/reference/basic/show-animation)

