namespace neopixel {

    //% shim=sendBufferAsm
    function sendBuffer(buf: Buffer, pin: DigitalPin) {
    }

    class Strip {
        buf: Buffer;
        pin: DigitalPin;
        brightness: number;

        length() {
            return this.buf.length / 3
        }

        /**
         * Set the brightness of the strip, 0-255.
         */
        setBrigthness(brightness: number): void {
            this.brightness = brightness;
        }

        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0)
            basic.pause(50)
        }

        /**
         * Turn off all LEDs.
         */
        clear(): void {
            this.buf.fill(0);
        }

        /**
         * Shift LEDs forward.
         */
        shift(off: number = 1): void {
            this.buf.shift(-off * 3)
        }

        /**
         * Shift LEDs forward.
         */
        rotate(): void {
            this.buf.rotate(-3)
        }

        display() {
            basic.pause(1)
            sendBuffer(this.buf, this.pin);
        }

        /**
         * Set give LED to a given color (range 0-255 for r, g, b)
         */
        setPix(ledoff: number, r: number, g: number, b: number): void {
            ledoff = ledoff * 3;
            let br = this.brightness;
            if (br < 255) {
                r = (Math.clamp(0, 255, r) * br) >> 8;
                g = (Math.clamp(0, 255, b) * br) >> 8;
                b = (Math.clamp(0, 255, b) * br) >> 8;
            }
            let buf = this.buf;
            buf[ledoff + 0] = Math.clamp(0, 255, g);
            buf[ledoff + 1] = Math.clamp(0, 255, r);
            buf[ledoff + 2] = Math.clamp(0, 255, b);
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @params numleds number of leds in the strip, eg: 24,30,60,64
     */
    export function create(numleds: number): Strip {
        let strip = new Strip();
        strip.buf = pins.createBuffer(numleds * 3);
        strip.setBrigthness(255)
        strip.setPin(DigitalPin.P0)
        return strip;
    }

}
