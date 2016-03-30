# rotation animation challenges

These challenges take the rotation animation to the next level by adding a while loop and changing a boolean to false. #docs

**Challenge 0**

### @video vimeo/134323475

The [Rotating Pattern tutorial](https://test.microbit.co.uk/td/lessons/rotation-animation/tutorial) will help you create images that look like a rotating pattern by using a while loop.

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
}
```

**Challenge 1**

Now let's add to this by creating a condition for on button pressed `A` before the while loop.

```
rotating = true
input.onButtonPressed(Button.A, () => {
}) // ***
while (rotating) {
    basic.showAnimation(`
# . . . . . . # . . . . . . # . . . . .
. # . . . . . # . . . . . # . . . . . .
. . # . . . . # . . . . # . . # # # # #
. . . # . . . # . . . # . . . . . . . .
. . . . # . . # . . # . . . . . . . . .
`, 400)
}
```

**Challenge 2**

### @video vimeo/134323896

Now that we have the on button pressed condition, let's make the animation stop rotating by setting the rotating global variable to false when button `A` is pressed.

```
rotating = true
input.onButtonPressed(Button.A, () => {
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
}
```

**Challenge 3**

Let's also make the image rotate the opposite way when button A is pressed! We can do this with another while loop that is only executed when `rotating->equals(false)`.

