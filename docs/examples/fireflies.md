# Fireflies

```blocks
let clock = 0
forever(() => {
    // if clock hits noon, flash the screen
    if (clock >= 8) {
        // notify neighbors
        light.setAll(0xffffff)
        pause(200)
        light.clear()
        // reset the clock
        clock = 0
    } else {
        // just wait a bit
        pause(100)
        // increment the clock
        clock += 1
    }
})
input.onLightConditionChanged(LightCondition.Bright, () => {
    // don't play sound while flashing
    if (clock < 8) {
        music.jumpUp.play()
        // advance clock to catch up neighbors
        clock += 1
    }
})
// setup flash detection
input.setLightThreshold(LightCondition.Bright, 40)
light.setBrightness(255)
```