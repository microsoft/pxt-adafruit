# Spin it

Spin the lights!

https://youtu.be/DVE5uJ3m5Kg

```blocks
music.setTempo(125);
let item = 0
input.onGesture(Gesture.Shake, () => {
    light.clear()
    light.setPhotonMode(PhotonMode.Eraser)
    item = Math.randomRange(0, 101)
    for (let i = 0; i < item + 30; i++) {
        light.photonForward(1)
        music.playTone(262 + i * 10, music.beat(BeatFraction.Quarter))
        pause(5)
        if (Math.randomRange(0, 100) < 10)
            light.photonFlip();
    }
    music.playSound(music.sounds(Sounds.PowerUp));
})
```
