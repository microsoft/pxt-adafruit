# Scroll Image

The scroll image function. #scrollimage #image #docs

Scrolls the frames within an [Image](/microbit/reference/image/image) on the [LED screen](/microbit/device/screen).

### Block Editor

![](/static/mb/scroll-image-0.png)

### KindScript

```
export function scrollImage(_this: micro_bit.Image, xOffsetPerStep: number, interval: number)
```

### Parameters

* x offset per step : [Number](/microbit/reference/types/number) - the number of columns to scroll at a time (horizontal offset). Use a positive number to scroll an image to the right and a negative number to scroll left. To jump from one image frame to the next, use an offset of 5 or -5.
* interval (ms) : [Number](/microbit/reference/types/number) - the time (in milliseconds) before scrolling by `x offset per step`; the larger the number, the slower the scroll.

### ~hide

```
let img = images.createImage(`
. . # . . . # # # . . # # # .
. . # . . . . . # . . . . # .
. . # . . . . # . . . # # # .
. . # . . . # . . . . . . # .
. . # . . . # # # . . # # # .
`)
```

### ~

To scroll an image 1 column at a time to the right:

```
img.scrollImage(1, 1000)
```

To scroll an image 5 columns at a time (skip from frame to frame):

```
img.scrollImage(5, 1000)
```

To scroll an image 1 column at a time to the left:

```
img.scrollImage(-1, 500)
```

### Example: scroll through frames

This example creates an image with 3 frames, then scrolls through the 3 frames:

```
img = images.createImage(`
. . # . . . # # # . . # # # .
. . # . . . . . # . . . . # .
. . # . . . . # . . . # # # .
. . # . . . # . . . . . . # .
. . # . . . # # # . . # # # .
`)
img.showImage(0)
img.scrollImage(5, 1000)
```

### See also

[show image](/microbit/reference/images/show-image), [image](/microbit/reference/image/image), [create image](/microbit/reference/images/create-image), [show animation](/microbit/reference/basic/show-animation)

