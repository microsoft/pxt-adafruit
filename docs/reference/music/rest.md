# Rest

Rests (plays nothing) for a specified time through pin PO.

## Simulator

Simulation of this function is available in many, but not all browsers.

```sig
music.rest(400)
```

### Parameters

* `ms`: [Number](/microbit/reference/types/number) - the duration of the rest (milliseconds)

## Example

```blocks
let frequency = music.noteFrequency(Note.C)
music.playTone(frequency, 1000)
music.rest(1000)
```

### See also

[play tone](/microbit/reference/music/play-tone), [ring tone](/microbit/reference/music/ring-tone) , [tempo](/microbit/reference/music/tempo), [set tempo](/microbit/reference/music/set-tempo), [change tempo by](/microbit/reference/music/change-tempo-by)

