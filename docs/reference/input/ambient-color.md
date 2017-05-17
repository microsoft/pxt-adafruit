# ambient Color

Measure the **ambient** color of the LED pixel next to the light sensor.
The ambient color is an RGB value of the color detected.

```sig
input.ambientColor();
```
Ambient color is the color of light near or surrounding some spot. In this case, the colored
light is from the LED pixel near the light sensor. Ambient light (and its color) is like the
glow of a lamp shining in a dark room. Your eyes can detect the ambient light if you turn
on an light in a dark place.

## Returns

* a [number](/types/number) that is the ambient color level from ``0`` (black) to ``255`` (white).

## Example

When you press button `A` on the @boardname@, this
program plays a tone with a pitch that matches the current ambient color.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, () => {
    music.playTone(input.ambientColor(), 2000)
})
```

## See also

[``||light level||``](/reference/input/light-level)

