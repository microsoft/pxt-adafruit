# flashing heart blocks lesson

Learn how to create LED images with a global variable.

## Topic

Pause

## Quick links

* [activity](/lessons/flashing-heart/activity)
* [quiz](/lessons/flashing-heart/quiz)
* [quiz answers](/lessons/flashing-heart/quiz-answers)
* [challenges](/lessons/flashing-heart/challenges)
## Prior learning/place of lesson in scheme of work

Learn how to `show LEDs` by showing an image on the LED screen. We will be learning how to create a blinking app using a forever loop as well as simple commands, such as show LEDs, pause, and clear screen.

## Documentation

```cards
basic.forever(() => {})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.clearScreen()
```

## Objectives

* learn how to repeat code in the background forever
* learn how to show LEDs on the LED screen
* learn how to pause your code for the specified number of milliseconds
* learn how to turn off all the LED lights on the LED screen
