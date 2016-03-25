# Point

Get the on/off state of a LED on the [LED screen](/microbit/device/screen). Specify the LED using x, y coordinates.

```sig
led.point(0,0);
```

### Parameters

* x  - [Number](/microbit/reference/types/number); the *x coordinate* or horizontal position (0, 1, 2, 3, 4)
* y - [Number](/microbit/reference/types/number); the *y coordinate* or vertical position (0, 1, 2, 3, 4)

If a parameter is [out of bounds](/microbit/reference/out-of-bounds) (a value other than 0-4), then this function will return `false`.

### Returns

* [Boolean](/microbit/reference/types/boolean) - `true` if the LED is *on* and `false` if the LED is *off*

### x, y coordinates?

The LED screen is made up of 25 LEDs arranged in a 5x5 grid. To figure out the ``x``, ``y`` coordinates, see [LED screen](/microbit/device/screen).

### Example: toggle off

If `point(1, 1)` returns `true`, then the following code turns off the LED:

```blocks
if (led.point(1, 1)) {
    led.unplot(1, 1)
}
```

### See also

[unplot](/microbit/reference/led/unplot), [plot](/microbit/reference/led/plot), [LED screen](/microbit/device/screen), [create image](/microbit/reference/images/create-image)

