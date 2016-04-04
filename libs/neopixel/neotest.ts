basic.showLeds(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `)
console.log("Start")

// Create a NeoPixel driver - specify the number of LEDs:
let strip = neopixel.create(7);

// If your strip is not at P0, specify the pin.
strip.setPin(DigitalPin.P0)

// Brightness defaults to 255 (very bright); 0 is completely off.
strip.setBrigthness(20)

// Set pixels - pixel number, followed by red, green and blue values, between 0 and 255.
strip.setPix(0, 255, 255, 255);
strip.setPix(1, 0, 255, 255);
strip.setPix(2, 255, 0, 255);
strip.setPix(3, 255, 255, 0);

console.log("Send!")

// Send the image to the strip.
strip.display();
basic.pause(500);

console.log("Sent!")

// Green light travelling the strip:
for (let l = 0; l < strip.length(); l++) {
    strip.clear();
    strip.setPix(l, 0, 255, 0);
    strip.display();
    basic.pause(100);
}

let special = false;
let numcol = 0;
input.onButtonPressed(Button.A, () => {
    special = true;
    let r = 0;
    let g = 0;
    let b = 0;
    if (numcol == 0) {
        r = 255;
        g = 255;
        b = 255;
    } else if (numcol == 1) {
        r = 255;
    } else if (numcol == 2) {
        b = 255;
    } else if (numcol == 3) {
        r = 255;
        g = 255;
    } else if (numcol == 4) {
        r = 10;
        g = 10;
        b = 10;
    }
    numcol = (numcol + 1) % 5;
    for (let k = 0; k < 7; k++) {
        strip.setPix(k, r, g, b);
    }
    strip.display();
});

control.inBackground(() => {
    for (let j = 0; j < 2000000; j++) {
        if (special) {
            basic.pause(100);
            continue;
        }
        let r1 = (0 + j * 2) & 63;
        let g1 = (20 + j * 1) & 63;
        let b1 = (30 + j * 3) & 63;
        for (let i = 0; i < strip.length(); i++) {
            strip.setPix(i, (r1 - i) * 20, (g1 - i) * 20, (b1 - i) * 20);
        }
        strip.display()
        basic.pause(60);
    }
});

control.inBackground(() => {
    while (true) {
        basic.showString("XMAS!", 150);
    }
});
