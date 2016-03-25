# rotation animation challenges

Coding challenges for the rotation animation tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/rotation-animation/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
rotating = true
while (rotating) {
    basic.showAnimation(`
# . . . . . . # . . . . . . # . . . . .
. # . . . . . # . . . . . # . . . . . .
. . # . . . . # . . . . # . . # # # # #
. . . # . . . # . . . # . . . . . . . .
. . . . # . . # . . # . . . . . . . . .
`, 400)
    basic.pause(25)
}
```

### Challenge 1

Now let's add to this by creating a condition for on button pressed `A` before the while loop.

```
rotating = true
input.onButtonPressed("A", () => {
}) // ***
while (rotating) {
    basic.showAnimation(`
# . . . . . . # . . . . . . # . . . . .
. # . . . . . # . . . . . # . . . . . .
. . # . . . . # . . . . # . . # # # # #
. . . # . . . # . . . # . . . . . . . .
. . . . # . . # . . # . . . . . . . . .
`, 400)
    basic.pause(25)
}
```

### Challenge 2

### @video td/videos/rotation-animation-1-and-2

Now that we have the on button pressed condition, let's make the animation stop rotating by setting the rotating global variable to false when button `A` is pressed.

```
rotating = true
input.onButtonPressed("A", () => {
    rotating = false // ***
}) // ***
while (rotating) {
    basic.showAnimation(`
# . . . . . . # . . . . . . # . . . . .
. # . . . . . # . . . . . # . . . . . .
. . # . . . . # . . . . # . . # # # # #
. . . # . . . # . . . # . . . . . . . .
. . . . # . . # . . # . . . . . . . . .
`, 400)
    basic.pause(25)
}
```

* Run the code to see the awesome rotation.

### Challenge 3

Let's also make the image rotate the opposite way when button A is pressed! We can do this with another while loop that is only executed while `not rotating`.

