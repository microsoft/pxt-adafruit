# Analog Write Pin

Write to the specified [pin](/microbit/device/pins) (P0, P1, P2) as analog.

```sig
pins.analogWritePin(AnalogPin.P0, 400)
```

### Parameters

* `name` - [String](/microbit/reference/types/string); the pin name ("P0", "P1", or "P2")
* `value` - a [Number](/microbit/reference/types/number) between 0 and 1023 included

The following code writes `1023` to the `P0` pin:

```blocks
pins.analogWritePin(AnalogPin.P0, 1023)
```

### See also

[micro:bit pins](/microbit/device/pins), [on pin pressed](/microbit/reference/input/on-pin-pressed), [analog read pin](/microbit/reference/pins/analog-read-pin), [digital read pin](/microbit/reference/pins/digital-read-pin), [digital write pin](/microbit/reference/pins/digital-write-pin)

