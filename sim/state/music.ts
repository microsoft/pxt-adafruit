namespace pxsim {

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
}
namespace pxsim.music {
    let outputDestination_ = 0;
    let pitchPin_: Pin;

    export function noteFrequency(note: number) {
        return note;
    }

    export function setOutput(mode: number) {
        outputDestination_ = mode;
    }

    export function setSpeakerVolume(volume: number) {
        // Nothing to do
    }

    export function setPitchPin(pin: Pin) {
        pitchPin_ = pin;
    }

    export function playTone(frequency: number, ms: number) {
        const pitchPin = getPitchPin();
        const currentOutput = outputDestination_;
        if (currentOutput === 1) {
            pitchPin.mode = PinFlags.Analog | PinFlags.Output;
            if (frequency <= 0) {
                pitchPin.value = 0;
                pitchPin.period = 0;
            } else {
                pitchPin.value = 512;
                pitchPin.period = 1000000 / frequency;
            }
        }

        const audioState = board().audioState;
        audioState.startPlaying();
        runtime.queueDisplayUpdate();
        AudioContextManager.tone(frequency, 1);
        let cb = getResume();
        if (ms <= 0) cb();
        else {
            setTimeout(() => {
                AudioContextManager.stop();
                audioState.stopPlaying();

                if (currentOutput === 1) {
                    pitchPin.value = 0;
                    pitchPin.period = 0;
                    pitchPin.mode = PinFlags.Unused;
                }

                runtime.queueDisplayUpdate();
                cb()
            }, ms);
        }
    }

    function getPitchPin() {
        if (!pitchPin_) {
            pitchPin_ = board().edgeConnectorState.getPin(CPlayPinName.A10);
        }
        return pitchPin_;
    }
}