# night light challenges

Coding challenges for the night light tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/microbit/lessons/night-light/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
led.setBrightness(255)
led.plotAll()
input.onButtonPressed("A", () => {
    led.setBrightness(64)
})
```

### Challenge 1

### @video td/videos/night-light-2

What if we want to turn off all the LEDs? Let's do this by setting the brightness to `0` when button `B` is pressed. Add an event handler with `input->on button pressed(B)` add `led->set brightness(0)` to turn off the LEDs.

```
led.setBrightness(255)
led.plotAll()
input.onButtonPressed("A", () => {
    led.setBrightness(64)
})
input.onButtonPressed("B", () => {
    led.setBrightness(0) // ***
}) // ***
```

**Challenge 3**

Add an event handler with `input->on screen up` to change the LED brightness back to a `255`.

* `Run main` your script to see the LEDs change brightness.
