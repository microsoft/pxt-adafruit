while (true) {
    pins.LED.digitalWrite(1)
    pins.LEDTX.digitalWrite(1)
    basic.pause(1000)
    pins.LED.digitalWrite(0)
    pins.LEDTX.digitalWrite(0)
    pins.A0.digitalWrite(1)
    basic.pause(1000)
}
