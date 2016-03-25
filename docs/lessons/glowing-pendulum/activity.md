# glowing pendulum block activity

Construct a pendulum that glows using acceleration. 

To create a new script, go to the [Create Code](/microbit/create-code) page and tap `New Project` under `Block Editor`.

Welcome! This activity will teach how to construct a pendulum that glows using acceleration. Let's get started!

Create a **forever** loop that will constantly display the appropriate brightness on the LED display.


```blocks
basic.forever(() => {
    
})
```

Now let's measure the acceleration on the `y` axis and store that value in a variable. The `acceleration(y)` function will provide the value.

![](/static/mb/blocks/lessons/glowing-pendulum-1.png)

```blocks
basic.forever(() => {
    let acceleration = input.acceleration(Dimension.Y);
});
```

Since the micro:bit will be swinging back and forth, the acceleration will only be positive half of the time. Thus, to always get a positive value, we want to take the absolute value of the acceleration.

![](/static/mb/blocks/lessons/glowing-pendulum-2.png)

```blocks
let acceleration = 0;
basic.forever(() => {
    acceleration = input.acceleration(Dimension.Y);
    acceleration = Math.abs(acceleration)
});
```

The function `acceleration(y)` returns a number between 0 and 1024. We want to use this value for the brightness of the micro:bit, but the `set brightness()` only accepts a value between 0 and 256. Thus, we need to divide the acceleration by 4 to ensure we will be in the appropriate range.

![](/static/mb/blocks/lessons/glowing-pendulum-3.png)

Now let's use our acceleration value to set the brightness on the micro:bit.

![](/static/mb/blocks/lessons/glowing-pendulum-4.png)

Let's show what the brightness of the micro:bit is by turning all the LEDs on!

![](/static/mb/blocks/lessons/glowing-pendulum-5.png)

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/glowing-pendulum/challenges)!

### ~

