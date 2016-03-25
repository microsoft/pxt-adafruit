# Plot Frame

The plot frame function. #plotframe #docs #image #screen #LED

Display an [Image](/microbit/reference/image/image) on the BBC micro:bit's [LED screen](/microbit/device/screen)

### KindScript

```
export function plotFrame(_this: micro_bit.Image, index: number)
```

### Parameters

* index - [Number](/microbit/reference/types/number); which frame of the image to display

### Difference from `plot image`

The `plot frame` function takes the index of the frame (if there are two frames, then the possible indices are 0 and 1), whereas `plot image` accepts an offset (if there are two frames, the offset would range between 0 and 9).

### Example

```
let img = images.createImage(`
# . . . # # . . . #
. # . # . . # # # .
. . # . . . # # # .
. # . # . . # # # .
# . . . # # . . . #
`)
img.plotFrame(1)
```

### Lessons

[smiley](/microbit/lessons/smiley), [flashing heart](/microbit/lessons/flashing-heart), [magic logo](/microbit/lessons/magic-logo)

### See also

[create image](/microbit/reference/images/create-image), [show animation](/microbit/reference/basic/show-animation), [image](/microbit/reference/image/image), [show image](/microbit/reference/images/show-image), [scroll image](/microbit/reference/images/scroll-image)

