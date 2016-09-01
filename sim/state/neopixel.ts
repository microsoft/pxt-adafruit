namespace pxsim {
    export function sendBufferAsm(buffer: Buffer, pin: DigitalPin) {
        let b = board();
        if (b) {
            let np = b.neopixelState;
            if (np) {
                np.updateBuffer(buffer, pin);
                runtime.queueDisplayUpdate();
            }
        }
    }
}

namespace pxsim {
    export enum NeoPixelMode {RGB, RGBW};
    export type RGBW = [number, number, number, number];

    function readNeoPixelBuffer(inBuffer: Uint8Array[], outColors: RGBW[], mode: NeoPixelMode) {
        let buf = inBuffer;
        let stride = mode === NeoPixelMode.RGBW ? 4 : 3;
        let pixelCount = Math.floor(buf.length / stride);
        for (let i = 0; i < pixelCount; i++) {
            // NOTE: for whatever reason, NeoPixels pack GRB not RGB
            let r = buf[i * stride + 1] as any as number
            let g = buf[i * stride + 0] as any as number
            let b = buf[i * stride + 2] as any as number
            let w = 0;
            if (stride === 4)
                w = buf[i * stride + 3] as any as number
            outColors[i] = [r, g, b, w]
        }

    }

    export class NeoPixelState {
        private buffers: {[pin: number]: Uint8Array[]} = {};
        private colors: {[pin: number]: RGBW[]} = {};
        private dirty: {[pin: number]: boolean} = {};

        public updateBuffer(buffer: Buffer, pin: DigitalPin) {
            //update buffers
            let buf = <Uint8Array[]>(<any>buffer).data;
            this.buffers[pin] = buf;
            this.dirty[pin] = true;
        }

        public getColors(pin: number, mode: NeoPixelMode): RGBW[] {
            let outColors = this.colors[pin] || (this.colors[pin] = []);
            if (this.dirty[pin]) {
                let buf = this.buffers[pin] || (this.buffers[pin] = []);
                readNeoPixelBuffer(buf, outColors, mode);
                this.dirty[pin] = false;
            }
            return outColors;
        }
    }
}