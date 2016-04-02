# snowflake fall activity

design a blinking rectangle animation.

### ~avatar avatar

### @video td/videos/snowflake-fall-0

Welcome! This tutorial will teach how design a **snowfall animation**. Let's get started!

### ~

Let's start by creating a `basic->forever` loop that will allow us to repeat the animation code. Any code in the `forever` loop will repeat in the background... forever.

```
basic.forever(() => {
}) // ***
```

The next step is to add `basic->show animation` inside the `forever` loop to repeat an animation.

```
basic.forever(() => {
    basic.showAnimation(`
. . . . . . . . . .
. . # . . . . . . .
. # # # . . . . . .
. . # . . . . . . .
. . . . . . . . . .
`, 400) // ***
})
```

Run your code in the simulator or download it to your BBC micro:bit to see what happens!

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/snowflake-fall/challenges)!

### ~

