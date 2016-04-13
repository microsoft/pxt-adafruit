# glowing pendulum activity

construct a pendulum that glows using acceleration. #docs

### ~avatar avatar

Welcome! This guided activity will teach how to construct a pendulum that glows using acceleration. Let's get started!

### ~

To create a new script, go to the [Create Code](/create-code) page and tap *New Project* under **Touch Develop**.

Create a **forever** loop that will constantly display the appropriate brightness on the LED display.

```
basic.forever(() => {
})
```

Now let's measure the acceleration on the `y` axis and store that value in a variable. The `input->acceleration("y")` function will provide the value.

```
basic.forever(() => {
    let acceleration = input.acceleration("y")
})
```

Since the micro:bit will be swinging back and forth, the acceleration will only be positive half of the time. Thus, to always get a positive value, we want to take the absolute value of the acceleration.

```
basic.forever(() => {
    let acceleration1 = input.acceleration("y")
    acceleration1 = math.abs(acceleration1)
})
```

The function `input->acceleration("y")` returns a number between 0 and 1024. We want to use this value for the brightness of the micro:bit, but the `led->set brightness()` only accepts a value between 0 and 256. Thus, we need to divide the acceleration by 4 to ensure we will be in the appropriate range.

```
basic.forever(() => {
    let acceleration2 = input.acceleration("y")
    acceleration2 = math.abs(acceleration2)
    acceleration2 = acceleration2 / 4
})
```

Now let's use our acceleration value to set the brightness on the BBC micro:bit.

```
basic.forever(() => {
    let acceleration3 = input.acceleration("y")
    acceleration3 = math.abs(acceleration3)
    acceleration3 = acceleration3 / 4
    led.setBrightness(acceleration3)
})
```

Let's show what the brightness of the micro:bit is by turning all the LEDs on!

```
basic.forever(() => {
    let acceleration4 = input.acceleration("y")
    acceleration4 = math.abs(acceleration4)
    acceleration4 = acceleration4 / 4
    led.setBrightness(acceleration4)
    led.plotAll()
})
```

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/glowing-pendulum/challenges)!

### ~

