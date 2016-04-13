# Rest

Rests (plays nothing) for a specified time through pin PO.

## Simulator

Simulation of this function is available in many, but not all browsers.

```sig
music.rest(400)
```

### Parameters

* `ms`: [Number](/reference/types/number) - the duration of the rest (milliseconds)

## Example

```blocks
let frequency = music.noteFrequency(Note.C)
music.playTone(frequency, 1000)
music.rest(1000)
```

### See also

[play tone](/reference/music/play-tone), [ring tone](/reference/music/ring-tone) , [tempo](/reference/music/tempo), [set tempo](/reference/music/set-tempo), [change tempo by](/reference/music/change-tempo-by)

