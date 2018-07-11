# Coding the Coffee Cup Lamp
## @description @boardname@ coffee cup lamp: coding challenge

## ~avatar avatar

Program a different light pattern for each @boardname@ pin

## ~

**Concepts:**

* Light
* Switches
* Brightness

## Duration: ~20 minutes

## Blocks

```cards
light.setAll(0xffff00)
light.setBrightness(input.soundLevel())
light.showAnimation(light.rainbowAnimation, 500)
```

## Step 1: Turn the lights on with switches

Open [MakeCode](@homeurl@) in your web browser.

From ``||light:LIGHT||``, drag a ``||light:set all pixels to||`` block, and place it inside a ``||input:on pin A1 click||`` block.

```blocks
input.pinA1.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
})
```

Change the current color to one that you like.

From ``||light:LIGHT||``, drag a ``||light:set all pixels to||`` block, and place it inside a ``||input:on pin A2 click||`` block. Code the same blocks for the other pins too: **A3** - **A6**.

```blocks
input.pinA2.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xfff000)
})
```

Set the color for each pin to one that you like (or choose some animations!).

![@boardname@ USB connection](/static/cp/projects/coffee-cup-lamp/connect.jpg)

Connect your @boardname@ to your computer's USB port and click `|Download|`.
Follow the instructions to move the code to your @boardname@ and test the pins.

## Step 2: Set the brightness

Set the brightness value to make the pixels have a pleasant glow.

```blocks
light.setBrightness(200)
```

* From ``||light:LIGHT||`` drag a ``||light:set brightnes||`` block into the ``||loops:on start||`` block
* Set the brightness to ``200``

### ~hint

**Tip**

Don't forget to test out the light animation options!

```block
light.showAnimation(light.rainbowAnimation, 500)
```

### ~

Download the code again to your @boardname@ and try touching the **A1** - **A6** pins.

## Good work!

Ready to do some craft you lamp?

### ~button /projects/coffee-cup-lamp/make
NEXT: Start making!
### ~