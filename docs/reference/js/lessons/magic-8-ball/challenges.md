# magic 8 challenges

Coding challenges for the magic 8 tutorial #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/magic-8-ball/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

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

**Challenge 1**

Now let's increase the number of responses the magic 8 ball can give. How about 5 responses instead? Let's change the limit of `math->random` to 5.

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
    basic.clearScreen()
    let randomNumber1 = Math.random(5) // ***
    if (randomNumber1 == 2) {
        basic.showString("Yes", 150)
    } else if (randomNumber1 == 1) {
        basic.showString("No", 150)
    }
    else {
        basic.showString("I don't know", 150)
    }
    basic.showNumber(8, 150)
})
```

**Challenge 2**

Now have the magic 8 ball respond "Try again" if **randomNumber** is 3.

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
    basic.clearScreen()
    let randomNumber2 = Math.random(5)
    if (randomNumber2 == 3) {
        basic.showString("Try again", 150) // ***
    } else if (randomNumber2 == 2) {
        basic.showString("Yes", 150)
    }
    else if (randomNumber2 == 1) {
        basic.showString("No", 150)
    }
    else {
        basic.showString("I don't know", 150)
    }
    basic.showNumber(8, 150)
})
```

**Challenge 3**

Now what about if **randomNumber** is 4? Let's have the magic 8 ball respond "Definitely!".

```
basic.showString("Ask a question", 150)
basic.showNumber(8, 150)
input.onGesture(Gesture.Shake, () => {
    basic.clearScreen()
    let randomNumber3 = Math.random(5)
    if (randomNumber3 == 4) {
        basic.showString("Definitely!", 150) // ***
    } else if (randomNumber3 == 3) {
        basic.showString("Try again", 150)
    }
    else if (randomNumber3 == 2) {
        basic.showString("Yes", 150)
    }
    else if (randomNumber3 == 1) {
        basic.showString("No", 150)
    }
    else {
        basic.showString("I don't know", 150)
    }
    basic.showNumber(8, 150)
})
```

**Challenge 4**

Add 3 more responses so your magic 8 ball has 8 possible responses. Be creative!

