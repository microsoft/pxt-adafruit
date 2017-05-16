
# Dice

Shake and see which side comes up selected.

```blocks
let tone = 0
let duration = 0
let item = 0
input.onGesture(Gesture.Shake, () => {
    light.pixels.clear()
    light.pixels.setPhotonMode(PhotonMode.PenUp)
    item = Math.random(10)
    light.pixels.photonForward(1)
    duration = 20
    tone = 262
    for (let i = 0; i < item; i++) {
        light.pixels.photonForward(1)
        music.playTone(tone, duration)
        tone += 100
        duration += 10
    }
    for (let i = 0; i < 20; i++) {
        light.pixels.photonForward(1)
        music.playTone(tone, duration)
        duration += 10
    }
    music.playTone(1400, 500);
})
```

```package
light
```