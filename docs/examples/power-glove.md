# Power Glove

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
        light.pixels.showColor(NeoPixelColors.Blue)
        pins.A8.ringTone(item)
        item += 50
        control.pause(10)
    }
    control.pause(500)
    ready = true
})
// tilt arm left and shoot
input.onGesture(Gesture.TiltLeft, () => {
    if (ready) {
        light.pixels.showColor(NeoPixelColors.Red)
        pins.A8.playTone(988, music.beat(BeatFraction.Double))
        ready = false
    }
})
// reset the glove
input.onGesture(Gesture.TiltDown, () => {
    light.pixels.clear()
    light.pixels.show()
})
```
