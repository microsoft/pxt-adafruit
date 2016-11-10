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


    /**
     * Arduino pin functions
     */
    //% color=#00979C weight=50
declare namespace pins {

    /**
     * Pin Mode
     * @param pin the number of the pin whose mode you wish to set
     * @param mode INPUT, OUTPUT, or INPUT_PULLUP
     */
    //% help=https://www.arduino.cc/en/Reference/PinMode
    //% blockId="arduino_pinMode" block="pin mode pin %pin| to %mode" shim=pins::pinMode
    function pinMode(pin: Pin, mode: PinMode): void;

    /**
     * Digital Write
     * @param pin the number of the pin
     * @param value HIGH or LOW
     */
    //% help=https://www.arduino.cc/en/Reference/DigitalWrite
    //% blockId="arduino_digitalWrite" block="digital write %pin| to %state" shim=pins::digitalWrite
    function digitalWrite(pin: Pin, value: PulseValue): void;

    /**
     * Digital Read
     * @param pin the number of the pin
     * @param value HIGH or LOW
     */
    //% help=https://www.arduino.cc/en/Reference/DigitalRead
    //% blockId="arduino_digitalRead" block="digital read pin %pin" shim=pins::digitalRead
    function digitalRead(pin: Pin): PulseValue;

    /**
     * Analog Write
     * Writes an analog value to a pin. 
     * Can be used to light a LED at varying brightnesses or drive a motor at various speeds.
     * @param pin the pin to write to.
     * @param value the duty cycle: between 0 (always off) and 255 (always on).
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogWrite weight=91
    //% blockId="arduino_analogWrite" block="analog write pin %pin| to %value" shim=pins::analogWrite
    function analogWrite(pin: Pin, value: uint8): void;

    /**
     * Analog Read
     * Reads the value from the specified analog pin. 
     * @param pin the number of the analog input pin to read from (0 to 5 on most boards, 0 to 7 on the Mini and Nano, 0 to 15 on the Mega)
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogRead weight=91
    //% blockId="arduino_analogRead" block="analog read pin %pin" shim=pins::analogRead
    function analogRead(pin: Pin): PulseValue;

    /**
     * Analog Reference
     * Configures the reference voltage used for analog input (i.e. the value used as the top of the input range).
     * @param type which type of reference to use (DEFAULT, INTERNAL, INTERNAL1V1, INTERNAL2V56, or EXTERNAL).
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogReference weight=91
    //% blockId="arduino_analogReference" block="analog reference type %type" shim=pins::analogReference
    function analogReference(type: PinType): void;

    /**
     * Pulse In
     * Reads a pulse (either HIGH or LOW) on a pin.
     * @param pin the number of the pin on which you want to read the pulse. (int)
     * @param state type of pulse to read: either HIGH or LOW. (int)
     * @param timeout the number of microseconds to wait for the pulse to be completed: the function returns 0 if no complete pulse was received within the timeout. Default is one second.
     * @returns the length of the pulse (in microseconds) or 0 if no pulse is completed before the timeout
     */
    //% help=https://www.arduino.cc/en/Reference/PulseIn weight=91
    //% blockId="arduino_pulseIn" block="pulse in pin %pin| with state %state" timeout.defl=1000000 shim=pins::pulseIn
    function pulseIn(pin: Pin, state: PulseValue, timeout?: number): number;
}
declare namespace music {

    /**
     * Tone
     * Generates a square wave of the specified frequency (and 50% duty cycle) on a pin. 
     * A duration can be specified, otherwise the wave continues until a call to noTone().
     * The pin can be connected to a piezo buzzer or other speaker to play tones.
     * @param pin the pin on which to generate the tone
     * @param frequency the frequency of the tone in hertz
     * @param the duration of the tone in milliseconds (optional)
     */
    //% help=https://www.arduino.cc/en/Reference/Tone weight=90
    //% blockId="arduino_tone" block="tone on pin %pin| at frequency %frequency" icon="\uf025" duration.defl=1000 shim=music::tone
    function tone(pin: Pin, frequency: number, duration?: number): void;

    /**
     * No tone
     * Stops the generation of a square wave triggered by tone(). Has no effect if no tone is being generated.
     * @param pin the pin on which to stop generating the tone
     */
    //% help=https://www.arduino.cc/en/Reference/NoTone weight=91
    //% blockId="arduino_notone" block="no tone on pin %pin" icon="\uf025" shim=music::notone
    function notone(pin: Pin): void;
}


    /**
     * Arduino control functions
     */
    //% color=#00f000 weight=10
declare namespace control {

    /**
     * Delay
     * Pauses the program for the amount of time (in miliseconds) specified as parameter.
     * (There are 1000 milliseconds in a second.)
     * @param ms the number of milliseconds to pause, eg: 1000
     */
    //% help=https://www.arduino.cc/en/Reference/Delay weight=91
    //% async blockId="arduino_delay" block="delay %ms| milliseconds" shim=control::delay
    function delay(ms: number): void;

    /**
     * Delay
     * Pauses the program for the amount of time (in microseconds) specified as parameter.
     * There are a thousand microseconds in a millisecond, and a million microseconds in a second.
     * @param us the number of microseconds to pause
     */
    //% help=https://www.arduino.cc/en/Reference/DelayMicroseconds weight=91
    //% async blockId="arduino_delayMicroseconds" block="delay %ms| microseconds" shim=control::delayMicroseconds
    function delayMicroseconds(us: number): void;

    /**
     * Millis
     * Returns the number of milliseconds since the Arduino board began running the current program. 
     * This number will overflow (go back to zero), after approximately 50 days.
     */
    //% help=https://www.arduino.cc/en/Reference/Millis weight=91
    //% blockId="arduino_millis" block="millis" blockGap=8 shim=control::millis
    function millis(): number;

    /**
     * Millis
     * Returns the number of microseconds since the Arduino board began running the current program.
     * This number will overflow (go back to zero), after approximately 70 minutes.
     */
    //% help=https://www.arduino.cc/en/Reference/Micros weight=91
    //% blockId="arduino_micros" block="micros" blockGap=8 shim=control::micros
    function micros(): number;
}

// Auto-generated. Do not edit. Really.
