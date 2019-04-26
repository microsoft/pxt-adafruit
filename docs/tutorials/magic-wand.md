# Getting started

## Step 1 @fullscreen

Welcome, let's get started by making something magical! Start by placing a ``||light:show animation||`` block in a ``||loops:forever||`` slot to show a rainbow animation on the board.

![rainbow toolbox](/static/cp/tutorials/getting-started/rainbow-toolbox.gif)

```filterblocks
forever(function() {
    light.showAnimation(light.rainbowAnimation, 500)
})
```

## Step 2

Next, in the ``Input`` drawer, find the ``||input:on shake||`` block. Drag one of those out and place it anywhere in the workspace.
Click the **Hint** button if you need help!

![onshake toolbox](/static/cp/tutorials/getting-started/onshake-toolbox.gif)

```filterblocks
forever(function() {
    light.showAnimation(light.rainbowAnimation, 500)
})
input.onGesture(Gesture.Shake, function() {

})
```

## Step 3

Drag out another ``||light:show animation||`` block but this time place it inside the ``||input:on shake||`` block. Change the animation to ``sparkle`` and the duration to `1` second.

Now, every time you shake the @boardname@, a sparkle animation will play. Pretty cool!

![sparkle toolbox](/static/cp/tutorials/getting-started/sparkle-toolbox.gif)

```filterblocks
forever(function() {
    light.showAnimation(light.rainbowAnimation, 500)
})
input.onGesture(Gesture.Shake, function() {
    light.showAnimation(light.sparkleAnimation, 1000)
})
```

## Step 4

Hey, let's make it play a wand sound whenever we shake the board. From the ``Music`` drawer, drag a ``||music:play sound||`` block and place it inside the ``||input:on shake||`` block, just before the ``||light:show animation||`` block.

![magic-wand toolbox](/static/cp/tutorials/getting-started/wandsound-toolbox.gif)

```filterblocks
forever(function() {
    light.showAnimation(light.rainbowAnimation, 500)
})
input.onGesture(Gesture.Shake, function() {
    light.stopAllAnimations()
    music.baDing.play()
    light.showAnimation(light.sparkleAnimation, 1000)
})
```

## Step 5 @nohint

Change the sound effect to ``Magic Wand``. Do this by selecting the list of sounds, then pick the one you want, ``magic wand``.

```filterblocks
forever(function() {
    light.showAnimation(light.rainbowAnimation, 500)
})
input.onGesture(Gesture.Shake, function() {
    light.stopAllAnimations()
    music.magicWand.play()
    light.showAnimation(light.sparkleAnimation, 1000)
})
```

## Step 6

Transfer your code to the @boardname@.

To load your code on the real device, you have to first put it in "Programming mode".
Do this by clicking the reset button once, and wait for the all green lights.

![programming mode](/static/cp/tutorials/getting-started/programming-mode.gif)

Now click ``|Download|`` and follow the rest of the download instructions.

## Step 7

Awesome! Congratulations on completing your first challenge on the @boardname@.

![shake image](/static/cp/tutorials/getting-started/shake.gif)
