# In Background

Run code in the background as a separate process or thread; for more information on this advanced construct, see [the micro:bit - a reactive system](/microbit/device/reactive).

```sig
control.inBackground(() => {
})
```

### Example

The example below shows how a background process can be used to display the current value of the global variable `num`, while code (like the `on button pressed` handler) can change the value of the variable.

```blocks
let num = 0
control.inBackground(() => {
    while (true) {
        basic.showNumber(num, 150)
        basic.pause(100)
    }
})
input.onButtonPressed("A", () => {
    num++;
})
```

The code below using the `forever` loop is equivalent to the code above

```blocks
let num = 0
basic.forever(() => {
    basic.showNumber(num, 150)
})
input.onButtonPressed("A", () => {
    num++;
})
```

### Contention for the LED display

If you have multiple processes that each show something on the LED screen, you may get unexpected results. Try, for example:

```blocks
basic.forever(() => {
    basic.showNumber(6789, 150)
})
input.onButtonPressed("A", () => {
    basic.showNumber(2, 150)
})
```

### See also

[while](/microbit/reference/loops/while), [forever](/microbit/reference/basic/forever), [on button pressed](/microbit/reference/input/on-button-pressed)

