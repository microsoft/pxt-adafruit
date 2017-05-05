# Photon beat box

```blocks
let item = 0
input.onGesture(Gesture.Shake, () => {
    light.pixels.setPhotonColor(Math.random(256))
})
loops.forever(() => {
    light.pixels.photonForward(1)
    loops.pause(50)
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.pixels.photonFlip()
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    item += 32
    light.pixels.setPhotonColor(item)
})
```

```package
light
```