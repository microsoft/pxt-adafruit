# snowflake fall quiz answers

create a snowflake fall animation #animation#forever #docs

## Name

## Directions

Use this activity document to guide your work in the [snowflake fall tutorial](/microbit/lessons/snowflake-fall/tutorial).

Answer the questions while completing the tutorial. Pay attention to the dialogues!

## 1. In reference to an animation, what is an "interval"?

The number of milliseconds to pause after each image frame.

## 2. Consider the following code

```
basic.showAnimation(`
. . . . .
. . # . .
. # # # .
. . # . .
. . . . .
`, 400)
```

What is the `interval` of the animation?

400

## 3. Consider the following image

![](/static/mb/lessons/snowflake-fall-0.png)

Write the code to create a `forever` loop that shows an animation. Change the interval from 400 to 200 to make the animation go twice as fast!

```
basic.forever(() => {
    basic.showAnimation(`
. . . . . . . . . .
. . # . . . . . . .
. # # # . . . . . .
. . # . . . . . . .
. . . . . . . . . .
`, 200)
})
```

## 4. Consider the following images

![](/static/mb/lessons/snowflake-fall-1.png)

![](/static/mb/lessons/snowflake-fall-2.png)

Write the code to create a `forever` loop that shows an animation. Change the interval from 400 to 800 to make the animation go twice as slow!

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

