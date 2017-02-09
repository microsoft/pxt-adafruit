# Plot Acceleration

```blocks
basic.forever(() => {
    led.plotBarGraph(
        input.acceleration(Dimension.X),
        1023
    )
})
```
