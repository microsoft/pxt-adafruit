# set Pixel Color

Set the color of the pixel at this location to a new color.

```sig
light.setPixelColor(0, 0)

```

## Parameters

* **pixelOffset**: the position on the strip (or the board) of the pixel whose
color you want to change.
* **color**: an [RGB](/reference/light/rgb#rgbdesc) color to change the pixel to.

## Example

When button ``B`` is clicked, show the ``pink`` color at pixel ``0`` on the ring.

```blocks
input.buttonB.onEvent(ButtonEvent.Click, () => {
    light.setPixelColor(0, 0xff007f)
})
```

## See Also
[``||pixel color||``](/reference/light/pixel-color), [``||rgb||``](/reference/light/rgb)

```package
circuit-playground
```
