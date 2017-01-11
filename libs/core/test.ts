let v0 = 0
let v1 = 0
buttons.right.onPressed(() => {
        pins.LEDRX.digitalWrite(v0)
        v0 = v0 ? 0 : 1
})
buttons.left.onPressed(() => {
        pins.LEDTX.digitalWrite(v1)
        v1 = v1 ? 0 : 1
})

pins.LED.digitalWrite(1)

let i = 0
while (true) {
        if (buttons.slide.isPressed())
                pins.LED.digitalWrite(1)
        else
                pins.LED.digitalWrite(0)
        serial.writeValue("T", input.temperature());
        basic.pause(500);
}
