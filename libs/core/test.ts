let i = 0
let strip = neopixel.create()
strip.setBrigthness(20)
strip.showRainbow()
while (true) {
    pins.LED.digitalWrite(1)
    pins.LEDTX.digitalWrite(1)
    basic.pause(1000)
    pins.LED.digitalWrite(0)
    pins.LEDTX.digitalWrite(0)
    pins.A0.digitalWrite(1)
    basic.pause(1000)
    serial.writeValue("i", i++)
    strip.rotate(1)
    strip.show()
}
