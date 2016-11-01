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
    export function color(c: Color): number {
        return c;
    }

    // what's the current high value
    let barGraphHigh = 0;
    // when was the current high value recorded
    let barGraphHighLast = 0;

    /**
     * Displays a vertical bar graph based on the `value` and `high` value.
     * If `high` is 0, the chart gets adjusted automatically.
     * @param value current value to plot
     * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0
     */
    //% weight=20
    //% blockId=bargraph block="bar graph of %value |up to %high" icon="\uf080"
    export function bargraph(value: number, high: number): void {
        const now = control.millis();
        value = Math.abs(value);

        if (high != 0) barGraphHigh = high;
        else if (value > barGraphHigh || now - barGraphHighLast > 10000) {
            barGraphHigh = value;
            barGraphHighLast = now;
        }

        barGraphHigh = Math.max(barGraphHigh, 1);

        const n = 10;
        const n1 = n - 1;
        const v = (value * n) / barGraphHigh;
        if (v == 0) {
            light.setPixelColor(0, 0x666600);
            for (let i = 1; i < n; ++i)
                light.setPixelColor(i, 0);
        } else {
            for (let i = 0; i < n; ++i) {
                if (i <= v) {
                    const b = i * 255 / n1 & 0xff;
                    light.setPixelColor(i, (b >> 16) | (255 - b));
                }
                else light.setPixelColor(i, 0);
            }
        }
    }
}
