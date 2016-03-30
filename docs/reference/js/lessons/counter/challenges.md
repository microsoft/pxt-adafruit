# counter challenges

Coding challenges for the counter tutorial. 

## Before we get started

Complete the following [guided tutorial](/microbit/lessons/counter/activity) At the end of the tutorial, your code should look like this:

```
let count = 0
input.onButtonPressed(Button.A, () => {
    count = count + 1
    basic.showNumber(count, 150)
})
```

### Challenge 1

### @video td/videos/counter-1-2

Let's add the code to `count` when `B` is pressed. Add an event handler with `input->on button pressed(B)` then add the code to `count`.

```
let count1 = 0
input.onButtonPressed(Button.A, () => {
    count1 = count1 + 1
    basic.showNumber(count1, 150)
})
input.onButtonPressed(Button.B, () => {
    count1 = count1 - 1 // ***
    basic.showNumber(count1, 150) // ***
}) // ***
```

### Challenge 3

Now let's try to reset the counter when the BBC micro:bit is shaken. You will need to register an event handler with `input->on shake`.

