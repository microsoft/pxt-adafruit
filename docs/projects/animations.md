# Animations

### ~avatar avatar

Show different animations using the Neopixels on the @boardname@!

### ~

## Step 1

Use ``[light.builtin.showAnimationFrame(light.rainbowCycleAnimation())]`` and make your code look like this:

```blocks
light.builtin.showAnimationFrame(light.rainbowCycleAnimation())
```

## Step 2

Put a [while loop](/reference/loops/while) around it, so it runs indefinitely. 

```blocks
control.forever(() => {
    light.builtin.showAnimationFrame(light.rainbowCycleAnimation())
})
```

```sim
control.forever(() => {
    light.builtin.showAnimationFrame(light.rainbowCycleAnimation())
})
```

Try some of the other animations: 

### Sparkle

```blocks
control.forever(() => {
    light.builtin.showAnimationFrame(light.sparkleAnimation())
})
```

### Color Wipe

```blocks
control.forever(() => {
    light.builtin.showAnimationFrame(light.colorWipeAnimation(light.colors(NeoPixelColors.Red)))
})
```

### Theatre Chase

```blocks
control.forever(() => {
    light.builtin.showAnimationFrame(light.theatreChaseAnimation())
})
```
