# flipping bird challenges

Coding challenges for flipping bird. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/flipping-bird/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
counter = 0
input.onGesture(Gesture.Shake, () => {
    counter = counter + 1
    if (math.mod(counter, 2) == 1) {
        basic.plotImage(`
# # . # #
. . # . .
. . . . .
. . . . .
. . . . .
`)
    }
})
```

### Challenge 1

We handled the case of when `math->mod(counter,2) = 1`. We haven't done anything when the remainder is 0! Add an if statement to handle this case.

```
counter = 0
input.onGesture(Gesture.Shake, () => {
    counter = counter + 1
    if (math.mod(counter, 2) == 1) {
        basic.plotImage(`
# # . # #
. . # . .
. . . . .
. . . . .
. . . . .
`)
    }
    if (math.mod(counter, 2) == 0) {
    }
})
```

### Challenge 2

### @video td/videos/flipping-bird-2

Inside of that `if` statement you created in challenge 1, add `basic->plot image()` and display an upside down flying bird.

```
counter = 0
input.onGesture(Gesture.Shake, () => {
    counter = counter + 1
    if (math.mod(counter, 2) == 1) {
        basic.plotImage(`
# # . # #
. . # . .
. . . . .
. . . . .
. . . . .
`)
    }
    if (math.mod(counter, 2) == 0) {
        basic.plotImage(`
. . . . .
. . . . .
. . . . .
. . # . .
# # . # #
`) // ***
    }
})
```

* `Run` the code to see if it works as expected.

**Challenge 3**

Display a check mark and question mark instead of flipping birds. Or better yet, come up with your own pair of opposites to display!

