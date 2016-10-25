
namespace pxsim {
    export class RedLEDState {
        on: boolean = false;
    }

    export class SlideSwitchState {
        on: boolean = false;
    }

    export class AudioState {
        private playing: boolean;
        constructor() {
            this.playing = false;
        }

        startPlaying() {
            this.playing = true;
        }
        stopPlaying() {
            this.playing = false;
        }
        isPlaying() {
            return this.playing;
        }
    }

    export class SoundSensorState {
        usesSoundLevel = false;
        soundLevel = 128;
    }

    export function getPin(id: number) {
        return board().edgeConnectorState.getPin(id);
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
}

namespace pxsim.playground {

    export function begin(brightness: number = 20) {

    }

    export function redLED(value: boolean) {
        board().redLEDState.on = value;
        runtime.queueDisplayUpdate()
    }

    export function leftButton(): boolean {
        return board().buttonPairState.aBtn.pressed;
    }

    export function rightButton(): boolean {
        return board().buttonPairState.bBtn.pressed;
    }

    export function slideSwitch(): boolean {
        return board().slideSwitchState.on;
    }

    export function lightSensor(): number {
        let b = board().lightSensorState;
        if (!b.usesLightLevel) {
            b.usesLightLevel = true;
            runtime.queueDisplayUpdate();
        }
        return b.lightLevel;
    }

    export function soundSensor(): number {
        let b = board().soundSensorState;
        if (!b.usesSoundLevel) {
            b.usesSoundLevel = true;
            runtime.queueDisplayUpdate();
        }
        return b.soundLevel;

    }

    export function noteFrequency(note: number) {
        return note;
    }

    export function playTone(frequency: number, ms: number = 250) {
        let audioState = board().audioState;
        audioState.startPlaying();

        runtime.queueDisplayUpdate();

        AudioContextManager.tone(frequency, 1);
        let cb = getResume();
        if (ms <= 0) cb();
        else {
            setTimeout(() => {
                AudioContextManager.stop();
                audioState.stopPlaying();
                runtime.queueDisplayUpdate();
                cb()
            }, ms);
        }
    }
    
    export function readCap(pinId: number, samples: number = 10): number {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinFlags.Analog | PinFlags.Input;
        return pin.value || 0;
    }

    export function onPinPressed(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        //pxtcore.registerWithDal(pin.id, DAL.MICROBIT_BUTTON_EVT_CLICK, handler);
    }
}