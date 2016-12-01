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
    function digitalWrite(pin: Pin, value: number): void;

    /**
     * Digital Read
     * @param pin the number of the pin
     * @param value HIGH or LOW
     */
    //% help=https://www.arduino.cc/en/Reference/DigitalRead
    //% blockId="arduino_digitalRead" block="digital read pin %pin" shim=pins::digitalRead
    function digitalRead(pin: Pin): number;

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
    function analogRead(pin: Pin): number;

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
    function pulseIn(pin: Pin, state: number, timeout?: unsigned): number;
}
declare namespace math {

    /**
     * Random
     * The random function generates pseudo-random numbers.
     * @param min lower bound of the random value, inclusive, eg: 0
     * @param max upper bound of the random value, exclusive, eg: 10
     * @returns a random number between min and max-1
     */
    //% help=https://www.arduino.cc/en/Reference/RandomSeed weight=91
    //% blockId="arduino_randomMinMax" block="random between %min| and %max" icon="\uf1ec" shim=math::randomMinMax
    function randomMinMax(min: number, max: number): number;
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
    function tone(pin: Pin, frequency: unsigned, duration?: unsigned): void;

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
    function delay(ms: unsigned): void;

    /**
     * Delay
     * Pauses the program for the amount of time (in microseconds) specified as parameter.
     * There are a thousand microseconds in a millisecond, and a million microseconds in a second.
     * @param us the number of microseconds to pause
     */
    //% help=https://www.arduino.cc/en/Reference/DelayMicroseconds weight=91
    //% async blockId="arduino_delayMicroseconds" block="delay %ms| microseconds" shim=control::delayMicroseconds
    function delayMicroseconds(us: unsigned): void;

    /**
     * Millis
     * Returns the number of milliseconds since the Arduino board began running the current program. 
     * This number will overflow (go back to zero), after approximately 50 days.
     */
    //% help=https://www.arduino.cc/en/Reference/Millis weight=91
    //% blockId="arduino_millis" block="millis" blockGap=8 shim=control::millis
    function millis(): unsigned;

    /**
     * Millis
     * Returns the number of microseconds since the Arduino board began running the current program.
     * This number will overflow (go back to zero), after approximately 70 minutes.
     */
    //% help=https://www.arduino.cc/en/Reference/Micros weight=91
    //% blockId="arduino_micros" block="micros" blockGap=8 shim=control::micros
    function micros(): unsigned;
}

// Auto-generated. Do not edit. Really.
