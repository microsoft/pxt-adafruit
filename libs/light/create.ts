// Overriding the createStrip function here to place it into the "NeoPixel" subcategory

namespace light {
    /**
     * Create a new programmable light strip.
     * @param pin the pin where the neopixel is connected, eg: pins.A1
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     * @param mode the light encoding mode for different LED strips, eg: NeoPixelMode.RGB_GRB
     */
    //% blockId="neopixel_create_strip" block="create strip|on %pin|with %numleds|pixels"
    //% help="light/create-strip"
    //% trackArgs=0,2
    //% parts="neopixel"
    //% weight=100 blockGap=8
    //% subcategory="NeoPixel"
    export function createStrip(
        pin: DigitalPin = null,
        numleds: number = 10,
        mode: NeoPixelMode = NeoPixelMode.RGB
    ): NeoPixelStrip {
        return light.createNeoPixelStrip(pin, numleds, mode);
    }
}