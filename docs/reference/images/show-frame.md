# Show Frame

The show frame function. #showframe #docs #image #screen #LED

Display an [Image](/microbit/reference/image/image) on the BBC micro:bit's [LED screen](/microbit/device/screen)

### KindScript

```
export function showFrame(img: micro_bit.Image, frame: number)
```

### Parameters

* index - [Number](/microbit/reference/types/number); which frame of the image to display

### Difference from `plot frame`

The `show frame` function is the same as [plot frame](/microbit/reference/image/plot-frame), but contains a built-in delay after the LED screen has been updated (whereas `plot frame` has no built-in delay)

### Example

```
let img = images.createImage(`
# . . . # # . . . #
. # . # . . # # # .
. . # . . . # # # .
. # . # . . # # # .
# . . . # # . . . #
`)
img.showFrame(1)
```

### Lessons

[smiley](/microbit/lessons/smiley), [flashing heart](/microbit/lessons/flashing-heart), [magic logo](/microbit/lessons/magic-logo)

### See also

[create image](/microbit/reference/images/create-image), [show animation](/microbit/reference/basic/show-animation), [image](/microbit/reference/image/image), [show image](/microbit/reference/images/show-image), [scroll image](/microbit/reference/images/scroll-image)

