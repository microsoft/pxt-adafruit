# on Switch Moved

Do something when the slide switch is moved left or right.

```
input.onSwitchMoved(SwitchDirection.left, () => {})
```

## Parameters

* **direction**: the direction the switch must be moved to trigget the event (look for the labels on the buttons to see which direction is which).
* **body**: code to run when the switch is moved.

## Example

```blocks
input.onSwitchMoved(SwitchDirection.left, () => {
    light.pixels.showColor(light.colors(NeoPixelColors.Yellow))
})
```

## See Also



