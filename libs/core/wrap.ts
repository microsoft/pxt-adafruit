/**
* Sensors
*/
//% color=#FE49C9 weight=99
namespace sensors {
}

/**
* Functions for playing audio / music
*/
//% color=#FF7D7D weight=75
namespace music {
}

/**
* Functions to manipulate neopixels
*/
//% color=#00a7e9 weight=85
namespace light {
    const NUM_PIXELS: number = 10;

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

        const n = NUM_PIXELS;
        const n1 = n - 1;
        const v = (value * n) / barGraphHigh;
        // serial.print(n)
        if (v == 0) {
            light.setPixelColorRgb(0, 0, 200, 0);
            for (let i = 1; i < n; ++i)
                light.setPixelColorRgb(i, 0, 0, 0);
        } else {
            for (let i = 0; i < n; ++i) {
                if (i <= v) {
                    const b = i * 255 / n1 & 0xff;
                    light.setPixelColorRgb(i, 0, b, 255 - b);
                }
                else light.setPixelColorRgb(i, 0, 0, 0);
            }
        }
    }

    /**
     * Show a preset animation. eg: Rainbow
     * @param animation the preset animation to show
     */
    //% async blockId="showAnimation" block="show animation %animation"
    //% weight=85
    export function showAnimation(animation: Animation) {
        switch (animation) {
            case Animation.ClassicRainbow:
                animateRainbow(200); break;
            case Animation.RainbowCycle:
                animationRainbowCycle(10); break;
            case Animation.Sparkle:
                animateSparkle(0xff, 0xff, 0xff, 25); break;
            case Animation.ColorWipe:
                animateColorWipe(0x00, 0xff, 0x00, 50); break;
            case Animation.RunningLights:
                animateRunningLights(0xff, 0xff, 0x00, 100); break;
            case Animation.TheatreChase:
                animateTheatreChase(0xff, 0, 0, 100); break;
            default:
        }
    }

    // the current pixel in a rainbow animation
    let animationCounter = 0;
    function animateRainbow(speedDelay: number) {
        if (animationCounter >= 11) {
            animationCounter = 0;
            clearPixels();
        }
        else setPixelColorWheel(animationCounter++, animationCounter * 25);

        control.delay(speedDelay);
    }

    function animationRainbowCycle(speed: number) {
        // Make an offset based on the current millisecond count scaled by the current speed.
        const offset = control.millis() / speed;

        // Loop through each pixel and set it to an incremental color wheel value.
        for (let i = 0; i < NUM_PIXELS; ++i) {
            //CircuitPlayground.strip.setPixelColor(i, CircuitPlayground.colorWheel(((i * 256 / 10) + offset) & 255));
            setPixelColorWheel(i, ((i * 25) + offset) & 255);
        }

        control.delay(speed / 2)
    }

    function animateSparkle(red: number, green: number, blue: number, speedDelay: number) {
        const pixel = Math.random(NUM_PIXELS);
        setStripPixelColorRgb(pixel, red, green, blue);
        control.delay(speedDelay);

        setStripPixelColorRgb(pixel, 0, 0, 0);
    }

    function animateColorWipe(red: number, green: number, blue: number, speedDelay: number) {
        for (let i = 0; i < NUM_PIXELS; i++) {
            setPixelColorRgb(i, red, green, blue);
            control.delay(speedDelay);
        }
        for (let i = 0; i < NUM_PIXELS; i++) {
            setPixelColorRgb(i, 0, 0, 0);
            control.delay(speedDelay);
        }
    }

    function animateRunningLights(red: number, green: number, blue: number, waveDelay: number) {
        // precomputed Math.sin(x) * 127 + 128 for x in [0,NUM_PIXELS*2]
        const levels = [128, 33, 2, 57, 160, 242, 246, 170, 66, 4, 26, 118, 216, 255, 207, 106, 19, 7, 77, 181, 250, 235, 148, 47, 1, 41, 140, 231, 252, 188];
        if (animationCounter >= levels.length - NUM_PIXELS)
            animationCounter = 0;
        animationCounter++;

        for (let i = 0; i < NUM_PIXELS; i++) {
            const level = levels[i + animationCounter];
            setPixelColorRgb(i, level * red / 255, level * green / 255, level * blue / 255);
        }

        control.delay(waveDelay);
    }

    function animateTheatreChase(red: number, green: number, blue: number, speedDelay: number) {
        if (animationCounter >= 3) {
            animationCounter = 0;
        }

        //turn every third pixel on
        for (let i = 0; i < NUM_PIXELS; i = i + 3) {
            setStripPixelColorRgb(i + animationCounter, red, green, blue);
        }
        control.delay(speedDelay);

        //turn every third pixel off
        for (let i = 0; i < NUM_PIXELS; i = i + 3) {
            setStripPixelColorRgb(i + animationCounter, 0, 0, 0);
        }
        animationCounter++;
    }

    /**
     * Show a preset drawing. eg: Rainbow
     * @param drawing the preset drawing to show
     */
    //% blockId="showDrawing" block="show %drawing"
    //% weight=95
    export function showDrawing(drawing: Drawing) {
        switch (drawing) {
            case Drawing.Rainbow:
                showRainbow(); break;
            case Drawing.Comet:
                showComet(); break;
            default:
        }
    }

    function showRainbow() {
        for (let i = 0; i < NUM_PIXELS; i++) {
            setPixelColorWheel(i, i * 25);
        }
    }

    function showComet() {
        for (let i = 0; i < NUM_PIXELS; i++) {
            setPixelColorRgb(i, 255 - (i * 25), 0, 0);
        }
    }
}
