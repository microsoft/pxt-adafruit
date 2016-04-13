# Servo Write Pin

Writes a value to the servo on to the specified [pin](/device/pins) (``P0``, ``P1``, ``P2``), controlling the shaft accordingly.

* on a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation.
* on a continuous rotation servo, this will set the speed of the servo (with 0 being full-speed in one direction, 180 being full speed in the other, and a value near 90 being no movement).

```sig
pins.servoWritePin(AnalogPin.P0, 180)
```

### Parameters

* `name` - [String](/reference/types/string); the pin name ("P0", "P1", or "P2")
* `value` - a [Number](/reference/types/number) between 0 and 180 included

### Examples

* setting the shaft angle to mid point on a servo

```blocks
pins.servoWritePin(AnalogPin.P0, 90)
```

* control the shaft by using the tilt information of the accelerometer

```blocks
basic.forever(() => {
    let millig = input.acceleration(Dimensions.X)
    // map accelerometer readings to angle
    let angle = pins.map(millig, -1023, 1023, 0, 180)
    pins.servoWritePin(AnalogPin.P0, angle)
})
```

* setting the full speed on a continuous servo

```blocks
pins.servoWritePin(AnalogPin.P0, 0)
```

### See also

[BBC micro:bit pins](/device/pins), [servo set pulse](/reference/pins/servo-set-pulse)

