# Light

Light up pixels on the NeoPixel ring. Show light effects and animations.

## The NeoPixel ring

```cards
light.showRing('')
light.showAnimation(null, 500)
light.showAnimationFrame(null)
light.stopAllAnimations()
light.animation(0)
light.graph(0, 0)
light.setAll(0)
light.setBrightness(0)
light.setPixelColor(0,0)
light.clear()
light.pixelColor(0)
light.onboardStrip()
```

## Photons

```cards
light.photonForward(0)
light.photonFlip()
light.setPhotonPosition(0)
light.setPhotonPenHue(0)
light.setPhotonMode(PhotonMode.PenUp)
```

## Colors

```cards
light.rgb(255, 255, 255)
light.hsv(255, 255, 255)
light.colors(Colors.Red)
light.fade(0, 0)
```

## External NeoPixel strips

```cards
light.createStrip(null,0,0)
```

## See also

[show ring](/reference/light/show-ring), [onboard strip](/reference/light/onboard-strip),
[default pin](/reference/light/default-pin),
[showAnimation](/reference/light/show-animation), [showAnimationFrame](/reference/light/show-animation-frame),
[stopAllAnimations](/reference/light/stop-all-animations), [animation](/reference/light/animation),
[graph](/reference/light/graph), [setAll](/reference/light/set-all),
[setBrightness](/reference/light/set-brightness),
[setPixelColor](/reference/light/set-pixel-color), [clear](/reference/light/clear),
[pixelColor](/reference/light/pixel-color),
[photonForward](/reference/light/photon-forward),
[photonFlip](/reference/light/photon-flip),
[setPhotonPenHue](/reference/light/set-photon-pen-hue),
[setPhotonMode](/reference/light/set-photon-mode), [rgb](/reference/light/rgb),
[hsv](/reference/light/hsv), [colors](/reference/light/colors),
[fade](/reference/light/fade), [create strip](/reference/light/create-strip)

```package
circuit-playground
```
