const enum CPLAY {
    REDLED = 13,
    NEOPIXEL_PIN = 17, 
    SLIDE_SWITCH_PIN = 21, 
    LEFT_BUTTON = 4, 
    RIGHT_BUTTON = 19, 
    //LIGHT_SENSOR = A5, 
    LIS3DH_CS = 8, 
    //THERMISTOR_PIN = A0,
    BUZZER = 5, 

    ID_BUTTON_A = 1,
    ID_BUTTON_B = 2,
    ID_BUTTON_RESET = 3,
    ID_ACCELEROMETER = 4,
    ID_BUTTON_AB = 26,
    ID_GESTURE = 27,
    ID_THERMOMETER = 28,

    CAPSENSE_SHARED = 30,
    ACCELEROMETER_EVT_DATA_UPDATE = 1,
    ACCELEROMETER_EVT_NONE = 0,
    ACCELEROMETER_EVT_TILT_UP = 1,
    ACCELEROMETER_EVT_TILT_DOWN = 2,
    ACCELEROMETER_EVT_TILT_LEFT = 3,
    ACCELEROMETER_EVT_TILT_RIGHT = 4,
    ACCELEROMETER_EVT_FACE_UP = 5,
    ACCELEROMETER_EVT_FACE_DOWN = 6,
    ACCELEROMETER_EVT_FREEFALL = 7,
    ACCELEROMETER_EVT_3G = 8,
    ACCELEROMETER_EVT_6G = 9,
    ACCELEROMETER_EVT_8G = 10,
    ACCELEROMETER_EVT_SHAKE = 11,
    ACCELEROMETER_REST_TOLERANCE = 200,
    ACCELEROMETER_TILT_TOLERANCE = 200,
    ACCELEROMETER_FREEFALL_TOLERANCE = 400,
    ACCELEROMETER_SHAKE_TOLERANCE = 400,
    ACCELEROMETER_3G_TOLERANCE = 3072,
    ACCELEROMETER_6G_TOLERANCE = 6144,
    ACCELEROMETER_8G_TOLERANCE = 8192,
    ACCELEROMETER_GESTURE_DAMPING = 5,
    ACCELEROMETER_SHAKE_DAMPING = 10,
    ACCELEROMETER_SHAKE_RTX = 30,
    ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4
}

namespace pxsim.input {
    export function onGesture(gesture: number, handler: RefAction) {
        let b = board().accelerometerState;
        b.accelerometer.activate();

        if (gesture == CPLAY.ACCELEROMETER_EVT_SHAKE && !b.useShake) {
            b.useShake = true;
            runtime.queueDisplayUpdate();
        }
        pxtcore.registerWithDal(CPLAY.ID_GESTURE, gesture, handler);
    }

    export function rotation(kind: number): number {
        let b = board().accelerometerState;
        let acc = b.accelerometer;
        acc.activate();
        let x = acc.getX(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
        let y = acc.getX(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
        let z = acc.getX(MicroBitCoordinateSystem.NORTH_EAST_DOWN);

        let roll = Math.atan2(y, z);
        let pitch = Math.atan(-x / (y * Math.sin(roll) + z * Math.cos(roll)));

        let r = 0;
        switch (kind) {
            case 0: r = pitch; break;
            case 1: r = roll; break;
        }
        return Math.floor(r / Math.PI * 180);
    }

    export function setAccelerometerRange(range: number) {
        let b = board().accelerometerState;
        b.accelerometer.setSampleRange(range);
    }

    export function acceleration(dimension: number): number {
        let b = board().accelerometerState;
        let acc = b.accelerometer;
        acc.activate();
        switch (dimension) {
            case 0: return acc.getX();
            case 1: return acc.getY();
            case 2: return acc.getZ();
            default: return Math.floor(Math.sqrt(acc.instantaneousAccelerationSquared()));
        }
    }
}

namespace pxsim {
    interface AccelerometerSample {
        x: number;
        y: number;
        z: number;
    }

    interface ShakeHistory {
        x: boolean;
        y: boolean;
        z: boolean;
        count: number;
        shaken: number;
        timer: number;
    }

    /**
      * Co-ordinate systems that can be used.
      * RAW: Unaltered data. Data will be returned directly from the accelerometer.
      * 
      * SIMPLE_CARTESIAN: Data will be returned based on an easy to understand alignment, consistent with the cartesian system taught in schools.
      * When held upright, facing the user:
      * 
      *                            /
      *    +--------------------+ z
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * y  +--------------------+  x-->
      *
      *
      * NORTH_EAST_DOWN: Data will be returned based on the industry convention of the North East Down (NED) system.
      * When held upright, facing the user:
      * 
      *                            z
      *    +--------------------+ /
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * x  +--------------------+  y-->
      *
      */
    export enum MicroBitCoordinateSystem {
        RAW,
        SIMPLE_CARTESIAN,
        NORTH_EAST_DOWN
    }

    export class Accelerometer {
        private sigma: number = 0;              // the number of ticks that the instantaneous gesture has been stable.
        private lastGesture: number = 0;       // the last, stable gesture recorded.
        private currentGesture: number = 0     // the instantaneous, unfiltered gesture detected.
        private sample: AccelerometerSample = { x: 0, y: 0, z: -1023 }
        private shake: ShakeHistory = { x: false, y: false, z: false, count: 0, shaken: 0, timer: 0 }; // State information needed to detect shake events.
        private pitch: number;
        private roll: number;
        private id: number;
        public isActive = false;
        public sampleRange = 2;

        constructor(public runtime: Runtime) {
            this.id = CPLAY.ID_ACCELEROMETER;
        }

        public setSampleRange(range: number) {
            this.activate();
            this.sampleRange = Math.max(1, Math.min(8, range));
        }

        public activate() {
            if (!this.isActive) {
                this.isActive = true;
                this.runtime.queueDisplayUpdate();
            }
        }

        /**
         * Reads the acceleration data from the accelerometer, and stores it in our buffer.
         * This is called by the tick() member function, if the interrupt is set!
         */
        public update(x: number, y: number, z: number) {
            // read MSB values...
            this.sample.x = Math.floor(x);
            this.sample.y = Math.floor(y);
            this.sample.z = Math.floor(z);

            // Update gesture tracking
            this.updateGesture();

            // Indicate that a new sample is available
            board().bus.queue(this.id, CPLAY.ACCELEROMETER_EVT_DATA_UPDATE)
        }

        public instantaneousAccelerationSquared() {
            // Use pythagoras theorem to determine the combined force acting on the device.
            return this.sample.x * this.sample.x + this.sample.y * this.sample.y + this.sample.z * this.sample.z;
        }

        /**
         * Service function. Determines the best guess posture of the device based on instantaneous data.
         * This makes no use of historic data (except for shake), and forms this input to the filter implemented in updateGesture().
         *
         * @return A best guess of the current posture of the device, based on instantaneous data.
         */
        private instantaneousPosture(): number {
            let force = this.instantaneousAccelerationSquared();
            let shakeDetected = false;

            // Test for shake events.
            // We detect a shake by measuring zero crossings in each axis. In other words, if we see a strong acceleration to the left followed by
            // a string acceleration to the right, then we can infer a shake. Similarly, we can do this for each acxis (left/right, up/down, in/out).
            //
            // If we see enough zero crossings in succession (MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD), then we decide that the device
            // has been shaken.
            if ((this.getX() < -CPLAY.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.x) || (this.getX() > CPLAY.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.x)) {
                shakeDetected = true;
                this.shake.x = !this.shake.x;
            }

            if ((this.getY() < -CPLAY.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.y) || (this.getY() > CPLAY.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.y)) {
                shakeDetected = true;
                this.shake.y = !this.shake.y;
            }

            if ((this.getZ() < -CPLAY.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.z) || (this.getZ() > CPLAY.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.z)) {
                shakeDetected = true;
                this.shake.z = !this.shake.z;
            }

            if (shakeDetected && this.shake.count < CPLAY.ACCELEROMETER_SHAKE_COUNT_THRESHOLD && ++this.shake.count == CPLAY.ACCELEROMETER_SHAKE_COUNT_THRESHOLD)
                this.shake.shaken = 1;

            if (++this.shake.timer >= CPLAY.ACCELEROMETER_SHAKE_DAMPING) {
                this.shake.timer = 0;
                if (this.shake.count > 0) {
                    if (--this.shake.count == 0)
                        this.shake.shaken = 0;
                }
            }

            if (this.shake.shaken)
                return CPLAY.ACCELEROMETER_EVT_SHAKE;

            let sq = (n: number) => n * n

            if (force < sq(CPLAY.ACCELEROMETER_FREEFALL_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_FREEFALL;

            if (force > sq(CPLAY.ACCELEROMETER_3G_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_3G;

            if (force > sq(CPLAY.ACCELEROMETER_6G_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_6G;

            if (force > sq(CPLAY.ACCELEROMETER_8G_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_8G;

            // Determine our posture.
            if (this.getX() < (-1000 + CPLAY.ACCELEROMETER_TILT_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_TILT_LEFT;

            if (this.getX() > (1000 - CPLAY.ACCELEROMETER_TILT_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_TILT_RIGHT;

            if (this.getY() < (-1000 + CPLAY.ACCELEROMETER_TILT_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_TILT_DOWN;

            if (this.getY() > (1000 - CPLAY.ACCELEROMETER_TILT_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_TILT_UP;

            if (this.getZ() < (-1000 + CPLAY.ACCELEROMETER_TILT_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_FACE_UP;

            if (this.getZ() > (1000 - CPLAY.ACCELEROMETER_TILT_TOLERANCE))
                return CPLAY.ACCELEROMETER_EVT_FACE_DOWN;

            return 0;
        }

        updateGesture() {
            // Determine what it looks like we're doing based on the latest sample...
            let g = this.instantaneousPosture();

            // Perform some low pass filtering to reduce jitter from any detected effects
            if (g == this.currentGesture) {
                if (this.sigma < CPLAY.ACCELEROMETER_GESTURE_DAMPING)
                    this.sigma++;
            }
            else {
                this.currentGesture = g;
                this.sigma = 0;
            }

            // If we've reached threshold, update our record and raise the relevant event...
            if (this.currentGesture != this.lastGesture && this.sigma >= CPLAY.ACCELEROMETER_GESTURE_DAMPING) {
                this.lastGesture = this.currentGesture;
                board().bus.queue(CPLAY.ID_GESTURE, this.lastGesture);
            }
        }

        /**
          * Reads the X axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the X axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getX();
          * uBit.accelerometer.getX(RAW);
          * @endcode
          */
        public getX(system: MicroBitCoordinateSystem = MicroBitCoordinateSystem.SIMPLE_CARTESIAN): number {
            this.activate();
            switch (system) {
                case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                    return -this.sample.x;

                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    return this.sample.y;
                //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN.RAW:
                default:
                    return this.sample.x;
            }
        }

        /**
          * Reads the Y axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Y axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getY();
          * uBit.accelerometer.getY(RAW);
          * @endcode
          */
        public getY(system: MicroBitCoordinateSystem = MicroBitCoordinateSystem.SIMPLE_CARTESIAN): number {
            this.activate();
            switch (system) {
                case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                    return -this.sample.y;

                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    return -this.sample.x;
                //case RAW:
                default:
                    return this.sample.y;
            }
        }

        /**
          * Reads the Z axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Z axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getZ();
          * uBit.accelerometer.getZ(RAW);
          * @endcode
          */
        public getZ(system: MicroBitCoordinateSystem = MicroBitCoordinateSystem.SIMPLE_CARTESIAN): number {
            this.activate();
            switch (system) {
                case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                    return -this.sample.z;
                //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                //case MicroBitCoordinateSystem.RAW:
                default:
                    return this.sample.z;
            }
        }

        /**
          * Provides a rotation compensated pitch of the device, based on the latest update from the accelerometer.
          * @return The pitch of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getPitch();
          * @endcode
          */
        public getPitch(): number {
            this.activate();
            return Math.floor((360 * this.getPitchRadians()) / (2 * Math.PI));
        }

        getPitchRadians(): number {
            this.recalculatePitchRoll();
            return this.pitch;
        }

        /**
          * Provides a rotation compensated roll of the device, based on the latest update from the accelerometer.
          * @return The roll of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getRoll();
          * @endcode
          */
        public getRoll(): number {
            this.activate();
            return Math.floor((360 * this.getRollRadians()) / (2 * Math.PI));
        }

        getRollRadians(): number {
            this.recalculatePitchRoll();
            return this.roll;
        }

        /**
         * Recalculate roll and pitch values for the current sample.
         * We only do this at most once per sample, as the necessary trigonemteric functions are rather
         * heavyweight for a CPU without a floating point unit...
         */
        recalculatePitchRoll() {
            let x = this.getX(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let y = this.getY(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
            let z = this.getZ(MicroBitCoordinateSystem.NORTH_EAST_DOWN);

            this.roll = Math.atan2(y, z);
            this.pitch = Math.atan(-x / (y * Math.sin(this.roll) + z * Math.cos(this.roll)));
        }

    }

    export class AccelerometerState {
        accelerometer: Accelerometer;
        useShake = false;

        constructor(runtime: Runtime) {
           this.accelerometer = new Accelerometer(runtime);
        }
    }
}