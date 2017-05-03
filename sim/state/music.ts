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
    let outputDestination = 0;

    export function noteFrequency(note: number) {
        return note;
    }

    export function setOutput(mode: number) {
        outputDestination = mode;
    }

    export function setSpeakerVolume(volume: number) {
        // Nothing to do
    }

    export function playTone(frequency: number, ms: number) {
        const pitchPin = board().edgeConnectorState.getPin(CPlayPinName.A10);
        const currentOutput = outputDestination;
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
}