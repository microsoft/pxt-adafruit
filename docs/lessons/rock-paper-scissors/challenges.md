# rock paper scissors challenges

Coding challenges for rock paper scissors. 

## Before we get started

Complete the following [guided activity](/microbit/lessons/rock-paper-scissors/activity) , your code should look like this:

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

### Challenge 1

When the A button is pressed, increment the score by 1. You can select Game drawer then add change score by 1.

```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(2)
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
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
})

```

* Click *run* to execute your code in the simulator

### Challenge 2

After incrementing the score, display the total number of wins you have.


```blocks
input.onGesture(Gesture.Shake, () => {
    let img = Math.random(2)
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
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
    basic.showString("WINS:")
    basic.showNumber(game.score())
})

```

* Run and compile the code to see if it works as expected.

### Challenge 3

You have successfully tracked and displayed the number of wins on the micro:bit! However, what about losses? Use the Game drawer to change score by -1 when button `B` is pressed.

* Run and compile the code to see if it works as expected.
