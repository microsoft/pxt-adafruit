# flashing heart activity

Ccontrol images with variables.

### ~avatar avatar

### @video td/videos/flashing-heart-0

In this activity, you will learn how to blink an image on the LED screen.

### ~

Let's start by adding code that plots a heart image on the screen using `basic->plot image`. Once you are done coding, don't forget to run your code in the simulator or the BBC micro:bit.

```
basic.plotImage(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .
`) // ***
```

We want to leave the image on the screen for 0.5 seconds (500 milliseconds), then clear the screen. We can use `basic->pause` to wait and `basic->clear screen` to turn off the LEDs.

```
basic.plotImage(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .
`)
basic.pause(500) // ***
basic.clearScreen() // ***
```

Finally, we can surround this code with a `basic->forever` loop to repeat it and add a pause after `basic->clear screen` to keep the screen off for a little while. Modify your code so that your code looks like this.

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

### ~avatar boothing

Excellent, you're ready to continue with the [challenges](/lessons/flashing-heart/challenges)!

### ~

