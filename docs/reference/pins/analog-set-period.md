# Analog Set Period

Configures the period of the Pulse Width Modulation (PWM) on the specified analog [pin](/device/pins) (``P0``, ``P1`` or ``P2``). Prior to calling this function, the given pin should be set as analog.

```sig
pins.analogSetPeriod(AnalogPin.P0, 20000)
```

### Parameters

* `name` - [String](/reference/types/string); the pin name ("P0", "P1", or "P2")
* `micros` - a [Number](/reference/types/number) representing the micro-seconds of the analog period.

The following code

```blocks
pins.analogWritePin(AnalogPin.P0, 512)
pins.analogSetPeriod(AnalogPin.P0, 20000)
```

### See also

[micro:bit pins](/device/pins), [on pin pressed](/reference/input/on-pin-pressed), [analog read pin](/reference/pins/analog-read-pin), [digital read pin](/reference/pins/digital-read-pin), [digital write pin](/reference/pins/digital-write-pin)

