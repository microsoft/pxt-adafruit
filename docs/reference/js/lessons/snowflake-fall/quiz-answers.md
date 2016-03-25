# snowflake fall quiz answers

create a snowflake fall animation #animation#forever #docs

This is the answer key for the [snowflake fall quiz](/microbit/lessons/snowflake-fall/quiz).

## 1. In reference to an animation, what is an "interval"?

The number of milliseconds to pause after each image frame.

## 2. What is the interval of the animation?

```
basic.showAnimation(`
. . . . .
. . # . .
. # # # .
. . # . .
. . . . .
`, 400)
```

## 3. Write the code to allow this animation to never stop displaying on the BBC micro:bit

![](/static/mb/lessons/snowflake-fall-0.png)

```
basic.forever(() => {
    basic.showAnimation(`
. . . . .
. . # . .
. # # # .
. . # . .
. . . . .
`, 400)
})
```

## 4. Write the code to create a forever loop that shows an animation of these images. Change the interval from 400 to 800 to make the animation go twice as slow!

![](/static/mb/lessons/snowflake-fall-1.png)

![](/static/mb/lessons/snowflake-fall-2.png)

```
basic.forever(() => {
    basic.showAnimation(`
. . . . . # # # # #
. . # . . # # . # #
. # # # . # . # . #
. . # . . # # . # #
. . . . . # # # # #
`, 800)
})
```

