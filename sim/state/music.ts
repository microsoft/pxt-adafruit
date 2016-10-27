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

    export class SoundSensorState {
        usesSoundLevel = false;
        soundLevel = 128;
    }
}
namespace pxsim.music {

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
}