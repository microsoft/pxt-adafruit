# Plot

Turn on a LED light on the [LED screen](/microbit/device/screen). Specify which LED using x, y coordinates. Use [unplot](/microbit/reference/led/unplot) to turn a LED off.

```sig
led.plot(0,0);
```

### Parameters

* x - [Number](/microbit/reference/types/number); the *x coordinate* or horizontal position (0, 1, 2, 3, 4)
* y - [Number](/microbit/reference/types/number); the *y coordinate* or vertical position (0, 1, 2, 3, 4)

If a parameter is [out of bounds](/microbit/reference/out-of-bounds) (a value other than 0-4), then this function will do nothing.

### x, y coordinates?

The LED screen is made up of 25 LEDs arranged in a 5x5 grid. To figure out the ``x``, ``y`` coordinates, see [LED screen](/microbit/device/screen).

This code turns on the centre LED:

```blocks
led.plot(2, 2)
```

### Get the LED on/off state

Use the [point](/microbit/reference/led/point) function to find out if a LED is on or off.

### Example: a square

The following example uses a [for loop](/microbit/reference/loops/for) and the `plot` function to turn on the LED lights along the edge of the screen, making a square:

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

[blink](/microbit/lessons/blink), [beautiful  image](/microbit/lessons/beautiful-image), [strobe light](/microbit/lessons/strobe-light)

### See also

[unplot](/microbit/reference/led/unplot), [point](/microbit/reference/led/point), [LED screen](/microbit/device/screen)

