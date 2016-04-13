let strip = neopixel.create(DigitalPin.P0, 24);
let br = 100;
strip.setBrigthness(100);
input.onButtonPressed(Button.B, () => {
    br = br + 20;
    if (br > 255) {
        br = 5;
    }
    strip.setBrigthness(br);
});

let rotationMode = false;
input.onButtonPressed(Button.A, () => {
    rotationMode = !rotationMode;
    if (rotationMode) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `);
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `);

    }
});

while (true) {
    let x = input.acceleration(Dimension.X) / 2
    let y = input.acceleration(Dimension.Y) / 2
    let z = input.acceleration(Dimension.Z) / 2
    if (rotationMode) {
        strip.rotate();
    } else {
        strip.setPixelColor(0, x, y, -z);
        strip.shift(1);
    }
    strip.show();
    basic.pause(100);
}
