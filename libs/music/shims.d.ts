// Auto-generated. Do not edit.
declare namespace music {

    /**
     * Sets the PCM sample (1024 x 10bit unsigned samples) used to generate the tones.
     * A reference to the buffer is kept to avoid the memory overhead, so changes to the buffer
     * values will be reflected live in the sound output. 
     */
    //% help=music/set-tone
    //% weight=1 advanced=true
    //% blockId=music_set_tone block="set tone %buffer" shim=music::setTone
    function setTone(buffer: Buffer): void;

    /**
     * Sets the output volume of the synthesizer
     * @param volume the volume 0...256, eg: 128
     */
    //% weight=96
    //% blockId=synth_set_volume block="set volume %volume"
    //% parts="speaker" blockGap=8
    //% volume.min=0 volume.max=256
    //% weight=1 shim=music::setVolume
    function setVolume(volume: int32): void;

    /**
     * Plays a tone through the pin for the given duration.
     * @param frequency pitch of the tone to play in Hertz (Hz)
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-tone weight=90
    //% blockId=music_play_note block="play tone|at %note=device_note|for %duration=device_beat"
    //% parts="headphone" async
    //% blockNamespace=music shim=music::playTone
    function playTone(frequency: int32, ms: int32): void;
}

// Auto-generated. Do not edit. Really.
