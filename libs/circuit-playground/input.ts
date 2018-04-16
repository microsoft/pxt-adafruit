//% color="#B4009E" weight=99 icon="\uf192"
namespace input {
    /**
     * Sense the ambient color using the LED pixel next to the LED sensor.
     */
    //% help=input/ambient-color
    //% blockId=device_get_ambient_color block="ambient color"
    //% parts="rgbsensor"
    //% weight=29 blockGap=8
    export function ambientColor(): number {
        const LIGHT_SETTLE_MS = 100;
        const PIXEL = 1;
        // Save the current pixel color so it can later be restored.  Then bump
        // the brightness to max to make sure the LED is as bright as possible for
        // the color readings.
        const strip: light.NeoPixelStrip = light.pixels;
        const oldBrightness = strip.brightness();
        const oldColor = strip.pixelColor(PIXEL);
        const oldBuffered = strip.buffered();
        strip.setBuffered(true);
        strip.setBrightness(255);
        // Set pixel 1 (next to the light sensor) to full red, green, blue
        // color and grab a light sensor reading.  Make sure to wait a bit
        // after changing pixel colors to let the light sensor change
        // resistance!
        strip.setPixelColor(PIXEL, Colors.Red);  // Red
        strip.show();
        pause(LIGHT_SETTLE_MS);
        const red = input.lightLevel();

        strip.setPixelColor(PIXEL, Colors.Green);  // Green
        strip.show();
        pause(LIGHT_SETTLE_MS);
        const green = input.lightLevel();

        strip.setPixelColor(PIXEL, Colors.Blue);  // Blue
        strip.show();
        pause(LIGHT_SETTLE_MS);
        const blue = input.lightLevel();

        // Turn off the pixel and restore brightness, we're done with readings.        
        strip.setBrightness(oldBrightness);
        strip.setPixelColor(PIXEL, oldColor);
        strip.show();
        strip.setBuffered(oldBuffered);

        // find the closest known color to make it easier to handle the scanned color
        let c = 0;
        let mind = -1;
        const colors = [
            Colors.Red,
            Colors.Green,
            Colors.Blue,
            Colors.Yellow,
            Colors.White
        ];
        for(let i =0; i < colors.length; ++i) {
            const kc = colors[i];
            const dr = red - ((kc >> 16) & 0xFF);
            const dg = green - ((kc >> 8) & 0xFF);
            const db = blue - (kc & 0xff);
            let d = (dr*dr) + (dg*dg) + (db*db);
            if(mind < 0 || d < mind) {
                mind = d;
                c = kc;
            }
        }
        return c;
    }
}