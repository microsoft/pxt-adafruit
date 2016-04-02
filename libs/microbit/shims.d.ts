// Auto-generated. Do not edit.



    //% color=45 weight=31
declare namespace images {

    /**
     * Creates an image that fits on the LED screen.
     */
    //% weight=75 help=images/create-image
    //% blockId=device_build_image block="create image" imageLiteral=1 shim=images::createImage
    function createImage(leds: string): Image;

    /**
     * Creates an image with 2 frames.
     */
    //% weight=74 help=images/create-big-image
    //% blockId=device_build_big_image block="create big image" imageLiteral=2 shim=images::createBigImage
    function createBigImage(leds: string): Image;
}


declare interface Image {
    /**
     * Shows an frame from the image at offset ``x offset``.
     * @param xOffset TODO
     */
    //% help=images/show-image weight=80 async
    //% blockId=device_show_image_offset block="show image %sprite|at offset %offset" blockGap=8 xOffset.defl=0 shim=ImageMethods::showImage
    showImage(xOffset?: number): void;

    /**
     * Scrolls an image .
     * @param frameOffset x offset moved on each animation step, eg: 5, 1, -1
     * @param interval time between each animation step in milli seconds, eg: 200
     */
    //% help=images/show-image weight=79 async
    //% blockId=device_scroll_image block="scroll image %sprite|with offset %frameoffset|and interval (ms) %delay" blockGap=8 frameOffset.defl=0 interval.defl=200 shim=ImageMethods::scrollImage
    scrollImage(frameOffset?: number, interval?: number): void;

    /**
     * Plots the image at a given column to the screen
     */
    //% help=images/plot-image xOffset.defl=0 shim=ImageMethods::plotImage
    plotImage(xOffset?: number): void;

    /**
     * Sets all pixels off.
     */
    //% help=images/clear shim=ImageMethods::clear
    clear(): void;

    /**
     * Sets a specific pixel brightness at a given position
     */
    //% help= shim=ImageMethods::setPixelBrightness
    setPixelBrightness(x: number, y: number, value: number): void;

    /**
     * Gets the pixel brightness ([0..255]) at a given position
     */
    //% help= shim=ImageMethods::pixelBrightness
    pixelBrightness(x: number, y: number): number;
}


    /**
     * Provides access to basic micro:bit functionality.
     */
    //% color=190 weight=100
declare namespace basic {

    /**
     * Scroll a number on the screen. If the number fits on the screen (i.e. is a single digit), do not scroll.
     * @param interval speed of scroll; eg: 150, 100, 200, -100
     */
    //% help=basic/show-number
    //% weight=96
    //% blockId=device_show_number block="show|number %number" blockGap=8 icon="\uf1ec"
    //% async interval.defl=150 shim=basic::showNumber
    function showNumber(value: number, interval?: number): void;

    /**
     * Draws an image on the LED screen.
     * @param leds TODO
     * @param interval TODO
     */
    //% help=basic/show-leds 
    //% weight=95 blockGap=8
    //% imageLiteral=1 async
    //% blockId=device_show_leds
    //% block="show leds" icon="\uf00a" interval.defl=400 shim=basic::showLeds
    function showLeds(leds: string, interval?: number): void;

    /**
     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.
     * @param text the text to scroll on the screen, eg: "Hello!"
     * @param interval how fast to shift characters; eg: 150, 100, 200, -100
     */
    //% help=basic/show-string 
    //% weight=87 blockGap=8
    //% block="show|string %text" icon="\uf031" 
    //% async
    //% blockId=device_print_message interval.defl=150 shim=basic::showString
    function showString(text: string, interval?: number): void;

    /**
     * Turn off all LEDs
     */
    //% help=basic/clear-screen weight=79
    //% blockId=device_clear_display block="clear screen" icon="\uf12d" shim=basic::clearScreen
    function clearScreen(): void;

    /**
     * Shows a sequence of LED screens as an animation.
     * @param leds TODO
     * @param interval TODO
     */
    //% help=basic/show-animation imageLiteral=1 async interval.defl=400 shim=basic::showAnimation
    function showAnimation(leds: string, interval?: number): void;

    /**
     * Draws an image on the LED screen.
     * @param leds TODO
     */
    //% help=basic/plot-leds weight=80 imageLiteral=1 shim=basic::plotLeds
    function plotLeds(leds: string): void;

    /**
     * Repeats the code forever in the background. On each iteration, allows other codes to run.
     * @param body TODO
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



    //% color=300 weight=99
declare namespace input {

    /**
     * Do something when a button (``A``, ``B`` or both ``A+B``) is pressed
     * @param button TODO
     * @param body TODO
     */
    //% help=input/on-button-pressed weight=85
    //% blockId=device_button_event 
    //% block="on button|%NAME|pressed" 
    //% icon="\uf192" shim=input::onButtonPressed
    function onButtonPressed(button: Button , body: () => void): void;

    /**
     * Attaches code to run when the screen is facing up.
     * @param body TODO
     */
    //% help=input/on-gesture weight=84
    //% blockId=device_gesture_event block="on |%NAME" icon="\uf135" shim=input::onGesture
    function onGesture(gesture: Gesture , body: () => void): void;

    /**
     * Do something when a pin(``P0``, ``P1`` or both ``P2``) is pressed.
     * @param name TODO
     * @param body TODO
     */
    //% help=input/on-pin-pressed weight=83 shim=micro_bit::onPinPressed
    //% blockId=device_pin_event block="on pin|%NAME|pressed" icon="\uf094" shim=input::onPinPressed
    function onPinPressed(name: TouchPin , body: () => void): void;

    /**
     * Get the button state (pressed or not) for ``A`` and ``B``.
     */
    //% help=input/button-is-pressed weight=57
    //% shim=micro_bit::isButtonPressed 
    //% block="button|%NAME|is pressed"
    //% blockId=device_get_button2
    //% icon="\uf192" blockGap=8 shim=input::buttonIsPressed
    function buttonIsPressed(button: Button ): boolean;

    /**
     * Get the current compass compass heading in degrees.
     */
    //% help=input/compass-heading 
    //% weight=56 icon="\uf14e"
    //% shim=micro_bit::compassHeading
    //% blockId=device_heading block="compass heading (°)" blockGap=8 shim=input::compassHeading
    function compassHeading(): number;

    /**
     * Gets the temperature in Celsius degrees (°C).
     */
    //% weight=55 icon="\uf06d"
    //% help=input/temperature shim=micro_bit::temperature
    //% blockId=device_temperature block="temperature (°C)" blockGap=8 shim=input::temperature
    function temperature(): number;

    /**
     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up, x=0, y=0 and z=-1024)
     * @param dimension TODO
     */
    //% help=input/acceleration weight=54 icon="\uf135"
    //% shim=micro_bit::getAcceleration
    //% blockId=device_acceleration block="acceleration (mg)|%NAME" blockGap=8 shim=input::acceleration
    function acceleration(dimension: Dimension ): number;

    /**
     * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright. In the simulator, the ``acceleration y`` is used to emulate this value.
     */
    //% help=input/light-level weight=53 shim=micro_bit::lightLevel
    //% blockId=device_get_light_level block="light level" blockGap=8 icon="\uf185" shim=input::lightLevel
    function lightLevel(): number;

    /**
     * The pitch of the device, rotation along the ``x-axis``, in degrees.
     * @param kind TODO
     */
    //% help=/input/rotation weight=52 shim=micro_bit::getRotation
    //% blockId=device_get_rotation block="rotation (°)|%NAME" blockGap=8 icon="\uf197" shim=input::rotation
    function rotation(kind: Rotation ): number;

    /**
     * Get the magnetic force value in ``micro-Teslas`` (``µT``). This function is not supported in the simulator.
     * @param dimension TODO
     */
    //% help=input/magnetic-force weight=51 shim=micro_bit::getMagneticForce
    //% blockId=device_get_magnetic_force block="magnetic force (µT)|%NAME" blockGap=8 icon="\uf076" shim=input::magneticForce
    function magneticForce(dimension: Dimension ): number;

    /**
     * Gets the number of milliseconds elapsed since power on.
     */
    //% help=input/running-time shim=micro_bit::getCurrentTime weight=50
    //% blockId=device_get_running_time block="running time (ms)" icon="\uf017" shim=input::runningTime
    function runningTime(): number;

    /**
     * Obsolete, compass calibration is automatic.
     */
    //% help=input/calibrate weight=0 shim=TD_NOOP shim=input::calibrate
    function calibrate(): void;

    /**
     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
     * @param name pin used to detect the touch
     */
    //% help=input/pin-is-pressed weight=58 shim=micro_bit::isPinTouched block="pin|%NAME|is pressed" icon="\uf094" shim=input::pinIsPressed
    function pinIsPressed(name: TouchPin ): boolean;

    /**
     * Sets the accelerometer sample range in gravities.
     * @param range a value describe the maximum strengh of acceleration measured
     */
    //% help=input/set-accelerator-range
    //% blockId=device_set_accelerometer_range block="set accelerometer|range %range" icon="\uf135"
    //% weight=5
    //% shim=micro_bit::setAccelerometerRange shim=input::setAccelerometerRange
    function setAccelerometerRange(range: AcceleratorRange ): void;
}



    //% weight=1 color="#333333"
declare namespace control {

    /**
     * Schedules code that run in the background.
     */
    //% help=control/in-background
    //% blockId="control_in_background" block="run in background" blockGap=8 shim=control::inBackground
    function inBackground(a: () => void): void;

    /**
     * Resets the BBC micro:bit.
     */
    //% weight=30 async help=control/reset
    //% blockId="control_reset" block="reset" shim=control::reset
    function reset(): void;

    /**
     * Raises an event in the event bus.
     * @param src ID of the MicroBit Component that generated the event e.g. MICROBIT_ID_BUTTON_A.
     * @param value Component specific code indicating the cause of the event.
     * @param mode optional definition of how the event should be processed after construction (default is CREATE_AND_QUEUE).
     */
    //% weight=21 blockGap=12 blockId="control_raise_event" block="raise event|from source %src=control_event_source|with value %value=control_event_value" blockExternalInputs=1
    //%  mode.defl=1 shim=control::raiseEvent
    function raiseEvent(src: number, value: number, mode: EventCreationMode ): void;

    /**
     * Raises an event in the event bus.
     */
    //% weight=20 blockGap=8 blockId="control_on_event" block="on event|from %src=control_event_source|with value %value=control_event_value" 
    //% blockExternalInputs=1 blockStatement=1 shim=control::onEvent
    function onEvent(src: number, value: number, handler: () => void): void;
}



    //% color=351 weight=30
declare namespace pins {

    /**
     * Read the specified pin or connector as either 0 or 1
     * @param name pin to read from
     */
    //% help=pins/digital-read-pin weight=30 shim=micro_bit::digitalReadPin
    //% blockId=device_get_digital_pin block="digital read|pin %name" blockGap=8 shim=pins::digitalReadPin
    function digitalReadPin(name: DigitalPin ): number;

    /**
     * Set a pin or connector value to either 0 or 1.
     * @param name pin to write to
     * @param value value to set on the pin, 1 eg,0
     */
    //% help=pins/digital-write-pin weight=29 shim=micro_bit::digitalWritePin
    //% blockId=device_set_digital_pin block="digital write|pin %name|to %value" shim=pins::digitalWritePin
    function digitalWritePin(name: DigitalPin , value: number): void;

    /**
     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
     * @param name pin to write to
     */
    //% help=pins/analog-read-pin weight=25 shim=micro_bit::analogReadPin
    //% blockId=device_get_analog_pin block="analog read|pin %name" blockGap="8" shim=pins::analogReadPin
    function analogReadPin(name: AnalogPin ): number;

    /**
     * Set the connector value as analog. Value must be comprised between 0 and 1023.
     * @param name pin name to write to
     * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0
     */
    //% help=pins/analog-write-pin weight=24 shim=micro_bit::analogWritePin
    //% blockId=device_set_analog_pin block="analog write|pin %name|to %value" blockGap=8 shim=pins::analogWritePin
    function analogWritePin(name: AnalogPin , value: number): void;

    /**
     * Configures the Pulse-width modulation (PWM) of the analog output to the given value in **microseconds** or `1/1000` milliseconds.
     * If this pin is not configured as an analog output (using `analog write pin`), the operation has no effect.
     * @param name analog pin to set period to
     * @param micros period in micro seconds. eg:20000
     */
    //% shim=micro_bit::setAnalogPeriodUs help=pins/analog-set-period weight=23
    //% blockId=device_set_analog_period block="analog set period|pin %pin|to (µs)%micros" shim=pins::analogSetPeriod
    function analogSetPeriod(name: AnalogPin , micros: number): void;

    /**
     * Writes a value to the servo, controlling the shaft accordingly. On a standard servo, this will set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).
     * @param name pin to write to
     * @param value angle or rotation speed, eg:180,90,0
     */
    //% help=pins/servo-write-pin weight=20 shim=micro_bit::servoWritePin
    //% blockId=device_set_servo_pin block="servo write|pin %name|to %value" blockGap=8 shim=pins::servoWritePin
    function servoWritePin(name: AnalogPin , value: number): void;

    /**
     * Configures this IO pin as an analog/pwm output, configures the period to be 20 ms, and sets the pulse width, based on the value it is given **microseconds** or `1/1000` milliseconds.
     * @param name pin name
     * @param micros pulse duration in micro seconds, eg:1500
     */
    //% shim=micro_bit::setServoPulseUs help=pins/serial-set-pulse weight=19
    //% blockId=device_set_servo_pulse block="servo set pulse|pin %value|to (µs) %micros" shim=pins::servoSetPulse
    function servoSetPulse(name: AnalogPin , micros: number): void;

    /**
     * Sets the pin used when using `pins->analog pitch`.
     * @param name TODO
     */
    //% shim=micro_bit::enablePitch help=pins/analog-set-pitch weight=12 shim=pins::analogSetPitchPin
    function analogSetPitchPin(name: AnalogPin ): void;

    /**
     * Emits a Pulse-width modulation (PWM) signal to the current pitch pin. Use `analog set pitch pin` to define the pitch pin.
     * @param frequency TODO
     * @param ms TODO
     */
    //% shim=micro_bit::pitch help=pins/analog-pitch weight=14 async shim=pins::analogPitch
    function analogPitch(frequency: number, ms: number): void;
}

// Auto-generated. Do not edit. Really.
