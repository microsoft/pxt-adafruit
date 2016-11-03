/**
* Runtime and event utilities.
*/
//% weight=90 color="#EEDA47"
//% advanced=true
namespace control {

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    export function panic(code: number) { }

}

/*
while (true) {
    if (sensors.button(Button.Left)) {
        let i = 9;
        let v = 255
        while (i >= 0) {
            light.setPixelColorRgb(i, v, 255 - v, v)
            i = i - 1
            v = v - 25
        }
    } else if (sensors.button(Button.Right)) {
            light.clearPixels()
    }
}
*/
