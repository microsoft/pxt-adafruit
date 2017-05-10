# Power glove

Track you hand motions with the @boardname@.

```blocks
let item = 0
let ready = false
// charging mode
input.onGesture(Gesture.TiltUp, () => {
    ready = false
    item = 262
    light.pixels.setBrightness(0)
    for (let i = 0; i < 100; i++) {
        light.pixels.setBrightness(light.pixels.brightness() + 1)
        light.pixels.showColor(Colors.Blue)
        pins.A8.ringTone(item)
        item += 15
        loops.pause(10)
    }
    loops.pause(500)
    ready = true
})
// tilt arm left and shoot
input.onGesture(Gesture.TiltLeft, () => {
    if (ready) {
        for (let i = 0; i < 25; i++) {
            light.pixels.showColor(Colors.Red)
            pins.A8.playTone(2000, music.beat(BeatFraction.Sixteenth))
            light.pixels.clear()
            light.pixels.show()
            loops.pause(music.beat(BeatFraction.Sixteenth))
        }
        ready = false
    }
})
// reset the glove
input.onGesture(Gesture.TiltDown, () => {
    light.pixels.clear()
    light.pixels.show()
})
```
