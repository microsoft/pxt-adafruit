# glowing pendulum challenges

Coding challenges for the glowing pendulum tutorial. #docs

## Before we get started

Complete the following guided tutorial:

* [tutorial](/lessons/glowing-pendulum/tutorial)

At the end of the tutorial, click `keep editing`. Your code should look like this:

```
basic.forever(() => {
    let acceleration = input.acceleration("y")
    acceleration = math.abs(acceleration)
    acceleration = acceleration / 4
    led.setBrightness(acceleration)
    led.plotAll()
})
```

**Challenge 1**

![](/static/mb/lessons/glowing-pendulum-0.jpg)

Hold the BBC micro:bit in your hand in a dark room. Move the BBC micro:bit like a pendulum, and produce a slow image that captures the pattern of the BBC micro:bit LEDs.

**Challenge 2**

Replace "y" in `[input->acceleration("y")] with "x" or "z". Changing the axis will cause the BBC micro:bit to measure the force in a different direction. What differences in the resulting pattern does this replacement make?

