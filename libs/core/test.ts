let v0 = 0
let v1 = 0
input.rightButton.onEvent(ButtonEvent.Click, () => {
        pins.LED.digitalWrite(v0)
        v0 = v0 ? 0 : 1
})

input.leftButton.onEvent(ButtonEvent.Click, () => {
        pins.LEDTX.digitalWrite(v1)
        v1 = v1 ? 0 : 1
})

pins.LED.digitalWrite(1)

let i = 0
while (true) {
        if (input.rightButton.isPressed())
                pins.LEDTX.digitalWrite(1)
        else
                pins.LEDTX.digitalWrite(0)
        //let temp=0//input.temperature()
        //let light=0//input.lightLevel()
        //serial.writeLine(`T: ${temp}, L: ${light}`);
        basic.pause(100)
        //serial.writeLine(`A1: ${pins.A1.analogRead()}, L: ${pins.A2.analogRead()}`);
}
