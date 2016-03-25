# rock paper scissors activity

A classic game against the micro:bit.

### ~avatar avatar

### @video td/videos/rock-paper-scissors-0

Welcome! This tutorial will help you create a game of rock paper scissors with the micro:bit. Let's get started!

### ~

To create a new script, go to the [Create Code](/microbit/create-code) page and tap *New Project* under **Touch Develop**.

We want the micro:bit to choose rock, paper, or scissors when it is shaken. Let's begin by creating an on shake condition so the micro:bit will run code when it is shaken.


```blocks

input.onGesture(Gesture.Shake, () => {
    
})

```

Next, create a variable and store pick random number from 0 to 2.  On shake, a number will be randomly picked from 0-2. We will randomly display an image based on the random number returned.


```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
})

```

The micro:bit will look like it's showing 1 frame of the image by displaying the whole image when pick random is equal to 2. We can help the micro:bit randomly decide which image to use by pick random. The micro:bit will randomly pick the image to display with show LEDs and the pick random function.

```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
    if (img == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)

    }
})


```

The micro:bit will look like it's showing 1 frame of the image by displaying the whole image when pick random is equal to 1. We can help the micro:bit randomly decide which image to use by pick random. The micro:bit will randomly pick the image to display with show LEDs and the pick random function.

```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
    if (img == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)

    } else if (img == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
```

The micro:bit will look like it's showing 1 frame of the image by displaying the whole image when pick random is not equal to 2 and not equal to 1. We can help the micro:bit randomly decide which image to use by pick random. The micro:bit will randomly pick the image to display with show LEDs and the pick random function.


```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
    if (img == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)

    } else if (img == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . # #
            # # . # .
            . . # . .
            # # . # .
            . . . # #
            `)
    }
})

```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/rock-paper-scissors/challenges)!

### ~

