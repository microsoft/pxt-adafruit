# photon Flip

Change the direction of the photon movement along the pixel ring.

```sig
light.photonFlip()
```

The photon normally moves in the direction from a low numbered pixels (pixel: 0, 1, 2, ...)
 to higher numbered pixels. You can make the photon move in the opposite direction with
 ``||light:photon flip||``. Every time you use ``||light:photon flip||``, the photon burst changes
 direction and moves in the opposite way.

## Example

Move a photon forward and backward across the pixel ring for `5` bursts.

```blocks
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < light.onboardStrip().length(); j++) {
        light.photonForward(1)
        pause(50)
    }
    light.photonFlip()
}
```

## See also

[``||photon forward||``](/reference/light/photon-forward),
[``||set photon pen hue||``](/reference/light/set-photon-pen-hue),
[``||photon mode||``](/reference/light/set-photon-mode)

```package
circuit-playground
```


