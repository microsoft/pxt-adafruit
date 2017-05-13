# Animaton Shaker

Shake your @boardname@ to play a random animation.

```blocks
let r = 0
input.onGesture(Gesture.Shake, () => {
    r = Math.random(4)
    if (r == 0) {
        light.pixels.showAnimation(LightAnimation.RunningLights, 2000)
    } else if (r == 1) {
        light.pixels.showAnimation(LightAnimation.Rainbow, 2000)
    } else if (r == 2) {
        light.pixels.showAnimation(LightAnimation.Comet, 2000)
    } else {
        light.pixels.showAnimation(LightAnimation.TheaterChase, 2000)
    }
})
```

```package
light
```