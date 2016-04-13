# guess the number activity

guess the number with math random.

### ~avatar avatar

### @video td/videos/guess-the-number-0

Welcome! This tutorial will help you create a guess the number game! Let's get started!

### ~

Add an event handler when button `A` is pressed.

```
input.onButtonPressed(Button.A, () => {
})
```

Create a local variable of type number `x` and set it to a random number using `math->random`. `math->random(10)` generates a random number between `0` and `10` **excluded**.

```
input.onButtonPressed(Button.A, () => {
    let x = Math.random(10)
})
```

Show the random number on the screen.

```
input.onButtonPressed(Button.A, () => {
    let x1 = Math.random(10)
    basic.showNumber(x1, 150)
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/guess-the-number/challenges)!

### ~

