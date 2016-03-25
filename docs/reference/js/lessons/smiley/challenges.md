# smiley challenges

Coding challenges for the smiley tutorial. #docs

## Before we get started

Complete the [smiley activity](/microbit/lessons/smiley/activity) and your code will look like this:

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . . . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 400)
```

### Challenge 1

What if we want to make the face to frown when button `A` is pressed?

Let's make add code that will run when button `A` is pressed!

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . . . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 400)
input.onButtonPressed("A", () => {
}) // ***
```

### Challenge 2

### @video td/videos/smiley-2

Now, we want to show a frowny face when this button is pressed. Let's plot that image.

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . . . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 400)
input.onButtonPressed("A", () => {
    basic.showLeds(`
. # . # .
. # . # .
. . . . .
. # # # .
# . . . #
`, 400) // ***
})
```

* Run your code to see if it works as expected.

### Challenge 3

When button `B` is pressed, let's change the sad face back to a happy face. To do this, begin by adding a condition for `input->on button pressed(B)`. Then show a smiley face inside the condition.

