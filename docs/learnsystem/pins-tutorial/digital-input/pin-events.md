# Pin Events

## Pulse High

![Falling input pin event](/static/cp/learn/pins-tutorial/pin-event-high.jpg)

```block
pins.A1.onEvent(PinEvent.PulseHigh, function () {
	
})
```

### Pulse Low

![Falling input pin event](/static/cp/learn/pins-tutorial/pin-event-low.jpg)

```block
pins.A1.onEvent(PinEvent.PulseLow, function () {
	
})
```

### Rising Edge

![Rising input pin event](/static/cp/learn/pins-tutorial/pin-event-rise.jpg)

```block
pins.A1.onEvent(PinEvent.Rise, function () {
	
})
```

### Falling Edge

![Falling input pin event](/static/cp/learn/pins-tutorial/pin-event-fall.jpg)

```block
pins.A1.onEvent(PinEvent.Fall, function () {
	
})
```