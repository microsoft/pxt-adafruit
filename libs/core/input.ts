namespace input {
    /**
     * Senses the ambient color using the LED pixel next to the LED sensor.
     */
    //% help=input/ambient-color weight=75
    //% blockId=device_get_ambient_color block="ambient color" blockGap=8
    //% parts="lightsensor"
    export function ambientColor() : number {
        const LIGHT_SETTLE_MS = 100;
        const PIXEL = 1;
        // Save the current pixel color so it can later be restored.  Then bump
        // the brightness to max to make sure the LED is as bright as possible for
        // the color readings.
        const strip : light.NeoPixelStrip = light.builtin;
        const old_brightness = strip.brightness();
        const oldColor = strip.pixelColor(PIXEL);
        strip.setBrightness(255);
        // Set pixel 1 (next to the light sensor) to full red, green, blue
        // color and grab a light sensor reading.  Make sure to wait a bit
        // after changing pixel colors to let the light sensor change
        // resistance!
        strip.setPixelColor(1, 0xff0000);  // Red
        control.pause(LIGHT_SETTLE_MS);
        const raw_red = input.lightLevel();
        strip.setPixelColor(1, 0x00ff00);  // Green
        control.pause(LIGHT_SETTLE_MS);
        const raw_green = input.lightLevel();
        strip.setPixelColor(1, 0x00000ff);  // Blue
        control.pause(LIGHT_SETTLE_MS);
        const raw_blue = input.lightLevel();
        // Turn off the pixel and restore brightness, we're done with readings.
        strip.setPixelColor(PIXEL, 0);
        strip.setBrightness(old_brightness);
        // Now scale down each of the raw readings to be within
        // 0 to 255.  Remember each sensor reading is from the ADC
        // which has 10 bits of resolution (0 to 1023), so dividing
        // by 4 will change the range from 0-1023 to 0-255.  Also
        // use the min function to clamp the value to 255 at most (just
        // to prevent overflow from 255.xx to 0).
        const red = Math.min(255, raw_red / 4);
        const green = Math.min(255, raw_green/4);
        const blue = Math.min(255, raw_blue/4);

        return light.rgb(red, green, blue);
    }
}