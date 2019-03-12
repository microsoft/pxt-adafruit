# Juggle counter

Attach your @boardname@ to your arm and it will sound each time you juggle.

```blocks
let item = 0
input.buttonA.onEvent(ButtonEvent.Click, () => {
    item = 262;
})
input.onGesture(Gesture.Shake, () => {
    music.playTone(item, music.beat(BeatFraction.Quarter))
    item += 50;
    light.showAnimation(light.rainbowAnimation, 500);
})
```
