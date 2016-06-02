# Getting started

Are you ready to build cool BBC micro:bit programs?

Here are some challenges for you.  Unscramble the blocks in the editor
to make real programs that work!

### Happy face

There are three blocks in the editor (the area to the left).
They should look like this:

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

When you run this program, you will see a smiley face, then a blank
screen, then a smiley again -- it never stops! (That's because of the
``forever`` block.)

To move your program from your computer to the BBC micro:bit:
* Connect your micro:bit to the computer with the USB cable.
* Click **Compile**.
* Drag and drop the new file whose name ends in **.hex** into the **MICROBIT** window.
* Wait until the yellow light stops blinking!

### Happy unhappy face

Draw an unhappy face instead of the blank screen.  Click on the dots
in the second ``show leds`` block until it matches the blocks below.
Now you have an **animation** (cartoon) that shows a happy face,
then an unhappy one, then a happy one again, forever (or until
you turn off your micro:bit)!

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

Pile up more ``show leds`` blocks to create your animation! Create an
animation with at least 5 pictures.  What does this animation show?

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
        # # # # #
        . . . . .
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
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        # . . . #
        . # # # .
        `)
});
```

To move your program from your computer to the BBC micro:bit:
* Connect your micro:bit to the computer with the USB cable.
* Click **Compile**.
* Drag and drop the new file whose name ends in **.hex** into the **MICROBIT** window.
* Wait until the yellow light stops blinking!

#### ~hint

You can find the ``show leds`` block in the **Basic** part of the editor.

#### ~

### Button A and button B

This program will show the word **anteater** on the LED
screen when you press button `A`.

```blocks
input.onButtonPressed(Button.A, () => {
    basic.showString("anteater");
});
```

Now try to unscramble these blocks in the editor so that the micro:bit
shows **banana** when you press button `B`.

```shuffle
input.onButtonPressed(Button.B, () => {
    basic.showString("banana");
});
```
#### ~hint

You can find the letter `B` by clicking the letter `A` on the
``onButtonPressed`` block.

#### 

Can you combine these blocks so your program shows **anteater** when
you press `A`, but **banana** when you press `B`?

### Shake

You can find when someone is shaking the BBC micro:bit by checking its
**accelerometer** (it finds whether the micro:bit is speeding up or
slowing down).

Unscramble these blocks in the editor to show a frownie when someone
shakes the micro:bit. (Ouch!)

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
oval picture at the top of the board). Tilting a micro:bit like this
is called a **gesture**.

Try to build a Rock Paper Scissors game where you tilt the micro:bit
left to show paper, right to show scissors, and down to show rock.

Unscramble these blocks in the editor and try this program on a real
micro:bit!

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
metal stripe at the bottom of the micro:bit board.)  For example, hold
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
with the BBC micro:bit!  What about some of these?

* A backpack burglar alarm
* Daily news broadcaster for your class
* Animated jewelry
* A _complete_ animated cartoon
* A calculator
* A music box

These are all things you can make with the BBC micro:bit by itself.
Just think what you can do if you connect the micro:bit's pins to
extra parts like microphones and other **sensors**!
