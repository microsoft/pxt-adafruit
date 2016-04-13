# Ring Tone

Play a continuous tone through pin P0.

## Simulator

Simulation of this function is available in many, but not all browsers.

```sig
music.ringTone(440)
```

### Parameters

* `frequency` : [Number](/reference/types/number) - Plays a tone in (Hz)

### Example

Play a sound based on the tile of the device

```blocks
basic.forever(() => {
    music.ringTone(input.acceleration(Dimension.X))
})
```

### See also

[rest](/reference/music/rest), [play tone](/reference/music/play-tone) , [tempo](/reference/music/tempo), [set tempo](/reference/music/set-tempo), [change tempo by](/reference/music/change-tempo-by)

