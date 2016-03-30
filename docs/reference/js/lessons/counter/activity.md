# counter activity

Display a number with a variable.

### ~avatar avatar

### @video td/videos/counter-0

Welcome! This tutorial will teach you how to make a counter that increments when button A is pressed. Let's get started!

### ~

To create a new script, go to the [Create Code](/microbit/create-code) page and tap *New Project* under **Touch Develop**.

Let's start by creating a **local variable** `count` to keep track of the current count.

```
let count = 0
```

The code under ``on button pressed("A")`` will run each time the user presses A. Let's add a line of code that increments `count` by `1`.

```
let count_ = 0
input.onButtonPressed(Button.A, () => {
    count = count + 1
})
```

Since the count has changed, it's time to refresh the screen display. Let's add a line of code to display the count on screen.

```
let count_1 = 0
input.onButtonPressed(Button.A, () => {
    count = count + 1
    basic.showNumber(count, 150)
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/counter/challenges)!

### ~

