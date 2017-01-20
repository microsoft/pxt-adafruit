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

    export function noteFrequency(note: number) {
        return note;
    }
}