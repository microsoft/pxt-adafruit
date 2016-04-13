/**
 * Functions to operate NeoPixel strips.
 */
//% weight=5 color=#2699BF
namespace neopixel {

    //% shim=sendBufferAsm
    function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        brightness: number;

        /**
         * Set give LED to a given color (range 0-255 for r, g, b)
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|set pixel color at %ledoff|red: %red|green: %green|blue: %blue" blockGap=8
        //% weight=80
        setPixelColor(ledoff: number, red: number, green: number, blue: number): void {
            ledoff = ledoff * 3;
            let br = this.brightness;
            if (br < 255) {
                red = (Math.clamp(0, 255, red) * br) >> 8;
                green = (Math.clamp(0, 255, blue) * br) >> 8;
                blue = (Math.clamp(0, 255, blue) * br) >> 8;
            }
            let buf = this.buf;
            buf[ledoff + 0] = Math.clamp(0, 255, green);
            buf[ledoff + 1] = Math.clamp(0, 255, red);
            buf[ledoff + 2] = Math.clamp(0, 255, blue);
        }

        /**
         * Send all the changes to the strip.
         */
        //% blockId="neopixel_show" block="%strip|show" blockGap=8
        //% weight=79
        show() {
            basic.pause(1)
            sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         */
        //% blockId="neopixel_clear" block="%strip|clear"
        //% weight=76
        clear(): void {
            this.buf.fill(0);
        }

        /**
         * Gets the number of pixels declared on the strip
         */
        //% blockId="neopixel_length" block="%strip|length" blockGap=8
        //% weight=60
        length() {
            return this.buf.length / 3
        }

        /**
         * Set the brightness of the strip, 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        //% weight=59
        setBrigthness(brightness: number): void {
            this.brightness = brightness;
        }
        
        /**
         * Shift LEDs forward and clear with zeros.
         * @params off number of pixels to shift forward, eg: 1
         */
        //% blockId="neopixel_shift" block="%strip|shift pixels forward by %off" blockGap=8
        //% weight=40
        shift(off: number = 1): void {
            this.buf.shift(-off * 3)
        }

        /**
         * Rotate LEDs forward.
         * @params off number of pixels to rotate forward, eg: 1
         */
        //% blockId="neopixel_rotate" block="%strip|rotate pixels forward by %off" blockGap=8
        //% weight=39
        rotate(off:number = 1): void {
            this.buf.rotate(-off * 3)
        }

        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */        
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0)
            basic.pause(50)
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @params pin the pin where the neopixel is connected.
     * @params numleds number of leds in the strip, eg: 24,30,60,64
     */
    //% blockId="neopixel_create" block="neopixel create|at pin %pin|with %numleds leds"
    //% weight=90
    export function create(pin: DigitalPin, numleds: number): Strip {
        let strip = new Strip();
        strip.buf = pins.createBuffer(numleds * 3);
        strip.setBrigthness(255)
        strip.setPin(pin)
        return strip;
    }
}