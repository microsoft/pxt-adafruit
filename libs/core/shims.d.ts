// Auto-generated. Do not edit.



    //% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte
declare interface Buffer {
    /**
     * Write a number in specified format in the buffer.
     */
    //% shim=BufferMethods::setNumber
    setNumber(format: NumberFormat, offset: number, value: number): void;

    /**
     * Read a number in specified format from the buffer.
     */
    //% shim=BufferMethods::getNumber
    getNumber(format: NumberFormat, offset: number): number;

    /** Returns the length of a Buffer object. */
    //% property shim=BufferMethods::length
    length: number;

    /**
     * Fill (a fragment) of the buffer with given value.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::fill
    fill(value: number, offset?: number, length?: number): void;

    /**
     * Return a copy of a fragment of a buffer.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::slice
    slice(offset?: number, length?: number): Buffer;

    /**
     * Shift buffer left in place, with zero padding.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::shift
    shift(offset: number, start?: number, length?: number): void;

    /**
     * Rotate buffer left in place.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::rotate
    rotate(offset: number, start?: number, length?: number): void;

    /**
     * Write contents of `src` at `dstOffset` in current buffer.
     */
    //% shim=BufferMethods::write
    write(dstOffset: number, src: Buffer): void;
}


    /**
     * Playground
     */
    //% color=#FE49C9 weight=99
declare namespace playground {

    /**
     * Reads the light level between 0 and 1023.
     */
    //% blockId="lightSensor" block="light sensor" shim=playground::lightSensor
    function lightSensor(): uint16;

    /**
     * Reads the sound level between 0 and 1023.
     */
    //% blockId="soundSensor" block="sound sensor" shim=playground::soundSensor
    function soundSensor(): uint16;

    /**
     * Just turn on/off the red #13 LED
     * @param on a value to turn on/off the LED, eg: true
     */
    //% blockId="redled" block="red led %on" shim=playground::redLED
    function redLED(on: boolean): void;

    /**
     * Gets a value indicating if the left button is pressed.
     */
    //% blockId="leftButton" block="left button" weight=40 shim=playground::leftButton
    function leftButton(): boolean;

    /**
     * Gets a value indicating if the right button is pressed.
     */
    //% blockId="rightButton" block="right button" weight=39 shim=playground::rightButton
    function rightButton(): boolean;

    /**
     * Gets the frequency of a note.
     * @param note the note name
     */
    //% weight=50
    //% blockId=noteFrequency block="%note"
    //% shim=TD_ID shim=playground::noteFrequency
    function noteFrequency(note: Note): uint16;

    /**
     * Plays a given tone
     * @param frequency pitch of tone in Hz
     * @param time duration of tone in ms.
     */
    //% blockId="playTone" block="play tone at|freq (Hz) %frequency=noteFrequency|for (ms) %time" shim=playground::playTone
    function playTone(frequency: uint16, time: uint16): void;
}


    /**
     * Functions to manipulate neopixels
     */
    //% color=#00a7e9 weight=50
declare namespace neopixels {

    /**
     * Clear pixels
     */
    //% blockId="clearPixels" block="clear pixels" shim=neopixels::clearPixels
    function clearPixels(): void;

    /**
     * Sets the RGB color on a pixel
     */
    //% blockId="setPixelColor" block="set pixel %p|to color %c" shim=neopixels::setPixelColor
    function setPixelColor(p: uint8, c: number): void;

    /**
     * Sets the RGB color on a pixel
     */
    //% blockId="setPixelColorRgb" block="set pixel %p|to red %c|green %g|blue %b" shim=neopixels::setPixelColor
    function setPixelColor(p: uint8, r: uint8, g: uint8, b: uint8): void;

    /**
     * Sets the neopixel brightness
     */
    //% blockId="setBrightness" block="set brightness %b" shim=neopixels::setBrightness
    function setBrightness(b: uint16): void;

    /**
     * Color wheel
     */
    //% blockId="colorWheel" block="color wheel %x" shim=neopixels::colorWheel
    function colorWheel(x: uint8): number;
}

// Auto-generated. Do not edit. Really.
