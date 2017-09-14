# Getting started

## Step 1 @fullscreen

Welcome, let's get started by making something magical! Start by placing a ``||show animation||`` block in a ``||forever||`` slot to show a rainbow animation on the board.

![rainbow toolbox](/static/cp/tutorials/getting-started/rainbow-toolbox.gif)

```filterblocks
loops.forever(() => {
    light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), 500)
})
```

## Step 2

Next, in the ``Input`` drawer, find the ``||on shake||`` block. Drag one of those out and place it anywhere in the workspace.
Click the **Hint** button if you need help!

![onshake toolbox](/static/cp/tutorials/getting-started/onshake-toolbox.gif)

```filterblocks
loops.forever(() => {
    light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), 500)
})
input.onGesture(Gesture.Shake, () => {

})
```

## Step 3

Drag out another ``||show animation||`` block but this time place it inside the ``||on shake||`` block. Change the animation to ``sparkle`` and the duration to ``1500`` ms.

Now, every time you shake the @boardname@, a sparkle animation will play. Pretty cool!

![sparkle toolbox](/static/cp/tutorials/getting-started/sparkle-toolbox.gif)

```filterblocks
loops.forever(() => {
    light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), 500)
})
input.onGesture(Gesture.Shake, () => {
    light.pixels.showAnimation(light.animation(LightAnimation.Sparkle), 1500)
})
```

## Step 3

Hey, let's make it play a wand sound whenever we shake the board. From the ``Music`` drawer, drag a ``||play sound||`` block and place it inside the ``||on shake||`` block, just before the ``||show animation||`` block.

![magic-wand toolbox](/static/cp/tutorials/getting-started/wandsound-toolbox.gif)

```filterblocks
loops.forever(() => {
    light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), 500)
})
input.onGesture(Gesture.Shake, () => {
    music.playSound(music.sounds(Sounds.PowerUp))
    light.pixels.showAnimation(light.animation(LightAnimation.Sparkle), 1500)
})
```

## Step 4 @nohint

Change the sound effect to ``Magic Wand``. Do this by selecting the list of sounds, then pick the one you want, ``Magic Wand``.

```filterblocks
loops.forever(() => {
    light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), 500)
})
input.onGesture(Gesture.Shake, () => {
    music.playSound(music.sounds(Sounds.MagicWand))
    light.pixels.showAnimation(light.animation(LightAnimation.Sparkle), 1500)
})
```

## Step 5

Transfer your code to the @boardname@.

To load your code on the real device, you have to first put it in "Programming mode".
Do this by clicking the reset button once, and wait for the all green lights.

![programming mode](/static/cp/tutorials/getting-started/programming-mode.gif)

Now click ``|Download|`` and follow the rest of the download instructions.

## Step 6

Awesome! Congratulations on completing your first challenge on the @boardname@.

![shake image](/static/cp/tutorials/getting-started/shake.gif)
