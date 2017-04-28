# Level

### ~avatar avatar

Use the motion sensor to detect if the @boardname@ is lying flat

### ~


```blocks
control.forever(() => {
    if (Math.abs(input.acceleration(Dimension.X)) + Math.abs(input.acceleration(Dimension.Y)) < 100) {
        light.pixels.showColor(Colors.Green)
    } else {
        light.pixels.showColor(Colors.Blue)
    }
})
```