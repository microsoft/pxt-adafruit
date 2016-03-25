# Ring Tone

Play a continuous tone through pin P0.

## Simulator

Simulation of this function is available in many, but not all browsers.

```sig
music.ringTone(440)
```

### Parameters

* `frequency` : [Number](/microbit/reference/types/number) - Plays a tone in (Hz)

### Example

Play a sound based on the tile of the device

```blocks
basic.forever(() => {
    music.ringTone(input.acceleration(Dimension.X))
})
```

### See also

[rest](/microbit/reference/music/rest), [play tone](/microbit/reference/music/play-tone) , [tempo](/microbit/reference/music/tempo), [set tempo](/microbit/reference/music/set-tempo), [change tempo by](/microbit/reference/music/change-tempo-by)

