# glowing sword challenges

Coding challenges for the glowing sword tutorial. #docs

## Before we get started

Complete the [glowing sword](/lessons/glowing-sword/activity) activity and your code will look like this:

```
basic.plotImage(`
. . . . #
# . . # .
. # # . .
. # # . .
# . . # .
`)
led.fadeOut(700)
```

### Challenge 1

Now, let's add `basic->pause(1000)` after the fade in so that there will be a 1000 millisecond (1 second) delay after the fade out.

```
basic.plotImage(`
. . . . #
# . . # .
. # # . .
. # # . .
# . . # .
`)
led.fadeOut(700)
basic.pause(1000) // ***
```

* `run main` the code to see if it works as expected.

### Challenge 2

### @video td/videos/glowing-sword-2

After the pause, let's add `led->fade in(2000)` so that we can create a glowing effect.

```
basic.plotImage(`
. . . . #
# . . # .
. # # . .
. # # . .
# . . # .
`)
led.fadeOut(700)
basic.pause(1000)
led.fadeIn(2000) // ***
```

* `run main` the code to see if it works as expected.

### Challenge 3

Now add another `basic->pause(1000)` and `led->fade out(900)` so that the sword can fade out again.

