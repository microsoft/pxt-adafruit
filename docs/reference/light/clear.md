# clear

Turn off all the pixel LEDs.

```sig
light.clear()

```

## Example

Turn off all the pixels when button `A` is pressed.

```blocks
light.setAll(0x00ff00)
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.clear()
})
```

## See Also

[``||set All||``](/reference/light/set-all)

```package
circuit-playground
```
