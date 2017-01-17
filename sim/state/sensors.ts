
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
        on: boolean = false;
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

namespace pxsim.sensors {

    export function sound(): number {
        let b = board().soundSensorState;
        if (!b.usesSoundLevel) {
            b.usesSoundLevel = true;
            runtime.queueDisplayUpdate();
        }
        return b.soundLevel;
    }

    export function slideSwitch(): boolean {
        return board().slideSwitchState.on;
    }


    export function readCap(pinId: number, samples: number = 10): number {
        let pin = pxtcore.getPin(pinId);
        if (!pin) return;
        pin.mode = PinFlags.Analog | PinFlags.Input;
        return pin.value || 0;
    }
}