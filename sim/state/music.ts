namespace pxsim {

    export class AudioState {
        private playing: boolean;
        public outputDestination_ = 0;
        public pitchPin_: Pin;
        public volume = 100;
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

    export function noteFrequency(note: number) {
        return note;
    }

    export function setOutput(mode: number) {
        const audioState = board().audioState;
        audioState.outputDestination_ = mode;
    }

    export function setSpeakerVolume(volume: number) {
        const audioState = board().audioState;
        audioState.volume = volume;
    }

    export function setPitchPin(pin: Pin) {
        const audioState = board().audioState;
        audioState.pitchPin_ = pin;
    }

    export function playTone(frequency: number, ms: number) {
        const b = board();
        if (!b) return;

        const audioState = b.audioState;

        const pitchPin = getPitchPin();
        const currentOutput = audioState.outputDestination_;
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

        ["SPEAKER", "PIN_A0"]
            .map(id => b.view.getElementById(id) as SVGElement)
            .forEach(el => pxsim.svg.animate(el, 'sim-flash-stroke'));

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
        const audioState = board().audioState;
        if (!audioState.pitchPin_) {
            audioState.pitchPin_ = board().edgeConnectorState.getPin(CPlayPinName.D6);
        }
        return audioState.pitchPin_;
    }
}