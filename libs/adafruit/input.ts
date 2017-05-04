//% color="#B4009E" weight=99 icon="\uf192"
namespace input {
    /**
     * Senses the ambient color using the LED pixel next to the LED sensor.
     */
    //% help=input/ambient-color weight=75
    //% blockId=device_get_ambient_color block="ambient color" blockGap=8
    //% parts="rgbsensor" advanced=true
    export function ambientColor() : number {
        const LIGHT_SETTLE_MS = 100;
        const PIXEL = 1;
        // Save the current pixel color so it can later be restored.  Then bump
        // the brightness to max to make sure the LED is as bright as possible for
        // the color readings.
        const strip : light.NeoPixelStrip = light.pixels;
        const old_brightness = strip.brightness();
        const oldColor = strip.color(PIXEL);
        const bfr = strip.buffered();
        strip.setBuffered(true);
        strip.setBrightness(255);
        // Set pixel 1 (next to the light sensor) to full red, green, blue
        // color and grab a light sensor reading.  Make sure to wait a bit
        // after changing pixel colors to let the light sensor change
        // resistance!
        strip.setColor(PIXEL, Colors.Red);  // Red
        strip.show();
        loops.pause(LIGHT_SETTLE_MS);
        const red = input.lightLevel();

        strip.setColor(PIXEL, Colors.Green);  // Green
        strip.show();
        loops.pause(LIGHT_SETTLE_MS);
        const green = input.lightLevel();

        strip.setColor(PIXEL, Colors.Blue);  // Blue
        strip.show();
        loops.pause(LIGHT_SETTLE_MS);
        const blue = input.lightLevel();

        // Turn off the pixel and restore brightness, we're done with readings.
        strip.setColor(PIXEL, oldColor);
        strip.setBrightness(old_brightness);

        strip.setBuffered(bfr);
        return light.rgb(red, green, blue);
    }
}