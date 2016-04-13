# Unplot

Turn off a LED light on the [LED screen](/device/screen). Specify which LED using x, y coordinates. Use [plot](/reference/led/plot) to turn a LED on.

```sig
led.unplot(0,0)
```

### Parameters

* x - [Number](/reference/types/number); the *x coordinate* or horizontal position (0, 1, 2, 3, 4)
* y - [Number](/reference/types/number); the *y coordinate* or vertical position (0, 1, 2, 3, 4)

If a parameter is [out of bounds](/reference/out-of-bounds) (a value other than 0-4), this function will do nothing.

### x, y coordinates?

The LED screen is made up of 25 LEDs arranged in a 5x5 grid. To figure out the ``x``, ``y`` coordinates, see [LED screen](/device/screen).

This code turns off centre LED:

```blocks
led.unplot(2, 2)
```

### Get the LED on/off state

Use the [point](/reference/led/point) function to find out if a LED is on or off.

### Example: toggle off

This code creates and shows an image on the micro:bit screen, and then clears the centre LED using `unplot`:

```blocks
basic.showLeds(`
. . # . .
. . # . .
# # # # #
. . # . .
. . # . .
`)
basic.pause(500)
led.unplot(2, 2)
```

### Lessons

[strobe light](/lessons/strobe-light)

### See also

[plot](/reference/led/plot), [point](/reference/led/point), [LED screen](/device/screen), [create image](/reference/images/create-image)

