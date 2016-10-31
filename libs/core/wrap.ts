/**
* Sensors
*/
//% color=#FE49C9 weight=99
namespace sensors {
}

/**
* Functions for playing audio / music
*/
//% color=#FFA702 weight=75
namespace music {
}

/**
* Functions to manipulate neopixels
*/
//% color=#00a7e9 weight=80
namespace light {
    /**
    * Gets a wellknown color
    */
    //% blockId="pixelcolor" block="%c"
    //% shim=TD_ID blockGap=8
    //% weight=5
    export function color(c: Color) : number {
        return c;
    }
}
