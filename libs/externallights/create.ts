// Create a new createStrip function that calls the underlying (hidden) createNeoPixelStrip function in order to move it under the External subcategory

namespace light {
    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create_strip" block="create strip|on %pin|with %numleds|pixels"
    //% help="light/create-neo-pixel-strip"
    //% trackArgs=0,2
    //% parts="neopixel"
    //% subcategory="External" weight=100
    export function createStrip(
        pin: DigitalPin = null,
        numleds: number = 10,
        mode?: NeoPixelMode
    ): NeoPixelStrip {
        return light.createNeoPixelStrip(pin, numleds, mode);
    }
}