# glowing sword challenges

These challenges will help you display a glowing image that fades in and out at different speeds. #docs

**Challenge 0**

### @video vimeo/134649269

[This guided tutorial](https://test.microbit.co.uk/td/lessons/glowing-mountain/tutorial) will teach you how to create a mountain that fades out.

```
images.createImage(`
. . . . #
# . . # .
# # # . .
. # # . .
# . # # .
`).showImage(0)
led.fadeOut(700)
```

**Challenge 1**

Now, let's add `basic->pause(1000)` after the fade in so that there will be a 1000 millisecond delay after the fade out.

```
images.createImage(`
. . . . #
# . . # .
# # # . .
. # # . .
# . # # .
`).showImage(0)
led.fadeOut(700)
basic.pause(1000) // ***
```

* Run the code to see if it works as expected.

**Challenge 2**

### @video vimeo/134674595

After the pause, let's add `led->fade in(2000)` so that we can create a glowing effect.

```
images.createImage(`
. . . . #
# . . # .
# # # . .
. # # . .
# . # # .
`).showImage(0)
led.fadeOut(700)
basic.pause(1000)
led.fadeIn(2000) // ***
```

* Run the code to see if it works as expected.

**Challenge 3**

Now add another `basic->pause(1000)` and `led->fade out(900)` so that the mountain can fade out again.

