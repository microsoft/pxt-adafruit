# Servo Set Pulse

Configures the pin [pin](/microbit/device/pins) (``P0``, ``P1`` or ``P2``) as an analog/PWM output if it isn't already, configures the period to be 20ms, and sets the pulse width, based on the value it is given.

```sig
pins.servoSetPulse(AnalogPin.P1, 1500)
```

### Parameters

* `name` - [String](/microbit/reference/types/string); the pin name ("P0", "P1", or "P2")
* `micros` - a [Number](/microbit/reference/types/number) representing the micro-seconds of the pulse width.

### Example

The following code sets the servo pulse to ``1000`` micro seconds.

```blocks
pins.servoSetPulse(AnalogPin.P0, 1000)
```

### See also

[BBC micro:bit pins](/microbit/device/pins), [on pin pressed](/microbit/reference/input/on-pin-pressed), [analog read pin](/microbit/reference/pins/analog-read-pin), [digital read pin](/microbit/reference/pins/digital-read-pin), [digital write pin](/microbit/reference/pins/digital-write-pin)

