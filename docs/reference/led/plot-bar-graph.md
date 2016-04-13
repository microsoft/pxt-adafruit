# Plot Bar Graph

Displays a vertical bar graph based on the value and high value.

```sig
led.plotBarGraph(2, 20);
```

### Parameters

* value: [Number](/reference/types/number) , high : [Number](/reference/types/number) displays a vertical bar graph based on the value and high value

### Example: chart acceleration

```blocks
basic.forever(() => {
    let a = input.acceleration(Dimension.X);
    led.plotBarGraph(a, 1023)
})
```

### See also

[brightness](/reference/led/brightness), [fade in](/reference/led/fade-in), [fade out](/reference/led/fade-out), [LED screen](/device/screen), [stop animation](/reference/led/stop-animation)

