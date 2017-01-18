# Getting started

### Step 1

Place blocks in the workspace to show a rainbow.

```blocks
neopixel.builtin.showRainbow(1, 360)
```

### Step 2

Click ``|Download|`` to transfer your code in your @boardname@!

### Step 3

Great, we have a rainbow! But it doesn't animate.
Let's make it animate when the **left button** is clicked.

```block
input.leftButton.onEvent(ButtonEvent.Click, () => {
    neopixel.builtin.drawAnimationFrame(NeoPixelAnimationType.RainbowCycle)
})
```

### Step 4

Click ``|Download|`` to transfer your code
and press the **left button** to animate the rainbow.
