# On Gesture

Register an [event handler](/reference/event-handler) that will execute whenever the user executes a gesture withthe BBC micro:bit.

```sig
input.onGesture(Gesture.Shake,() => {
})
```

## Gestures



### Example: random number

The following example displays a number from 0-9 on the screen when you shake the BBC micro:bit.

```blocks
input.onGesture(Gesture.Shake,() => {
    let x = Math.random(10)
    basic.showNumber(x, 100)
})
```

### Example: rock, paper, scissors

The following example shows one of three images (rock, paper, or scissors) when you shake the BBC micro:bit.

```blocks
input.onGesture(Gesture.Shake,() => {
    let img = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . # # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
    img.showFrame(Math.random(3))
})
```

### Lessons

[bounce image](/lessons/bounce-image), [rock paper scissors](/lessons/rock-paper-scissors)

