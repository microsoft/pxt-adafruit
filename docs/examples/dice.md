
# Dice

Shake and see which number comes up.

```blocks
let tone = 0
let item = 0
input.onGesture(Gesture.Shake, () => {
    light.pixels.clear()
    item = Math.random(10)
    light.pixels.setPhotonColor(Math.random(256))
    light.pixels.photonForward(1)
    tone = 200
    for (let i = 0; i < item; i++) {
        light.pixels.photonForward(1)
        music.playTone(tone, music.beat(BeatFraction.Half))
        tone += 100
    }
    light.pixels.setPhotonMode(PhotonMode.PenUp)
    for (let i = 0; i < 30; i++) {
        light.pixels.photonForward(Math.random(10))
        loops.pause(500)
    }
})
```

```package
light
```