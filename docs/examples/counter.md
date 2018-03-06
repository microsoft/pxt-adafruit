# Light counter

A counter that uses the LED lights.

```blocks
let isTen = false
let isDigit = false
let tens = 0
let digits = 0
let count = 0
function render() {
    music.playTone(262 + count * 50, music.beat(BeatFraction.Quarter))
    digits = count % 10
    tens = (count - digits) / 10
    light.clear()
    for (let i = 0; i <= 9; i++) {
        isDigit = i == digits
        isTen = i + 1 == tens
        if (isTen && isDigit) {
            light.setPixelColor(i, Colors.Purple)
        } else if (isTen) {
            light.setPixelColor(i, Colors.Blue)
        } else if (isDigit) {
            light.setPixelColor(i, Colors.Red)
        }
    }
}
input.buttonB.onEvent(ButtonEvent.Click, function () {
    count += 1
    render()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    count += -1
    if (count < 0) {
        count = 0
    }
    render()
})
render()
```