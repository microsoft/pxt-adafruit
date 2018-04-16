# show Ring

Show a ring of pixels that match the colors in a list.

```sig
light.showRing('')

```
You can set some or all of the colors in the pixel ring with a list. The list is a [string](/types/string) with
the names of the colors you want for each the pixel. To set half the pixels to blue and the other half to yellow,
you make a color list this way:

```typescript
 'blue blue blue blue blue yellow yellow yellow yellow yellow'
```
The ring will have the colors assigned to each pixel like you see here:
```block
light.showRing("blue blue blue blue blue yellow yellow yellow yellow yellow")
```

When you put two or more ``||light:show ring||`` blocks together, your program will pause before showing the next one.
This gives you time to see each ring change.

## Parameters

* **colors**: a [string](/types/string) with the list of colors for the pixels in the ring.
* **interval**: the amount of time the program waits before showing the next pixel ring (if there is one), in milliseconds.

## Examples

### Stripe ring

Show the a pixel ring with red, blue, and green stripes.

```blocks
light.showRing("red blue green blue red red blue green blue red")
```
### Switch rings

Make two pixel rings that switch colors repeatedly.

```blocks
forever(() => {
    light.showRing("red blue red blue red blue red blue red blue")
    light.showRing("blue red blue red blue red blue red blue red")
})
```

## See Also

[``||show animation||``](/reference/light/show-animation)

```package
circuit-playground
```
