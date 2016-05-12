# Camp

Are you ready to build cool BBC micro:bit programs? For each challenge, reorder the blocks to recreate the program.

## Basic

### Show your name

Reorder the blocks below to make the micro:bit show your name.
```shuffle
basic.showString('Hello!')
```


### Show leds

Use the blocks below to draw a figure on the screen. You can redo the smiley face or try something else!

```shuffle
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
```


### Show animation Forever

Show one image after the other to create an animation.,

Reorder the blocks to make the micro:bit show a happy, then unhappy face.
```shuffle
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
```

### Repeat forever

Use the ``forever`` block to repeat your code and have a continuous animation.

Unsuffle the blocks to create a happy, unhappy animation.... or changes the image to make it your own!
```shuffle
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

### Your turn now!

Use the blocks and create your own custom awesome animation!

## Inputs

### Button A and B

Unshuffle the blocks so that the micro:bit shows "YES" when button A is pressed, and "NO" when B is pressed. 
The key idea is that all the blocks nested under `on button ... pressed` will run when that button is pressed.

```blocks
input.onButtonPressed(Button.A, () => {
    basic.showString("AAAAA");
});
```

Try to unshuffle those blocks:
```shuffle
input.onButtonPressed(Button.A, () => {
    basic.showString("YES");
});
input.onButtonPressed(Button.B, () => {
    basic.showString("NO");
});
```

### Shake

Using the data from the **accelerometer**, it is possible to detect that the BBC micro:bit is being shaken.

Unshuffle the code to display a frownie when shaken.
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

### Tilting

Aside from shake, it is also possible to detect tilt left and right, logo up and down or face up and down.
Let's build a rock paper scissors game where you turn the micro:bit left to display paper, right to display scissors and down to display rock.

Unshuffle and try this code on the micro:bit itself!
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

It is possible to use the pins (big metal bar at the bottom of the board) as button. Hold the ``GND`` button with one hand and press the ``0`` pin 
(called ``P0``) with the other hand to trigger a pin pressed.

Unshuffle the blocks to display a smiley when pin ``P0`` is pressed.
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

### Your turn now!

Use the scree, buttons, gestures, pins to create a fun game using the micro:bit.