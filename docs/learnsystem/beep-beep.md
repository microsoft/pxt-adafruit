# Beep Beep

Source: https://learn.adafruit.com/circuit-playground-beep-beep

## Starting point

```blocks
input.leftButton.onEvent(ButtonEvent.Down, () => {
    light.pixels.showColor(16737792)
    pins.A8.playTone(700, 750)
    light.pixels.clear()
    light.pixels.show()
})
input.rightButton.onEvent(ButtonEvent.Down, () => {
    light.pixels.showColor(16737792)
    pins.A8.playTone(700, 750)
    light.pixels.clear()
    light.pixels.show()
    control.pause(250)
    light.pixels.showColor(16737792)
    pins.A8.playTone(700, 750)
    light.pixels.clear()
    light.pixels.show()
})
```