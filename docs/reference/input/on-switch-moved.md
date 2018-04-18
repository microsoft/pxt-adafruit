# on Switch Moved

Do something when the slide switch is moved left or right.

```sig
input.onSwitchMoved(SwitchDirection.Left, () => {
    music.playMelody(Melodies.BaDing)
})
```

## Parameters

* **direction**: the direction the switch must be moved to trigger the event (look for the labels on the buttons to see which direction is which).
* **handler**: code to run when the switch is moved.

## Example

Set all the pixels to red when the switched is moved to the left.

```blocks
input.onSwitchMoved(SwitchDirection.Left, () => {
    light.setAll(0xff0000);
});
```

## See also



