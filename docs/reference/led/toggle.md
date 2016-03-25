# Toggle

Toggle a LED light on the [LED screen](/microbit/device/screen), meaning to turn it on  (off) if it is off (on). Specify which LED using x, y coordinates.

```sig
led.toggle(0,0)
```

### Parameters

* x - [Number](/microbit/reference/types/number); the *x coordinate* or horizontal position (0, 1, 2, 3, 4)
* y - [Number](/microbit/reference/types/number); the *y coordinate* or vertical position (0, 1, 2, 3, 4)

If a parameter is [out of bounds](/microbit/reference/out-of-bounds) (a value other than 0-4), then this function will do nothing.

### x, y coordinates?

The LED screen is made up of 25 LEDs arranged in a 5x5 grid. To figure out the ``x``, ``y`` coordinates, see [LED screen](/microbit/device/screen).

### Example

This code toggles the centre LED:

```blocks
led.toggle(2, 2)
```

### See also

[toggle all](/microbit/reference/led/toggle-all), [plot](/microbit/reference/led/plot), [unplot](/microbit/reference/led/unplot), [point](/microbit/reference/led/point), [LED screen](/microbit/device/screen),

