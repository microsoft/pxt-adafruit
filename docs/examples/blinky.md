# Blinky

Flash the LEDs every half second.

https://youtu.be/ByuLe_lMHUU

```blocks
loops.forever(() => {
    light.showRing(
    `red red red red red red red red red red`
    )
    loops.pause(500)
    light.showRing(
    `black black black black black black black black black black`
    )
    loops.pause(500)
})
```

```packages
light
```