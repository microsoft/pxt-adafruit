# Plot

Turn on a LED light on the [LED screen](/device/screen). Specify which LED using x, y coordinates. Use [unplot](/reference/led/unplot) to turn a LED off.

```sig
led.plot(0,0);
```

### Parameters

* x - [Number](/reference/types/number); the *x coordinate* or horizontal position (0, 1, 2, 3, 4)
* y - [Number](/reference/types/number); the *y coordinate* or vertical position (0, 1, 2, 3, 4)

If a parameter is [out of bounds](/reference/out-of-bounds) (a value other than 0-4), then this function will do nothing.

### x, y coordinates?

The LED screen is made up of 25 LEDs arranged in a 5x5 grid. To figure out the ``x``, ``y`` coordinates, see [LED screen](/device/screen).

This code turns on the centre LED:

```blocks
led.plot(2, 2)
```

### Get the LED on/off state

Use the [point](/reference/led/point) function to find out if a LED is on or off.

### Example: a square

The following example uses a [for loop](/reference/loops/for) and the `plot` function to turn on the LED lights along the edge of the screen, making a square:

```blocks
for (let i = 0; i < 5; i++) {
    led.plot(0, i)
    led.plot(4, i)
    led.plot(i, 0)
    led.plot(i, 4)
    basic.pause(500)
}
```

### Lessons

[blink](/lessons/blink), [beautiful  image](/lessons/beautiful-image), [strobe light](/lessons/strobe-light)

### See also

[unplot](/reference/led/unplot), [point](/reference/led/point), [LED screen](/device/screen)

