# Getting started

### Step 1

Welcome, let's get started by making something magical! Place a ``||show animation||`` block in the
``||forever||`` slot to show a rainbow animation on the board.

Hint: You can find the ``||show animation||`` block in the Light drawer.

```blocks
loops.forever(() => {
    light.pixels.showAnimation(LightAnimation.Rainbow, 500)
})
```

### Step 2

Next, in the Input drawer, find the ``||on shake||`` block. Drag one of those out and place it in the workspace.

```blocks
loops.forever(() => {
    light.pixels.showAnimation(LightAnimation.Rainbow, 500)
})
input.onGesture(Gesture.Shake, () => {

})
```

### Step 3

Drag out another ``||show animation||`` block but this time place it inside the ``||on shake||`` block. Change the animation to the ``sparkle`` and the duration to ``1500`` ms.

Now, everytime you shake the @boardname@, a sparkle animation will play. Pretty cool!

```blocks
loops.forever(() => {
    light.pixels.showAnimation(LightAnimation.Rainbow, 500)
})
input.onGesture(Gesture.Shake, () => {
    light.pixels.showAnimation(LightAnimation.Sparkle, 1500)
})
```

### Step 3

Hey, let's make it play a wand sound whenever we shake board. In the Music drawer, you'll see ``||play sound||``.
Drag out one of those and place it inside the ``||on shake||`` block, just before the ``||show animation||`` block.

```blocks
loops.forever(() => {
    light.pixels.showAnimation(LightAnimation.Rainbow, 500)
})
input.onGesture(Gesture.Shake, () => {
    music.playSound(music.sounds(Sounds.PowerUp))
    light.pixels.showAnimation(LightAnimation.Sparkle, 1500)
})
```

### Step 4

Change the sound effect to ``Magic Wand``. Do this by selecting the list of sounds, then pick the one you're you want, ``Magic Wand``.

```blocks
loops.forever(() => {
    light.pixels.showAnimation(LightAnimation.Rainbow, 500)
})
input.onGesture(Gesture.Shake, () => {
    music.playSound(music.sounds(Sounds.MagicWand))
    light.pixels.showAnimation(LightAnimation.Sparkle, 1500)
})
```

### Step 5

Click ``|Download|`` to transfer your code to the @boardname@.

### Step 6

Awesome! Congratulations on completing your first challenge on the @boardname@.
