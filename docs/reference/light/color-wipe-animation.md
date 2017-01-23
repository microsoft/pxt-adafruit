# color Wipe Animation

Return a new instance of the color wipe animation.

```sig
light.colorWipeAnimation(0);
```

## Parameters

* **rgb**: [number](/reference/blocks/number), 

## Example

```blocks
control.forever(() => {
    light.builtin.showAnimationFrame(light.colorWipeAnimation(light.colors(NeoPixelColors.Red)))
})
```

## See Also



