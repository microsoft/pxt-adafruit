# Plot LEDs

Display an [Image](/reference/image/image) on the BBC micro:bit's [LED screen](/device/screen). NOTE: `basic -> plot image` has been replaced by `basic -> show leds`.

### KindScript syntax

```sig
basic.plotLeds(`
. . . . .
. # . # .
. . # . .
# ; . . #
. # # # .
`)
```

### Parameters

* leds - a series of LED on/off states that form an image (see steps below)

### Example: simley

```blocks
basic.plotLeds(`
. . . . .
. # . # .
. . # . .
# ; . . #
. # # # .
`)
```

### Lessons

[smiley](/lessons/smiley), [flashing heart](/lessons/flashing-heart), [magic logo](/lessons/magic-logo)

### See also

[show animation](/reference/basic/show-animation), [image](/reference/image/image), [show image](/reference/images/show-image), [scroll image](/reference/images/scroll-image)

