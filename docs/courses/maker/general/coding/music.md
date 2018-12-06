# Music

The first two music blocks offer a variety of preset sound effects. The ``||music:play sound||`` block will play its sound but then simultaneously move on to activate the next block. For example, if you want to play the "jump down" sound effect and have the ten NeoPixels turn green at the same time, use the ``||music:play sound||`` block. But if you want the NeoPixels to turn green only after the sound effect has ended, use the ``||music:play sound until done||`` block.

```cards
music.playSound(music.sounds(Sounds.PowerUp))
music.playSoundUntilDone(music.sounds(Sounds.PowerUp))
```
<br/>

![Sound choices for playSound](/static/courses/maker/general/coding/play-sound-menu.png)

The ``||music:stop all sounds||`` block stops sounds currently running. This can be useful if you have a sound playing, but you want something different to play when, for example, the Circuit Playground Express is tilted to one side. Without the ``||music:stop all sounds||`` block, the first sound would have to conclude before the new one began.

```blocks
input.onGesture(Gesture.TiltRight, function () {
    music.stopAllSounds()
    music.playSound(music.sounds(Sounds.JumpUp))
})
music.playSound(music.sounds(Sounds.JumpUp))
light.setAll(0x00ff00)
```

The ``||music:MUSIC||`` blocks also have various ways to play specific tones and control beat and tempo. You can compose entire songs or just have individual notes play in response to inputs you choose. The following is "Mary Had a Little Lamb" using the ``||music:play tone||`` blocks:

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
})
```
