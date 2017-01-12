
namespace pxsim.pins {
  
    export function onPulsed(name: number, pulse: number, body: RefAction) {
    }

    export function pulseDuration(): number {
        return 0;
    }

    export function createBuffer(sz: number) {
        return pxsim.BufferMethods.createBuffer(sz)
    }

    export function pulseIn(name: number, value: number, maxDuration: number): number {
        let pin = getPin(name);
        if (!pin) return 0;

        return 5000;
    }

    export function spiWrite(value: number): number {
        // TODO
        return 0;
    }

    export function i2cReadBuffer(address: number, size: number, repeat?: boolean): RefBuffer {
        // fake reading zeros
        return createBuffer(size)
    }

    export function i2cWriteBuffer(address: number, buf: RefBuffer, repeat?: boolean): void {
        // fake - noop
    }

    // this likely shouldn't be called
    export function getPinAddress(name: number) {
        return getPin(name)
    }
}
