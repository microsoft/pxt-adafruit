# Getting started

### Step 1

Place blocks in the workspace to show a rainbow.

```blocks
light.pixels.showAnimationFrame(light.rainbowCycleAnimation())
```

### Step 2

Click ``|Download|`` to transfer your code in your @boardname@!

### Step 3

Great, we have a rainbow! But it doesn't animate.
Let's make it animate when the **left button** is clicked.

```block
input.leftButton.onEvent(ButtonEvent.Click, () => {
    light.pixels.showAnimationFrame(light.rainbowCycleAnimation())
})
```

### Step 4

Click ``|Download|`` to transfer your code
and hold the **left button** to animate the rainbow.

### Step 5

Awesome! Finally, let's add more blocks to show a random color when you shake the board.

```block
input.onGesture(Gesture.Shake, () => {
    light.pixels.showColor(light.colorWheel(Math.random(361)))
})
```
