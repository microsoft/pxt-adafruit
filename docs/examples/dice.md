
# Dice

Shake and see which side comes up selected.

```blocks
let tone = 0
let duration = 0
let item = 0
input.onGesture(Gesture.Shake, function () {
    light.setAll(0x000000)
    light.setPhotonMode(PhotonMode.PenUp)
    item = Math.randomRange(0, 10)
    light.photonForward(1)
    duration = 20
    tone = 262
    for (let i = 0; i < item; i++) {
        light.photonForward(1)
        music.playTone(tone, duration)
        tone += 100
        duration += 10
    }
    for (let i = 0; i < 20; i++) {
        light.photonForward(1)
        music.playTone(tone, duration)
        duration += 10
    }
    music.playTone(1400, 500)
})
```
