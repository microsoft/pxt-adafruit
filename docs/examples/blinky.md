# Blinky

Flash red and blue every half second.

```blocks
loops.forever(() => {
    light.pixels.setAll(light.colors(Colors.Red))
    loops.pause(500)
    light.pixels.setAll(light.colors(Colors.Blue))
    loops.pause(500)
})
```