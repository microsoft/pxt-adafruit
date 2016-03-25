# Light Level

Gets the light level from ``0`` (dark) to ``255`` (bright). The light is measured by using various LEDs from the screen.

This function will return ``0`` on the first call to this method, a light reading will be available after the display has activated the light sensor for the first time.

```sig
input.lightLevel();
```

### Returns

* [Number](/microbit/reference/types/number) -  light level from ``0`` (dark) to ``255`` (bright).

### Example: chart light level

Use `plot bar chart` to visual the influence of various light source on the light level.

```blocks
basic.forever(() => {
    led.plotBarGraph(input.lightLevel(), 255)
})
```

### Lessons

### See also

[acceleration](/microbit/reference/input/acceleration), [compass-heading](/microbit/input/compass-heading)

