# love meter challenges

create a love meter with the BBC micro:bit  #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/love-meter/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
input.onPinPressed(TouchPin.P0, () => {
    let x = Math.random(11)
    basic.showNumber(x, 150)
})
```

### Challenge 1

Add a pause of 3000 milliseconds (3 seconds) after showing the number so that the number won't immediately disappear in the next challenge.

```
input.onPinPressed(TouchPin.P0, () => {
    let x1 = Math.random(11)
    basic.showNumber(x1, 150)
    basic.pause(3000) // ***
})
```

### Challenge 2

If the rating **x** is between ``0`` and ``3`` (strictly less than ``4``), display the text "HORRIBLE!".

```
input.onPinPressed(TouchPin.P0, () => {
    let x2 = Math.random(11)
    basic.showNumber(x2, 150)
    basic.pause(3000)
    if (x2 < 4) {
        basic.showString("HORRIBLE!", 150) // ***
    }
})
```

### Challenge 3

### @video td/videos/love-meter-3

If the rating is between 4 and 7, display the text "MEDIOCRE!" **else** display the text "MATCHED!"

```
input.onPinPressed(TouchPin.P0, () => {
    let x3 = Math.random(11)
    basic.showNumber(x3, 150)
    basic.pause(3000)
    if (x3 < 4) {
        basic.showString("HORRIBLE!", 150) // ***
    } else if (x3 < 8) {
        basic.showString("MEDIOCRE!", 150) // ***
    }
    else {
        basic.showString("MATCHED!", 150) // ***
    }
})
```

### Challenge 4

Use `basic->plot image` or `basic->show animation` to display images and animations instead of text for each case.

