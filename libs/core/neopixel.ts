/**
 * Well known colors for a NeoPixel strip
 */
enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF
}

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 1,
    //% block="RGB+W"
    RGBW = 2,
    //% block="RGB (RGB format)"
    RGB_RGB = 3
}

/**
 * Functions to operate NeoPixel strips.
 */
//% weight=5 color=#2699BF
namespace neopixel {
    /**
     * A NeoPixel strip
     */
    //% autoCreate=neopixel.create
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b).
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|show color %rgb=neopixel_colors"
        //% weight=85 blockGap=8
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        showColor(rgb: number) {
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Shows a rainbow pattern on all LEDs.
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|show rainbow from %startHue|to %endHue"
        //% weight=85 blockGap=8
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        showRainbow(startHue: number = 1, endHue: number = 360) {
            let start = neopixel.hsl(startHue, 100, 50);
            let end = neopixel.hsl(endHue, 100, 50);
            let colors = neopixel.interpolateHSL(start, end, this._length, HueInterpolationDirection.Clockwise);
            for (let i = 0; i < colors.length; i++) {
                let hsl = colors[i];
                let rgb = hsl.toRGB();
                this.setPixelColor(i, rgb)
            }
            this.show();
        }

        /**
         * Displays a vertical bar graph based on the `value` and `high` value.
         * If `high` is 0, the chart gets adjusted automatically.
         * @param value current value to plot
         * @param high maximum value, eg: 255
         */
        //% weight=84
        //% blockId=neopixel_show_bar_graph block="%strip|show bar graph of %value |up to %high" icon="\uf080" blockExternalInputs=true
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        showBarGraph(value: number, high: number): void {
            if (high <= 0) {
                this.clear();
                this.setPixelColor(0, NeoPixelColors.Yellow);
                this.show();
                return;
            }

            value = Math.abs(value);
            const n = this._length;
            const n1 = n - 1;
            let v = (value * n) / high;
            if (v == 0) {
                this.setPixelColor(0, 0x666600);
                for (let i = 1; i < n; ++i)
                    this.setPixelColor(i, 0);
            } else {
                for (let i = 0; i < n; ++i) {
                    if (i <= v) {
                        let b = i * 255 / n1;
                        this.setPixelColor(i, neopixel.rgb(b, 0, 255 - b));
                    }
                    else this.setPixelColor(i, 0);
                }
            }
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b).
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb=neopixel_colors"
        //% blockGap=8
        //% weight=80
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset, rgb);
        }

        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        //% blockId="neopixel_set_pixel_white" block="%strip|set pixel white LED at %pixeloffset|to %white"
        //% blockGap=8
        //% weight=80
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        setPixelWhiteLED(pixeloffset: number, white: number): void {
            if (this._mode === NeoPixelMode.RGBW) {
                this.setPixelW(pixeloffset, white);
            }
        }

        /**
         * Send all the changes to the strip.
         */
        //% blockId="neopixel_show" block="%strip|show" blockGap=8
        //% weight=79
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        show() {
            basic.pause(1)
            sendBuffer(this.pin, this.buf);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="neopixel_clear" block="%strip|clear"
        //% weight=76
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="neopixel_length" block="%strip|length" blockGap=8
        //% weight=60 advanced=true
        //% defaultInstance=neopixel.builtin
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        //% weight=59
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        setBrigthness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="neopixel_each_brightness" block="%strip|ease brightness" blockGap=8
        //% weight=58
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        easeBrightness(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            const br = this.brightness;
            const buf = this.buf;
            const end = this.start + this._length;
            const mid = this._length / 2;
            for (let i = this.start; i < end; ++i) {
                const k = i - this.start;
                const ledoffset = i * stride;
                const br = k > mid ? 255 * (this._length - 1 - k) * (this._length - 1 - k) / (mid * mid) : 255 * k * k / (mid * mid);
                serial.writeLine(k + ":" + br);
                const r = (buf[ledoffset + 0] * br) >> 8; buf[ledoffset + 0] = r;
                const g = (buf[ledoffset + 1] * br) >> 8; buf[ledoffset + 1] = g;
                const b = (buf[ledoffset + 2] * br) >> 8; buf[ledoffset + 2] = b;
                if (stride == 4) {
                    const w = (buf[ledoffset + 3] * br) >> 8; buf[ledoffset + 3] = w;
                }
            }
        }

        /**
         * Create a range of LEDs.
         * @param start offset in the LED strip to start the range
         * @param length number of LEDs in the range. eg: 4
         */
        //% weight=89
        //% blockId="neopixel_range" block="%strip|range from %start|with %length|leds"
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        range(start: number, length: number): Strip {
            let strip = new Strip();
            strip.buf = this.buf;
            strip.pin = this.pin;
            strip.brightness = this.brightness;
            strip.start = this.start + Math.clamp(0, this._length - 1, start);
            strip._length = Math.clamp(0, this._length - (strip.start - this.start), length);
            return strip;
        }

        /**
         * Shift LEDs forward and clear with zeros.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to shift forward, eg: 1
         */
        //% blockId="neopixel_shift" block="%strip|shift pixels by %offset" blockGap=8
        //% weight=40
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        shift(offset: number = 1): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Rotate LEDs forward.
         * You need to call ``show`` to make the changes visible.
         * @param offset number of pixels to rotate forward, eg: 1
         */
        //% blockId="neopixel_rotate" block="%strip|rotate pixels by %offset" blockGap=8
        //% weight=39
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        rotate(offset: number = 1): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
        }

        /**
         * Set the pin where the neopixel is connected.
         */
        //% weight=10
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            this.pin.digitalWrite(0)
            basic.pause(50)
        }

        /**
         * Set the lenth of the strip.
         */
        //% weight=10
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        setLength(numleds: number): void {
            this._length = numleds;
            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf = pins.createBuffer(numleds * stride);
        }

        /**
         * Set the lenth of the strip.
         */
        //% weight=10
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        setMode(mode: NeoPixelMode): void {
            this._mode = mode;
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="NeoPixel at pin %pin|with %numleds|leds as %mode"
    //% weight=90 blockGap=8 advanced
    //% parts="neopixel"
    //% trackArgs=0,2
    export function create(
        pin: DigitalPin = null,
        numleds: number = 10,
        mode?: NeoPixelMode
    ): Strip {
        if (!mode)
            mode = NeoPixelMode.RGB
        if (!pin)
            pin = defaultPin() || pins.D0
        let strip = new Strip();
        strip.setMode(mode)
        strip.setLength(numleds)
        strip.setBrigthness(255)
        strip.setPin(pin)
        strip.start = 0;
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8
    //% blockId="neopixel_colors" block="%color"
    //% advanced=true
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }

    /**
     * A HSL (hue, saturation, luminosity) format color
     */
    export class HSL {
        h: number;
        s: number;
        l: number;
        constructor(h: number, s: number, l: number) {
            this.h = h % 360;
            this.s = Math.clamp(0, 99, s);
            this.l = Math.clamp(0, 99, l);
        }

        /**
         * Shifts the hue of a HSL color
         * @param hsl the HSL (hue, saturation, lightness) color
         * @param offset value to shift the hue channel by; hue is between 0 and 360. eg: 10
         */
        //% weight=1
        //% blockId="neopixel_rotate_hue" block="shift %hsl| hue by %offset"
        //% advanced=true
        rotateHue(offset: number): void {
            this.h = (this.h + offset) % 360;
        }

        /**
         * Converts from an HSL (hue, saturation, luminosity) format color to an RGB (red,
         * green, blue) format color. Input ranges h between [0,360], s between
         * [0, 100], and l between [0, 100], and output r, g, b ranges between [0,255]
        */
        //% weight=2 blockGap=8
        //% blockId="neopixel_hsl_to_rgb" block="%hsl| to RGB"
        //% advanced=true
        toRGB(): number {
            //reference: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSL
            let h = this.h;
            let s = this.s;
            let l = this.l;
            let c = (((100 - Math.abs(2 * l - 100)) * s) << 8) / 10000; //chroma, [0,255]
            let h1 = h / 60;//[0,6]
            let h2 = (h - h1 * 60) * 256 / 60;//[0,255]
            let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
            let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
            let r$: number;
            let g$: number;
            let b$: number;
            if (h1 == 0) {
                r$ = c; g$ = x; b$ = 0;
            } else if (h1 == 1) {
                r$ = x; g$ = c; b$ = 0;
            } else if (h1 == 2) {
                r$ = 0; g$ = c; b$ = x;
            } else if (h1 == 3) {
                r$ = 0; g$ = x; b$ = c;
            } else if (h1 == 4) {
                r$ = x; g$ = 0; b$ = c;
            } else if (h1 == 5) {
                r$ = c; g$ = 0; b$ = x;
            }
            let m = ((l * 2 << 8) / 100 - c) / 2;
            let r = r$ + m;
            let g = g$ + m;
            let b = b$ + m;
            return packRGB(r, g, b);
        }
    }

    /**
     * Creates a HSL (hue, saturation, luminosity) color
     * @param hue value of the hue channel between 0 and 360. eg: 360
     * @param sat value of the saturation channel between 0 and 100. eg: 100
     * @param lum value of the luminosity channel between 0 and 100. eg: 50
     */
    //% weight=1
    //% blockId="neopixel_hsl" block="hue %hue|sat %sat|lum %lum"
    //% advanced=true
    export function hsl(hue: number, sat: number, lum: number): HSL {
        return new HSL(hue, sat, lum);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }

    /**
     * Interpolates between two HSL colors
     * @param startColor the start HSL color
     * @param endColor the end HSL color
     * @param steps the number of steps to interpolate for. Note that if steps
     *  is 1, the color midway between the start and end color will be returned.
     * @param direction the direction around the color wheel the hue should be interpolated.
     */
    //% parts="neopixel"
    //% advanced=true
    export function interpolateHSL(startColor: HSL, endColor: HSL, steps: number, direction: HueInterpolationDirection): HSL[] {
        if (steps <= 0)
            steps = 1;

        //hue
        let h1 = startColor.h;
        let h2 = endColor.h;
        let hDistCW = ((h2 + 360) - h1) % 360;
        let hStepCW = (hDistCW * 100) / steps;
        let hDistCCW = ((h1 + 360) - h2) % 360;
        let hStepCCW = -(hDistCCW * 100) / steps
        let hStep: number;
        if (direction === HueInterpolationDirection.Clockwise) {
            hStep = hStepCW;
        } else if (direction === HueInterpolationDirection.CounterClockwise) {
            hStep = hStepCCW;
        } else {
            hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
        }
        let h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

        //sat
        let s1 = startColor.s;
        let s2 = endColor.s;
        let sDist = s2 - s1;
        let sStep = sDist / steps;
        let s1_100 = s1 * 100;

        //lum
        let l1 = startColor.l;
        let l2 = endColor.l;
        let lDist = l2 - l1;
        let lStep = lDist / steps;
        let l1_100 = l1 * 100

        //interpolate
        let colors: HSL[] = [];
        if (steps === 1) {
            colors.push(hsl(h1 + hStep, s1 + sStep, l1 + lStep));
        } else {
            colors.push(startColor);
            for (let i = 1; i < steps - 1; i++) {
                let h = (h1_100 + i * hStep) / 100 + 360;
                let s = (s1_100 + i * sStep) / 100;
                let l = (l1_100 + i * lStep) / 100;
                colors.push(hsl(h, s, l));
            }
            colors.push(endColor);
        }
        return colors;
    }

    export const builtin = neopixel.create();
}
