# Egg game

Try to move the longest distance and keep the @boardname@ level!

```blocks
let score = 0
input.buttonB.onEvent(ButtonEvent.Click, function () {
    music.playTone(262 + score, music.beat(BeatFraction.Whole))
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    score = 0
    light.setAll(0x000000)
    for (let i = 0; i < 3; i++) {
        light.photonForward(1)
        music.playTone(240, music.beat(BeatFraction.Whole))
        pause(500)
    }
    light.photonForward(1)
    music.playTone(988, music.beat(BeatFraction.Whole) * 3)
    light.setAll(0x000000)
    light.setPhotonMode(PhotonMode.Eraser)
    while (Math.abs(input.acceleration(Dimension.X)) + Math.abs(input.acceleration(Dimension.Y)) < 256) {
        score += 2
        light.photonForward(1)
        music.playTone(262 + score, music.beat(BeatFraction.Sixteenth))
    }
    music.playSound(music.sounds(Sounds.PowerDown))
})
```

```package
light
music
```