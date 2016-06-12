# Create Image

Create an [Image](/reference/images/image) to show on the [LED screen](/device/screen).

```sig
images.createImage(`
. . # . .
. # # # .
# # # # #
. # # # .
. . # . .
`)
```

### Example: rock, paper, scissors

The following example shows one of three images (rock, paper, or scissors) when you shake the micro:bit:

```
input.onGesture(Gesture.Shake, () => {
    let rockpaper = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . # # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
    rockpaper.showFrame(Math.random(3))
})
```

### See also

[show animation](/reference/basic/show-animation), [image](/reference/images/image), [show image](/reference/image/show-image), [scroll image](/reference/image/scroll-image)

