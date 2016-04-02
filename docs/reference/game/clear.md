# Clear

The clear function for images.

Turn off all the pixels in an [Image](/microbit/reference/image/image).

### KindScript

```
export function clear(img: micro_bit.Image)
```

### Parameters

* none

### Example

The following example turns off the pixels of `img` when the A input button is pressed:

```
let img = images.createImage(`
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .
`)
img.showImage(0)
input.onButtonPressed(Button.A, () => {
    img.clear()
    img.showImage(0)
})
```

### See also

[Image](/microbit/reference/image/image), [show animation](/microbit/reference/basic/show-animation), [show image](/microbit/reference/images/show-image), [scroll image](/microbit/reference/images/scroll-image), [create image](/microbit/reference/images/create-image)

