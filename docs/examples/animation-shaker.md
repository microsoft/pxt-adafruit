# Animaton Shacker

Shake your @boardname@ to play a random animation.

```blocks
let animation: light.NeoPixelAnimation = null
let r = 0
input.onGesture(Gesture.Shake, () => {
    r = Math.random(4)
    if (r == 0) {
        animation = light.cometAnimation()
    } else if (r == 1) {
        animation = light.rainbowCycleAnimation()
    } else if (r == 2) {
        animation = light.colorWipeAnimation(Colors.Red)
    } else {
        animation = light.sparkleAnimation()
    }
    for (let i = 0; i < 60; i++) {
        light.pixels.showAnimationFrame(animation)
        loops.pause(20)
    }
    light.pixels.clear()
    light.pixels.show()
})
```