# Getting started

### Step 1

Place blocks in the workspace to scroll text on the screen.

```blocks
basic.showString("Hello!")
```

### Step 2

Click ``|Download|`` to transfer your code in your @boardname@!

### Step 3

Great, the text scrolled! But then it stopped.
Let's make it scroll when button **A** is pressed.

```block
input.onButtonPressed(Button.A, () => {
    basic.showString("Hello!")
});
```

### Step 4

Click ``|Download|`` to transfer your code
and press **A** to scroll your text.

### Step 5

Place more blocks to display a smiley when button **B** is pressed.
Use the dropdown to find ``B``!

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

### Step 7

Drag more blocks to display a random number when pin ``P0`` is touched.
Hold your right thumb on the ``GND`` metal pin 
at press the ``0`` pin with your right hand to trigger this event.

```block
input.onPinPressed(TouchPin.P0, () => {
    basic.showNumber(Math.random(7))
})
```