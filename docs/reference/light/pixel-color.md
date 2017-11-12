# pixel Color

Get the color of the pixel at the location with this number.

```sig
light.pixelColor(0)
```

## Parameters

* **pixelOffset**: the position on the ring of the pixel whose color you want to know.

## Returns

* a [number](/types/number) which is the [**RGB**](/reference/light/rgb#rgbdesc) value for the current color of the pixel light.

## Example #exsection

Get the color for the pixel at position ``3`` and set the pixel at position ``4`` to the same color.

```blocks
light.setPixelColor(4, light.pixelColor(3))
```

## See Also
[``||set pixel color||``](/reference/light/set-pixel-color), [``||rgb||``](/reference/light/rgb)

```package
circuit-playground
```
