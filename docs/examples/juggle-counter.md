# Juggle counter

Attach your @boardname@ to your arm and it will sound each time you juggle.

```blocks
let item = 0
input.leftButton.onEvent(ButtonEvent.Click, () => {
    item = 262
})
input.onGesture(Gesture.ThreeG, () => {
    pins.A8.playTone(item, music.beat(BeatFraction.Quarter))
    item += 50
    light.pixels.showAnimationFrame(light.rainbowCycleAnimation())
})
```