# Energy glove

Track you hand motions with the @boardname@.

```blocks
let item = 0
let ready = false
// tilt arm left and shoot
input.onGesture(Gesture.TiltLeft, () => {
    if (ready) {
        item = 2000
        for (let i = 0; i < 25; i++) {
            light.showRing(
            `red red red red red red red red red red`
            )
            music.playTone(item, music.beat(BeatFraction.Sixteenth))
            item += 30
        }
        ready = false
    }
})
// charging mode
input.onGesture(Gesture.TiltUp, () => {
    ready = false
    item = 262
    for (let i = 0; i < 30; i++) {
        light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
        )
        music.playTone(item, music.beat(BeatFraction.Sixteenth))
        item += 15
    }
    loops.pause(500)
    ready = true
    music.playTone(item, music.beat(BeatFraction.Whole))
})
// reset the glove
input.onGesture(Gesture.TiltDown, () => {
    light.showRing(
    `yellow black yellow black yellow yellow black yellow black yellow`
    )
})
```

```package
circuit-playground
```