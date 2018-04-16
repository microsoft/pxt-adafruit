# set Photon Mode

Change the effect of the photon pulse.

```sig
light.setPhotonMode(0)
```

The photon can have an effect of lighting the pixel strip to the photon color as the
light pulse moves. This is the `pen down` photon mode. You can also have the light pulse
move across without adding color, or even have it erase the color when it moves.

## Parameters

* **mode**: the pulse effect you want the photon to have. These are:
> * `pen down`: pulse light at each pixel and set it to the photon color.
> * `pen up`: pulse light at each pixel and don't set the color.
> * `eraser`: erase the photon color on the pixel when the pulse hits it.

## Examples

### Wig wag

Move a purple photon across the pixel strip forward and backward. The photon switches modes
so it erases when it moves backward.

```blocks
let forward = true
light.setPhotonPenHue(191)
forever(() => {
    if (forward) {
        light.setPhotonMode(PhotonMode.PenDown)
    } else {
        light.setPhotonMode(PhotonMode.Eraser)
    }
    for (let i = 0; i < light.onboardStrip().length(); i++) {
        light.photonForward(1)
        pause(100)
    }
    forward = !forward
    light.photonFlip()
})
```

### Color down, color up

Flash a purple photon across the pixel strip using `pen down` mode. Switch the mode to
`pen up` and change the photon color to green. Flash another photon and see that the
color stays purple.

```blocks
light.setPhotonPenHue(191);
light.setPhotonMode(PhotonMode.PenDown);
for (let i = 1; i < light.onboardStrip().length(); i++) {
    light.photonForward(1);
    pause(500);
}

light.setPhotonPenHue(86);
light.setPhotonMode(PhotonMode.PenUp)
for (let i = 1; i < light.onboardStrip().length(); i++) {
    light.photonForward(1);
    pause(500);
}
```

## See also

[``||photon forward||``](/reference/light/photon-forward),
[``||photon flip||``](/reference/light/photon-flip)

```package
circuit-playground
```


