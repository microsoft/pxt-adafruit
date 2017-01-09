input.buttonA.onPressed(() => {
        pins.LEDRX.digitalWrite(0)
})
input.buttonB.onPressed(() => {
        pins.LEDTX.digitalWrite(0)
})

pins.LED.digitalWrite(1)

let i = 0
while (true) {
     serial.writeValue("X", i++);
     basic.pause(500);
}
