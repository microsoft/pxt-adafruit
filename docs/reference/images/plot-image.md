# Plot Image

The plot image function. #plotimage #docs #image #screen #LED

Display an [Image](/microbit/reference/image/image) on the BBC micro:bit's [LED screen](/microbit/device/screen)

### KindScript

```
export function plotImage(_this: micro_bit.Image, xOffset: number)
```

### Parameters

* x offset - [Number](/microbit/reference/types/number); the horizontal starting point of an image; use 0 for the first frame of the image, 5 for the second frame of the image, 10 for the third frame and so on.

### Difference from `show image`

The `show image` function has a built in delay of 400ms after display of the image, whereas `plot image` has no built-in delay.

### Example

```
let img = images.createImage(`
# . . . # # . . . #
. # . # . . # # # .
. . # . . . # # # .
. # . # . . # # # .
# . . . # # . . . #
`)
img.plotImage(0)
```

### Lessons

[smiley](/microbit/lessons/smiley), [flashing heart](/microbit/lessons/flashing-heart), [magic logo](/microbit/lessons/magic-logo)

### See also

[create image](/microbit/reference/images/create-image), [show animation](/microbit/reference/basic/show-animation), [image](/microbit/reference/image/image), [show image](/microbit/reference/images/show-image), [scroll image](/microbit/reference/images/scroll-image)

