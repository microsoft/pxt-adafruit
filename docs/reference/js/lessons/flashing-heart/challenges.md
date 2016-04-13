# flashing heart challenges

Coding challenges for flashing heart. 

## Before we get started

Complete the [flashing heart](/lessons/flashing-heart/activity) activity and your code will look like this:

```
basic.forever(() => {
    basic.plotImage(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .
`)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
```

### Challenge 1

### @video td/videos/flashing-heart-1

Let's plot a different image. Let's display a broken heart!

To do this, you need to **add a line** between the last line and the end loop. Plot the image of the broken heart and then add a pause of 500 milliseconds.

```
basic.forever(() => {
    basic.plotImage(`
# # . # #
# # # # #
# # # # #
. # # # .
. . # . .
`)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.plotImage(`
. # . # .
# . # # #
# . . # #
. # # # .
. . # . .
`) // ***
    basic.pause(500) // ***
})
```

* click `run main` to see if the code works as expected.

### Challenge 2

### @video td/videos/flashing-heart-2

Now let's alternate flashing the heart and the broken heart. To do this, we need to clear the screen and then add a pause of 500 milliseconds under the new code we added in Challenge 1.

```
basic.forever(() => {
    basic.plotImage(`
# # . # #
# # # # #
# # # # #
. # # # .
. . # . .
`)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.plotImage(`
. # . # .
# . # # #
# . . # #
. # # # .
. . # . .
`)
    basic.pause(500)
    basic.clearScreen() // ***
    basic.pause(500) // ***
})
```

* click `run main` to see if the code works as expected.

### Challenge 3

You now have a heart and broken heart flashing! Now plot a new image to alternate in with the heart and broken heart.

