# Width

The width function. #width #image #docs

Get the width of an [Image](/microbit/reference/image/image) in columns.

### KindScript

```
export function width(_this: micro_bit.Image) : number
```

### Parameters

* none

### Returns

* [Number](/microbit/reference/types/number) - the number of columns in a image. This function returns 5 if the image has 1 frame, 10 for 2 frames, 15 for 3 frames and so on. Divide the number of columns by 5 to find out how many frames an image has (see example below).

The following example gets the width of `img` and stores it in the `w` variable:

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
let w = img.width()
```

### Example: show each frame

The following example uses the `width` function with a [for](/microbit/reference/loops/for) loop to show each image frame on the screen:

```
let img2 = images.createImage(`
. . # . . . # # # # . # # # .
. # # . . . . . . # . . . # .
. . # . . . . . # . . . # . .
. . # . . . . # . . . . . # .
. . # . . . # # # # . # # # .
`)
for (let i = 0; i < img2.width() / 5; i++) {
    img2.showImage(i * 5)
    basic.pause(1000)
}
```

### See also

[show image](/microbit/reference/images/show-image), [image](/microbit/reference/image/image), [create image](/microbit/reference/images/create-image), [scroll image](/microbit/reference/images/scroll-image), [show animation](/microbit/reference/basic/show-animation)

