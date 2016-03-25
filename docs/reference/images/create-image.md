# Create Image

Create an [Image](/microbit/reference/image/image) to show on the [LED screen](/microbit/device/screen).

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

[rock paper scissors](/microbit/lessons/rock-paper-scissors), [digital pet](/microbit/lessons/digital-pet), [offset-image](/microbit/lessons/offset-image)

### See also

[show animation](/microbit/reference/basic/show-animation), [image](/microbit/reference/image/image), [show image](/microbit/reference/image/show-image), [scroll image](/microbit/reference/image/scroll-image)

