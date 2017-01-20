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

enum MoveKind {
    //% block="rotate"
    Rotate,
    //% block="shift"
    Shift
}

/**
 * Functions to operate NeoPixel strips.
 */
//% weight=98 color=#2699BF icon="\uf00a"
namespace light {
    /**
     * A NeoPixel strip
     */
    //% autoCreate=neopixel.create
    export class Strip {
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _animation: NeoPixelAnimation;
        _buf: Buffer;

        get buf(): Buffer {
            // Lazily allocate to conserve memory
            if (!this._buf) {
                this.reallocateBuffer();
            }
            return this._buf;
        }

        set buf(b: Buffer) {
            this._buf = b;
        }

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b).
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="show color %rgb=neopixel_colors"
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
        //% blockId="neopixel_set_strip_rainbow" block="show rainbow from %startHue|to %endHue"
        //% weight=85 blockGap=8
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        showRainbow(startHue: number = 1, endHue: number = 360) {
            let colors = light.interpolateHSL(startHue, 100, 50, endHue, 100, 50, this._length, HueInterpolationDirection.Clockwise);
            for (let i = 0; i < colors.length; i++) {
                let rgb = colors[i];
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
        //% weight=84 blockGap=8
        //% blockId=neopixel_show_bar_graph block="show bar graph of %value |up to %high" icon="\uf080" blockExternalInputs=true
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
                        this.setPixelColor(i, light.rgb(b, 0, 255 - b));
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
        //% blockId="neopixel_set_pixel_color" block="set pixel color at %pixeloffset|to %rgb=neopixel_colors"
        //% blockGap=8
        //% weight=5
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset, rgb);
        }

        /**
         * For NeoPixels with RGB+W LEDs, set the white LED brightness. This only works for RGB+W NeoPixels.
         * @param pixeloffset position of the LED in the strip
         * @param white brightness of the white LED
         */
        //% blockId="neopixel_set_pixel_white" block="set pixel white LED at %pixeloffset|to %white"
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
        //% blockId="neopixel_show" block="show" blockGap=8
        //% weight=4
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        show() {
            control.pause(1)
            sendBuffer(this.pin, this.buf);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="neopixel_clear" block="clear"
        //% weight=3
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="neopixel_length" block="length" blockGap=8
        //% weight=88 advanced=true
        //% defaultInstance=neopixel.builtin
        length() {
            return this._length;
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 20
         */
        //% blockId="neopixel_set_brightness" block="set brightness %brightness" blockGap=8
        //% weight=59
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Apply brightness to current colors using a quadratic easing function.
         **/
        //% blockId="neopixel_each_brightness" block="ease brightness" blockGap=8
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
        //% blockId="neopixel_range" block="range from %start|with %length|leds"
        //% parts="neopixel" advanced=true
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
        //% blockId="neopixel_move_pixels" block="%kind=MoveKind |pixels by %offset" blockGap=8
        //% weight=40
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        movePixels(kind: MoveKind, offset: number = 1): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            if (kind === MoveKind.Shift) {
                this.buf.shift(-offset * stride, this.start * stride, this._length * stride)
            }
            else {
                this.buf.rotate(-offset * stride, this.start * stride, this._length * stride)
            }
        }

        /**
         * Set the current animation
         */
        //% blockId="neopixel_draw_animation_frame" block="show frame of %animation=neopixel_animation_rainbow |animation"
        //% weight=95
        //% parts="neopixel"
        //% defaultInstance=neopixel.builtin
        drawAnimationFrame(animation: NeoPixelAnimation): void {
            if (!this._animation) {
                this._animation = animation;
                this._animation.setupStrip(this);
                this._animation.init();
            }
            this._animation.draw();
            this.show();
        }

        /**
         * Restart the current animation
         */
        //% blockId="neopixel_restart_animation" block="restart animation"
        //% weight=57
        //% parts="neopixel" advanced=true
        //% defaultInstance=neopixel.builtin
        restartAnimation(): void {
            if (this._animation) {
                this._animation.init();
                this.show();
            }
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

        private reallocateBuffer(): void {
            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this._buf = pins.createBuffer(this._length * stride);
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="create NeoPixel at pin %pin|with %numleds|leds as %mode"
    //% weight=90 blockGap=8 advanced=true
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
        const strip = new Strip();
        strip._mode = mode;
        strip._length = Math.max(0, numleds);
        strip.start = 0;
        strip.pin = pin;
        strip.pin.digitalWrite(0)
        strip.setBrightness(20)
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=4 blockGap=8
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% weight=2 blockGap=8 advanced=true
    //% blockId="neopixel_colors" block="%color"
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    /**
     * Gets an RGB color given the value of an angle between 0 and 360. Useful
     * for performing math with colors.
    */
    //% weight=1 blockGap=8 advanced=true
    //% blockId="neopixel_color_wheel" block="color wheel %angle"
    export function colorWheel(angle: number): number {
        return hsl(angle, 100, 50);
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
     * Converts an HSL (hue, saturation, luminosity) color to RGB
     * @param hue value of the hue channel between 0 and 360. eg: 360
     * @param sat value of the saturation channel between 0 and 100. eg: 100
     * @param lum value of the luminosity channel between 0 and 100. eg: 50
     */
    //% weight=3 blockGap=8
    //% blockId="neopixel_hsl" block="hue %hue|sat %sat|lum %lum"
    //% advanced=true
    export function hsl(hue: number, sat: number, lum: number): number {
        let h = hue % 360;
        let s = Math.clamp(0, 99, sat);
        let l = Math.clamp(0, 99, lum);

        //reference: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSL
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

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }

    /**
     * Interpolates between two HSL colors
     * @param h1 the start hue
     * @param s1 the start saturation
     * @param l1 the start luminosity
     * @param h2 the end hue
     * @param s2 the end saturation
     * @param l2 the end luminosity
     * @param steps the number of steps to interpolate for. Note that if steps is 1, the color midway between the start and end color will be returned.
     * @param direction the direction around the color wheel the hue should be interpolated.
     */
    //% parts="neopixel"
    //% advanced=true
    export function interpolateHSL(h1: number, s1: number, l1: number, h2: number, s2: number, l2: number, steps: number, direction: HueInterpolationDirection): number[] {
        if (steps <= 0)
            steps = 1;

        //hue
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
        let sDist = s2 - s1;
        let sStep = sDist / steps;
        let s1_100 = s1 * 100;

        //lum
        let lDist = l2 - l1;
        let lStep = lDist / steps;
        let l1_100 = l1 * 100

        //interpolate
        let colors: number[] = [];
        if (steps === 1) {
            colors.push(hsl(h1 + hStep, s1 + sStep, l1 + lStep));
        } else {
            colors.push(hsl(h1, s1, l1));
            for (let i = 1; i < steps - 1; i++) {
                let h = (h1_100 + i * hStep) / 100 + 360;
                let s = (s1_100 + i * sStep) / 100;
                let l = (l1_100 + i * lStep) / 100;
                colors.push(hsl(h, s, l));
            }
            colors.push(hsl(h2, s2, l2));
        }
        return colors;
    }

    /**
     * Return a new instance of the rainbow animation
     */
    //% blockId="neopixel_animation_rainbow" block="rainbow"
    //% weight=100 blockGap=8
    //% parts="neopixel"
    export function rainbowCycleAnimation(): NeoPixelAnimation {
        return NeopixelAnimatonFactory.getRainbow();
    }

    /**
     * Return a new instance of the running lights animation
     */
    //% blockId="neopixel_animation_runninglights" block="running lights"
    //% weight=99 blockGap=8
    //% parts="neopixel"
    export function runningLightsAnimation(): NeoPixelAnimation {
        return NeopixelAnimatonFactory.getRunningLights();
    }

    /**
     * Return a new instance of the comet animation
     */
    //% blockId="neopixel_animation_comet" block="comet"
    //% weight=98 blockGap=8
    //% parts="neopixel"
    export function cometAnimation(): NeoPixelAnimation {
        return NeopixelAnimatonFactory.getComet();
    }

    /**
     * Return a new instance of the sparkle animation
     */
    //% blockId="neopixel_animation_sparkle" block="sparkle"
    //% weight=97 blockGap=8
    //% parts="neopixel"
    export function sparkleAnimation(): NeoPixelAnimation {
        return NeopixelAnimatonFactory.getSparkle();
    }

    /**
     * Return a new instance of the color wipe animation
     */
    //% blockId="neopixel_animation_colorwipe" block="color wipe"
    //% weight=96 blockGap=8
    //% parts="neopixel"
    export function colorWipeAnimation(): NeoPixelAnimation {
        return NeopixelAnimatonFactory.getColorWipe();
    }

    export const builtin = light.create();

    export class NeopixelAnimatonFactory {

        private static rainbowSingleton: RainbowCycleAnimation;
        static getRainbow(): RainbowCycleAnimation {
            if (!NeopixelAnimatonFactory.rainbowSingleton) NeopixelAnimatonFactory.rainbowSingleton = new RainbowCycleAnimation();
            return NeopixelAnimatonFactory.rainbowSingleton;
        }

        private static runningLightsSingleton: RunningLightsAnimation;
        static getRunningLights(): RunningLightsAnimation {
            if (!NeopixelAnimatonFactory.runningLightsSingleton) NeopixelAnimatonFactory.runningLightsSingleton = new RunningLightsAnimation(0xff, 0xff, 0x00);
            return NeopixelAnimatonFactory.runningLightsSingleton;
        }

        private static cometSingleton: CometAnimation;
        static getComet(): CometAnimation {
            if (!NeopixelAnimatonFactory.cometSingleton) NeopixelAnimatonFactory.cometSingleton = new CometAnimation(0, 0, 0);
            return NeopixelAnimatonFactory.cometSingleton;
        }

        private static sparkleSingleton: SparkleAnimation;
        static getSparkle(): SparkleAnimation {
            if (!NeopixelAnimatonFactory.sparkleSingleton) NeopixelAnimatonFactory.sparkleSingleton =  new SparkleAnimation(0xff, 0xff, 0xff, 0);
            return NeopixelAnimatonFactory.sparkleSingleton;
        }

        private static colorWipeSingleton: ColorWipeAnimation;
        static getColorWipe(): ColorWipeAnimation {
            if (!NeopixelAnimatonFactory.colorWipeSingleton) NeopixelAnimatonFactory.colorWipeSingleton =  new ColorWipeAnimation(0x00, 0xff, 0x00, 50);
            return NeopixelAnimatonFactory.colorWipeSingleton;
        }
    }

    export class NeoPixelAnimation {
        public strip: Strip

        constructor() { }

        setupStrip(strip: Strip) {
            this.strip = strip;
        }

        init(): void {}

        draw(): void {}
    }

    export class RainbowCycleAnimation extends NeoPixelAnimation {
        public pixels: number[];

        private speed: number;

        constructor(speed: number = 50) {
            super();
            this.pixels = [];
            this.speed = speed;
        }

        public draw() {
            const l = this.strip.length();
            let offset = control.millis() / this.speed;
            for (let i = 0; i < l; i++) {
                this.strip.setPixelColor(i, colorWheel(((i * 256 / 10) + offset) & 255));
            }
        }
    }

    export class RunningLightsAnimation extends NeoPixelAnimation {
        public levels: number[];
        public step: number;

        public red: number;
        public green: number;
        public blue: number;

        constructor(red: number, green: number, blue: number) {
            super();
            // precomputed Math.sin(x) * 127 + 128 for x in [0,NUM_PIXELS*2]
            this.levels = [128, 33, 2, 57, 160, 242, 246, 170, 66, 4, 26, 118, 216, 255, 207, 106, 19, 7, 77, 181, 250, 235, 148, 47, 1, 41, 140, 231, 252, 188];
            this.red = red;
            this.green = green;
            this.blue = blue;
        }

        public init() {
            this.step = 0
        }

        public draw() {
            const l = this.strip.length();
            for (let i = 0; i < l; i++) {
                const level = this.levels[(i + this.step) % this.levels.length];
                this.strip.setPixelColor(i, rgb(level * this.red / 255, level * this.green / 255, level * this.blue / 255));
            }
            this.step ++;
        }
    }

    export class CometAnimation extends NeoPixelAnimation {
        public offsets: number[];
        private step: number;

        public red: number;
        public green: number;
        public blue: number;

        constructor(red: number, green: number, blue: number) {
            super();
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.offsets = [];
        }

        public init() {
            const l = this.strip.length();
            const spacing = 255 / l;
            for (let i = 0; i < l; i++) {
                this.offsets[i] = spacing * i;
            }
            this.step = 0
        }

        public draw() {
            const l = this.strip.length();
            for (let i = 0; i < l; i++) {
                this.offsets[i] = (this.offsets[i] + (this.step*2)) % 255
                this.strip.setPixelColor(i, rgb(255 - this.offsets[i], this.green, this.blue));
            }
            this.step ++;
        }
    }

    export class SparkleAnimation extends NeoPixelAnimation {

        public red: number;
        public green: number;
        public blue: number;
        public delay: number;

        constructor(red: number, green: number, blue: number, delay: number) {
            super();
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.delay = delay;
        }

        public init() { }

        public draw() {
            const l = this.strip.length();
            let pixel = Math.random(l);
            this.strip.setPixelColor(pixel, rgb(this.red, this.green, this.blue));
            this.strip.show();
            control.pause(this.delay);
            this.strip.setPixelColor(pixel, rgb(0, 0, 0));
        }
    }

    export class ColorWipeAnimation extends NeoPixelAnimation {

        public red: number;
        public green: number;
        public blue: number;
        public delay: number;

        constructor(red: number, green: number, blue: number, delay: number) {
            super();
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.delay = delay;
        }

        public init() { }

        public draw() {
            const l = this.strip.length();
            for (let i = 0; i < l; i++) {
                this.strip.setPixelColor(i, rgb(this.red, this.green, this.blue));
                this.strip.show();
                control.pause(this.delay);
            }
            for (let i = 0; i < l; i++) {
                this.strip.setPixelColor(i, rgb(0, 0, 0));
                this.strip.show();
                control.pause(this.delay);
            }
        }
    }
}
