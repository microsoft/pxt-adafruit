# Pin Is Pressed

Gets the pin state (pressed or not pressed), by detecting when the user holds the `GND` pin with one hand, and presses pin `0`, `1`, or `2` with the other hand, thus completing a circuit.

*Note* that this function works best when the BBC micro:bit is powered by AAA battery.

```sig
input.pinIsPressed(TouchPin.P0);
```

### Parameters

* name - [String](/microbit/reference/types/string); the pin name ("P0", "P1", or "P2")

### returns

* [Boolean](/microbit/reference/types/boolean) - `true` if pressed, `false` if not pressed

### Example

This example displays 1 if P0 is pressed, and 0 if P0 is not pressed:

```blocks
basic.forever(() => {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showNumber(1, 150)
    } else {
        basic.showNumber(0, 150)
    }
})
```

### See also

[BBC micro:bit pins](/microbit/device/pins), [on pin pressed](/microbit/input/on-pin-pressed), [analog read pin](/microbit/reference/pins/analog-read-pin), [analog write pin](/microbit/reference/pins/analog-write-pin), [digital read pin](/microbit/reference/pins/digital-read-pin), [digital write pin](/microbit/reference/pins/digital-write-pin)

