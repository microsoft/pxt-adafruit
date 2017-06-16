# Egg game

Try to move the longest distance and keep the @boardname@ level!

```blocks
let score = 0
input.buttonB.onEvent(ButtonEvent.Click, () => {
    music.playTone(262 + score, music.beat(BeatFraction.Whole))
})
input.buttonA.onEvent(ButtonEvent.Click, () => {
    score = 0
    light.pixels.clear()
    for (let i = 0; i < 3; i++) {
        light.pixels.photonForward(1)
        music.playTone(240, music.beat(BeatFraction.Whole))
        loops.pause(500)
    }
    light.pixels.photonForward(1)
    music.playTone(988, music.beat(BeatFraction.Whole) * 3)
    light.pixels.clear()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    while (Math.abs(input.acceleration(Dimension.X)) + Math.abs(input.acceleration(Dimension.Y)) < 256) {
        score += 2
        light.pixels.photonForward(1)
        music.playTone(262 + score, music.beat(BeatFraction.Sixteenth))
    }
    music.playSound(music.sounds(Sounds.PowerDown))
})
```

```package
light
music
```