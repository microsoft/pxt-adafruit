# Animation Shaker

Shake your @boardname@ to play a random animation.

```blocks
let r = 0
input.onGesture(Gesture.Shake, () => {
    r = Math.randomRange(0, 4)
    if (r == 0) {
        light.showAnimation(light.runningLightsAnimation, 2000)
    } else if (r == 1) {
        light.showAnimation(light.rainbowAnimation, 2000)
    } else if (r == 2) {
        light.showAnimation(light.cometAnimation, 2000)
    } else {
        light.showAnimation(light.theaterChaseAnimation, 2000)
    }
})
```

```package
circuit-playground
```