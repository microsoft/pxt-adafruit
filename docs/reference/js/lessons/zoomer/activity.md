# zoomer activity

measure the acceleration on the BBC micro:bit in the "z" direction.

### ~avatar avatar

### @video td/videos/zoomer-0

Welcome! This tutorial will teach how to measure the acceleration on the micro:bit in the "z" direction. Let's get started!

### ~

To create a new script, go to the [Create Code](/create-code) page and tap *New Project* under **Touch Develop**.

We want to display the acceleration forever. In order to do so, we need a `basic->forever` loop.

```
basic.forever(() => {
})
```

Let's measure the acceleration and then store in it a variable `az`. The acceleration is measured in **milli-gravities**, so a value of `-1000` is equivalent to `-1g` or `-9.81m/s^2`.

```
basic.forever(() => {
    let az = input.acceleration("z")
})
```

Show the value of `az` on the screen.

```
basic.forever(() => {
    let az_ = input.acceleration("z")
    basic.showNumber(az_, 150)
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/zoomer/challenges)!

### ~

