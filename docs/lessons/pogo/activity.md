# pogo activity

Construct a counter that uses acceleration. 

To create a new script, go to the [Create Code](/microbit/create-code) page and tap `New Project` under `Block Editor`.

Welcome! This activity will teach how to construct a pendulum that glows using acceleration. Let's get started!

Create a **forever** loop that will constantly display the appropriate brightness on the LED display.  Now let's measure the acceleration on the `y` axis and store that value in a variable. The `acceleration(y)` function will provide the value.

![](/static/mb/blocks/lessons/pogo-0.jpg)

Since the micro:bit will be swinging up and down, we need to store the variable called jumps. We will set the variable called jumps to 0 to store the number 0.

![](/static/mb/blocks/lessons/pogo-1.jpg)

The function `acceleration(y)` gets the acceleration value (milli g-force), in the `y` dimension. If the `acceleration(y)`is greater than 2000 milli g-force, we will change jumps by 1.

If the `acceleration(y)`is greater than 2000 milli g-force, we will display the image with `show LEDs` to display a smiley face on the LEDs and `clear screen` to to turn off all the LED lights on the LED screen.

![](/static/mb/blocks/lessons/pogo-2.jpg)

Now let's register an event handler that will execute whenever an input button (A) is pressed during program execution.

![](/static/mb/blocks/lessons/pogo-3.jpg)

Let's show what the brightness of the micro:bit is by turning all the LEDs on!

![](/static/mb/blocks/lessons/glowing-pendulum-5.png)

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/microbit/lessons/glowing-pendulum/challenges)!

### ~

