while (true) {
    pins.digitalWritePin(DigitalPin.LED, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.LED, 0)
    basic.pause(1000)
}
