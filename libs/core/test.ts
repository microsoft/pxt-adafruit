input.buttonA.onPressed(() => {
        pins.LEDTX.digitalWrite(0)
})
input.buttonB.onPressed(() => {
        pins.LEDTX.digitalWrite(0)
})

let i = 0
let strip = neopixel.create()
strip.setBrigthness(20)
strip.showRainbow()
while (true) {
    pins.LED.digitalWrite(1)
    basic.pause(100)
    pins.LED.digitalWrite(0)
    pins.A0.digitalWrite(1)
    basic.pause(100)
    // serial.writeValue("i", i++)
    strip.rotate(1)
    strip.show()
}

