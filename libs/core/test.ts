while (true) {
    pins.digitalWritePin(DigitalPin.LED, 1)
    pins.digitalWritePin(DigitalPin.LEDTX, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.LED, 0)
    pins.digitalWritePin(DigitalPin.LEDTX, 0)
    basic.pause(1000)
}
