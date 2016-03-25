# glowing sword quiz answers

The answers for the glowing sword quiz. #LED #image #fade #docs

This is the answer key for the [glowing sword quiz](/microbit/lessons/glowing-sword/quiz).

## 1. What is "fade out" ? 

Fade out is a method that gradually decreases the LED screen brightness until the LED lights are turned off.

## 2. Consider the following code

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

Rewrite the second line of code to decrease the speed of the fade out for the longest amount of time (Hint: 1000 milliseconds is longest amount of time for a fade out).

<br/>

led->fade out(1000)

## 4. Consider the following code

```
basic.plotImage(`
. . . . #
# . . # .
. # # . .
. # # . .
# . . # .
`)
led.fadeOut(1000)
```

What will cause the image to fade back in twice as fast as it faded out?

<br/>

led->fade in(500)

