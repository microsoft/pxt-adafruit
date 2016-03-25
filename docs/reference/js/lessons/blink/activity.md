# blink activity

Turn an LED on and off with forever 

### ~avatar avatar

### @video td/videos/blink-0

Let's learn how to blink an LED.

### ~

Have you ever tried to blink a flashlight at night? The concept is fairly simply: turn on the light, wait for a little, turn off the light, wait again, and repeat. That's exactly what we need to code to get a blinking LED.

Let's start by adding a line of code that turns on the LED at position ``2, 2``.

```
led.plot(2, 2) 
```

Run your script to make sure it's correct. Then, let's add code to **pause** `500` milliseconds and turn off the LED.

```
led.plot(2, 2)
basic.pause(500) 
led.unplot(2, 2) 
```

We've got the LED blinking once. Let's add another pause and turn on the LED again.

```
led.plot(2, 2)
basic.pause(500)
led.unplot(2, 2)
basic.pause(500) 
led.plot(2, 2) 
```

The current code works but it only blinks once! We are going to use a `basic->forever` loop and move the code inside it to repeat it forever. We've dropped the second `led-plot` line since we don't need it in the loop.

```
basic.forever(() => {
    led.plot(2, 2)
    basic.pause(500)
    led.unplot(2, 2)
    basic.pause(500)
})
```

### ~avatar boothing

Excellent, you're ready to continue with the [challenges](/microbit/lessons/blink/challenges)!

### ~

