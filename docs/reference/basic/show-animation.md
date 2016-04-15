# Show Animation

Show a series of image frames on the [LED screen](/device/screen), pausing the specified time after each frame.

```sig
basic.showAnimation(`
. . # . . . # # # . . # # # .
. # # . . . . . # . . . . # .
. . # . . . . # . . . # # # .
. . # . . . # . . . . . . # .
. . # . . . # # # . . # # # .
`)
```

### Parameters

* `leds` - [String](/reference/types/string); a series of LED on/off states
* `interval` - [Number](/reference/types/number); the number of milliseconds to pause after each image frame

### Show a series of image frames

```
basic.showAnimation(`
. . # . . . # # # . . # # # .
. # # . . . . . # . . . . # .
. . # . . . . # . . . # # # .
. . # . . . # . . . . . . # .
. . # . . . # # # . . # # # .
`)
```

### ~hint 

If the series of images appear too fast, increase the value of the *interval* parameter.

### ~

### Example: animating frames

The following example creates an image with six frames and then shows each frame o the screen, pausing 500 milliseconds after each frame:

```
basic.showAnimation(`
. . . . . # . . . . . . . . . . . . . # . . . . . # . . . .
. . # . . . . . . . . . # . . . . . . . . . # . . . . . . .
. # . # . . . # . . . # . # . . . # . . . # . # . . . # . .
. . # . . . . . . . . . # . . . . . . . . . # . . . . . . .
. . . . . . . . . # . . . . . # . . . . . . . . . . . . . #
`, 500)
```

### ~hint 

Use [forever](/reference/basic/forever) to continually repeat an animation

### ~

### Lessons

[smiley](/lessons/smiley), [snowflake fall](/lessons/snowflake-fall), [rotation animation](/lessons/rotation-animation)

