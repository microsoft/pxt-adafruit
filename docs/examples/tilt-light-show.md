# Tilt Light Show

Control the LED brightness and animation speed by tilting your @boardname@.

```blocks
control.forever(() => {
    light.pixels.setBrightness(Math.map(
    Math.abs(input.acceleration(Dimension.X)),
    0,
    1023,
    2,
    255
    ))
    control.pause(Math.map(
    Math.abs(input.acceleration(Dimension.Y)),
    0,
    1023,
    0,
    100
    ))
    light.pixels.showAnimationFrame(light.rainbowCycleAnimation())
})
```