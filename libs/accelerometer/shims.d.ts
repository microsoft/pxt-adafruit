// Auto-generated. Do not edit.
declare namespace input {

    /**
     * Do something when when a gesture is done (like shaking the micro:bit).
     * @param gesture the type of gesture to track, eg: Gesture.Shake
     * @param body code to run when gesture is raised
     */
    //% help=input/on-gesture weight=98 blockGap=8
    //% blockId=device_gesture_event block="on |%NAME"
    //% parts="accelerometer" shim=input::onGesture
    function onGesture(gesture: Gesture, body: () => void): void;

    /**
     * Get the acceleration value in milli-gravitys (when the board is laying flat with the screen up,
     * x=0, y=0 and z=-1024)
     * @param dimension TODO
     */
    //% help=input/acceleration weight=76
    //% blockId=device_acceleration block="acceleration (mg)|%NAME" blockGap=8
    //% parts="accelerometer" shim=input::acceleration
    function acceleration(dimension: Dimension): number;

    /**
     * The pitch or roll of the device, rotation along the ``x-axis`` or ``y-axis``, in degrees.
     * @param kind TODO
     */
    //% help=input/rotation weight=87
    //% blockId=device_get_rotation block="rotation (°)|%NAME" blockGap=8
    //% parts="accelerometer" advanced=true shim=input::rotation
    function rotation(kind: Rotation): number;

    /**
     * Sets the accelerometer sample range in gravities.
     * @param range a value describe the maximum strengh of acceleration measured
     */
    //% help=input/set-accelerometer-range
    //% blockId=device_set_accelerometer_range block="set accelerometer|range %range"
    //% weight=5
    //% parts="accelerometer"
    //% advanced=true shim=input::setAccelerometerRange
    function setAccelerometerRange(range: AcceleratorRange): void;
}

// Auto-generated. Do not edit. Really.
