# Coding the Dandelion
### @description @boardname@ dandelion: coding challenge

### ~avatar avatar
Use the sound sensor to change the brightness of the pixels when you blow at it
* **Concepts:**
     * Sensors (Sound)
     * Pixels
     * Brightness

### ~

## Duration: 20 minutes

## Blocks

```cards
light.pixels.setAll(Colors.Yellow)
light.pixels.setBrightness(input.soundLevel())
```

## Step 1: Turn the lights on
Open @homeurl@ in your web browser
```blocks
loops.forever(() => {
    light.pixels.setAll(Colors.Yellow)
})
```

From **Light**, drag a **set all pixels** block, and place it inside a **forever** loop.

Change the color to a color of your choosing. I chose yellow for my dandelion!

![@boardname@ USB connection](/static/cp/projects/dandelion/connect.jpg)

Connect your @boardname@ to your computer via USB and click **`Download`**.
Follow the instructions to move the code to your @boardname@.

## Step 2: Set the brightness
```blocks
loops.forever(() => {
    light.pixels.setAll(Colors.Yellow)
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.pixels.setBrightness(100)
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    light.pixels.setBrightness(255)
})
```
**Build the  blocks**
  * From **Input** drag an **on button click** block into the coding area
  * From **Light** drag a **set brightness** block into the **on button click** block
  * Set the brightness to 100

Do the same for the B button, and set the brightness to 255 when the B button is clicked

  * Download the code to your @boardname@ and try the A & B buttons

## Step 3: Use the sound sensor

The **sound level** block reports the current sound level, a value between 0 and 255.

The **set brightness block** sets the brightness of pixels, and takes as a input a value between 0 and 255. 

Let's try and set the brightness of the pixels to the current sound level.

**Build the  blocks**
  * From **Loops** drag a **forever loop** into the coding area
  * From **Light** drag a **set brightness** block into the **forever loop**
  * From **Input** drag a **sound level** block and place it as the input of the **set brightness** block

Download the code to your @boardname@ and try to blow at it.

https://youtu.be/wSf_MmR2TsA

## Good work!
**Challenge:** Use some of the other sensor blocks (under **Input**) to vary the brightness based on these sensor values (optional)
