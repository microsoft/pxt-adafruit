# Digital Input

## Materials

* (3) Alligator clip leads
* Light switch (optional)
* Pushbutton switch (optional)
* Variable resistor - use you own [graphite resistor](/learnsystem/pins-tutorial/make-a-resistor)


## High and Low

```blocks
forever(function () {
    if (pins.A1.digitalRead()) {
        light.setAll(0xffff00)
    } else {
        light.setAll(0x007fff)
    }
})
```

## Input States

### Floating

```block
pins.A1.setPull(PinPullMode.PullNone)
```

### Pulled Low

```block
pins.A1.setPull(PinPullMode.PullDown)
```

### Pulled High

```block
pins.A1.setPull(PinPullMode.PullUp)
```

## Pin Events

### Pulse High

```block
pins.A1.onEvent(PinEvent.PulseHigh, function () {
	
})
```

### Pulse Low

```block
pins.A1.onEvent(PinEvent.PulseLow, function () {
	
})
```

### Rising Edge

```block
pins.A1.onEvent(PinEvent.Rise, function () {
	
})
```

### Falling Edge

```block
pins.A1.onEvent(PinEvent.Fall, function () {
	
})
```