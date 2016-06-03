# Ring Tone

Play a musical tone through pin `P0` with the pitch as high or low as you say.
The tone will keep playing until you tell it not to.

## Simulator

This function only works on the micro:bit and in some browsers.

```sig
music.ringTone(440)
```

### Parameters

* a [number](/reference/types/number) that says the tone's
**frequency** (how high-pitched or low-pitched the tone is).  This
number is in **Hz** (**Hertz**), which is a measurement of frequency
or pitch.

### Example

This program checks the **accelerometer** for the micro:bit's
**acceleration** (how much the micro:bit is speeding up or slowing
down). Then it uses that acceleration to make a tone.  If the micro:bit
speeds up, the tone's pitch gets higher, and if it slows down, the
tone's pitch gets lower.  It's fun -- try it!

```blocks
basic.forever(() => {
    music.ringTone(input.acceleration(Dimension.X))
})
```

### See also

[rest](/reference/music/rest), [play tone](/reference/music/play-tone),
[tempo](/reference/music/tempo), [set tempo](/reference/music/set-tempo),
[change tempo by](/reference/music/change-tempo-by)
