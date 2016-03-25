# magic logo challenges

Coding challenges for the magic logo tutorial. #docs

## Before we get started

Complete the [magic logo](/microbit/lessons/magic-logo/activity) activity and your code will look like this:

```
input.onLogoUp(() => {
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

How about when the logo is down? We should display an arrow pointing downward!

### @video td/videos/magic-logo-1-2

```
input.onLogoUp(() => {
    basic.plotImage(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`)
})
input.onLogoDown(() => {
    basic.plotImage(`
. . # . .
. . # . .
# # # # #
. # # # .
. . # . .
`) // ***
}) // ***
```

### Challenge 2

Use the `input->on screen up` event to show a spinning arrow when the screen is turned up.

### Challenge 3

Display another animation using the `input->on screen up` event.

