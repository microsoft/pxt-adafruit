# Play Built-in Melody

Play a built in musical melody through pin ``P0`` of the @boardname@.

## Simulator

This function only works on the @boardname@ and in some browsers.

```sig
music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
```

### Parameters

* ``melody`` is the kind of built-in melody you want to play

## Example

This example plays the ``Entertainer`` melody.

```blocks
music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
```

### See also

[play tone](/reference/music/play-tone), [rest](/reference/music/rest), [ring tone](/reference/music/ring-tone) , [tempo](/reference/music/tempo), [set tempo](/reference/music/set-tempo), 
[change tempo by](/reference/music/change-tempo-by)

