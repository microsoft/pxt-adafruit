# Digital input

Using the @boardname@ and some alligator clips with a resistor, we can explore how to read digital inputs.

Source: https://learn.adafruit.com/circuit-playground-digital-input

Use these MakeCode blocks in this learn project.

## Code for: Hello Digital

Source: https://learn.adafruit.com/circuit-playground-digital-input/hello-digital

```blocks
let digitalValue = 0;
loops.forever(() => {
    if (pins.A3.digitalRead()) {
        digitalValue = 1;
    } else {
        digitalValue = 0;
    }
    serial.writeLine("A3: " + digitalValue);
    light.graph(digitalValue, 1);
})
```

## Code for: Floating inputs

Source: https://learn.adafruit.com/circuit-playground-digital-input/floating-inputs

```blocks
let initialValue = false
initialValue = pins.A3.digitalRead()
light.setAll(Colors.Red)
loops.forever(function () {
    serial.writeLine("A3: " + pins.A3.digitalRead())
    if (initialValue != pins.A3.digitalRead()) {
        light.setAll(Colors.Blue)
    }
})
```
