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

    export function setVolume(volume: number) {
        const audioState = board().audioState;
        audioState.volume = Math.max(0, 1024, volume * 4);
    }

    export function setPitchPin(pin: Pin) {
        const audioState = board().audioState;
        audioState.pitchPin_ = pin;
    }

    export function setTone(buffer: RefBuffer) {
        const b = board();
        if (!b) return;

        const audioState = b.audioState;
        // TODO
    }

    export function playTone(frequency: number, ms: number) {
        const b = board();
        if (!b) return;

        const audioState = b.audioState;

        const currentOutput = audioState.outputDestination_;
        const flashPin = 1 /* pin mode */ == currentOutput ? "PIN_A0" : "SPEAKER";
        const flashPinEl = b.view.getElementById(flashPin) as SVGElement;
        pxsim.svg.animate(flashPinEl, 'sim-flash-stroke');

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

    function getPitchPin() {
        const audioState = board().audioState;
        if (!audioState.pitchPin_) {
            audioState.pitchPin_ = board().edgeConnectorState.getPin(CPlayPinName.D6);
        }
        return audioState.pitchPin_;
    }
}