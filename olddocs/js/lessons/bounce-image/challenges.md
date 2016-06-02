# bounce image challenges

Coding challenges for the bounce image tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/bounce-image/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
basic.forever(() => {
    basic.showAnimation(`
# . . . . . # . . . . . # . . . . . # . . . . . #
# . . . . . # . . . . . # . . . . . # . . . . . #
# . . . . . # . . . . . # . . . . . # . . . . . #
# . . . . . # . . . . . # . . . . . # . . . . . #
# . . . . . # . . . . . # . . . . . # . . . . . #
`, 200)
})
```

### Challenge 1

Now, let's add frames to reverse the animation so it looks like the bar is bouncing off the right edge of the display.

```
basic.forever(() => {
    basic.showAnimation(`
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
`, 200) // ***
})
```

* Run the code to see if it works as expected.

### Challenge 2

Let's add a condition for on shake!

```
basic.forever(() => {
    basic.showAnimation(`
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
`, 200)
})
input.onGesture(Gesture.Shake, () => {
}) // ***
```

### Challenge 3

When the BBC micro:bit is shaken we want to show a new animation. Here is an example, but you can create your own. Be creative!

```
basic.forever(() => {
    basic.showAnimation(`
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
# . . . . . # . . . . . # . . . . . # . . . . . # . . . # . . . # . . . # . . . # . . . .
`, 200)
})
input.onGesture(Gesture.Shake, () => {
    basic.showAnimation(`
. . . . . . . . . . # # # # # . . . . . . . . . .
. . . . . . # # # . # # # # # . # # # . . . . . .
. . # . . . # # # . # # # # # . # # # . . . # . .
. . . . . . # # # . # # # # # . # # # . . . . . .
. . . . . . . . . . # # # # # . . . . . . . . . .
`, 200) // ***
})
```

* Run the code to see if it works as expected.
