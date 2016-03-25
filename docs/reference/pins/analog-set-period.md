# Analog Set Period

Configures the period of the Pulse Width Modulation (PWM) on the specified analog [pin](/microbit/device/pins) (``P0``, ``P1`` or ``P2``). Prior to calling this function, the given pin should be set as analog.

```sig
pins.analogSetPeriod(AnalogPin.P0, 20000)
```

### Parameters

* `name` - [String](/microbit/reference/types/string); the pin name ("P0", "P1", or "P2")
* `micros` - a [Number](/microbit/reference/types/number) representing the micro-seconds of the analog period.

The following code

```blocks
pins.analogWritePin(AnalogPin.P0, 512)
pins.analogSetPeriod(AnalogPin.P0, 20000)
```

### See also

[micro:bit pins](/microbit/device/pins), [on pin pressed](/microbit/reference/input/on-pin-pressed), [analog read pin](/microbit/reference/pins/analog-read-pin), [digital read pin](/microbit/reference/pins/digital-read-pin), [digital write pin](/microbit/reference/pins/digital-write-pin)

