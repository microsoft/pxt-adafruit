# Blinky

```blocks
control.forever(() => {
    light.pixels.showColor(light.colors(Colors.Red))
    control.pause(200)
    light.pixels.showColor(light.colors(Colors.Blue))
    control.pause(500)
})
```