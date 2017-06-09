# Spin it

Spin the lights!

https://youtu.be/DVE5uJ3m5Kg

```blocks
music.setTempo(125);
let item = 0
input.onGesture(Gesture.Shake, () => {
    light.pixels.clear()
    light.pixels.setPhotonMode(PhotonMode.Eraser)
    item = Math.random(101)
    for (let i = 0; i < item + 30; i++) {
        light.pixels.photonForward(1)
        music.playTone(262 + i * 10, music.beat(BeatFraction.Quarter))
        loops.pause(5)
        if (Math.random(100) < 10)
            light.pixels.photonFlip();
    }
    music.playSound(music.sounds(Sounds.PowerUp));
})
```

```package
light
music
```