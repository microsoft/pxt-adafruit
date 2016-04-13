# Play Tone

Plays a music tone through pin ``P0`` for the given duration.

## Simulator

Simulation of this function is available in many, but not all browsers.

```sig
music.playTone(440, 120)
```

### Parameters

* `frequency` : [Number](/reference/types/number) - the frequency of the note (in Herz)
* `ms`: [Number](/reference/types/number) - the duration of the note (milliseconds)

## Example

```blocks
let freq = music.noteFrequency(Note.C)
music.playTone(freq, 1000)
```

### See also

[rest](/reference/music/rest), [ring tone](/reference/music/ring-tone) , [tempo](/reference/music/tempo), [set tempo](/reference/music/set-tempo), [change tempo by](/reference/music/change-tempo-by)

