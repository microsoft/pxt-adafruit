# Point

Get the on/off state of a LED on the [LED screen](/device/screen). Specify the LED using x, y coordinates.

```sig
led.point(0,0);
```

### Parameters

* x  - [Number](/reference/types/number); the *x coordinate* or horizontal position (0, 1, 2, 3, 4)
* y - [Number](/reference/types/number); the *y coordinate* or vertical position (0, 1, 2, 3, 4)

If a parameter is [out of bounds](/reference/out-of-bounds) (a value other than 0-4), then this function will return `false`.

### Returns

* [Boolean](/reference/types/boolean) - `true` if the LED is *on* and `false` if the LED is *off*

### x, y coordinates?

The LED screen is made up of 25 LEDs arranged in a 5x5 grid. To figure out the ``x``, ``y`` coordinates, see [LED screen](/device/screen).

### Example: toggle off

If `point(1, 1)` returns `true`, then the following code turns off the LED:

```blocks
if (led.point(1, 1)) {
    led.unplot(1, 1)
}
```

### See also

[unplot](/reference/led/unplot), [plot](/reference/led/plot), [LED screen](/device/screen), [create image](/reference/images/create-image)

