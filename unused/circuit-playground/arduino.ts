/**
* Arduino functions
*/
//% color=#00979C weight=50
namespace pins {

}

/**
* Functions for playing audio / music
*/
//% color=#FF7D7D weight=75
namespace music {
}

namespace Math {
    /**
     * Constrain
     * Constrains a number to be within a range.
     * @param x the number to constrain, all data types
     * @param y the lower end of the range, all data types
     * @param z the upper end of the range, all data types
     * @returns x: if x is between a and b, a: if x is less than a, b: if x is greater than b
     */
    //% help=https://www.arduino.cc/en/Reference/Constrain weight=91
    //% blockId="arduino_constrain" block="constrain %amt| between %low| and %high" icon="\uf1ec"
    //% advanced=true
    export function constrain(amt: number, low: number, high: number): number {
        return 0; //amt < low ? low : amt > high ? high : amt;
    }


    /**
     * Map
     * Re-maps a number from one range to another. 
     * That is, a value of fromLow would get mapped to toLow, a value of fromHigh to toHigh, 
     * values in-between to values in-between, etc.
     * @param value the number to map
     * @param fromLow the lower bound of the value's current range
     * @param fromHigh the upper bound of the value's current range
     * @param toLow the lower bound of the value's target range
     * @param toHigh the upper bound of the value's target range
     * @returns The mapped value.
     */
    //% help=https://www.arduino.cc/en/Reference/Map weight=91
    //% blockId="arduino_map" block="map value %value| from range low %fromLow| high %fromHigh| to range low %toLow| high %toHigh|"
    //% advanced=true
    export function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
        return 0; // (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
    }
}

/**
* Arduino control functions
*/
//% color=#EEDA47 weight=80
namespace control {
    export function forever(action: Action) {
        while(true) {
            action();
        }
    }
}