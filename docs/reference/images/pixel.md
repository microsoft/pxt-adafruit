# Pixel

The pixel function.

Get the state of a pixel in an [Image](/microbit/reference/image/image).

### KindScript

```
export function pixel(_this: micro_bit.Image, x: number, y: number) : boolean
```

### Parameters

* x - [Number](/microbit/reference/types/number); the *x coordinate* or horizontal position of a pixel in an [image](/microbit/reference/image/image)
* y - [Number](/microbit/reference/types/number); the *y coordinate* or vertical position of a pixel in an [image](/microbit/reference/image/image)

### x, y coordinates?

To figure out the ``x``, ``y`` coordinates, see [LED screen](/microbit/device/screen).

### Returns

* [Boolean](/microbit/reference/types/boolean) - `true` for on and `false` for off

### Example

This example gets the state of pixel `0, 0` in the `img` variable:

### ~hide

```
let img = images.createImage(`
. . # . . . . . . .
. # . # . . . # . .
. . # . . . . . . .
. # . # . . . # . .
. . # . . . . . . .
`)
```

### ~

```
let state = img.pixel(0, 0)
```

### See also

[set pixel](/microbit/reference/images/set-pixel), [show image](/microbit/reference/images/show-image), [image](/microbit/reference/image/image), [create image](/microbit/reference/images/create-image), [scroll image](/microbit/reference/images/scroll-image)

