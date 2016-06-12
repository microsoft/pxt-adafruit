# Show Image

The show image function.

Show an [Image](/reference/images/image) on the [LED screen](/device/screen), followed by a 400ms pause.

```
export function showImage(_this: micro_bit.Image, xOffset: number)
```

### Parameters

* x offset - [Number](/reference/types/number); the horizontal starting point of an image; use 0 for the first frame of the image, 5 for the second frame of the image, 10 for the third frame and so on.

### Create image and show image

Use the [image editor](/reference/images/image) to create images using the [create image](/reference/images/create-image) function, and then use `show image` like this:

```
let img = images.createImage(`
. . # . .
. # . # .
. . # . .
. # . # .
. . # . .
`)
img.showImage(0)
```

### Example: display numbers 1-5

The following example creates an image with 5 frames and then uses a [for loop](/reference/loops/for) to show each frame on the screen:

```
let img2 = images.createImage(`
. . # . . . # # # # . # # # . . . . # . . # # # .
. # # . . . . . . # . . . # . . . # # . . # . . .
. . # . . . . . # . . . # . . . # # # # . # # # .
. . # . . . . # . . . . . # . . . . # . . . . # .
. . # . . . # # # # . # # # . . . . # . . # # # .
`)
for (let i = 0; i < 5; i++) {
    img2.showImage(i * 5)
    basic.pause(1000)
}
```

### See also

[show animation](/reference/basic/show-animation), [image](/reference/images/image), [create image](/reference/images/create-image), [scroll image](/reference/images/scroll-image)

