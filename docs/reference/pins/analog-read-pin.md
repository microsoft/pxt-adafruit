# Analog Read Pin

Read the specified [pin](/microbit/device/pins) (P0, P1, P2) as analog.

```sig
pins.analogReadPin(AnalogPin.P0)
```

### Parameters

* name - the  pin name (`P0`, `P1`, or `P2`)

### Returns

* [Number](/microbit/reference/types/number) - a number between 0 and 1023 (included)

The following code reads `P1` and charts it on the screen:

```blocks
basic.forever(() => {
    let value = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(value, 1023)
});
```

### See also

[micro:bit pins](/microbit/device/pins), [on pin pressed](/microbit/reference/input/on-pin-pressed), [analog write pin](/microbit/reference/pins/analog-write-pin), [digital read pin](/microbit/reference/pins/digital-read-pin), [digital write pin](/microbit/reference/pins/digital-write-pin)

