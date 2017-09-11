# Coding the Headlamp
## @description Coding challenge for the Headlamp

## ~avatar avatar
Use the light sensor to automatically turn the lamp on and off
## ~

**Concepts:**
  * Sensors (Light)
  * Pixels

## Duration: 15 minutes

## Step 1: Turn the lamp on when it's dark

From **INPUT**, drag an **on light** block to your project. Set the condition to `dark`.
Then, from **LIGHT**, drag a **show ring** block inside **on light**.
To turn the lamp on, we will make all the pixels white, so use the color wheel to do that.

```blocks
input.onLightConditionChanged(LightCondition.Dark, () => {
    light.showRing(
    `white white white white white white white white white white`
    )
})
```

## Step 2: Turn the lamp off when it's bright

This step is almost identical to Step 1. Drag the same two blocks again into your project, the **on light** with a **show ring** inside.
This time, however, set the **on light** block's condition to `bright` instead of `dark`. Color the pixels on the ring to gray instead of white.

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

The default for the `bright` condition is set to detect very bright light. Also, the default for `dark`,
is nearly total darkness.
Let's adjust this so that a room with normal lighting starts the **on light** block for `bright`. We'll
do the same for **on light** with `dark`.

From **INPUT**, go down to **... MORE**, drag two **light set threshold** blocks inside the **on start** block.
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

## Explore!

Download the code to your @boardname@ and explore dark rooms with your new headlamp!