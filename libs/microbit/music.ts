enum Note {
    C = 262,
    //% block=C#
    CSharp = 277,
    D = 294,
    Eb = 311,
    E = 330,
    F = 349,
    //% block=F#
    FSharp = 370,
    G = 392,
    //% block=G#
    GSharp = 415,
    A = 440,
    Bb = 466,
    B = 494,
    C3 = 131,
    //% block=C#3
    CSharp3 = 139,
    D3 = 147,
    Eb3 = 156,
    E3 = 165,
    F3 = 175,
    //% block=F#3
    FSharp3 = 185,
    G3 = 196,
    //% block=G#3
    GSharp3 = 208,
    A3 = 220,
    Bb3 = 233,
    B3 = 247,
    C4 = 262,
    //% block=C#4
    CSharp4 = 277,
    D4 = 294,
    Eb4 = 311,
    E4 = 330,
    F4 = 349,
    //% block=F#3
    FSharp4 = 370,
    G4 = 392,
    //% block=G#3
    GSharp4 = 415,
    A4 = 440,
    Bb4 = 466,
    B4 = 494,
    C5 = 523,
    //% block=C#5
    CSharp5 = 555,
    D5 = 587,
    Eb5 = 622,
    E5 = 659,
    F5 = 698,
    //% block=F#5
    FSharp5 = 740,
    G5 = 784,
    //% block=G#5
    GSharp5 = 831,
    A5 = 880,
    Bb5 = 932,
    B5 = 989,
}

enum BeatFraction {
    //% block=1
    Whole = 1,
    //% block="1/2"
    Half = 2,
    //% block="1/4"
    Quater = 4,
    //% block="1/8"
    Eighth = 8,
    //% block="1/16"
    Sixteenth = 16
}

/**
 * Generation of music tones through pin ``P0``.
 */
//% color=52 weight=33
namespace music {
    var beatsPerMinute: number = 120;

    /**
     * Plays a tone through pin ``P0`` for the given duration.
     * @param frequency TODO
     * @param ms TODO
     */
    //% help=music/play-tone weight=90
    //% blockId=device_play_note block="play|tone (Hz) %note=device_note|for (ms) %duration=device_beat" icon="\uf025" blockGap=8
    export function playTone(frequency: number, ms: number): void {
        pins.analogSetPitchPin(AnalogPin.P0);
        pins.analogPitch(frequency, ms);
    }

    /**
     * Plays a tone through pin ``P0``.
     * @param frequency TODO
     */
    //% help=music/ring-tone weight=80
    //% blockId=device_ring block="ring tone (Hz)|%note=device_note" icon="\uf025" blockGap=8
    export function ringTone(frequency: number): void {
        pins.analogSetPitchPin(AnalogPin.P0);
        pins.analogPitch(frequency, 0);
    }

    /**
     * Rests (plays nothing) for a specified time through pin ``P0``.
     * @param ms TODO
     */
    //% help=music/rest weight=79
    //% blockId=device_rest block="rest(ms)|%duration=device_beat"
    export function rest(ms: number): void {
        playTone(0, ms);
    }


    /**
     * Gets the frequency of a note.
     * @param name TODO
     */
    //% weight=50 help=music/note-frequency
    //% blockId=device_note block="%note"
    export function noteFrequency(name: Note): number {
        return name;
    }
    
    function init() {
        if (beatsPerMinute <= 0) beatsPerMinute = 120;        
    }

    /**
     * Returns the duration of a beat in milli-seconds
     */
    //% help=music/beat weight=49
    //% blockId=device_beat block="%fraction|beat"
    export function beat(fraction : BeatFraction = BeatFraction.Whole): number {
        init();
        let beat = 60000 / beatsPerMinute;
        if (fraction == BeatFraction.Whole) return beat;
        else if (fraction == BeatFraction.Half) return beat / 2;
        else if (fraction == BeatFraction.Quater) return beat / 4
        else if (fraction == BeatFraction.Eighth) return beat / 8;
        else return beat / 16;
    }

    /**
     * Returns the tempo in beats per minute. Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.
     */
    //% help=music/tempo weight=40
    //% blockId=device_tempo block="tempo (bpm)" blockGap=8
    export function tempo(): number {
        init();
        return beatsPerMinute;
    }

    /**
     * Change the tempo by the specified amount
     * @param bpm The change in beats per minute to the tempo, eg: 20
     */
    //% help=music/tempo weight=39
    //% blockId=device_change_tempo block="change tempo by (bpm)|%value" blockGap=8
    export function changeTempoBy(bpm: number): void {
        setTempo(beat(BeatFraction.Whole) + bpm);
    }

    /**
     * Sets the tempo to the specified amount
     * @param bpm The new tempo in beats per minute, eg: 120
     */
    //% help=music/tempo weight=38
    //% blockId=device_set_tempo block="set tempo to (bpm)|%value"
    export function setTempo(bpm: number): void {
        init();
        if (bpm > 0) {
            beatsPerMinute = Math.max(1, bpm);
        }
    }
}
