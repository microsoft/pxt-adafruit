let mode = -1

function blink(idx: number, color: number) {
    light.setPixelColor(idx, color)
    loops.pause(20)
    light.setPixelColor(idx, 0)
    loops.pause(10)
}

function switchMode() {
    mode++
    if (mode > 3) mode = 0
    if (mode == 1) setButtonsLights()
    if (mode == 2) setButtonsSound()
    light.clear()
    for (let i = 0; i < 5; ++i) {
        blink(mode, Colors.Blue)
    }
}

function setButtonsLights() {
    let pins = [input.buttonB, input.buttonsAB,
    input.pinA1, input.pinA2, input.pinA3, input.pinA4, input.pinA5, input.pinA6, input.pinA7]
    let leds = [7, 2, 6, 8, 9, 0, 1, 3, 4]
    for (let i = 0; i < pins.length; ++i) {
        let ii = i
        pins[i].onEvent(ButtonEvent.Click, () => {
            if (mode == 1)
                blink(leds[ii], Colors.Green)
        })
    }
}

function setButtonsSound() {
    input.buttonB.onEvent(ButtonEvent.Click, () => {
        music.playSound(music.sounds(Sounds.MagicWand))
    })
    input.pinA1.onEvent(ButtonEvent.Click, () => {
        music.playSound(music.sounds(Sounds.PowerUp))
    })
}

function main() {
    input.buttonA.onEvent(ButtonEvent.Click, switchMode)

    input.onGesture(Gesture.Shake, () => {
        if (mode == 0)
            light.showAnimation(light.rainbowAnimation, 2000)
    })

    switchMode()
}

main()
