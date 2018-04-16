# Photon beat box

Shake it or press the buttons for a lighted surprise.

```blocks
let item = 0
input.onGesture(Gesture.Shake, () => {
    light.setPhotonPenHue(Math.randomRange(0, 256))
})
forever(() => {
    light.photonForward(1)
    pause(50)
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.photonFlip()
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    item += 32
    light.setPhotonPenHue(item)
})
```

```package
light
```