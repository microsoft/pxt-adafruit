# Coding the Dandelion
## @description @boardname@ dandelion: coding challenge

## ~avatar avatar
Use the sound sensor to change the brightness of the pixels when you blow on it
## ~

**Concepts:**
  * Sensors (Sound)
  * Pixels
  * Brightness

## Duration: 20 minutes

## Blocks

```cards
light.setAll(0xffff00)
light.setBrightness(input.soundLevel())
```

## Step 1: Turn the lights on
Open @homeurl@ in your web browser.

```blocks
forever(() => {
    light.setAll(0xffff00)
})
```

From **LIGHT**, drag a **set all pixels** block, and place it inside a **forever** loop.

Change the current color to one that you like. I chose yellow for my dandelion!

![@boardname@ USB connection](/static/cp/projects/dandelion/connect.jpg)

Connect your @boardname@ to your computer's USB port and click **`Download`**.
Follow the instructions to move the code to your @boardname@.

## Step 2: Set the brightness
```blocks
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.setBrightness(100)
    light.setAll(0xffff00)
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    light.setBrightness(255)
    light.setAll(0xffff00)
})
```
**Build the blocks**
  * From **INPUT** drag an **on button click** block into the coding area
  * From **LIGHT** drag a **set brightness** block into the **on button click** block
  * Move the **set all** block so it's just after the **set brightness** block in the **on button click** block
  * Set the brightness to 100

Do the same for the `B` button, and set the brightness to 255 when the `B` button is clicked

  * Download the code to your @boardname@ and try pressing the **A** & **B** buttons

## Step 3: Use the sound sensor

The **sound level** block reports the current sound level, a value between 0 and 255.

The **set brightness block** sets the brightness of pixels, and takes as a input a value between 0 and 255. 

Let's try and set the brightness of the pixels to the current sound level.

```blocks
forever(() => {
    light.setBrightness(input.soundLevel())
    light.setAll(0xffff00)
})
```

**Build the blocks**
  * From **LIGHT** drag a **set brightness** block and place it at the top of the **forever loop**
  * From **INPUT** drag a **sound level** block and place it as the input of the **set brightness** block

Download the code to your @boardname@ and try to blow on it.

https://youtu.be/tC1LOeh2jzs

## Good work!
**Challenge:** Use some of the other sensor blocks (under **INPUT**) to change the brightness based on these sensor values (optional).
