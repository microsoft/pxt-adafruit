// Auto-generated. Do not edit.
declare namespace pins {


    //% indexedInstanceNS=pins indexedInstanceShim=pins::getPin
    //% fixedInstance shim=pins::getPin(0)
    const A0: AnalogPin;


    //% fixedInstance shim=pins::getPin(1)
    const A1: AnalogPin;


    //% fixedInstance shim=pins::getPin(2)
    const A2: AnalogPin;


    //% fixedInstance shim=pins::getPin(3)
    const A3: AnalogPin;


    //% fixedInstance shim=pins::getPin(4)
    const A4: AnalogPin;


    //% fixedInstance shim=pins::getPin(5)
    const A5: AnalogPin;


    //% fixedInstance shim=pins::getPin(6)
    const A6: AnalogPin;


    //% fixedInstance shim=pins::getPin(7)
    const D0: DigitalPin;


    //% fixedInstance shim=pins::getPin(8)
    const D1: DigitalPin;


    //% fixedInstance shim=pins::getPin(9)
    const D2: DigitalPin;


    //% fixedInstance shim=pins::getPin(10)
    const D3: DigitalPin;


    //% fixedInstance shim=pins::getPin(11)
    const D4: DigitalPin;


    //% fixedInstance shim=pins::getPin(12)
    const D5: DigitalPin;


    //% fixedInstance shim=pins::getPin(13)
    const D6: DigitalPin;


    //% fixedInstance shim=pins::getPin(14)
    const D7: DigitalPin;


    //% fixedInstance shim=pins::getPin(15)
    const D8: DigitalPin;


    //% fixedInstance shim=pins::getPin(16)
    const D9: DigitalPin;


    //% fixedInstance shim=pins::getPin(17)
    const D10: DigitalPin;


    //% fixedInstance shim=pins::getPin(18)
    const D11: DigitalPin;


    //% fixedInstance shim=pins::getPin(19)
    const D12: DigitalPin;


    //% fixedInstance shim=pins::getPin(20)
    const D13: DigitalPin;


    //% fixedInstance shim=pins::getPin(21)
    const LED: DigitalPin;


    //% fixedInstance shim=pins::getPin(22)
    const LEDRX: DigitalPin;


    //% fixedInstance shim=pins::getPin(23)
    const LEDTX: DigitalPin;


    //% fixedInstance shim=pins::getPin(24)
    const MOSI: DigitalPin;


    //% fixedInstance shim=pins::getPin(25)
    const MISO: DigitalPin;


    //% fixedInstance shim=pins::getPin(26)
    const SCK: DigitalPin;


    //% fixedInstance shim=pins::getPin(27)
    const SDA: DigitalPin;


    //% fixedInstance shim=pins::getPin(28)
    const SCL: DigitalPin;
}


    /**
     * Provides access to basic device functionality.
     */
    //% color=#0078D7 weight=100
declare namespace basic {

    /**
     * Repeats the code forever in the background. On each iteration, allows other codes to run.
     * @param body code to execute
     */
    //% help=basic/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" icon="\uf01e" shim=basic::forever
    function forever(a: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=basic/pause weight=54
    //% async block="pause (ms) %pause"
    //% blockId=device_pause icon="\uf110" shim=basic::pause
    function pause(ms: number): void;
}


declare interface DigitalPin {
    /**
     * Read the specified pin or connector as either 0 or 1
     * @param name pin to read from
     */
    //% help=pins/digital-read-pin weight=30
    //% blockId=device_get_digital_pin block="digital read|pin %name" blockGap=8
    //% blockNamespace=pins shim=DigitalPinMethods::digitalRead
    digitalRead(): number;

    /**
     * Set a pin or connector value to either 0 or 1.
     * @param name pin to write to
     * @param value value to set on the pin, 1 eg,0
     */
    //% help=pins/digital-write-pin weight=29
    //% blockId=device_set_digital_pin block="digital write|pin %name|to %value"
    //% blockNamespace=pins shim=DigitalPinMethods::digitalWrite
    digitalWrite(value: number): void;

    /**
     * Configures this pin to a digital input, and generates events where the timestamp is the duration
     * that this pin was either ``high`` or ``low``.
     */
    //% help=pins/on-pulsed weight=22 blockGap=8 advanced=true
    //% blockId=pins_on_pulsed block="on|pin %pin|pulsed %pulse"
    //% blockNamespace=pins shim=DigitalPinMethods::onPulsed
    onPulsed(pulse: PulseValue, body: () => void): void;

    /**
     * Returns the duration of a pulse in microseconds
     * @param name the pin which measures the pulse
     * @param value the value of the pulse (default high)
     * @param maximum duration in micro-seconds
     */
    //% blockId="pins_pulse_in" block="pulse in (µs)|pin %name|pulsed %value"
    //% weight=20 advanced=true
    //% blockNamespace=pins maxDuration.defl=2000000 shim=DigitalPinMethods::pulseIn
    pulseIn(value: PulseValue, maxDuration?: number): number;

    /**
     * Configures the pull of this pin.
     * @param name pin to set the pull mode on
     * @param pull one of the mbed pull configurations: PullUp, PullDown, PullNone
     */
    //% help=pins/set-pull weight=3 advanced=true
    //% blockId=device_set_pull block="set pull|pin %pin|to %pull"
    //% blockNamespace=pins shim=DigitalPinMethods::setPull
    setPull(pull: PinPullMode): void;

    /**
     * Do something when a pin is pressed.
     * @param name the pin that needs to be pressed, eg: TouchPin.P0
     * @param body the code to run when the pin is pressed
     */
    //% help=input/on-pin-pressed weight=83
    //% blockId=device_pin_event block="on pin %name|pressed"
    //% blockNamespace=input shim=DigitalPinMethods::onPressed
    onPressed(body: () => void): void;

    /**
     * Do something when a pin is released.
     * @param name the pin that needs to be released, eg: TouchPin.P0
     * @param body the code to run when the pin is released
     */
    //% help=input/on-pin-released weight=6 blockGap=8
    //% blockId=device_pin_released block="on pin %NAME|released"
    //% advanced=true
    //% blockNamespace=input shim=DigitalPinMethods::onReleased
    onReleased(body: () => void): void;

    /**
     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
     * @param name pin used to detect the touch, eg: TouchPin.P0
     */
    //% help=input/pin-is-pressed weight=58
    //% blockId="device_pin_is_pressed" block="pin %NAME|is pressed"
    //% blockGap=8
    //% blockNamespace=input shim=DigitalPinMethods::isPressed
    isPressed(): boolean;
}


declare interface AnalogPin {
    /**
     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
     * @param name pin to write to
     */
    //% help=pins/analog-read-pin weight=25
    //% blockId=device_get_analog_pin block="analog read|pin %name" blockGap="8"
    //% blockNamespace=pins shim=AnalogPinMethods::analogRead
    analogRead(): number;

    /**
     * Set the connector value as analog. Value must be comprised between 0 and 1023.
     * @param name pin name to write to
     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0
     */
    //% help=pins/analog-write-pin weight=24
    //% blockId=device_set_analog_pin block="analog write|pin %name|to %value" blockGap=8
    //% blockNamespace=pins shim=AnalogPinMethods::analogWrite
    analogWrite(value: number): void;

    /**
     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in
     * **microseconds** or `1/1000` milliseconds.
     * If this pin is not configured as an analog output (using `analog write pin`), the operation has
     * no effect.
     * @param name analog pin to set period to
     * @param micros period in micro seconds. eg:20000
     */
    //% help=pins/analog-set-period weight=23 blockGap=8
    //% blockId=device_set_analog_period block="analog set period|pin %pin|to (µs)%micros"
    //% blockNamespace=pins shim=AnalogPinMethods::analogSetPeriod
    analogSetPeriod(micros: number): void;

    /**
     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will
     * set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous
     * rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one
     * direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).
     * @param name pin to write to
     * @param value angle or rotation speed, eg:180,90,0
     */
    //% help=pins/servo-write-pin weight=20
    //% blockId=device_set_servo_pin block="servo write|pin %name|to %value" blockGap=8
    //% parts=microservo trackArgs=0
    //% blockNamespace=pins shim=AnalogPinMethods::servoWrite
    servoWrite(value: number): void;

    /**
     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the
     * pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.
     * @param name pin name
     * @param micros pulse duration in micro seconds, eg:1500
     */
    //% help=pins/servo-set-pulse weight=19
    //% blockId=device_set_servo_pulse block="servo set pulse|pin %value|to (µs) %micros"
    //% blockNamespace=pins shim=AnalogPinMethods::servoSetPulse
    servoSetPulse(micros: number): void;
}
declare namespace pins {

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //% shim=pins::createBuffer
    function createBuffer(size: number): Buffer;

    /**
     * Gets the duration of the last pulse in micro-seconds. This function should be called from a
     * ``onPulsed`` handler.
     */
    //% help=pins/pulse-duration advanced=true
    //% blockId=pins_pulse_duration block="pulse duration (µs)"
    //% weight=21 blockGap=8 shim=pins::pulseDuration
    function pulseDuration(): number;

    /**
     * Sets the pin used when using `analog pitch` or music.
     * @param name pin to modulate pitch from
     */
    //% blockId=device_analog_set_pitch_pin block="analog set pitch pin %name"
    //% help=pins/analog-set-pitch weight=3 advanced=true shim=pins::analogSetPitchPin
    function analogSetPitchPin(name: AnalogPin): void;

    /**
     * Emits a Pulse-width modulation (PWM) signal to the current pitch pin. Use `analog set pitch pin`
     * to define the pitch pin.
     * @param frequency frequency to modulate in Hz.
     * @param ms duration of the pitch in milli seconds.
     */
    //% blockId=device_analog_pitch block="analog pitch %frequency|for (ms) %ms"
    //% help=pins/analog-pitch weight=4 async advanced=true blockGap=8 shim=pins::analogPitch
    function analogPitch(frequency: number, ms: number): void;
}



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



    //% weight=2 color=30
    //% advanced=true
declare namespace serial {

    /**
     * Sends a piece of text through Serial connection.
     */
    //% help=serial/write-string
    //% weight=87
    //% blockId=serial_writestring block="serial|write string %text" shim=serial::writeString
    function writeString(text: string): void;
}

// Auto-generated. Do not edit. Really.
