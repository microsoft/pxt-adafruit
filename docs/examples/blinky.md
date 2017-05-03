# Blinky

```blocks
control.forever(() => {
    light.pixels.showColor(light.colors(Colors.Red))
    loops.pause(200)
    light.pixels.showColor(light.colors(Colors.Blue))
    loops.pause(500)
})
```