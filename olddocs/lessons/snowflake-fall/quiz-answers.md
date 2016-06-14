# snowflake fall blocks quiz answers

Create a snowflake fall animation.  

This is the answer key for the [snowflake fall quiz](/lessons/snowflake-fall/quiz).

## 1. What is a forever loop?

Run code in the background forever (answers may vary).

## 2. Draw the picture that will be produced with this code

```blocks
basic.forever(() => {
    basic.showLeds(`
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .`);
});

```

![](/static/mb/lessons/flashing-heart-0.png)

## 3.Write the code for a forever loop and show LEDS for these images!

![](/static/mb/lessons/snowflake-fall-0.png)

```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
});
```

## 4. Write the code for a forever loop and show LEDS for these images!

![](/static/mb/lessons/snowflake-fall-1.png)

![](/static/mb/lessons/snowflake-fall-2.png)

```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `);
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
});
```