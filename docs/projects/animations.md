# Animations

### ~avatar avatar

Show different animations using the Neopixels on the @boardname@!

### ~

## Step 1

Use ``[light.pixels.showAnimationFrame(light.rainbowCycleAnimation())]`` and make your code look like this:

```blocks
light.pixels.showAnimationFrame(light.rainbowCycleAnimation())
```

## Step 2

Put a [while loop](/blocks/loops/while) around it, so it runs indefinitely. 

```blocks
control.forever(() => {
    light.pixels.showAnimationFrame(light.rainbowCycleAnimation())
})
```

```sim
control.forever(() => {
    light.pixels.showAnimationFrame(light.rainbowCycleAnimation())
})
```

Try some of the other animations: 

### Sparkle

```blocks
control.forever(() => {
    light.pixels.showAnimationFrame(light.sparkleAnimation())
})
```

### Color Wipe

```blocks
control.forever(() => {
    light.pixels.showAnimationFrame(light.colorWipeAnimation(light.colors(NeoPixelColors.Red)))
})
```

### Theatre Chase

```blocks
control.forever(() => {
    light.pixels.showAnimationFrame(light.theatreChaseAnimation())
})
```
