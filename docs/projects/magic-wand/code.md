# Coding the Magic wand
## @description @boardname@ magic wand: coding challenge

## ~avatar avatar
Use the on shake event to play a sound and animation when we shake the magic wand
## ~

**Concepts:**
  * Sensors (Shake)
  * Pixels
  * Animations

## Duration: 25 minutes

## Blocks

```cards
light.showAnimation(light.rainbowAnimation, 500)
music.magicWand.play()
input.onGesture(Gesture.Shake, () => {
})
```

## Step 1: Show an animation
Open @homeurl@ in your web browser.

From **LIGHT**, drag a **show animation** block, and place it inside a **forever** loop to show a rainbow animation on the board.

```blocks
forever(() => {
    light.showAnimation(light.rainbowAnimation, 500)
})
```

Change the animation by clicking on the rainbow input field and selecting a different animation. 

![@boardname@ USB connection](/static/cp/projects/magic-wand/connect.jpg)

Connect your @boardname@ to your computer's USB port and click **`Download`**.
Follow the instructions to move the code to your @boardname@.

## Step 2: Shake

Next, in the ``Input`` drawer, find the ``||on shake||`` block. Drag one of those out and place it anywhere in the workspace.
Click the **Hint** button if you need help!

```blocks
forever(() => {
    light.showAnimation(light.rainbowAnimation, 500)
})
input.onGesture(Gesture.Shake, () => {
    light.showAnimation(light.sparkleAnimation, 1500)
})
```
**Build the blocks**
  * From **INPUT** drag an **on shake** block into the coding area
  * From **LIGHT** drag a **show animation** block into the **on shake** block
  * Change the animation to the `sparkle` animation

Now, every time you shake the @boardname@, a sparkle animation will play. Pretty cool!

  * Download the code to your @boardname@ and try pressing shaking it.

## Step 3: Sound

Let's make it play a wand sound whenever we shake the board.

The **play sound** plays a pre-defined melody. There are a few interesting melodies you can choose from.

From the ``Music`` drawer, drag a ``||play sound||`` block and place it inside the ``||on shake||`` block, just before the ``||show animation||`` block.

```blocks
forever(() => {
    light.showAnimation(light.rainbowAnimation, 500)
})
input.onGesture(Gesture.Shake, () => {
    music.magicWand.play()
    light.showAnimation(light.sparkleAnimation, 1500)
})
```

**Build the blocks**
  * From **MUSIC** drag a **play sound** block and place it at the top of the **on shake** block, just before the **show animation** block
  * Change the sound effect to ``Magic Wand``. Do this by selecting the list of sounds, then pick the one you want, ``Magic Wand``.

Download the code to your @boardname@ and try to shake it.

![Complete](/static/cp/projects/magic-wand/complete.jpg)

![Complete Shake](/static/cp/projects/magic-wand/complete-shake.jpg)

Try it out!

https://youtu.be/Us-tH3SP8XE

## Good work!
**Challenge:** Try out some of the other sound effects, and see if you can figure out how to increase the volume of the melodies! (optional)

