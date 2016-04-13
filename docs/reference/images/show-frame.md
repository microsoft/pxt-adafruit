# Show Frame

The show frame function.

Display an [Image](/reference/image/image) on the BBC micro:bit's [LED screen](/device/screen)

### KindScript

```
export function showFrame(img: micro_bit.Image, frame: number)
```

### Parameters

* index - [Number](/reference/types/number); which frame of the image to display

### Difference from `plot frame`

The `show frame` function is the same as [plot frame](/reference/image/plot-frame), but contains a built-in delay after the LED screen has been updated (whereas `plot frame` has no built-in delay)

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

[smiley](/lessons/smiley), [flashing heart](/lessons/flashing-heart), [magic logo](/lessons/magic-logo)

### See also

[create image](/reference/images/create-image), [show animation](/reference/basic/show-animation), [image](/reference/image/image), [show image](/reference/images/show-image), [scroll image](/reference/images/scroll-image)

