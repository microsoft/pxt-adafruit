# snowflake fall challenges

These challenges will allow you to make an exploding rectangle. #docs

**Challenge 0**

### @video vimeo/134649147

This [guided tutorial](https://test.microbit.co.uk/td/lessons/rectangle-explosion/tutorial) will help you create a snowflake animation!

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

**Challenge 1**

### @video vimeo/134649148

Let's begin creating our falling effect by adding another snowflake with `show animation` that displays a different snowflake pattern after the first one.

```
basic.forever(() => {
    basic.showAnimation(`
. . . . .
. . # . .
. # # # .
. . # . .
. . . . .
`, 400)
    basic.showAnimation(`
. . . . . . . # . .
. . # . . . # . # .
. # # # . # . . . #
. . # . . . # . # .
. . . . . . . # . .
`, 400) // ***
})
```

**Challenge 2**

### @video vimeo/134649149

To finalize our snowflake fall, let's add a different snowflake pattern.

```
basic.forever(() => {
    basic.showAnimation(`
. . . . .
. . # . .
. # # # .
. . # . .
. . . . .
`, 400)
    basic.showAnimation(`
. . . . . . . # . .
. . # . . . # . # .
. # # # . # . . . #
. . # . . . # . # .
. . . . . . . # . .
`, 400)
    basic.showAnimation(`
. . . . . . . # . . . # . # .
. . # . . . # . # . # # . # #
. # # # . # . . . # . . . . .
. . # . . . # . # . # # . # #
. . . . . . . # . . . # . # .
`, 400) // ***
})
```

**Challenge 3**

If you notice, we have three `basic->show animation()` functions. Try to create the snowflake fall effect by just using one `basic->show animation()`.

