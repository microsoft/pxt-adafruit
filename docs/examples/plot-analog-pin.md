# Plot Analog Pin

```blocks
basic.forever(() => {
    led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P0),
        1023
    )
})
```
