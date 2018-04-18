# set Brightness

Set the brightness of all the pixels on the pixel ring.

```sig
light.setBrightness(0)
```

## Parameters

* **brightness**: the new brightness of all the pixels in the ring. This is a [number](/types/number) between 0 (no light) and 255 (super bright). 

## Example

Set all the pixels to ``white``. Dim the pixels when button `A` is pressed and
brighten the pixels when button `B` is pressed.

```blocks
let bright = 128;
light.setAll(0xffffff);

input.buttonA.onEvent(ButtonEvent.Click, function() {
    if (bright > 0) {
        bright--;
        light.setBrightness(bright);
    }
});

input.buttonB.onEvent(ButtonEvent.Click, function() {
    if (bright < 255) {
        bright++;
        light.setBrightness(bright);
    }
});
```

## See Also

[``||set all||``](/reference/light/set-all)

```package
circuit-playground
```
