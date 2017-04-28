# Hello Digital

Source: https://learn.adafruit.com/circuit-playground-digital-input

## Hello Digital

Source: https://learn.adafruit.com/circuit-playground-digital-input/hello-digital

```blocks
control.forever(() => {
    serial.writeLine("D3: " + pins.D3.digitalRead());
    light.pixels.showBarGraph(pins.D3.digitalRead(), 1);
})
```

### Floating inputs

Source: https://learn.adafruit.com/circuit-playground-digital-input/floating-inputs

```blocks
let initialValue = 0
control.forever(() => {
    serial.writeLine("D3: " + pins.D3.digitalRead());
    if (initialValue != pins.D3.digitalRead()) {
        light.pixels.showColor(Colors.Blue)
    }
})
initialValue = pins.D3.digitalRead()
light.pixels.showColor(Colors.Red)
```
