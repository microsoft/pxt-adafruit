# Light counter

A 2-digit counter (values are 0 - 99) that uses the LED lights. The LEDs on the ring represent digits `0` to `9` in the counterclockwise direction. Press `A` to count up or press `B` to count down.

A **red** LED shows the value of the _ones_ digit and a **green** LED shows the value of the _tens_ digit. When both the ones digit and the tens digit are the same, a single **blue** LED is shown.

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
        isTen = (i == tens) && (i > 0)
        if (isTen && isDigit) {
            light.setPixelColor(i, 0x0000ff)
        } else if (isTen) {
            light.setPixelColor(i, 0x00ff00)
        } else if (isDigit) {
            light.setPixelColor(i, 0xff0000)
        }
    }
}
input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (count < 99) {
        count += 1
    }
    render()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (count > 0) {
        count += -1
    }
    render()
})
render()
```