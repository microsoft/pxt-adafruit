# rock paper scissors challenges

Coding challenges for the rock paper scissors tutorial. #docs

## Before we get started

Complete the following [guided activity](/microbit/lessons/rock-paper-scissors/activity) , your code should look like this:

```
input.onGesture(Gesture.Shake, () => {
    let img = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . . # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
    img.plotFrame(Math.random(3))
})
```

### Challenge 1

When the `A` button is pressed, increment the **score** by ``1``. You can use the `game->add score` function for that.

```
input.onGesture(Gesture.Shake, () => {
    let img1 = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . . # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
    img1.plotFrame(Math.random(3))
})
input.onButtonPressed(Button.A, () => {
    game.addScore(1) // ***
}) // ***
```

### Challenge 2

After incrementing the score, display the total number of wins you have.

```
input.onGesture(Gesture.Shake, () => {
    let img2 = images.createImage(`
. . . . . # # # # # . . . . #
. # # # . # . . . # # # . # .
. # # # . # . . . # . . # . .
. # # # . # . . . # # # . # .
. . . . . # # # # # . . . . #
`)
    img2.plotFrame(Math.random(3))
})
input.onButtonPressed(Button.A, () => {
    game.addScore(1)
    basic.showString("WINS: ", 150) // ***
    basic.showNumber(game.score(), 150) // ***
})
```

* Run and compile the code to see if it works as expected.

### Challenge 3

You have successfully tracked and displayed the number of wins on the BBC micro:bit! However, what about losses? Use `game->remove life` when button `B` is pressed.

* Run and compile the code to see if it works as expected.
