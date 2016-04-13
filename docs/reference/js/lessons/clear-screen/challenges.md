# clear screen challenges

My script. #docs

### Challenge 0

Welcome! This [guided tutorial](/hzckbb) will help you create the script to clear the screen!

Your goal is to clear the screen after displaying an animation. Begin by showing and displaying an animation. Remember that the `show animation` is in the `basic` namespace. We then need to detect when the "A" button is pressed. Finally, clear the screen by typing in `basic->clear screen`.

Your main function should look like this:

```
basic.showAnimation(`
# # # # # # # # # # . . . . . . . . . .
# # # # # # # # # # . . . . . . . . . .
. . . . . # # # # # # # # # # . . . . .
. . . . . # # # # # # # # # # # # # # #
. . . . . . . . . . . . . . . # # # # #
`, 400)
input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
})
```

* tap the `run` button to view the script on the monitor.

### Challenge 1

Create an event handler for Button "B".

```
basic.showAnimation(`
# # # # # # # # # # . . . . . . . . . .
# # # # # # # # # # . . . . . . . . . .
. . . . . # # # # # # # # # # . . . . .
. . . . . # # # # # # # # # # # # # # #
. . . . . . . . . . . . . . . # # # # #
`, 400)
input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
})
```

### Challenge 2

Replay the animation when the "B" button is pressed by typing in `basic->show animation(..., 400)`.

```
basic.showAnimation(`
# # # # # # # # # # . . . . . . . . . .
# # # # # # # # # # . . . . . . . . . .
. . . . . # # # # # # # # # # . . . . .
. . . . . # # # # # # # # # # # # # # #
. . . . . . . . . . . . . . . # # # # #
`, 400)
input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    basic.showAnimation(`
# # # # # # # # # # . . . . . . . . . .
# # # # # # # # # # . . . . . . . . . .
. . . . . # # # # # # # # # # . . . . .
. . . . . # # # # # # # # # # # # # # #
. . . . . . . . . . . . . . . # # # # #
`, 400) // ***
})
```

### Challenge 3

Show an animation that scrolls back up when you press button "B".

* tap the `run` button to view your final product!
