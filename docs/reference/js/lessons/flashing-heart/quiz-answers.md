# flashing heart quiz answers

Learn how to create images with global variables. 

This is the answer key for the [flashing heart quiz](/microbit/lessons/flashing-heart/quiz).

## 1. Describe what `basic->show leds` does 

Show LEDs displays an Image on the BBC micro:bit's LED screen

## 2. Draw the areas being displayed on the BBC micro:bit

```
basic.showLeds(`
# # . # #
# # # # #
# # # # #
. # # # .
. . # . .
`, 400)
```

![](/static/mb/lessons/flashing-heart-0.png)

## 3. Write the code to show LEDs of a broken heart forever.

```
basic.forever(() => {
    basic.showLeds(`
# # . # #
# . # # #
# # . # #
. # . # .
. . # . .
`, 400)
})
```

