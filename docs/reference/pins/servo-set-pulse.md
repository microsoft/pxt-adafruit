# Servo Set Pulse

Configures the pin [pin](/device/pins) (``P0``, ``P1`` or ``P2``) as an analog/PWM output if it isn't already, configures the period to be 20ms, and sets the pulse width, based on the value it is given.

```sig
pins.servoSetPulse(AnalogPin.P1, 1500)
```

### Parameters

* `name` - [String](/reference/types/string); the pin name ("P0", "P1", or "P2")
* `micros` - a [Number](/reference/types/number) representing the micro-seconds of the pulse width.

### Example

The following code sets the servo pulse to ``1000`` micro seconds.

```blocks
pins.servoSetPulse(AnalogPin.P0, 1000)
```

### See also

[BBC micro:bit pins](/device/pins), [on pin pressed](/reference/input/on-pin-pressed), [analog read pin](/reference/pins/analog-read-pin), [digital read pin](/reference/pins/digital-read-pin), [digital write pin](/reference/pins/digital-write-pin)

