# Drawings

### ~avatar avatar

Show different drawings using the Neopixels on the @boardname@!

### ~

## Step 1

Use [show Drawing](/reference/light/show-drawing) and make your code look like this:

```blocks
light.showDrawing(Drawing.Comet)
```

## Step 2

Put a [while loop](/reference/loops/while) around it, so it runs indefinitely. 

```blocks
while (true) {
    light.showDrawing(Drawing.Comet)
}
```

```sim
while (true) {
    light.showDrawing(Drawing.Comet)
}
```

Try some of the other drawings: 

### Comet

```blocks
while (true) {
    light.showDrawing(Drawing.Rainbow)
}
```

```sim
while (true) {
    light.showDrawing(Drawing.Rainbow)
}
```
