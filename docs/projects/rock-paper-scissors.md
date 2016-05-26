# rock paper scissors

### ~avatar avatar

```sim
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
    if (img == 0) {
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
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
```
In this project, you will build a rock-paper-scissor game with the BBC micro:bit
### ~

## Materials needed

* your BBC micro:bit, that's it!

## 1

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

The micro:bit will look like it's showing 1 frame of the image by displaying the whole image when pick random is equal to 0. We can help the micro:bit randomly decide which image to use by pick random. 
The micro:bit will randomly pick the image to display with show LEDs and the ``pick random`` block.

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

## 2

The micro:bit will look like it's showing 1 frame of the image by displaying the whole image when pick random is equal to 1. 
We can help the micro:bit randomly decide which image to use by pick random. 
The micro:bit will randomly pick the image to display with show LEDs and the pick random function.

### ~avatar avatar

Click on the blue gearwheel to open the ``if`` editor. Drag and drop the ``else if`` block in the ``if`` block to add it.

### ~

```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
    if (img == 0) {
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

## 3

The micro:bit will look like it's showing 1 frame of the image by displaying the whole image when pick random is not equal to 0 and not equal to 1. 
We can help the micro:bit randomly decide which image to use by pick random. The micro:bit will randomly pick the image to display with show LEDs and the pick random function.

```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(3)
    if (img == 0) {
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
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})

```

Your game is ready!

## 4

When the button ``A`` is pressed, increment the score by 1. You can select ``Game`` drawer then add ``change score by 1``.

```blocks
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
})

```

## 5

After incrementing the score, display the total number of wins you have.

```blocks
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
    basic.showString("WINS:")
    basic.showNumber(game.score())
})
```
## 6

You have successfully tracked and displayed the number of wins on the micro:bit! However, what about losses? 
Use the Game drawer to change score by -1 when button `B` is pressed. Here are all the blocks you will need:

```shuffle
input.onButtonPressed(Button.B, () => {
    game.addScore(-1)
    basic.showString("LOSSES:")
    basic.showNumber(game.score())
})
```

