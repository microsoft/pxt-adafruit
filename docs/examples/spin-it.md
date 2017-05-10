# Spin it

Spin the lights!

```blocks
light.statusLED(false)
let item = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    music.changeTempoBy(20)
    light.pixels.clear()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    item = Math.random(101)
    for (let i = 0; i < item + 50; i++) {
        light.pixels.photonForward(1)
        music.playTone(262 + i * 10, music.beat(BeatFraction.Quarter))
        loops.pause(5)
        if (Math.random(100) < 15)
            light.pixels.photonFlip();
    }
    music.changeTempoBy(-20)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
```

```package
light
music
```