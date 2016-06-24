# Getting started

## ~avatar

Are you ready to build cool BBC micro:bit programs?

Here are some challenges for you. Arrange the blocks in the editor
to make real programs that work!

## ~

Use the **Basic** drawer in the editor (to the left) 
to drag out and arrange three blocks (two `show leds` and one `forever` block)
to create this program:

```blocks
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
});
```

When this program runs, you will see a smiley face, then a blank
screen, then a smiley again -- it never stops! (That's because of the
``forever`` block.)

Click **Compile** to move your program to the BBC micro:bit! 
Make sure to follow the instructions.

### ~button /getting-started/screen
NEXT: THE SCREEN
### ~