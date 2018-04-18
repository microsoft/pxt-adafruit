# Level

## ~avatar avatar

Use the motion sensor to detect if the @boardname@ is lying flat

## ~


```blocks
control.forever(() => {
    if (Math.abs(input.acceleration(Dimension.X)) + Math.abs(input.acceleration(Dimension.Y)) < 100) {
        light.onboardStrip().showColor(0x00ff00)
    } else {
        light.onboardStrip().showColor(0x0000ff)
    }
})
```