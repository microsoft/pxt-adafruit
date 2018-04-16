# photon Forward

Move a photon effect along the pixel ring by a number of steps.

```sig
light.photonForward(0)
```

The photon effect is a burst of light that moves along the pixel ring. To make
an effect with quicker movement, you can advance the photon by more than just
one pixel at a time, just make the step number bigger.

## Parameters

* **steps**: the [number](/types/number) of pixel spots to move the photon

## Example

Move a photon across the entire length of the pixel strip.

```blocks
for (let i = 0; i < light.onboardStrip().length(); i++) {
    light.photonForward(1)
    pause(150)
}
```
## See also

[``||photon flip||``](/reference/light//photon-flip),
[``||photon mode||``](/reference/light/set-photon-mode)

```package
circuit-playground
```


