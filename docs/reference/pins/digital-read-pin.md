# Digital Read Pin

The digital read pin function.

Digitally read the specified [pin](/device/pins) (``P0``, ``P1``, ``P2``, ...) as digital. **Some pins are also used by the display, read the [pin documentation ](/device/pins) carefully.**

```sig
pins.digitalReadPin(DigitalPin.P3)
```

### Parameters

* name - the pin name ``P0``, ``P1``, ``P2``, ...

### Returns

* [Number](/reference/types/number) - 0 or 1

### Example: football score keeper

The following example reads `P0` to determine when a goal is scored. When `P0 = 1`, the code uses `digital write pin` to play a buzzer sound:

```blocks
let score = 0
basic.showNumber(score)
basic.forever(() => {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        score++;
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(score)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
```

### See also

[micro:bit pins](/device/pins), [digital write pin](/reference/pins/digital-write-pin), [analog read pin](/reference/pins/analog-read-pin), [analog write pin](/reference/pins/analog-write-pin), [on pin pressed](/reference/input/on-pin-pressed), [pin is pressed](/reference/input/pin-is-pressed)

