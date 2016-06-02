# Getting started

Are you ready to build cool BBC micro:bit programs?

Here are some challenges for you.  Unscramble the blocks in the editor
to make real programs that work!

### Happy face

You should see three blocks in the editor to the left.
These are a block with a smiley face, ...

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

To move your program from your computer to the BBC micro:bit:
* Connect your micro:bit to the computer with the USB cable.
* Click **Compile**.
* Drag and drop the new file whose name ends in **.hex** into the **MICROBIT** window.
* Wait until the yellow light stops blinking!

### Happy unhappy face

Let's draw an unhappy face instead of the blank screen. Click on the dots in the ``show leds`` block
until it matches the blocks below.

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
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
});
```

To move your program from your computer to the BBC micro:bit:
* Connect your micro:bit to the computer with the USB cable.
* Click **Compile**.
* Drag and drop the new file whose name ends in **.hex** into the **MICROBIT** window.
* Wait until the yellow light stops blinking!

### Your turn!

Pile up more ``show leds`` blocks to create your animation! Create an animation with at least 5 images.

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
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
});
```

To move your program from your computer to the BBC micro:bit:
* Connect your micro:bit to the computer with the USB cable.
* Click **Compile**.
* Drag and drop the new file whose name ends in **.hex** into the **MICROBIT** window.
* Wait until the yellow light stops blinking!

#### ~hint

You can find the ``show leds`` block under the **Basic** category.
#### ~

### Button A and B

This program will show the word `banana` on the LED
screen when you press button `A`.

```blocks
input.onButtonPressed(Button.A, () => {
    basic.showString("banana");
});
```

Now try to unscramble these blocks in the editor so that the micro:bit
shows **apple** when you press button `B`.

```shuffle
input.onButtonPressed(Button.B, () => {
    basic.showString("apple");
});
```

### Shake

You can find when someone is shaking the BBC micro:bit by checking its
**accelerometer** (it finds whether the micro:bit is speeding up or
slowing down).

Unscramble these blocks in the editor to show a frownie when someone
shakes the micro:bit.

```shuffle
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #`);
});
```

### Tilting with gestures

You can also find when someone is tilting the micro:bit left or right,
face up or face down, and logo up or logo down (the logo is the yellow
oval picture at the top of the board).

Try to build a Rock Paper Scissors game where you tilt the micro:bit
left to show paper, right to show scissors, and down to show rock.

Unscramble these blocks in the editor and try this program on the
micro:bit itself!

```shuffle
input.onGesture(Gesture.TiltLeft, () => {
    basic.showLeds(`
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #`);
});
input.onGesture(Gesture.LogoDown, () => {
    basic.showLeds(`
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .`);
});
input.onGesture(Gesture.TiltRight, () => {
    basic.showLeds(`
# # . . #
# # . # .
. . # . .
# # . # .
# # . . #`);
});
```

### Pins

You can also use the pins as buttons.  (The pins are the holes in the
metal bar at the bottom of the micro:bit board.)  For example, hold
the ``GND`` button with one hand and touch the ``0`` pin (called
``P0``) with your other hand to tell the micro:bit you're pressing it.

Unscramble the blocks in the editor to show a smiley when you press
pin ``P0``.

```shuffle
input.onPinPressed(TouchPin.P0, () => {
    basic.showLeds(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .`);
});
```

### Your turn!

Use the screen, buttons, gestures, and pins to make your own fun game
with the BBC micro:bit!
