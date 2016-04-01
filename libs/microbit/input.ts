enum Button {
    //% enumval=MICROBIT_ID_BUTTON_A
    A,
    //% enumval=MICROBIT_ID_BUTTON_B
    B,
    //% enumval=MICROBIT_ID_BUTTON_AB
    //% block="A+B"
    AB,
}

enum Dimension {
    //% block=x
    X = 0,
    //% block=y
    Y = 1,
    //% block=z
    Z = 2,
    //% block=strength
    Strength = 3,
}

enum Rotation {
    //% block=pitch
    Pitch = 0,
    //% block=roll
    Roll = 1,
}

enum TouchPin {
    //% enumval=uBit.io.P0
    P0,
    //% enumval=uBit.io.P1
    P1,
    //% enumval=uBit.io.P2
    P2,
}

enum AcceleratorRange {
    /**
     * The accelerator measures forces up to 1 gravity
     */
    //%  block="1g"
    OneG = 1,
    /**
     * The accelerator measures forces up to 2 gravity
     */
    //%  block="2g"
    TwoG = 2,
    /**
     * The accelerator measures forces up to 4 gravity
     */
    //% block="4g"
    FourG = 4,
    /**
     * The accelerator measures forces up to 8 gravity
     */
    //% block="8g"
    EightG = 8
}

/*
enum BasicGesture
{
    GESTURE_NONE,
    GESTURE_UP,
    GESTURE_DOWN,
    GESTURE_LEFT,
    GESTURE_RIGHT,
    GESTURE_FACE_UP,
    GESTURE_FACE_DOWN,
    GESTURE_FREEFALL,
    GESTURE_3G,
    GESTURE_6G,
    GESTURE_8G,
    GESTURE_SHAKE
};
*/

enum Gesture {
    /**
     * Raised when shaken
     */
    //% block=shake
    Shake = 11,
    /**
     * Raised when the logo is upward and the screen is vertical
     */
    //% block="logo up"
    LogoUp = 1,
    /**
     * Raised when the logo is downward and the screen is vertical
     */
    //% block="logo down"
    LogoDown = 2,
    /**
     * Raised when the screen is pointing down and the board is horizontal
     */
    //% block="screen up"
    ScreenUp = 5,
    /**
     * Raised when the screen is pointing up and the board is horizontal
     */
    //% block="screen down"
    ScreenDown = 6,
    /**
     * Raised when the screen is pointing left
     */
    //% block="tilt left"
    TiltLeft = 3,
    /**
     * Raised when the screen is pointing right
     */
    //% block="tilt right"
    TiltRight = 4,    
    /**
     * Raised when the board is falling!
     */
    //% block="free fall"
    FreeFall = 7
}

//% color=300 weight=99
namespace input {
    /**
     * Do something when a button (``A``, ``B`` or both ``A+B``) is pressed
     * @param button TODO
     * @param body TODO
     */
    //% help=input/on-button-pressed weight=85
    //% shim=micro_bit::onButtonPressed
    //% blockId=device_button_event 
    //% block="on button|%NAME|pressed" 
    //% icon="\uf192"
    export function onButtonPressed(button: Button, body: Action): void { }

    /**
     * Attaches code to run when the screen is facing up.
     * @param body TODO
     */
    //% help=input/on-gesture shim=micro_bit::onGesture weight=84
    //% blockId=device_gesture_event block="on |%NAME" icon="\uf135"
    export function onGesture(gesture: Gesture, body: Action): void { }

    /**
     * Do something when a pin(``P0``, ``P1`` or both ``P2``) is pressed.
     * @param name TODO
     * @param body TODO
     */
    //% help=input/on-pin-pressed weight=83 shim=micro_bit::onPinPressed
    //% blockId=device_pin_event block="on pin|%NAME|pressed" icon="\uf094"
    export function onPinPressed(name: TouchPin, body: Action): void { }

    /**
     * Get the button state (pressed or not) for ``A`` and ``B``.
     */
    //% help=input/button-is-pressed weight=57
    //% shim=micro_bit::isButtonPressed 
    //% block="button|%NAME|is pressed"
    //% blockId=device_get_button2
    //% icon="\uf192" blockGap=8
    export function buttonIsPressed(button: Button): boolean {
        return false;
    }


    /**
     * Get the current compass compass heading in degrees.
     */
    //% help=input/compass-heading 
    //% weight=56 icon="\uf14e"
    //% shim=micro_bit::compassHeading
    //% blockId=device_heading block="compass heading (°)" blockGap=8
    export function compassHeading(): number {
        return 0;
    }


    /**
     * Gets the temperature in Celsius degrees (°C).
     */
    //% weight=55 icon="\uf06d"
    //% help=input/temperature shim=micro_bit::temperature
    //% blockId=device_temperature block="temperature (°C)" blockGap=8
    export function temperature(): number {
        return 0;
    }

    /**
     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up, x=0, y=0 and z=-1024)
     * @param dimension TODO
     */
    //% help=input/acceleration weight=54 icon="\uf135"
    //% shim=micro_bit::getAcceleration
    //% blockId=device_acceleration block="acceleration (mg)|%NAME" blockGap=8
    export function acceleration(dimension: Dimension): number {
        return 0;
    }


    /**
     * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright. In the simulator, the ``acceleration y`` is used to emulate this value.
     */
    //% help=input/light-level weight=53 shim=micro_bit::lightLevel
    //% blockId=device_get_light_level block="light level" blockGap=8 icon="\uf185"
    export function lightLevel(): number {
        return 0;
    }

    /**
     * The pitch of the device, rotation along the ``x-axis``, in degrees.
     * @param kind TODO
     */
    //% help=/input/rotation weight=52 shim=micro_bit::getRotation
    //% blockId=device_get_rotation block="rotation (°)|%NAME" blockGap=8 icon="\uf197"
    export function rotation(kind: Rotation): number {
        return 0;
    }

    /**
     * Get the magnetic force value in ``micro-Teslas`` (``µT``). This function is not supported in the simulator.
     * @param dimension TODO
     */
    //% help=input/magnetic-force weight=51 shim=micro_bit::getMagneticForce
    //% blockId=device_get_magnetic_force block="magnetic force (µT)|%NAME" blockGap=8 icon="\uf076"
    export function magneticForce(dimension: Dimension): number {
        return 0;
    }

    /**
     * Gets the number of milliseconds elapsed since power on.
     */
    //% help=input/running-time shim=micro_bit::getCurrentTime weight=50
    //% blockId=device_get_running_time block="running time (ms)" icon="\uf017"
    export function runningTime(): number {
        return 0;
    }

    /**
     * Obsolete, compass calibration is automatic.
     */
    //% help=input/calibrate weight=0 shim=TD_NOOP
    export function calibrate(): void { }

    /**
     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
     * @param name pin used to detect the touch
     */
    //% help=input/pin-is-pressed weight=58 shim=micro_bit::isPinTouched block="pin|%NAME|is pressed" icon="\uf094"
    export function pinIsPressed(name: TouchPin): boolean {
        return false;
    }

    /**
     * Attaches code to run when the screen is facing up.
     * @param body TODO
     */
    //% help=input/on-screen-up
    export function onScreenUp(body: Action): void {
        onGesture(Gesture.ScreenUp, body);
    }

    /**
     * Attaches code to run when the screen is facing down.
     * @param body TODO
     */
    //% help=input/on-screen-down
    export function onScreenDown(body: Action): void {
        onGesture(Gesture.ScreenDown, body);
    }

    /**
     * Attaches code to run when the device is shaken.
     * @param body TODO
     */
    //% help=input/on-shake
    export function onShake(body: Action): void {
        onGesture(Gesture.Shake, body);
    }

    /**
     * Attaches code to run when the logo is oriented upwards and the board is vertical.
     * @param body TODO
     */
    //% help=input/on-logo-up
    export function onLogoUp(body: Action): void {
        onGesture(Gesture.LogoUp, body);
    }

    /**
     * Attaches code to run when the logo is oriented downwards and the board is vertical.
     * @param body TODO
     */
    //% help=input/on-logo-down
    export function onLogoDown(body: Action): void {
        onGesture(Gesture.LogoDown, body);
    }
    
    /**
     * Sets the accelerometer sample range in gravities.
     * @param range a value describe the maximum strengh of acceleration measured
     */
    //% help=input/set-accelerator-range
    //% blockId=device_set_accelerometer_range block="set accelerometer|range %range" icon="\uf135"
    //% weight=5
    //% shim=micro_bit::setAccelerometerRange
    export function setAccelerometerRange(range : AcceleratorRange) : void {
        
    }
}
