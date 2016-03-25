# Button Is Pressed

Get the state of an input button. The micro:bit has two input buttons: A and B.

```sig
input.buttonIsPressed(Button.A);
```

### Parameters

* name - [String](/microbit/reference/types/string); input button "A", "B", or "A+B" (both input buttons)

### Returns

* [Boolean](/microbit/reference/types/boolean) - `true` if pressed, `false` if not pressed

### Example

The following code uses an [if](/microbit/reference/logic/if) statement to run code, depending on whether or not the A button is pressed:

```blocks
basic.forever(() => {
    let pressed = input.buttonIsPressed(Button.A)
    if (pressed) {
        // this code runs if the A button is pressed
        basic.showNumber(1, 150)
    } else {
        // this code runs if the A button is *not* pressed
        basic.showNumber(0, 150)
    }
})
```

### Lessons

[zoomer](/microbit/lessons/zoomer)

### See also

[on button pressed](/microbit/input/on-button-pressed), [if](/microbit/reference/logic/if), [forever](/microbit/basic/forever)

