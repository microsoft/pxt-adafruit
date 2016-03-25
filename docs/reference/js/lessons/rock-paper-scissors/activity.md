# rock paper scissors activity

a game against the BBC micro:bit. #docs

### ~avatar avatar

### @video td/videos/rock-paper-scissors-0

Welcome! This tutorial will help you create a game of rock paper scissors with the BBC micro:bit. Let's get started!

### ~

To create a new script, go to the [Create Code](/microbit/create-code) page and tap *New Project* under **Touch Develop**.

We want the BBC micro:bit to choose rock, paper, or scissors when it is shaken. Let's begin by creating an `input->on shake` condition so the micro:bit will run code when it is shaken.

```
input.onGesture(Gesture.Shake, () => {
})
```

Next, create an image that contains 3 frames: rock, paper, and scissors. We will control which image is shown with `offset`.

```
input.onGesture(Gesture.Shake, () => {
    let img = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . # # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
})
```

The BBC micro:bit will look like it's showing 1 frame of the image by displaying the whole image with plot frame and math random. We can help the BBC micro:bit randomly decide which offset to using plot image by math random. The BBC micro:bit will randomly pick the image to display with plot image and the `math->random(3)` function.

```
input.onGesture(Gesture.Shake, () => {
    let img1 = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . # # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
    img1.plotFrame(Math.random(3))
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/rock-paper-scissors/challenges)!

### ~

