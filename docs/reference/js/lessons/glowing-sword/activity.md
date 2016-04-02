# glowing sword activity

Make glowing sword.

### ~avatar avatar

### @video td/videos/glowing-sword-0

In this activity, we will learn how to fade in and out the screen to create a glowing animation. Let's get started!

### ~

Let's start by adding the code to display an image. Use `basic->plot image` to draw your favorite image.

```
basic.plotImage(`
. . . . #
# . . # .
. # # . .
. # # . .
# . . # .
`) // ***
```

We can control the brightness of the LED screen with code. That's just what we need to create a **glowing** animation: first we **fade out**, then **fade in**. Add a new line of code to **fade out** the screen.

```
basic.plotImage(`
. . . . #
# . . # .
. # # . .
. # # . .
# . . # .
`)
led.fadeOut(700) // ***
```

Run your script to make sure it works as expected then add another line of code to **fade in** the screen.

```
led.fadeIn(700)
```

Finally, add a `basic->forever` loop and move the fade out and fade in code into the forever to repeat the glow pattern.

```
basic.plotImage(`
. . . . #
# . . # .
. # # . .
. # # . .
# . . # .
`)
led.fadeOut(700) // ***
led.fadeIn(700) // ***
```

### ~avatar boothing

Excellent, you're ready to continue with the [challenges](/microbit/lessons/glowing-sword/challenges)!

### ~

