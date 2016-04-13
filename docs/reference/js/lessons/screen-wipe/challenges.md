# screen wipe challenges

Coding challenges for the screen wipe tutorial. #docs

## Before we get started

Complete the [screen wipe](/lessons/screen-wipe) activity and your code will look like this:

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

**Challenge 1**

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

**Challenge 2**

### @video td/videos/screen-wipe-2

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

**Challenge 3**

Show an animation that scrolls back up when you press button "B".

* tap the `run` button to view your final product!
