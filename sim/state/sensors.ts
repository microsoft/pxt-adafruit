
namespace pxsim {
    export enum ThermometerUnit {
        Celsius,
        Fahrenheit
    }

    export class ThermometerState {
        usesTemperature = false;
        unit: ThermometerUnit = ThermometerUnit.Celsius;
        temperature = 21;
    }

    export class SlideSwitchState {
        public static id = 3000 /*DEVICE_ID_BUTTON_SLIDE*/;
        private left: boolean = false;

        setState(left: boolean) {
            if (this.left === left) {
                return;
            }
            else if (left) {
                board().bus.queue(SlideSwitchState.id, DAL.DEVICE_BUTTON_EVT_UP);
            }
            else {
                board().bus.queue(SlideSwitchState.id, DAL.DEVICE_BUTTON_EVT_DOWN);
            }
            this.left = left;
        }

        isLeft(): boolean {
            return this.left;
        }
    }

    export class CapacitiveSensorState {
        capacity: number[] = [];
        reading: boolean[] = [];
        mapping: Map<number>;

        constructor(mapping: Map<number>) {
            this.mapping = mapping;
        }

        private getCap(pinId: number): number {
            return this.mapping[pinId];
        }

        readCap(pinId: number, samples: number): number {
            let capId = this.getCap(pinId);
            return this.capacitiveSensor(capId, samples);
        }

        isReadingPin(pinId: number, pin: Pin) {
            let capId = this.getCap(pinId);
            return this.reading[capId];
        }

        isReading(capId: number) {
            return this.reading[capId];
        }

        startReading(pinId: number, pin: Pin) {
            let capId = this.getCap(pinId);
            this.reading[capId] = true;
            pin.mode = PinFlags.Analog | PinFlags.Input;
            pin.mode |= PinFlags.Analog;
        }

        capacitiveSensor(capId: number, samples: number): number {
            return this.capacity[capId] || 0;
        }

        reset(capId: number): void {
            this.capacity[capId] = 0;
            this.reading[capId] = false;
        }
    }

    export function getPin(id: number) {
        return board().edgeConnectorState.getPin(id);
    }
}
