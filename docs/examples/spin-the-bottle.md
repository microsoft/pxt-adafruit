# Spin the bottle

```blocks
let item = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    light.pixels.clear()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    item = Math.random(101)
    for (let i = 0; i < item + 50; i++) {
        light.pixels.photonForward(1)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
```

```package
light
music
```