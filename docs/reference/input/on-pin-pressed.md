# On Pin Pressed

Register an [event handler](/reference/event-handler) that will execute whenever the user holds the `GND` pin with one hand, and presses pin `0`, `1`, or `2` with the other hand, thus completing a circuit; when you run a script with this function in a web browser, click pins 0 , 1, or 2 on the simulator.

*Note* that this function works best when the BBC micro:bit is powered by AAA battery.

```sig
input.onPinPressed(TouchPin.P0, () => {
})
```

### Example: pin pressed counter

This example counts how many times the P0 pin is pressed. Each time the pin is pressed, the global count variable is increased by 1 and displayed on the screen.

```blocks
let count = 0
basic.showNumber(count, 100)
input.onPinPressed(TouchPin.P0, () => {
    count = count + 1
    basic.showNumber(count, 100)
})
```

### Lessons

[love meter](/lessons/love-meter)

### See also

[BBC micro:bit pins](/device/pins), [pin is pressed](/reference/input/pin-is-pressed), [analog read pin](/reference/pins/analog-read-pin), [analog write pin](/reference/pins/analog-write-pin), [digital read pin](/reference/pins/digital-read-pin), [digital write pin](/reference/pins/digital-write-pin)

