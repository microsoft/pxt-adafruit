// Auto-generated. Do not edit.


    /**
     * Sensors
     */
    //% color=#FE49C9 weight=99
declare namespace sensors {

    /**
     * Gets a value indicating if the left button is pressed.
     */
    //% blockId="leftButton" block="%b|button pressed?" weight=40
    //% weight=85 shim=sensors::button
    function button(b: Button): boolean;

    /**
     * Reads the number of taps
     */
    //% blockId="getAccelTap" block="taps"
    //% weight=84 shim=sensors::taps
    function taps(): uint8;

    /**
     * Reads the light level between 0 and 1023.
     */
    //% blockId="lightSensor" block="light level"
    //% weight=80 shim=sensors::lightLevel
    function lightLevel(): uint16;

    /**
     * Reads the accelerometer's Motion
     * @param axis the axis of rotation. X is aligned with the buttons, Y going accross the buttons, Z perpendicular to the board.
     */
    //% blockId="motion" block="motion %axis"
    //% weight=82 shim=sensors::motion
    function motion(axis: MotionAxis): number;

    /**
     * Reads the sound level between 0 and 1023.
     */
    //% blockId="soundSensor" block="sound"
    //% weight=60 shim=sensors::sound
    function sound(): uint16;

    /**
     * Gets a value indicating if the slide switched is on.
     */
    //% blockId="slideSwitch" block="slide switch"
    //% weight=55 shim=sensors::slideSwitch
    function slideSwitch(): boolean;

    /**
     * Reads the capacitiy of a specific pin
     * @param pin the number of the pin
     * @param samples
     */
    //% blockId="readCap" block="sense touch at pin %pin"
    //% weight=50 samples.defl=10 shim=sensors::readCap
    function readCap(pin: CapacityPin, samples?: uint16): uint16;

    /**
     * Reads the temperature.
     */
    //% blockId="temperatur" block="temperature %unit" shim=sensors::temperature
    function temperature(unit: TemperatureUnit): number;
}


    /**
     * Functions for music / audio
     */
    //% color=#FF7D7D weight=75
declare namespace music {

    /**
     * Gets the frequency of a note.
     * @param note the note name
     */
    //% weight=50
    //% blockId=noteFrequency block="%note"
    //% shim=TD_ID shim=music::noteFrequency
    function noteFrequency(note: Note): uint16;

    /**
     * Plays a given tone
     * @param frequency pitch of tone in Hz
     * @param time duration of tone in ms.
     */
    //% async blockId="playTone" block="play tone at|freq (Hz) %frequency=noteFrequency|for (ms) %time" time.defl=250 shim=music::playTone
    function playTone(frequency: uint16, time?: uint16): void;
}


    /**
     * Functions to manipulate neopixels
     */
    //% color=#00a7e9 weight=50
declare namespace light {

    /**
     * Just turn on/off the red #13 LED
     * @param on a value to turn on/off the LED, eg: true
     */
    //% weight=90
    //% blockId="redled" block="red led %on" shim=light::redLED
    function redLED(on: boolean): void;

    /**
     * Sets the RGB color on a pixel
     */
    //% weight=85 blockGap=8
    //% blockId="setPixelColorRgb" block="set pixel %p|to color %c=pixelcolor" shim=light::setPixelColorRgb
    function setPixelColorRgb(p: uint8, r: uint16, g: uint16, b: uint16): void;

    /**
     * Sets the RGB color on a pixel without showing
     */
    //% weight=7 blockGap=8
    //% blockId="setStripPixelColorRgb" block="set strip pixel %p|to color %c=pixelcolor"
    //% advanced=true shim=light::setStripPixelColorRgb
    function setStripPixelColorRgb(p: number, r: uint16, g: uint16, b: uint16): void;

    /**
     * Shows the neopixel strip
     */
    //% weight=6 blockGap=8
    //% blockId="showStrip" block="show"
    //% advanced=true shim=light::showStrip
    function showStrip(): void;

    /**
     * Clear pixels
     */
    //% weight=84 blockGap=8
    //% blockId="clearPixels" block="clear pixels" shim=light::clearPixels
    function clearPixels(): void;

    /**
     * Sets the neopixel brightness
     * @param Desired brightness. eg: 255
     */
    //% weight=80
    //% blockId="setBrightness" block="set brightness %b"
    //% advanced=true shim=light::setBrightness
    function setBrightness(brightness: uint16): void;

    /**
     * Sets the color wheel on a pixel
     */
    //% weight=7 blockGap=8
    //% blockId="setStripPixelColorWheel" block="set pixel %p|to wheel %x=w"
    //% advanced=true shim=light::setPixelColorWheel
    function setPixelColorWheel(p: number, w: uint8): void;

    /**
     * Rotate the pixels forward.
     * @param offset number of pixels to rotate forward, eg: 1
     */
    //% blockId="rotate" block="rotate pixels by %offset"
    //% weight=95 number.defl=1 reverse.defl=0 shim=light::rotate
    function rotate(number?: uint16, reverse?: boolean): void;
}


    /**
     * Functions to manipulate serial
     */
    //% color=#00a700 weight=40
    //% advanced=true
declare namespace serial {

    /**
     * Serial print
     */
    //% shim=serial::print
    function print(code: uint16): void;
}

// Auto-generated. Do not edit. Really.
