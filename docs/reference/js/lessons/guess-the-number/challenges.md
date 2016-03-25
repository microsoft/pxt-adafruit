# guess the number challenges

Coding challenges for the guess the number tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/guess-the-number/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
input.onButtonPressed("A", () => {
    let x = Math.random(10)
    basic.showNumber(x, 150)
})
```

### Challenge 1

### @video td/videos/guess-the-number-2

When button `B` is pressed, we want to clear the screen. This will make it so users can play your game over and over again! Add an event handler to handle this case.

```
input.onButtonPressed("A", () => {
    let x1 = Math.random(10)
    basic.showNumber(x1, 150)
})
input.onButtonPressed("B", () => {
    basic.clearScreen() // ***
})
```

### Challenge 2

Show an animation when you clear the screen! Choose what animation makes most sense to you. Be creative!

