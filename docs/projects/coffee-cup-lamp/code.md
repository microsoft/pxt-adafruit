# Coding the Coffee Cup Lamp
## @description @boardname@ coffee cup lamp: coding challenge

## ~avatar avatar
Program different light patterns on each @boardname@ pin
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
light.showAnimation(light.rainbowAnimation, __internal.__timePicker(500))
```

## Step 1: Turn the lights on with switches
Open @homeurl@ in your web browser.

From **LIGHT**, drag a **set all pixels** block, and place it inside a **on pin A1 click** block.

```blocks
input.pinA1.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
})
```
Change the current color to one that you like.

From **LIGHT**, drag a **set all pixels** block, and place it inside a **on pin A2 click** block. Repeat for pins A4-A6.

```blocks
input.pinA2.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xfff000)
})
```
Change the current color to one that you like (or choose some animations!)

![@boardname@ USB connection](/static/cp/projects/coffee-cup-lamp/connect.jpg)

Connect your @boardname@ to your computer's USB port and click **`Download`**.
Follow the instructions to move the code to your @boardname@ and test the pins.

## Step 2: Set the brightness
```blocks
input.pinA1.onEvent(ButtonEvent.Click, function () {
    light.setBrightness(200)
    light.setAll(0xff0000)
})
```
**Build the blocks**
  * From **INPUT** drag an **on pin A1 click** block into the coding area
  * From **LIGHT** drag a **set brightness** block into the **on pin A1 click** block
  * Move the **set all** block so it's just after the **set brightness** block in the **on pin A1 click** block
  * Set the brightness to 200

Do the same for the rest of the pins (A2-A6), and set the brightness to 200.

### ~hint
**Tip**

Don't forget to test out the light animation options!

### ~

Download the code to your @boardname@ and try touching the A1-A6 pins.

## Good work!

Ready to do some crafting?

### ~button /projects/coffee-cup-lamp/make
NEXT: Start making!
### ~