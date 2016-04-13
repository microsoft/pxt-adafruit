# magic 8 activity

a fortune teller game on the BBC micro:bit #docs

### ~avatar avatar

Welcome! This tutorial will help you create a magic 8 ball on the BBC micro:bit. Let's get started!

### ~

To create a new script, go to the [Create Code](/create-code) page and tap *New Project* under **Touch Develop**.

Show a string to instruct the user how to play Magic 8! The magic 8 ball can only answer true or false questions.

```
basic.showString("Ask a question", 150)
```

Display the number 8.

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
```

* Run your program

Register code to run when the BBC micro:bit is shaken.

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
})
```

Create a variable of type number called **x**.

Set **x** equal to a random number with a limit of 3.

Remember the random function in the math library, picks a random number from 0 to the limit, but not including the limit unless it is 0.

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
    let x = Math.random(3)
})
```

Create an if statement for the condition `if x= 2`.

If **x** is 2, display the string 'Yes'

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
    let x1 = Math.random(3)
    if (x1 == 2) {
        basic.showString("Yes", 150)
    }
})
```

Create an if statement for the condition `if x = 1`.

If ``x`` is 1, display the string 'No'

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
    let x2 = Math.random(3)
    if (x2 == 2) {
        basic.showString("Yes", 150)
    } else if (x2 == 1) {
        basic.showString("No", 150)
    }
})
```

If **x** is not 2 or 1, it must be 0. This is the else condition.

If **x** is 0, display the string 'I don't know'

Display the number 8 so users know they can ask the magic 8 ball another question!

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
    basic.clearScreen()
    let randomNumber = Math.random(3)
    if (randomNumber == 2) {
        basic.showString("Yes", 150)
    } else if (randomNumber == 1) {
        basic.showString("No", 150)
    }
    else {
        basic.showString("I don't know", 150)
    }
    basic.showNumber(8, 150)
})
```

* Run your program

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/magic-8/challenges)!

### ~

