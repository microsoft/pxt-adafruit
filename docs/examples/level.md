# Level

Try to keep the @boardname@ level. If it tilts, it will let you know.

```blocks
forever(() => {
    if (Math.abs(input.acceleration(Dimension.X)) + Math.abs(input.acceleration(Dimension.X)) < 64) {
        light.showRing(
        `green green green green green green green green green green`
        )
        pause(100)
    } else {
        light.showRing(
        `black blue black blue black black blue black blue black`
        )
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
})
```

```package
light
music
```