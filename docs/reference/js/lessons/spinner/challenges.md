# spinner challenges

create an arrow that randomly points to a player. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/spinner/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
input.onGesture(Gesture.Shake, () => {
    let randomArrow = Math.random(4)
    if (randomArrow == 0) {
        basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
    }
    if (randomArrow == 1) {
        basic.plotImage(`
. . # . .
. . # . .
# # # # #
. # # # .
. . # . .
`)
    }
    if (randomArrow == 2) {
        basic.plotImage(`
. . # . .
. . # # .
# # # # #
. . # # .
. . # . .
`)
    }
    if (randomArrow == 3) {
        basic.plotImage(`
. . # . .
. # # . .
# # # # #
. # # . .
. . # . .
`)
    }
})
```

### Challenge 1

Modify the random number generator so that it can include new arrows we will create in the next challenge.

```
input.onGesture(Gesture.Shake, () => {
    let randomArrow1 = Math.random(8) // ***
    // **. . .**
    if (randomArrow1 == 4) {
        basic.plotImage(`
# # # # .
# # # . .
# # # . .
# . . # .
. . . . #
`)
    }
    if (randomArrow1 == 5) {
        basic.plotImage(`
. # # # #
. . # # #
. . # # #
. # . # #
# . . . .
`)
    }
    if (randomArrow1 == 6) {
        basic.plotImage(`
# . . . .
. # . . #
. . # # #
. . # # #
. # # # #
`)
    }
    if (randomArrow1 == 7) {
        basic.plotImage(`
. . . . #
# . . # .
# # # . .
# # # . .
# # # # .
`)
    }
})
```

* Do **not** run the code yet because it will not work until you have conditions for every random number.

### Challenge 2

Let's add four more arrows that point diagonally.

```
input.onGesture(Gesture.Shake, () => {
    let randomArrow2 = Math.random(4)
    // **. . .**
    if (randomArrow2 == 4) {
        basic.plotImage(`
# # # # .
# # # . .
# # # . .
# . . # .
. . . . #
`) // ***
    }
    if (randomArrow2 == 5) {
        basic.plotImage(`
. # # # #
. . # # #
. . # # #
. # . # #
# . . . .
`) // ***
    }
    if (randomArrow2 == 6) {
        basic.plotImage(`
# . . . .
. # . . #
. . # # #
. . # # #
. # # # #
`) // ***
    }
    if (randomArrow2 == 7) {
        basic.plotImage(`
. . . . #
# . . # .
# # # . .
# # # . .
# # # # .
`) // ***
    }
})
```

* Run your code to see if it works as expected

### Challenge 3

Add some other arrows if there are more than 8 players.

