# Coding the Star Projector
## @description @boardname@ Star Projector: coding challenge

## ~avatar avatar
Program light patterns on the @boardname@ and make it spin with a servo.
## ~

**Concepts:**
  * Light
  * Brightness
  * Servos

## Duration: ~20 minutes

## Blocks

```cards
light.setBrightness(210)
light.setAll(0xffffff)
```

## Step 1: Turn the lights on
Open @homeurl@ in your web browser.

From **LIGHT**, drag a **set all pixels** block, and place it inside a **forever** block.

```blocks
forever(function () {
    light.setAll(0xffffff)
})
```
Change the current color to one that you like.

## Step 2: Set the brightness
From **LIGHT** drag a **set brightness** block into the **forever** block

```blocks
forever(function () {
    light.setBrightness(210)
    light.setAll(0xffffff)
})
```
Set the brightness to 210.

## Step 3: Making the servo rotate with for loops

Use for loops to change the degree of the servo's rotation. The degrees range from 0 to 180 on the servo.

```blocks
forever(function () {
    light.setBrightness(210)
    light.setAll(0xffffff)
    for (let i = 0; i < 180; i += 5) {
        pins.A1.servoWrite(i)
        pause(__internal.__timePicker(200))
    }
    for (let j = 180; j > 0; j -= 5) {
        pins.A1.servoWrite(j)
        pause(__internal.__timePicker(200))
    }
})
```

Download the code to your @boardname@ and test your code.

## Good work!

Ready to do some crafting?

### ~button /projects/star-projector/make
NEXT: Start making!
### ~