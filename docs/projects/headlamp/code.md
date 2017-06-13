# Coding the Headlamp
### @description Coding challenge for the Headlamp

### ~avatar avatar
Use the light sensor to automatically turn the lamp on and off
### ~

**Concepts:**
  * Sensors (Light)
  * Pixels

## Duration: 15 minutes

## Step 1: Turn the lamp on when it's dark

From **INPUT**, drag an **on light dark** block to your project.
Then, from **LIGHT**, drag a **show ring** block inside it.
To turn the lamp on, we will color all the pixels white, so use the color wheel to do that.

```blocks
input.onLightConditionChanged(LightCondition.Dark, () => {
    light.showRing(
    `white white white white white white white white white white`
    )
})
```

## Step 2: Turn the lamp off when it's bright

Step 2 is almost identical to step 1, so drag the same two blocks again to your project - **on light dark** with **show ring** inside.
This time, however, set the **on light** block's configuration to `bright` instead of dark, and color the pixels gray instead of white.

```blocks
input.onLightConditionChanged(LightCondition.Dark, () => {
    light.showRing(
    `white white white white white white white white white white`
    )
})
input.onLightConditionChanged(LightCondition.Bright, () => {
    light.showRing(
    `black black black black black black black black black black`
    )
})
```

## Step 3: Adjust the light sensor

By default, the **on bright** block detects very bright lights, and **on dark** detects almost complete obscurity.
Let's adjust this so that a room with regular lighting triggers the **on bright** block, and anything darker
than that triggers the **on dark** block.

From **INPUT** > **... MORE**, drag two **light set threshold** blocks inside the **on start** block.
Set one of the two threshold blocks to `dark` with value `65`, and the other to `bright` with value `80`.

```blocks
input.onLightConditionChanged(LightCondition.Dark, () => {
    light.showRing(
    `white white white white white white white white white white`
    )
})
input.onLightConditionChanged(LightCondition.Bright, () => {
    light.showRing(
    `black black black black black black black black black black`
    )
})
input.setLightThreshold(LightCondition.Dark, 65)
input.setLightThreshold(LightCondition.Bright, 80)
```

## You're all set to explore dark rooms with your headlamp!