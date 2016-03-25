# Show Image

The show image function. #showimage #docs #image #screen #LED

Show an [Image](/microbit/reference/image/image) on the [LED screen](/microbit/device/screen), followed by a 400ms pause.

### Block Editor

![](/static/mb/show-image-0.png)

### KindScript

```
export function showImage(_this: micro_bit.Image, xOffset: number)
```

### Parameters

* x offset - [Number](/microbit/reference/types/number); the horizontal starting point of an image; use 0 for the first frame of the image, 5 for the second frame of the image, 10 for the third frame and so on.

### Create image and show image

Use the [image editor](/microbit/reference/image/image) to create images using the [create image](/microbit/reference/image/create-image) function, and then use `show image` like this:

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

The following example creates an image with 5 frames and then uses a [for loop](/microbit/reference/loops/for) to show each frame on the screen:

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

### Lessons

[rock paper scissors](/microbit/lessons/rock-paper-scissors), [digital pet](/microbit/lessons/digital-pet), [offset-image](/microbit/lessons/offset-image)

### See also

[show animation](/microbit/reference/basic/show-animation), [image](/microbit/reference/image/image), [create image](/microbit/reference/images/create-image), [scroll image](/microbit/reference/images/scroll-image)

