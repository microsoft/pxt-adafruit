# the hat game challenges

The all famous Hat Game -- one of 3 hats has the ball, which is revealed at the beginning. The hats then swap with each other. You goal is to chose the hat with the ball after the hats have finished swapping. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/the-hat-game/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
initializeGame()
playLevel()
input.onButtonPressed("A", () => {
    selectHat()
})
input.onButtonPressed("B", () => {
    chooseHat()
})
```

### Challenge 1

Modify `play level()` to customize your difficulty levels. Simply increase the `swap speed` to make the game easier, or decrease it to make the game harder.

```
/**
 * **. . .**
 */
export function playLevel_() {
    let swaps = 5 + 10 * level
    if (level == 1) {
        swaps = 100 // ***
    } else if (level == 2) {
        swapSpeed = 40 // ***
    }
    else {
        swapSpeed = 20 // ***
    }
    // **. . .**
}
```

### Challenge 2

Let's make the game a little more fun and devious! Let's add a `fake swap` function that pretends to swap the hats, but doesn't actually swap them.

```
export function fakeSwap(hat_1: number, hat_2: number, pauseDifficulty: number) {
    if (hat_1 == 0 && hat_2 == 1) {
        basic.showAnimation(`
. . . . . . . . . . # . . . . . # . . . # . . . . . . . . . . . . . .
. . . . . # . . . . . . . . . . . . . . . . . . . # . . . . . . . . .
# . # . # . . . . # . . . . # . . . . # . . . . # . . . . # # . # . #
. . . . . . . # . . . . . . . . . . . . . . . . . . . # . . . . . . .
. . . . . . . . . . . . # . . . # . . . . . # . . . . . . . . . . . .
`, pauseDifficulty)
    }
    if (hat_1 == 1 && hat_2 == 0) {
        basic.showAnimation(`
. . . . . . . . . . . . # . . . # . . . . . # . . . . . . . . . . . .
. . . . . . . # . . . . . . . . . . . . . . . . . . . # . . . . . . .
# . # . # . . . . # . . . . # . . . . # . . . . # . . . . # # . # . #
. . . . . # . . . . . . . . . . . . . . . . . . . # . . . . . . . . .
. . . . . . . . . . # . . . . . # . . . # . . . . . . . . . . . . . .
`, pauseDifficulty)
    }
    if (hat_1 == 1 && hat_2 == 2) {
        basic.showAnimation(`
. . . . . . . . . . . . # . . . . . # . . . # . . . . . . . . . . . .
. . . . . . . # . . . . . . . . . . . . . . . . . . . # . . . . . . .
# . # . # # . . . . # . . . . # . . . . # . . . . # . . . . # . # . #
. . . . . . . . . # . . . . . . . . . . . . . . . . . . . # . . . . .
. . . . . . . . . . . . . . # . . . # . . . . . # . . . . . . . . . .
`, pauseDifficulty)
    }
    if (hat_1 == 2 && hat_2 == 1) {
        basic.showAnimation(`
. . . . . . . . . . . . . . # . . . # . . . . . # . . . . . . . . . .
. . . . . . . . . # . . . . . . . . . . . . . . . . . . . # . . . . .
# . # . # # . . . . # . . . . # . . . . # . . . . # . . . . # . # . #
. . . . . . . # . . . . . . . . . . . . . . . . . . . # . . . . . . .
. . . . . . . . . . . . # . . . . . # . . . # . . . . . . . . . . . .
`, pauseDifficulty)
    }
    if (hat_1 == 0 && hat_2 == 2) {
        basic.showAnimation(`
. . . . . . . . . . # . . . . . # . . . . . # . . . # . . . # . . . . . . . . . . . . . .
. . . . . # . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # . . . . . . . . .
# . # . # . . # . . . . # . . . . # . . . . # . . . . # . . . . # . . . . # . . # . # . #
. . . . . . . . . # . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # . . . . .
. . . . . . . . . . . . . . # . . . # . . . # . . . . . # . . . . . # . . . . . . . . . .
`, pauseDifficulty)
    }
    if (hat_1 == 2 && hat_2 == 0) {
        basic.showAnimation(`
. . . . . . . . . . . . . . # . . . # . . . # . . . . . # . . . . . # . . . . . . . . . .
. . . . . . . . . # . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # . . . . .
# . # . # . . # . . . . # . . . . # . . . . # . . . . # . . . . # . . . . # . . # . # . #
. . . . . # . . . . . . . . . . . . . . . . . . . . . . . . . . . . . # . . . . . . . . .
. . . . . . . . . . # . . . . . # . . . . . # . . . # . . . # . . . . . . . . . . . . . .
`, pauseDifficulty)
    }
}
```

### Challenge 3

Now let's implement our `fake swap` function inside `play level`. Let's make a third of the swaps fake. This can be most efficiently accomplished through mod.

```
/**
 * **. . .**
 */
export function playLevel_1() {
    let swaps = 5 + 10 * level
    // **. . .**
    for (let i = 0; i < swaps; i++) {
        let swapType = Math.random(3) // ***
        let not = Math.random(3)
        if (swapType < 2) {
            swapHats(math.mod(not + 1, 3), math.mod(not + 2, 3), swapSpeed) // ***
        } else {
            fakeSwap(math.mod(not + 1, 3), math.mod(not + 2, 3), swapSpeed) // ***
        }
    }
    index = -1
    choosingHat = true
}
```

### Challenge 4

For a swap of two given hats, one of the hats will always go up while the other goes down. For example, if the first and third hats are swapping, the first hat will always go down and the third will go up. Let's randomize the orientation of each swap by switching the parameters of each swap function half the time.

```
/**
 * **. . .**
 */
export function playLevel_2() {
    let swaps = 5 + 10 * level
    // **. . .**
    for (let i = 0; i < swaps; i++) {
        let swapType = Math.random(3)
        let not = Math.random(3)
        let swapOrientation = Math.random(2) // ***
        if (swapType < 2) {
            if (swapOrientation == 0) {
                swapHats(math.mod(not + 1, 3), math.mod(not + 2, 3), swapSpeed) // ***
            } else {
                swapHats(math.mod(not + 2, 3), math.mod(not + 1, 3), swapSpeed) // ***
            }
        }
        else {
            swapOrientation = Math.random(2) // ***
            if (swapOrientation == 0) {
                fakeSwap(math.mod(not + 1, 3), math.mod(not + 2, 3), swapSpeed) // ***
            }
            else {
                fakeSwap(math.mod(not + 2, 3), math.mod(not + 1, 3), swapSpeed) // ***
            }
        }
    }
    index = -1
    choosingHat = true
}
```

### Challenge 5

Create your own swap animation. See if you can get all three hats to move at the same time!

