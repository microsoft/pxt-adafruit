# Level

```blocks
loops.forever(() => {
    if (Math.abs(input.acceleration(Dimension.X)) + Math.abs(input.acceleration(Dimension.X)) < 64) {
        light.pixels.setAll(Colors.Green)
    } else {
        light.pixels.setAll(Colors.Blue)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
})
```

```package
light
music
```