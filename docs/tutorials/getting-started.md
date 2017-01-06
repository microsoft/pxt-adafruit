# Getting started

### Step 1

Place blocks in the workspace to scroll text on the screen.

```blocks
basic.showString("Hi!")
```

### Step 2

Transfer your code in your @boardname@! Click the **Download** button
and follow the instructions.

ANIMATEDGIF

### Step 3

Great, the text scrolled! But then it stopped.
Let's make it scroll when button **A** is pressed.

```block
input.onButtonPressed(Button.A, () => {
    basic.showString("Hi!")
});
```

### Step 4

Transfer your code in your @boardname@ and try pressing **A**.

ANIMATEDGIF

### Step 5

Place more blocks to display a smiley when button **B** is pressed.
Download your code and try it!

```block
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
})
```

### Step 6

Drag more blocks to display a frownie when @boardname@ is shaken.
Download your code and try it!

```block
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    . # # # .
    # . . . #
    `)
})
```
