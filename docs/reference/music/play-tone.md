# Play Tone

Plays a music tone through pin ``P0`` for the given duration.

## Simulator

Simulation of this function is available in many, but not all browsers.

```sig
music.playTone(440, 120)
```

### Parameters

* `frequency` : [Number](/microbit/reference/types/number) - the frequency of the note (in Herz)
* `ms`: [Number](/microbit/reference/types/number) - the duration of the note (milliseconds)

## Example

```blocks
let freq = music.noteFrequency(Note.C)
music.playTone(freq, 1000)
```

### See also

[rest](/microbit/reference/music/rest), [ring tone](/microbit/reference/music/ring-tone) , [tempo](/microbit/reference/music/tempo), [set tempo](/microbit/reference/music/set-tempo), [change tempo by](/microbit/reference/music/change-tempo-by)

