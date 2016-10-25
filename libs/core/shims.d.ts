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
     * Gets a value indicating if the slide switched is on.
     */
    //% blockId="slideSwitch" block="slide switch" shim=playground::slideSwitch
    function slideSwitch(): boolean;

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
    //% async blockId="playTone" block="play tone at|freq (Hz) %frequency=noteFrequency|for (ms) %time" time.defl=250 shim=playground::playTone
    function playTone(frequency: uint16, time?: uint16): void;

    /**
     * Reads the capacitiy of a specific pin
     * @param pin the number of the pin
     * @param samples
     */
    //% blockId="readCap" block="read capacity at pin %pin" samples.defl=10 shim=playground::readCap
    function readCap(pin: CapacityPin, samples?: uint16): uint16;

    /**
     * Reads the accelerometer's Motion X
     */
    //% blockId="motionX" block="motion X" shim=playground::motionX
    function motionX(): number;

    /**
     * Reads the accelerometer's Motion Y
     */
    //% blockId="motionY" block="motion Y" shim=playground::motionY
    function motionY(): number;

    /**
     * Reads the accelerometer's Motion Z 
     */
    //% blockId="motionZ" block="motion Z" shim=playground::motionZ
    function motionZ(): number;

    /**
     * Reads the temperature.
     */
    //% blockId="temperatur" block="temperature" shim=playground::temperature
    function temperature(): number;
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
    //% blockId="setPixelColorRgb" block="set pixel %p|to red %c|green %g|blue %b" shim=neopixels::setPixelColorRgb
    function setPixelColorRgb(p: uint8, r: uint8, g: uint8, b: uint8): void;

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


    /**
     * Functions to manipulate serial
     */
    //% color=#00a700 weight=40
declare namespace serial {

    /**
     * Serial print
     */
    //% blockId="print" block="print %code" shim=serial::print
    function print(code: uint16): void;
}


    /**
     * Arduino functions
     */
    //% color=#00979C weight=50
declare namespace arduino {

    /**
     * Pin Mode
     * @param pin the number of the pin whose mode you wish to set
     * @param mode INPUT, OUTPUT, or INPUT_PULLUP
     */
    //% help=https://www.arduino.cc/en/Reference/PinMode
    //% blockId="arduino_pinMode" block="pin mode pin %pin| to %mode" shim=arduino::pinMode
    function pinMode(pin: Pin, mode: PinMode): void;

    /**
     * Digital Write
     * @param pin the number of the pin
     * @param value HIGH or LOW
     */
    //% help=https://www.arduino.cc/en/Reference/DigitalWrite
    //% blockId="arduino_digitalWrite" block="digital write %pin| to %state" shim=arduino::digitalWrite
    function digitalWrite(pin: Pin, value: PulseValue): void;

    /**
     * Digital Read
     * @param pin the number of the pin
     * @param value HIGH or LOW
     */
    //% help=https://www.arduino.cc/en/Reference/DigitalRead
    //% blockId="arduino_digitalRead" block="digital read pin %pin" shim=arduino::digitalRead
    function digitalRead(pin: Pin): PulseValue;

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
    //% blockId="arduino_tone" block="tone on pin %pin| at frequency %frequency" icon="\uf025" duration.defl=1000 shim=arduino::tone
    function tone(pin: Pin, frequency: number, duration?: number): void;

    /**
     * No tone
     * Stops the generation of a square wave triggered by tone(). Has no effect if no tone is being generated.
     * @param pin the pin on which to stop generating the tone
     */
    //% help=https://www.arduino.cc/en/Reference/NoTone weight=91
    //% blockId="arduino_notone" block="no tone on pin %pin" icon="\uf025" shim=arduino::notone
    function notone(pin: Pin): void;

    /**
     * Analog Write
     * Writes an analog value to a pin. 
     * Can be used to light a LED at varying brightnesses or drive a motor at various speeds.
     * @param pin the pin to write to.
     * @param value the duty cycle: between 0 (always off) and 255 (always on).
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogWrite weight=91
    //% blockId="arduino_analogWrite" block="analog write pin %pin| to %value" shim=arduino::analogWrite
    function analogWrite(pin: Pin, value: uint8): void;

    /**
     * Analog Read
     * Reads the value from the specified analog pin. 
     * @param pin the number of the analog input pin to read from (0 to 5 on most boards, 0 to 7 on the Mini and Nano, 0 to 15 on the Mega)
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogRead weight=91
    //% blockId="arduino_analogRead" block="analog read pin %pin" shim=arduino::analogRead
    function analogRead(pin: Pin): PulseValue;

    /**
     * Analog Reference
     * Configures the reference voltage used for analog input (i.e. the value used as the top of the input range).
     * @param type which type of reference to use (DEFAULT, INTERNAL, INTERNAL1V1, INTERNAL2V56, or EXTERNAL).
     */
    //% help=https://www.arduino.cc/en/Reference/AnalogReference weight=91
    //% blockId="arduino_analogReference" block="analog reference type %type" shim=arduino::analogReference
    function analogReference(type: PinType): void;

    /**
     * Millis
     * Returns the number of milliseconds since the Arduino board began running the current program. 
     * This number will overflow (go back to zero), after approximately 50 days.
     */
    //% help=https://www.arduino.cc/en/Reference/Millis weight=91
    //% blockId="arduino_millis" block="millis" blockGap=8 shim=arduino::millis
    function millis(): number;

    /**
     * Millis
     * Returns the number of microseconds since the Arduino board began running the current program.
     * This number will overflow (go back to zero), after approximately 70 minutes.
     */
    //% help=https://www.arduino.cc/en/Reference/Micros weight=91
    //% blockId="arduino_micros" block="micros" blockGap=8 shim=arduino::micros
    function micros(): number;

    /**
     * Pulse In
     * Reads a pulse (either HIGH or LOW) on a pin.
     * @param pin the number of the pin on which you want to read the pulse. (int)
     * @param state type of pulse to read: either HIGH or LOW. (int)
     * @param timeout the number of microseconds to wait for the pulse to be completed: the function returns 0 if no complete pulse was received within the timeout. Default is one second.
     * @returns the length of the pulse (in microseconds) or 0 if no pulse is completed before the timeout
     */
    //% help=https://www.arduino.cc/en/Reference/PulseIn weight=91
    //% blockId="arduino_pulseIn" block="pulse in pin %pin| with state %state" timeout.defl=1000000 shim=arduino::pulseIn
    function pulseIn(pin: Pin, state: PulseValue, timeout?: number): number;

    /**
     * Min
     * Calculates the minimum of two numbers.
     * @param x the first number, any data type
     * @param y the second number, any data type
     * @returns The smaller of the two numbers.
     */
    //% help=https://www.arduino.cc/en/Reference/Min weight=91
    //% blockId="arduino_min" block="min of %x| and %y" icon="\uf1ec" shim=arduino::min
    function min(x: number, y: number): number;

    /**
     * Max
     * Calculates the maximum of two numbers.
     * @param x the first number, any data type
     * @param y the second number, any data type
     * @returns The larger of the two numbers.
     */
    //% help=https://www.arduino.cc/en/Reference/Max weight=91
    //% blockId="arduino_max" block="max of %x| and %y" icon="\uf1ec" shim=arduino::max
    function max(x: number, y: number): number;

    /**
     * Abs
     * Computes the absolute value of a number.
     * @param x the number
     * @returns x: if x is greater than or equal to 0, -x: if x is less than 0.
     */
    //% help=https://www.arduino.cc/en/Reference/Abs weight=91
    //% blockId="arduino_abs" block="abs of %x" icon="\uf1ec" shim=arduino::abs
    function abs(x: number): number;

    /**
     * Constrain
     * Constrains a number to be within a range.
     * @param x the number to constrain, all data types
     * @param y the lower end of the range, all data types
     * @param z the upper end of the range, all data types
     * @returns x: if x is between a and b, a: if x is less than a, b: if x is greater than b
     */
    //% help=https://www.arduino.cc/en/Reference/Constrain weight=91
    //% blockId="arduino_constrain" block="constrain %amt| between %low| and %high" icon="\uf1ec" shim=arduino::constrain
    function constrain(amt: number, low: number, high: number): number;

    /**
     * Map
     * Re-maps a number from one range to another. 
     * That is, a value of fromLow would get mapped to toLow, a value of fromHigh to toHigh, 
     * values in-between to values in-between, etc.
     * @param value the number to map
     * @param fromLow the lower bound of the value's current range
     * @param fromHigh the upper bound of the value's current range
     * @param toLow the lower bound of the value's target range
     * @param toHigh the upper bound of the value's target range
     * @returns The mapped value.
     */
    //% help=https://www.arduino.cc/en/Reference/Map weight=91
    //% blockId="arduino_map" block="map value %value| from range low %fromLow| high %fromHigh| to range low %toLow| high %toHigh|" shim=arduino::map
    function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number;

    /**
     * Random
     * The random function generates pseudo-random numbers.
     * @param max upper bound of the random value, exclusive, eg: 10
     * @returns a random number between min and max-1
     */
    //% help=https://www.arduino.cc/en/Reference/RandomSeed weight=91
    //% blockId="arduino_randomMax" block="random with max %max" icon="\uf1ec" shim=arduino::random
    function random(max: number): number;

    /**
     * Random
     * The random function generates pseudo-random numbers.
     * @param min lower bound of the random value, inclusive, eg: 0
     * @param max upper bound of the random value, exclusive, eg: 10
     * @returns a random number between min and max-1
     */
    //% help=https://www.arduino.cc/en/Reference/RandomSeed weight=91
    //% blockId="arduino_randomMinMax" block="random between %min| and %max" icon="\uf1ec" shim=arduino::random
    function random(min: number, max: number): number;

    /**
     * Random Seed
     * Initializes the pseudo-random number generator, 
     * causing it to start at an arbitrary point in its random sequence. This sequence, while very int, and random, is always the same.
     * @param seed a number to generate the seed.
     */
    //% help=https://www.arduino.cc/en/Reference/RandomSeed weight=91
    //% blockId="arduino_randomSeed" block="random seed %seed" icon="\uf1ec" shim=arduino::randomSeed
    function randomSeed(seed: number): void;
}


    /**
     * Arduino time functions
     */
    //% color=#00979C weight=10
declare namespace time {

    /**
     * Delay
     * Pauses the program for the amount of time (in miliseconds) specified as parameter.
     * (There are 1000 milliseconds in a second.)
     * @param ms the number of milliseconds to pause, eg: 1000
     */
    //% help=https://www.arduino.cc/en/Reference/Delay weight=91
    //% async blockId="arduino_delay" block="delay %ms| milliseconds" shim=time::delay
    function delay(ms: number): void;

    /**
     * Delay
     * Pauses the program for the amount of time (in microseconds) specified as parameter.
     * There are a thousand microseconds in a millisecond, and a million microseconds in a second.
     * @param us the number of microseconds to pause
     */
    //% help=https://www.arduino.cc/en/Reference/DelayMicroseconds weight=91
    //% async blockId="arduino_delayMicroseconds" block="delay %ms| microseconds" shim=time::delayMicroseconds
    function delayMicroseconds(us: number): void;
}

// Auto-generated. Do not edit. Really.
