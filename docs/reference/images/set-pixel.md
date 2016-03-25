# Set Pixel

The set pixel function. #set pixel #image #docs

Set the on/off state of pixel in an [Image](/microbit/reference/image/image).

### KindScript

```
export function setPixel(_this: micro_bit.Image, x: number, y: number, value: boolean)
```

### Parameters

* x - [Number](/microbit/reference/types/number); the *x coordinate* or horizontal position of a pixel in an [image](/microbit/reference/image/image)
* x - [Number](/microbit/reference/types/number); the *y coordinate* or vertical position of a pixel in an [image](/microbit/reference/image/image)
* value -[Boolean](/microbit/reference/types/boolean); the on/off state of a pixel; `true` for on, `false` for off

### x, y coordinates?

To figure out the ``x``, ``y`` coordinates, see [LED screen](/microbit/device/screen).

### Example

The following example creates an image and stores it in the `img` variable. The `set pixel` function sets the centre pixel off, before `img` is shown using `show image`.

```
let img = images.createImage(`
. . # . .
. # . # .
. . # . .
. # . # .
. . # . .
`)
img.setPixel(2, 2, false)
img.showImage(0)
```

### See also

[pixel](/microbit/reference/images/pixel), [show image](/microbit/reference/images/show-image), [image](/microbit/reference/image/image), [create image](/microbit/reference/images/create-image), [scroll image](/microbit/reference/images/scroll-image)

