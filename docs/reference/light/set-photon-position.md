# set Photon Position

Change the start position of the photon.

```sig
light.setPhotonPosition(0)
```

Change the photon start position to the given pixel number (pixel index). If the index is out of bounds, the photon position is wrapped to begin at another pixel index on the ring.

## Parameters

* **index**: index of the pixel where the photon will start.

## Example

Move a purple photon across the pixel strip forward and backward. The photon switches modes so it erases when it moves backward. Each time the photon draws, move the starting position ahead by 1 pixel.

```blocks
let position = 0
let forward = false
forward = true
light.setPhotonPenHue(191)
forever(function () {
    if (forward) {
        light.setPhotonMode(PhotonMode.PenDown)
        light.setPhotonPosition(position)
        position += 1
    } else {
        light.setPhotonMode(PhotonMode.Eraser)
    }
    for (let i = 0; i < light.onboardStrip().length(); i++) {
        light.photonForward(1)
        pause(100)
    }
    forward = !(forward)
    light.photonFlip()
})
```

## See also

[photon forward](/reference/light/photon-forward),
[photon flip](/reference/light/photon-flip),
[set photon pen color](/reference/light/set-photon-pen-color)

```package
light
```


