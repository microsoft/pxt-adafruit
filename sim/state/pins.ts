
namespace pxsim.pins {
    export class DigitalPin extends Pin {
    }

    export class AnalogPin extends Pin {

    }
}

namespace pxsim.DigitalPinMethods {
    export function digitalRead(name: pins.DigitalPin): number {
        return name.digitalReadPin();
    }

    /**
    * Set a pin or connector value to either 0 or 1.
    * @param value value to set on the pin, 1 eg,0
    */
    export function digitalWrite(name: pins.DigitalPin, value: number): void {
        name.digitalWritePin(value);
    }

    /**
    * Configures this pin to a digital input, and generates events where the timestamp is the duration
    * that this pin was either ``high`` or ``low``.
    */
    export function onPulsed(name: pins.DigitalPin, pulse: number, body: RefAction): void {
        // TODO
    }

    /**
    * Returns the duration of a pulse in microseconds
    * @param value the value of the pulse (default high)
    * @param maximum duration in micro-seconds
    */
    export function pulseIn(name: pins.DigitalPin, pulse: number, maxDuration = 2000000): number {
        // TODO
        return 500;
    }

    /**
    * Configures the pull of this pin.
    * @param pull one of the mbed pull configurations: PullUp, PullDown, PullNone
    */
    export function setPull(name: pins.DigitalPin, pull: number): void {
        name.setPull(pull);
    }

    /**
    * Do something when a pin is pressed.
    * @param body the code to run when the pin is pressed
    */
    export function onPressed(name: pins.DigitalPin, body: RefAction): void {
    }

    /**
     * Do something when a pin is released.
     * @param body the code to run when the pin is released
     */
    export function onReleased(name: pins.DigitalPin, body: RefAction): void {
    }

    /**
     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
     * @param name pin used to detect the touch
     */
    export function isPressed(name: pins.DigitalPin): boolean {
        return name.isTouched();
    }
}

namespace pxsim.AnalogPinMethods {
    /**
     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
     */
    export function analogRead(name: pins.AnalogPin): number {
        return name.analogReadPin();
    }

    /**
     * Set the connector value as analog. Value must be comprised between 0 and 1023.
     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0
     */
    export function analogWrite(name: pins.AnalogPin, value: number): void {
        name.analogWritePin(value);
    }

    /**
     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in
     * **microseconds** or `1/1000` milliseconds.
     * If this pin is not configured as an analog output (using `analog write pin`), the operation has
     * no effect.
     * @param micros period in micro seconds. eg:20000
     */
    export function analogSetPeriod(name: pins.AnalogPin, micros: number): void {
        name.analogSetPeriod(micros);
    }

    /**
     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will
     * set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous
     * rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one
     * direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).
     * @param value angle or rotation speed, eg:180,90,0
     */
    export function servoWrite(name: pins.AnalogPin, value: number): void {
        name.servoWritePin(value);
    }

    /**
     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the
     * pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.
     * @param micros pulse duration in micro seconds, eg:1500
     */
    export function servoSetPulse(name: pins.AnalogPin, micros: number): void {
        // TODO fix pxt
        // name.servoSetPulse(micros);
    }
}

namespace pxsim.PwmPinMethods {
    export function analogPitch(name: pins.AnalogPin, frequency: number, ms: number) {
        name.mode = PinFlags.Analog | PinFlags.Output;
        if (frequency <= 0) {
            name.value = 0;
            name.period = 0;
        } else {
            name.value = 512;
            name.period = 1000000 / frequency;
        }
        
        const audioState = board().audioState;
        audioState.startPlaying();
        runtime.queueDisplayUpdate();
        AudioContextManager.tone(frequency, 1);
        let cb = getResume();
        if (ms <= 0) cb();
        else {
            setTimeout(() => {
                AudioContextManager.stop();
                audioState.stopPlaying();
                name.value = 0;
                name.period = 0;
                name.mode = PinFlags.Unused;
                runtime.queueDisplayUpdate();
                cb()
            }, ms);
        }
    }

    export function playTone(name: pins.AnalogPin, frequency: number, ms: number) {
        analogPitch(name, frequency, ms);
    }

    export function ringTone(name: pins.AnalogPin, frequency: number) {
        analogPitch(name, frequency, 0);
    }

    export function rest(name: pins.AnalogPin, ms: number) {
        analogPitch(name, 0, ms);
    }

    export function analogSetPeriod(name: pins.AnalogPin, micros: number): void {
        name.analogSetPeriod(micros);
    }

    export function servoWrite(name: pins.AnalogPin, value: number): void {
        name.servoWritePin(value);
    }

    export function servoSetPulse(name: pins.AnalogPin, micros: number): void {
        name.servoSetPulse(name.id, micros);
    }
}

namespace pxsim.pins {
    export function pulseDuration(): number {
        // bus last event timestamp
        return 500;
    }
    
    export function createBuffer(sz: number) {
        return pxsim.BufferMethods.createBuffer(sz)
    }

    export function spiWrite(value: number): number {
        // TODO
        return 0;
    }

    export function i2cReadBuffer(address: number, size: number, repeat?: boolean): RefBuffer {
        // fake reading zeros
        return createBuffer(size)
    }

    export function i2cWriteBuffer(address: number, buf: RefBuffer, repeat?: boolean): void {
        // fake - noop
    }
}

