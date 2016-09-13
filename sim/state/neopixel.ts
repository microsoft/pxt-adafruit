namespace pxsim {
    export function sendBufferAsm(buffer: Buffer, pin: DigitalPin) {
        let b = board();
        if (b) {
            let np = b.neopixelState;
            if (np) {
                let buf = <Uint8Array[]>(<any>buffer).data;                
                np.updateBuffer(buf, pin);
                runtime.queueDisplayUpdate();
            }
        }
    }
}
