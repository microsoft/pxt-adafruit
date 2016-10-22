// here we go!

//playground.redLED(true)

serial.print(254);

neopixels.setPixelColorRgb(3, 0, 50, 0);

// let x = 1

// x = x + 1

/*
while (true) {
    if (playground.leftButton()) {
        playground.redLED(true)
    }
    if (playground.rightButton()) {
        playground.redLED(false)
    }
}
*/

/**
* Runtime and event utilities.
*/
//% weight=1 color="#333333"
//% advanced=true
namespace control {

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    export function panic(code: number) { }
}
