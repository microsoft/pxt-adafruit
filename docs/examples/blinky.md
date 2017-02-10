# Blinky

```blocks
control.forever(() => {
    light.pixels.showColor(light.colors(NeoPixelColors.Red))
    control.pause(200)
    light.pixels.showColor(light.colors(NeoPixelColors.Blue))
    control.pause(500)
})
```