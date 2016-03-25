# magic logo activity

show an image that points up when the logo is up. #docs #microbit

### ~avatar avatar

### @video td/videos/magic-logo-0

Welcome! This tutorial will help you display an arrow pointing toward the logo! Let's get started.

### ~

Using the **accelerometer** sensor, the BBC micro:bit can detect when the **logo** is oriented **up**. We call that the **logo up** event. We will use `input->on logo up` to register an event handler that will run when the **logo up** event happens.

```
input.onLogoUp(() => {
}) // ***
```

When the BBC micro:bit goes logo up, the code nested under the `basic->on logo up` function will run. Let's add a line of code to plot an image in there.

```
input.onLogoUp(() => {
    basic.showLeds(`
. . # . .
. # # # .
# # # # #
. . # . .
. . # . .
`, 400) // ***
})
```

Run your code and try to turn around the BBC micro:bit to see the **logo up** event in action!

### ~avatar boothing

Excellent, you're ready to continue with the [challenges](/microbit/lessons/magic-logo/challenges)!

### ~

