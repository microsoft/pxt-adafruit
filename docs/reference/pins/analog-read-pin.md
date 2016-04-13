# Analog Read Pin

Read the specified [pin](/device/pins) (P0, P1, P2) as analog.

```sig
pins.analogReadPin(AnalogPin.P0)
```

### Parameters

* name - the  pin name (`P0`, `P1`, or `P2`)

### Returns

* [Number](/reference/types/number) - a number between 0 and 1023 (included)

The following code reads `P1` and charts it on the screen:

```blocks
basic.forever(() => {
    let value = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(value, 1023)
});
```

### See also

[micro:bit pins](/device/pins), [on pin pressed](/reference/input/on-pin-pressed), [analog write pin](/reference/pins/analog-write-pin), [digital read pin](/reference/pins/digital-read-pin), [digital write pin](/reference/pins/digital-write-pin)

