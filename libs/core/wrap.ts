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
    let NUM_PIXELS: number = 10;

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
        /*
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
        */
    }

    /**
     * Show a preset animation. eg: Rainbow
     * @param animation the preset animation to show
     */
    //% async blockId="showAnimation" block="show Animation %animation"
    //% weight=85
    export function showAnimation(animation: Animation) {
        switch(animation) {
            case Animation.ClassicRainbow: 
                animateRainbow(350); break;
            case Animation.RainbowCycle: 
                animationRainbowCycle(10); break;
            case Animation.Sparkle:
                animateSparkle(0xff, 0xff, 0xff, 25); break;
            case Animation.ColorWipe:
                animateColorWipe(0x00,0xff,0x00, 50); break;
            case Animation.RunningLights:
                animateRunningLights(0xff,0xff,0x00, 100); break;
            case Animation.TheatreChase:
                animateTheatreChase(0xff,0,0,100); break;
            default:
        }
    }

    // the current pixel in a rainbow animation
    let pixeln = 0;
    function animateRainbow(SpeedDelay: number) {
        light.setPixelColorWheel(pixeln++, pixeln *25);
        if (pixeln == NUM_PIXELS + 1) {
            pixeln = 0;
            clearPixels();
        }
        control.delay(SpeedDelay);
    }

    function animationRainbowCycle(Speed: number) {
        
        // Make an offset based on the current millisecond count scaled by the current speed.
        let offset = control.millis() / Speed;

        // Loop through each pixel and set it to an incremental color wheel value.
        for(let i=0; i < NUM_PIXELS; ++i) {   
            //CircuitPlayground.strip.setPixelColor(i, CircuitPlayground.colorWheel(((i * 256 / 10) + offset) & 255));
            light.setPixelColorWheel(i, (((i * 256 / 10) + offset) & 255));
        }

        // Show all the pixels.
        showStrip();

        //control.delay(1);
        
    }

    function animateSparkle(red: number, green: number, blue: number, SpeedDelay: number) {
        let Pixel = Math.random(NUM_PIXELS);
        setStripPixelColorRgb(Pixel,red,green,blue);
        showStrip();
        control.delay(SpeedDelay);
        setStripPixelColorRgb(Pixel,0,0,0);
        showStrip();
    }

    function animateColorWipe(red: number, green: number, blue: number, SpeedDelay: number) {
        for(let i=0; i<NUM_PIXELS; i++) {
            setPixelColorRgb(i, red, green, blue);
            control.delay(SpeedDelay);
        }
        for(let i=0; i<NUM_PIXELS; i++) {
            setPixelColorRgb(i, 0, 0, 0);
            control.delay(SpeedDelay);
        }
    }

    //TODO: The following animation requires floating pointer support for Math.sin
    let Position = 0;
    function animateRunningLights(red: number, green: number, blue: number, WaveDelay: number) {
        /*
        Position++; // = 0; //Position + Rate;
        for(let i=0; i < NUM_PIXELS; i++) {
            // sine wave, 3 offset waves make a rainbow!
            //float level = sin(i+Position) * 127 + 128;
            //setPixel(i,level,0,0);
            //float level = sin(i+Position) * 127 + 128;
            setPixelColorRgb(i,((Math.sin(i+Position) * 127 + 128)/255)*red,
                    ((Math.sin(i+Position) * 127 + 128)/255)*green,
                    ((Math.sin(i+Position) * 127 + 128)/255)*blue);
        }
        
        showStrip();
        control.delay(WaveDelay);
        
        if (Position == (NUM_PIXELS*2)) {
            Position = 0;
        }*/
    }

    let q = 0;
    function animateTheatreChase(red: number, green: number, blue: number, SpeedDelay: number) {
        for (let i=0; i < NUM_PIXELS; i=i+3) {
            setStripPixelColorRgb(i+q, red, green, blue);    //turn every third pixel on
        }
        showStrip();
        control.delay(SpeedDelay);
        
        for (let i=0; i < NUM_PIXELS; i=i+3) {
            setStripPixelColorRgb(i+q, 0,0,0);        //turn every third pixel off
        }
        q++;
        if (q == 3) {
            q = 0;
        }
    }

    /**
     * Show a preset drawing. eg: Rainbow
     * @param drawing the preset drawing to show
     */
    //% blockId="showDrawing" block="show %drawing"
    //% weight=95
    export function showDrawing(drawing: Drawing)
    {
        switch(drawing) {
            case Drawing.Rainbow: 
                showRainbow(); break;
            case Drawing.Comet: 
                showComet(); break;
            default:
        }
    }

    function showRainbow() {
        for (let i = 0; i < NUM_PIXELS; i++) {
            light.setPixelColorWheel(i, i * 25);
        }
    }

    function showComet() {
        for (let i = 0; i < NUM_PIXELS; i++) {
            setPixelColorRgb(i, 255-(i*25), 0, 0);
        }
    }

    /**
     * Rotate the pixels forward.
     * @param offset number of pixels to rotate forward, eg: 1
     */
    //% blockId="rotate" block="rotate pixels by %offset"
    //% weight=95
    export function rotate(offset: number = 1, reverse?: boolean) {
        /*
        for (let i = 0; i < offset; i++) {
            if(reverse)
                this.neopixels.unshift(this.neopixels.pop());
            else
                this.neopixels.push(this.neopixels.shift());
        }*/
    }

    /*
    function setAll(red: number, green: number, blue: number) {
        for(let i = 0; i < NUM_PIXELS; i++ ) {
            setPixel(i, red, green, blue); 
        }
        showStrip();
    }*/
}
