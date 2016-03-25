# smiley blocks challenges

Coding challenges for the smiley. 

## Before we get started

Complete the [smiley activity](/microbit/lessons/smiley/activity) and your code will look like this:


```blocks
basic.showAnimation(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showAnimation(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
```


### Challenge 1

What if we want to make the face to frown on button pressed A?

Let's make add code that will run when button A is pressed!


```blocks
basic.showAnimation(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showAnimation(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
input.onButtonPressed(Button.A, () => {
    
})
```

### Challenge 2

### @video td/videos/smiley-2

Now, we want to show a frowny face when this button is pressed. Let's show the LEDs.

```blocks
basic.showAnimation(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showAnimation(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
input.onButtonPressed(Button.A, () => {
    basic.showAnimation(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})

```

* Run your code to see if it works as expected.

### Challenge 3

When *button B* is pressed, let's change the sad face back to a happy face. To do this, begin by adding a condition for `on button pressed` *B*. Next, show LEDs as a smiley face inside the condition.

