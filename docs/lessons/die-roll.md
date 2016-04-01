# die roll lesson

create a die on the BBC micro:bit.

### @video td/videos/die-roll-0

## Topic

If (Conditionals)

## Quick Links

* [activity](/microbit/lessons/die-roll/activity)
* [challenges](/microbit/lessons/die-roll/challenges)
* [quiz](/microbit/lessons/die-roll/quiz)
* [quiz answers](/microbit/lessons/die-roll/quiz-answers)

## Prior learning/place of lesson in scheme of work

Learn how to use an if statements to run code run code depending on whether a condition is true or not. We will be learning how to create a die with If statements, On Shake, Variables, Assignment Operator, Pick Random and Show LEDs

## Documentation

```docs

input.onGesture(Gesture.Shake, () => {

})



let x = 0
x = Math.random(3)

if (true) {

}

basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)




```

## Objectives

* learn how to run code when the BBC micro:bit is shaken, when running code in the web browser, moving the mouse quickly simulates shaking
* learn how to create a local variable as a place where you can store and retrieve data
* learn how the assignment operator is used to declare a new local variable
* learn how to declare a new local variable or update the value of a variable
* learn how to return a random number
* learn how to conditionally run code depending on whether a condition is true or not
* learn how to show an image on the LED screen
