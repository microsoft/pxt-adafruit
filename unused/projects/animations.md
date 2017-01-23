# Animations

### ~avatar avatar

Show different animations using the Neopixels on the @boardname@!

### ~

## Step 1

Use [show Animation](/reference/light/show-animation) and make your code look like this:

```blocks
light.showAnimation(Animation.RainbowCycle)
```

## Step 2

Put a [while loop](/reference/loops/while) around it, so it runs indefinitely. 

```blocks
while (true) {
    light.showAnimation(Animation.RainbowCycle)
}
```

```sim
while(true){
    light.showAnimation(Animation.RainbowCycle)
}
```

Try some of the other animations: 

### Classic Rainbow

```blocks
while(true){
    light.showAnimation(Animation.ClassicRainbow)
}
```

```sim
while(true){
    light.showAnimation(Animation.ClassicRainbow)
}
```

### Sparkle

```blocks
while(true){
    light.showAnimation(Animation.Sparkle)
}
```

```sim
while(true){
    light.showAnimation(Animation.Sparkle)
}
```

### Color Wipe

```blocks
while(true){
    light.showAnimation(Animation.ColorWipe)
}
```

```sim
while(true){
    light.showAnimation(Animation.ColorWipe)
}
```

### Theatre Chase

```blocks
while(true){
    light.showAnimation(Animation.TheatreChase)
}
```

```sim
while(true){
    light.showAnimation(Animation.TheatreChase)
}
```