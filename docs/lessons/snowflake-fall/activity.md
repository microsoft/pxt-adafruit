# snowflake fall blocks activity

design a blinking rectangle animation. #docs #tutorials #stepByStep

### ~avatar avatar

### @video td/videos/snowflake-fall-0

Welcome! This tutorial will teach how design a **snowfall animation**. Let's get started!

### ~

Let's start by creating a `forever` loop that will allow us to repeat the show LEDs code. Any code in the `forever` loop will repeat in the background... forever.


```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
```

The next step is to add two `show LEDs` blocks inside the `forever` loop to repeat an animation.

```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
```

Run your code in the simulator or download it to your BBC micro:bit to see what happens!

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/snowflake-fall/challenges)!

### ~

