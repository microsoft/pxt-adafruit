# Plot Bar Graph

Displays a vertical bar graph based on the value and high value.

```sig
led.plotBarGraph(2, 20);
```

### Parameters

* value: [Number](/microbit/reference/types/number) , high : [Number](/microbit/reference/types/number) displays a vertical bar graph based on the value and high value

### Example: chart acceleration

```blocks
basic.forever(() => {
    let a = input.acceleration(Dimension.X);
    led.plotBarGraph(a, 1023)
})
```

### See also

[brightness](/microbit/reference/led/brightness), [fade in](/microbit/reference/led/fade-in), [fade out](/microbit/reference/led/fade-out), [LED screen](/microbit/device/screen), [stop animation](/microbit/reference/led/stop-animation)

