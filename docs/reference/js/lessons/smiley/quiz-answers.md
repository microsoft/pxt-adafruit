# smiley quiz answers.

This is the answer key for the [smiley quiz](/lessons/smiley/quiz).

## 1. Define 'show animation' : 

A function that will show a series of image frames on the LED screen, pausing the specified time after each frame.

## 2. Why is there an extra empty frame after the smiley face?

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . # . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 400)
```

<br/>

<br/>

The extra empty frame creates a blinking smiley, allowing the BBC micro:bit to alternate between showing the smiley and the empty screen.

## 3. Change the delay shown from 400 milliseconds to 1000 milliseconds.

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . # . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 400)
```

<br/>

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . # . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 1000)
```

## 4. Now let's change the delay shown below from 400 milliseconds to 2.5 seconds.

![](/static/mb/lessons/smiley-0.png)

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . # . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 400)
```

<br/>

```
basic.showAnimation(`
. # . # . . . . . .
. # . # . . . . . .
. . # . . . . . . .
# . . . # . . . . .
. # # # . . . . . .
`, 2500)
```

