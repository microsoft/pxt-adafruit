namespace pxsim.input {
    export function onPinPressed(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        pxt.registerWithDal(pin.id, DAL.MICROBIT_BUTTON_EVT_CLICK, handler);
    }

    export function onPinReleased(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        pxt.registerWithDal(pin.id, DAL.MICROBIT_BUTTON_EVT_UP, handler);
     }

    export function pinIsPressed(pinId: number): boolean {
        let pin = getPin(pinId);
        if (!pin) return false;
        return pin.isTouched();
    }
}

namespace pxsim {
    export function getPin(id: number) {
        return board().edgeConnectorState.getPin(id);
    }

    export enum PinFlags {
        Unused = 0,
        Digital = 0x0001,
        Analog = 0x0002,
        Input = 0x0004,
        Output = 0x0008,
        Touch = 0x0010
    }

    export class Pin {
        constructor(public id: number) { }
        touched = false;
        value = 0;
        period = 0;
        mode = PinFlags.Unused;
        pitch = false;
        pull = 0; // PullDown

        isTouched(): boolean {
            this.mode = PinFlags.Touch;
            return this.touched;
        }
    }

    export class EdgeConnectorState {
        pins: Pin[];

        constructor() {
            this.pins = [
                new Pin(DAL.MICROBIT_ID_IO_P0),
                new Pin(DAL.MICROBIT_ID_IO_P1),
                new Pin(DAL.MICROBIT_ID_IO_P2),
                new Pin(DAL.MICROBIT_ID_IO_P3),
                new Pin(DAL.MICROBIT_ID_IO_P4),
                new Pin(DAL.MICROBIT_ID_IO_P5),
                new Pin(DAL.MICROBIT_ID_IO_P6),
                new Pin(DAL.MICROBIT_ID_IO_P7),
                new Pin(DAL.MICROBIT_ID_IO_P8),
                new Pin(DAL.MICROBIT_ID_IO_P9),
                new Pin(DAL.MICROBIT_ID_IO_P10),
                new Pin(DAL.MICROBIT_ID_IO_P11),
                new Pin(DAL.MICROBIT_ID_IO_P12),
                new Pin(DAL.MICROBIT_ID_IO_P13),
                new Pin(DAL.MICROBIT_ID_IO_P14),
                new Pin(DAL.MICROBIT_ID_IO_P15),
                new Pin(DAL.MICROBIT_ID_IO_P16),
                null,
                null,
                new Pin(DAL.MICROBIT_ID_IO_P19),
                new Pin(DAL.MICROBIT_ID_IO_P20)
            ];
        }

        public getPin(id: number) {
            return this.pins.filter(p => p && p.id == id)[0] || null
        }
    }
}

namespace pxsim.pins {
    export function digitalReadPin(pinId: number): number {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinFlags.Digital | PinFlags.Input;
        return pin.value > 100 ? 1 : 0;
    }

    export function digitalWritePin(pinId: number, value: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinFlags.Digital | PinFlags.Output;
        pin.value = value > 0 ? 1023 : 0;
        runtime.queueDisplayUpdate();
    }

    export function setPull(pinId: number, pull: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.pull = pull;
    }

    export function analogReadPin(pinId: number): number {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinFlags.Analog | PinFlags.Input;
        return pin.value || 0;
    }

    export function analogWritePin(pinId: number, value: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinFlags.Analog | PinFlags.Output;
        pin.value = value ? 1 : 0;
        runtime.queueDisplayUpdate();
    }

    export function analogSetPeriod(pinId: number, micros: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinFlags.Analog | PinFlags.Output;
        pin.period = micros;
        runtime.queueDisplayUpdate();
    }

    export function servoWritePin(pinId: number, value: number) {
        analogSetPeriod(pinId, 20000);
        // TODO
    }

    export function servoSetPulse(pinId: number, micros: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        // TODO
    }

    export function analogSetPitchPin(pinId: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        board().edgeConnectorState.pins.filter(p => !!p).forEach(p => p.pitch = false);
        pin.pitch = true;
    }

    export function analogPitch(frequency: number, ms: number) {
        // update analog output
        let pins = board().edgeConnectorState.pins;
        let pin = pins.filter(pin => !!pin && pin.pitch)[0] || pins[0];
        pin.mode = PinFlags.Analog | PinFlags.Output;
        if (frequency <= 0) {
            pin.value = 0;
            pin.period = 0;
        } else {
            pin.value = 512;
            pin.period = 1000000 / frequency;
        }
        runtime.queueDisplayUpdate();

        let cb = getResume();
        AudioContextManager.tone(frequency, 1);
        if (ms <= 0) cb();
        else {
            setTimeout(() => {
                AudioContextManager.stop();
                pin.value = 0;
                pin.period = 0;
                pin.mode = PinFlags.Unused;
                runtime.queueDisplayUpdate();
                cb()
            }, ms);
        }
    }
}