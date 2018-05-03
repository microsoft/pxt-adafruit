# set Photon Hue

Change the color **hue** of the photon on the pixel strip.

```sig
light.setPhotonPenHue(0)
```

The photon effect is a pulse of bright light moving through a strip of colored pixels. You can change the color of the photon to whatever you want.

The color is a **hue** and not an _RGB_ number. This means that red light is `0` and red light is also `255`. All the other colors are between `0` and `255`. Color begins at red and ends up back at red.

One way to think about hue is that all the color numbers for hue are arranged on a wheel or circle. The values start at red and change to other colors as you go around the wheel. Moving along the outside edge of the wheel, the values increase until you finally reach red again.

## Parameters

* **hue**: a [number](/types/number) from 0 (red light) to 255 (red light again) for
the _hue_ of the color you want.
> Some standard numbers for hue are:
> * red - `0`
> * orange - `29`
> * yellow - `43`
> * green - `86`
> * aqua - `125`
> * blue - `170`
> * purple - `191`
> * magenta - `213`
> * pink - `234`
> * red - `255`

## ~hint

The hue value for a color is **not** the same as an RGB color value. Don't use an RGB number or the ``||light:rgb||`` block for **hue**.

## ~

## Example

Pulse an rainbow photon forward and backward across the pixel ring.

```blocks
let hue = 0;

forever(function() {
    light.setPhotonPenHue(hue)
    for (let i = 0; i < light.onboardStrip().length(); i++) {
        light.photonForward(1);
        pause(100);
    }
    light.photonFlip();
    hue = hue + 1;
});
```
## See also

[photon forward](/reference/light/photon-forward),
[photon flip](/reference/light/photon-flip),
[photon mode](/reference/light/set-photon-mode),
[rgb](/reference/light/rgb)

```package
circuit-playground
```

