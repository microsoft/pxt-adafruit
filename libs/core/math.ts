namespace Math {    
    /**
     * Re-maps a number from one range to another. That is, a value of ``from low`` would get mapped to ``to low``, a value of ``from high`` to ``to high``, values in-between to values in-between, etc.
     * @param value value to map in ranges
     * @param fromLow the lower bound of the value's current range
     * @param fromHigh the upper bound of the value's current range, eg: 1023
     * @param toLow the lower bound of the value's target range
     * @param toHigh the upper bound of the value's target range, eg: 4
     */
    //% help=math/map weight=23 blockGap=8 advanced=true
    //% blockId=math_map block="map %value|from low %fromLow|from high %fromHigh|to low %toLow|to high %toHigh"
    export function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
        return ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow) + toLow;
    }    

    /**
     * Constrains a number to be within a range
     * @param x the number to constrain, all data types
     * @param y the lower end of the range, all data types
     * @param z the upper end of the range, all data types
     */
    //% help=math/constrain weight=22 advanced=true
    //% blockId="math_constrain_value" block="constrain %value|between %low|and %high"
    export function constrain(value: number, low: number, high: number): number {
        return value < low ? low : value > high ? high : value;
    }
    
    /**
     * Returns the sine of an input angle. This is an approximation. 
     * @param theta input angle from 0-65535
     */
    export function sin(theta: number) {
        //reference: based on FASTLed's sin approximation method: [https://github.com/FastLED/FastLED](MIT)
        const base: number[] = [0, 6393, 12539, 18204, 23170, 27245, 30273, 32137];
        const slope: number[] = [49, 48, 44, 38, 31, 23, 14, 4];
        let offset = (theta & 0x3FFF) >> 3; // 0..2047
        if( theta & 0x4000 ) offset = 2047 - offset;

        let section = offset / 256; //0..7
        let b = base[section];
        let m = slope[section];

        let sectionoff8 = offset / 2;
        let mx = m * sectionoff8;
        let y = mx + b;

        if (theta & 0x8000) y = -y;

        return y;
    }

    /**
     * Returns the cosine of an input angle. This is an approximation. 
     * @param theta input angle from 0-65535
     */
    export function cos(theta: number) {
        return sin(theta + 16384);
    }
}