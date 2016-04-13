# die roll challenges

Create a die on the BBC micro:bit. 

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/die-roll/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
input.onGesture(Gesture.Shake, () => {
    let roll = Math.random(6) // ***
    if (roll == 5) {
        basic.plotImage(`
. # . # .
. . . . .
. # . # .
. . . . .
. # . # .
`)
    } else if (roll == 4) {
        basic.plotImage(`
. . . . .
. # . # .
. . # . .
. # . # .
. . . . .
`)
    }
    else if (roll == 3) {
        basic.plotImage(`
. . . . .
. # . # .
. . . . .
. # . # .
. . . . .
`)
    }
    else if (roll == 2) {
        basic.plotImage(`
# . . . .
. . . . .
. . # . .
. . . . .
. . . . #
`)
    }
    else if (roll == 1) {
        basic.plotImage(`
. . . . .
. # . . .
. . . . .
. . . # .
. . . . .
`)
    }
    else {
        basic.plotImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
    }
})
```

### Challenge 1

Modify the line of code with `math->random` so that only number 1-4 can appear on the die.

```
input.onGesture(Gesture.Shake, () => {
    let roll1 = Math.random(4) // ***
    if (roll1 == 5) {
        basic.plotImage(`
. # . # .
. . . . .
. # . # .
. . . . .
. # . # .
`)
    } else if (roll1 == 4) {
        basic.plotImage(`
. . . . .
. # . # .
. . # . .
. # . # .
. . . . .
`)
    }
    else if (roll1 == 3) {
        basic.plotImage(`
. . . . .
. # . # .
. . . . .
. # . # .
. . . . .
`)
    }
    else if (roll1 == 2) {
        basic.plotImage(`
# . . . .
. . . . .
. . # . .
. . . . .
. . . . #
`)
    }
    else if (roll1 == 1) {
        basic.plotImage(`
. . . . .
. # . . .
. . . . .
. . . # .
. . . . .
`)
    }
    else {
        basic.plotImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
    }
})
```

### Challenge 2

Let's make a trick die! Modify the line of code with `math->random` so that only numbers 3-6 can appear on the die. Also note that we need to ensure `roll = 0` when only 1 dot is shown on the BBC micro:bit.

```
input.onGesture(Gesture.Shake, () => {
    let roll2 = Math.random(4) + 2 // ***
    if (roll2 == 5) {
        basic.plotImage(`
. # . # .
. . . . .
. # . # .
. . . . .
. # . # .
`)
    } else if (roll2 == 4) {
        basic.plotImage(`
. . . . .
. # . # .
. . # . .
. # . # .
. . . . .
`)
    }
    else if (roll2 == 3) {
        basic.plotImage(`
. . . . .
. # . # .
. . . . .
. # . # .
. . . . .
`)
    }
    else if (roll2 == 2) {
        basic.plotImage(`
# . . . .
. . . . .
. . # . .
. . . . .
. . . . #
`)
    }
    else if (roll2 == 1) {
        basic.plotImage(`
. . . . .
. # . . .
. . . . .
. . . # .
. . . . .
`)
    }
    else if (roll2 == 0) {
        basic.plotImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
    }
})
```

### Challenge 3

Add a couple more conditions so that the BBC micro:bit randomly chooses a number between 1 and 8.

