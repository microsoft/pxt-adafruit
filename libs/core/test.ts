input.buttonA.onPressed(() => {
        pins.LEDRX.digitalWrite(0)
})
input.buttonB.onPressed(() => {
        pins.LEDTX.digitalWrite(0)
})

pins.LED.digitalWrite(1)
