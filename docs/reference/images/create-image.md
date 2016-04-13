# Create Image

Create an [Image](/reference/image/image) to show on the [LED screen](/device/screen).

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

### Lessons

[rock paper scissors](/lessons/rock-paper-scissors), [digital pet](/lessons/digital-pet), [offset-image](/lessons/offset-image)

### See also

[show animation](/reference/basic/show-animation), [image](/reference/image/image), [show image](/reference/image/show-image), [scroll image](/reference/image/scroll-image)

