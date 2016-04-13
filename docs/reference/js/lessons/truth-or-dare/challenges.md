# truth or dare challenges

a multi-player game that forces each player to reveal a secret or something funny. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/truth-or-dare/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
input.onButtonPressed(Button.A, () => {
    let random = Math.random(2)
    if (random == 0) {
        basic.showString("TRUTH", 150)
    } else {
        basic.showString("DARE", 150)
    }
    basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
})
```

### Challenge 1

Let's make the word "DARE" appear a little more often than "TRUTH". Change the line of code with `math->random(2)` to `math->random(3)`.

```
basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
input.onButtonPressed(Button.A, () => {
    let random1 = Math.random(3) // ***
    if (random1 == 0) {
        basic.showString("TRUTH", 150)
    } else {
        basic.showString("DARE", 150)
    }
    basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
})
```

### Challenge 2

Instead of just saying "TRUTH" or "DARE", let's sometimes say "SKIP". This would allow the skipped person to spin the BBC micro:bit without completing a truth or dare. Modify the if statement as shown.

```
basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
input.onButtonPressed(Button.A, () => {
    let random2 = Math.random(3)
    if (random2 == 0) {
        basic.showString("TRUTH", 150) // ***
    } else if (random2 == 1) {
        basic.showString("DARE", 150) // ***
    }
    else {
        basic.showString("SKIP", 150) // ***
    }
    basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
})
```

* Run your code to see if it works as expected

### Challenge 3

Add some other messages, such as "TWO DARES" for the BBC micro:bit to show. You will need to modify the parameter inside `math->random(3)` as well as adding another `if` condition.

