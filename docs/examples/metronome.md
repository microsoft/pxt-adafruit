# Metronome

Use your @boardname@ as a metronome.
Use the A and B to decrease / increase the tempo.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, () => {
    music.changeTempoBy(-10)
})
input.buttonB.onEvent(ButtonEvent.Click, () => {
    music.changeTempoBy(10)
})
forever(() => {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
})
```
