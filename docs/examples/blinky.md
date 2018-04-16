# Blinky

Flash the LEDs every half second.

https://youtu.be/ByuLe_lMHUU

```blocks
forever(() => {
    light.showRing(
    `red red red red red red red red red red`
    )
    pause(500)
    light.showRing(
    `black black black black black black black black black black`
    )
    pause(500)
})
```

```package
circuit-playground
```