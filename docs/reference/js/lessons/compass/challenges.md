# compass challenges

Display the direction that the BBC micro:bit is facing using the compass 

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/compass/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
input.calibrate()
basic.forever(() => {
    let degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N", 100)
    } else if (degrees < 135) {
        basic.showString("E", 100)
    }
    else if (degrees < 225) {
        basic.showString("S", 100)
    }
    else {
        basic.showString("W", 100)
    }
})
```

### Challenge 1

Instead of displaying `N` when the BBC micro:bit is pointing North, display a star to indicate the north star.

```
input.calibrate()
basic.forever(() => {
    let degrees1 = input.compassHeading()
    if (degrees1 < 45) {
        basic.plotImage(`
# . # . #
. # # # .
# # # # #
. # # # .
# . # . #
`) // ***
    } else if (degrees1 < 135) {
        basic.showString("E", 100)
    }
    else if (degrees1 < 225) {
        basic.showString("S", 100)
    }
    else {
        basic.showString("W", 100)
    }
})
```

* Run your code to see if it works as expected

### Challenge 2

Instead of displaying just `N`, `W`, `S`, or `E`, display the full word.

```
input.calibrate()
basic.forever(() => {
    let degrees2 = input.compassHeading()
    if (degrees2 < 45) {
        basic.showString("NORTH", 100) // ***
    } else if (degrees2 < 135) {
        basic.showString("EAST", 100) // ***
    }
    else if (degrees2 < 225) {
        basic.showString("SOUTH", 100) // ***
    }
    else {
        basic.showString("WEST", 100) // ***
    }
})
```

* Run your code to see if it works as expected

### Challenge 3

Display your own unique message for each direction.

