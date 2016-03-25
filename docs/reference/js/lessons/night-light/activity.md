# night light activity

change the brightness of the BBC micro:bit. #docs #tutorials #stepByStep

### ~avatar avatar

### @video td/videos/night-light-0

Welcome! This tutorial will teach you how to change the brightness of the BBC micro:bit. Let's get started!

### ~

The brightness of the LED screen can be changed by using the `led->set brightness` function. This function takes a number between ``0`` (off) and ``255`` (full brightness).

Let's build a little app that dims the screen when pressing button ``A``.

Add the code `led->plot all` to turn on all the LEDs. Don't hesitate to run your code to see what happens.

```
led.plotAll() // ***
```

The screen starts with a 50% brightness value by default (128). Add a new line of code to set the full brightness (255) using `led->set brightness`.

```
led.setBrightness(255) // ***
led.plotAll()
```

Add a new event handler for `input->on button pressed(A)` and add the code to set the brightness to `64`.

```
led.setBrightness(255)
led.plotAll()
input.onButtonPressed("A", () => {
    led.setBrightness(64) // ***
}) // ***
```

### ~avatar boothing

Excellent, you're ready to continue with the [challenges](/microbit/lessons/night-light/challenges)!

### ~

