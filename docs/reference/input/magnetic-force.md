# Magnetic Force

Find the amount of magnetic force (the strength of a magnet) in the direction you say.

```sig
input.magneticForce(Dimension.X);
```

## ~hint

The micro:bit measures magnetic force with **microteslas**.

## ~


### Parameters

* a [string](/reference/types/string) that says which direction the micro:bit should measure magnetic force in: either `x` (the left-right direction), `y` (the forward/backward direction), or `z` (the up/down direction)

### Returns

* a [number](/reference/types/number) of microteslas that means the strength of the magnet

### Example: metal detector

This program makes the center LED of the micro:bit get brighter when
the magnetic force is stronger, and dimmer when it is weaker.

```blocks
led.plot(2, 2)
basic.forever(() => {
    let f = input.magneticForce(Dimension.X)
    led.setBrightness(f / 2000)
})
```

### See also

[compass heading](/reference/input/compass-heading)
