namespace pxsim {
    export interface RuntimeOptions {
        theme: string;
    }

    export enum DisplayMode {
        bw,
        greyscale
    }

    export enum PinFlags {
        Unused = 0,
        Digital = 0x0001,
        Analog = 0x0002,
        Input = 0x0004,
        Output = 0x0008,
        Touch = 0x0010
    }

    export class Pin {
        constructor(public id: number) { }
        touched = false;
        value = 0;
        period = 0;
        mode = PinFlags.Unused;
        pitch = false;
        pull = 0; // PullDown

        isTouched(): boolean {
            this.mode = PinFlags.Touch;
            return this.touched;
        }
    }

    export class Button {
        constructor(public id: number) { }
        pressed: boolean;
    }

    export class EventBus {
        private queues: Map<EventQueue<number>> = {};

        constructor(private runtime: Runtime) { }

        listen(id: number, evid: number, handler: RefAction) {
            let k = id + ":" + evid;
            let queue = this.queues[k];
            if (!queue) queue = this.queues[k] = new EventQueue<number>(this.runtime);
            queue.handler = handler;
        }

        queue(id: number, evid: number, value: number = 0) {
            let k = id + ":" + evid;
            let queue = this.queues[k];
            if (queue) queue.push(value);
        }
    }

    export interface PacketBuffer {
        data: number[] | string;
        rssi?: number;
    }

    export class RadioDatagram {
        datagram: PacketBuffer[] = [];
        lastReceived: PacketBuffer = {
            data: [0, 0, 0, 0],
            rssi: -1
        };

        constructor(private runtime: Runtime) {
        }

        queue(packet: PacketBuffer) {
            if (this.datagram.length < 5) {
                this.datagram.push(packet);
                (<Board>runtime.board).bus.queue(DAL.MICROBIT_ID_RADIO, DAL.MICROBIT_RADIO_EVT_DATAGRAM);
            }
        }

        send(buffer: number[] | string) {
            if (buffer instanceof String) buffer = buffer.slice(0, 32);
            else buffer = buffer.slice(0, 8);

            Runtime.postMessage(<SimulatorRadioPacketMessage>{
                type: "radiopacket",
                data: buffer
            })
        }

        recv(): PacketBuffer {
            let r = this.datagram.shift();
            if (!r) r = {
                data: [0, 0, 0, 0],
                rssi: -1
            };
            return this.lastReceived = r;
        }
    }

    export class RadioBus {
        // uint8_t radioDefaultGroup = MICROBIT_RADIO_DEFAULT_GROUP;
        groupId = 0; // todo
        power = 0;
        transmitSerialNumber = false;
        datagram: RadioDatagram;

        constructor(private runtime: Runtime) {
            this.datagram = new RadioDatagram(runtime);
        }

        setGroup(id: number) {
            this.groupId = id & 0xff; // byte only
        }

        setTransmitPower(power: number) {
            this.power = Math.max(0, Math.min(7, power));
        }

        setTransmitSerialNumber(sn: boolean) {
            this.transmitSerialNumber = !!sn;
        }

        broadcast(msg: number) {
            Runtime.postMessage(<SimulatorEventBusMessage>{
                type: "eventbus",
                id: DAL.MES_BROADCAST_GENERAL_ID,
                eventid: msg,
                power: this.power,
                group: this.groupId
            })
        }
    }

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
            this.id = DAL.MICROBIT_ID_ACCELEROMETER;
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
            board().bus.queue(this.id, DAL.MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE)
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
            if ((this.getX() < -DAL.MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE && this.shake.x) || (this.getX() > DAL.MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.x)) {
                shakeDetected = true;
                this.shake.x = !this.shake.x;
            }

            if ((this.getY() < -DAL.MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE && this.shake.y) || (this.getY() > DAL.MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.y)) {
                shakeDetected = true;
                this.shake.y = !this.shake.y;
            }

            if ((this.getZ() < -DAL.MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE && this.shake.z) || (this.getZ() > DAL.MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.z)) {
                shakeDetected = true;
                this.shake.z = !this.shake.z;
            }

            if (shakeDetected && this.shake.count < DAL.MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD && ++this.shake.count == DAL.MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD)
                this.shake.shaken = 1;

            if (++this.shake.timer >= DAL.MICROBIT_ACCELEROMETER_SHAKE_DAMPING) {
                this.shake.timer = 0;
                if (this.shake.count > 0) {
                    if (--this.shake.count == 0)
                        this.shake.shaken = 0;
                }
            }

            if (this.shake.shaken)
                return DAL.MICROBIT_ACCELEROMETER_EVT_SHAKE;

            let sq = (n: number) => n * n

            if (force < sq(DAL.MICROBIT_ACCELEROMETER_FREEFALL_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_FREEFALL;

            if (force > sq(DAL.MICROBIT_ACCELEROMETER_3G_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_3G;

            if (force > sq(DAL.MICROBIT_ACCELEROMETER_6G_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_6G;

            if (force > sq(DAL.MICROBIT_ACCELEROMETER_8G_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_8G;

            // Determine our posture.
            if (this.getX() < (-1000 + DAL.MICROBIT_ACCELEROMETER_TILT_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_TILT_LEFT;

            if (this.getX() > (1000 - DAL.MICROBIT_ACCELEROMETER_TILT_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT;

            if (this.getY() < (-1000 + DAL.MICROBIT_ACCELEROMETER_TILT_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_TILT_DOWN;

            if (this.getY() > (1000 - DAL.MICROBIT_ACCELEROMETER_TILT_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_TILT_UP;

            if (this.getZ() < (-1000 + DAL.MICROBIT_ACCELEROMETER_TILT_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_FACE_UP;

            if (this.getZ() > (1000 - DAL.MICROBIT_ACCELEROMETER_TILT_TOLERANCE))
                return DAL.MICROBIT_ACCELEROMETER_EVT_FACE_DOWN;

            return 0;
        }

        updateGesture() {
            // Determine what it looks like we're doing based on the latest sample...
            let g = this.instantaneousPosture();

            // Perform some low pass filtering to reduce jitter from any detected effects
            if (g == this.currentGesture) {
                if (this.sigma < DAL.MICROBIT_ACCELEROMETER_GESTURE_DAMPING)
                    this.sigma++;
            }
            else {
                this.currentGesture = g;
                this.sigma = 0;
            }

            // If we've reached threshold, update our record and raise the relevant event...
            if (this.currentGesture != this.lastGesture && this.sigma >= DAL.MICROBIT_ACCELEROMETER_GESTURE_DAMPING) {
                this.lastGesture = this.currentGesture;
                board().bus.queue(DAL.MICROBIT_ID_GESTURE, this.lastGesture);
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


    export class Board extends BaseBoard {
        id: string;

        // the bus
        bus: EventBus;
        radio: RadioBus;

        // display
        image = createImage(5);
        brigthness = 255;
        displayMode = DisplayMode.bw;
        font: Image = createFont();

        // buttons    
        usesButtonAB: boolean = false;
        buttons: Button[];

        // pins
        pins: Pin[];

        // serial
        serialIn: string[] = [];

        // sensors
        accelerometer: Accelerometer;

        // gestures
        useShake = false;

        usesHeading = false;
        heading = 90;

        usesTemperature = false;
        temperature = 21;

        usesLightLevel = false;
        lightLevel = 128;

        animationQ: AnimationQueue;

        constructor() {
            super()
            this.id = "b" + Math_.random(2147483647);
            this.animationQ = new AnimationQueue(runtime);
            this.bus = new EventBus(runtime);
            this.radio = new RadioBus(runtime);
            this.accelerometer = new Accelerometer(runtime);
            this.buttons = [
                new Button(DAL.MICROBIT_ID_BUTTON_A),
                new Button(DAL.MICROBIT_ID_BUTTON_B),
                new Button(DAL.MICROBIT_ID_BUTTON_AB)
            ];
            this.pins = [
                new Pin(DAL.MICROBIT_ID_IO_P0),
                new Pin(DAL.MICROBIT_ID_IO_P1),
                new Pin(DAL.MICROBIT_ID_IO_P2),
                new Pin(DAL.MICROBIT_ID_IO_P3),
                new Pin(DAL.MICROBIT_ID_IO_P4),
                new Pin(DAL.MICROBIT_ID_IO_P5),
                new Pin(DAL.MICROBIT_ID_IO_P6),
                new Pin(DAL.MICROBIT_ID_IO_P7),
                new Pin(DAL.MICROBIT_ID_IO_P8),
                new Pin(DAL.MICROBIT_ID_IO_P9),
                new Pin(DAL.MICROBIT_ID_IO_P10),
                new Pin(DAL.MICROBIT_ID_IO_P11),
                new Pin(DAL.MICROBIT_ID_IO_P12),
                new Pin(DAL.MICROBIT_ID_IO_P13),
                new Pin(DAL.MICROBIT_ID_IO_P14),
                new Pin(DAL.MICROBIT_ID_IO_P15),
                new Pin(DAL.MICROBIT_ID_IO_P16),
                null,
                null,
                new Pin(DAL.MICROBIT_ID_IO_P19),
                new Pin(DAL.MICROBIT_ID_IO_P20)
            ];
        }


        initAsync(msg: SimulatorRunMessage): Promise<void> {
            let options = (msg.options || {}) as RuntimeOptions;
            let theme: micro_bit.IBoardTheme;
            switch (options.theme) {
                case 'blue': theme = micro_bit.themes[0]; break;
                case 'yellow': theme = micro_bit.themes[1]; break;
                case 'green': theme = micro_bit.themes[2]; break;
                case 'red': theme = micro_bit.themes[3]; break;
                default: theme = pxsim.micro_bit.randomTheme();
            }

            console.log("setting up microbit simulator")
            let view = new pxsim.micro_bit.MicrobitBoardSvg({
                theme: theme,
                runtime: runtime
            })
            document.body.innerHTML = ""; // clear children
            document.body.appendChild(view.element);

            return Promise.resolve();
        }

        receiveMessage(msg: SimulatorMessage) {
            if (!runtime || runtime.dead) return;

            switch (msg.type || "") {
                case "eventbus":
                    let ev = <SimulatorEventBusMessage>msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                case "serial":
                    this.serialIn.push((<SimulatorSerialMessage>msg).data || "");
                    break;
                case "radiopacket":
                    let packet = <SimulatorRadioPacketMessage>msg;
                    this.radio.datagram.queue({ data: packet.data, rssi: packet.rssi || 0 })
                    break;
            }
        }

        readSerial() {
            let v = this.serialIn.shift() || "";
            return v;
        }

        kill() {
            super.kill();
            AudioContextManager.stop();
        }

        serialOutBuffer: string = "";
        writeSerial(s: string) {
            for (let i = 0; i < s.length; ++i) {
                let c = s[i];
                this.serialOutBuffer += c;
                if (c == "\n") {
                    Runtime.postMessage(<SimulatorSerialMessage>{
                        type: "serial",
                        data: this.serialOutBuffer,
                        id: runtime.id
                    })
                    this.serialOutBuffer = ""
                    break;
                }
            }
        }
    }

    export class Image {
        public static height: number = 5;
        public width: number;
        public data: number[];
        constructor(width: number, data: number[]) {
            this.width = width;
            this.data = data;
        }
        public get(x: number, y: number): number {
            if (x < 0 || x >= this.width || y < 0 || y >= 5) return 0;
            return this.data[y * this.width + x];
        }
        public set(x: number, y: number, v: number) {
            if (x < 0 || x >= this.width || y < 0 || y >= 5) return;
            this.data[y * this.width + x] = Math.max(0, Math.min(255, v));
        }
        public copyTo(xSrcIndex: number, length: number, target: Image, xTargetIndex: number): void {
            for (let x = 0; x < length; x++) {
                for (let y = 0; y < 5; y++) {
                    let value = this.get(xSrcIndex + x, y);
                    target.set(xTargetIndex + x, y, value);
                }
            }
        }
        public shiftLeft(cols: number) {
            for (let x = 0; x < this.width; ++x)
                for (let y = 0; y < 5; ++y)
                    this.set(x, y, x < this.width - cols ? this.get(x + cols, y) : 0);
        }

        public shiftRight(cols: number) {
            for (let x = this.width - 1; x <= 0; --x)
                for (let y = 0; y < 5; ++y)
                    this.set(x, y, x > cols ? this.get(x - cols, y) : 0);
        }

        public clear(): void {
            for (let i = 0; i < this.data.length; ++i)
                this.data[i] = 0;
        }
    }

    export function createImage(width: number): Image {
        return new Image(width, new Array(width * 5));
    }

    export function createImageFromBuffer(data: number[]): Image {
        return new Image(data.length / 5, data);
    }

    export function createImageFromString(text: string): Image {
        let font = board().font;
        let w = font.width;
        let sprite = createImage(6 * text.length - 1);
        let k = 0;
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let charStart = (charCode - 32) * 5;
            if (charStart < 0 || charStart + 5 > w) {
                charCode = " ".charCodeAt(0);
                charStart = (charCode - 32) * 5;
            }

            font.copyTo(charStart, 5, sprite, k);
            k = k + 5;
            if (i < text.length - 1) {
                k = k + 1;
            }
        }
        return sprite;
    }

    export function createFont(): Image {
        const data = [0x0, 0x0, 0x0, 0x0, 0x0, 0x8, 0x8, 0x8, 0x0, 0x8, 0xa, 0x4a, 0x40, 0x0, 0x0, 0xa, 0x5f, 0xea, 0x5f, 0xea, 0xe, 0xd9, 0x2e, 0xd3, 0x6e, 0x19, 0x32, 0x44, 0x89, 0x33, 0xc, 0x92, 0x4c, 0x92, 0x4d, 0x8, 0x8, 0x0, 0x0, 0x0, 0x4, 0x88, 0x8, 0x8, 0x4, 0x8, 0x4, 0x84, 0x84, 0x88, 0x0, 0xa, 0x44, 0x8a, 0x40, 0x0, 0x4, 0x8e, 0xc4, 0x80, 0x0, 0x0, 0x0, 0x4, 0x88, 0x0, 0x0, 0xe, 0xc0, 0x0, 0x0, 0x0, 0x0, 0x8, 0x0, 0x1, 0x22, 0x44, 0x88, 0x10, 0xc, 0x92, 0x52, 0x52, 0x4c, 0x4, 0x8c, 0x84, 0x84, 0x8e, 0x1c, 0x82, 0x4c, 0x90, 0x1e, 0x1e, 0xc2, 0x44, 0x92, 0x4c, 0x6, 0xca, 0x52, 0x5f, 0xe2, 0x1f, 0xf0, 0x1e, 0xc1, 0x3e, 0x2, 0x44, 0x8e, 0xd1, 0x2e, 0x1f, 0xe2, 0x44, 0x88, 0x10, 0xe, 0xd1, 0x2e, 0xd1, 0x2e, 0xe, 0xd1, 0x2e, 0xc4, 0x88, 0x0, 0x8, 0x0, 0x8, 0x0, 0x0, 0x4, 0x80, 0x4, 0x88, 0x2, 0x44, 0x88, 0x4, 0x82, 0x0, 0xe, 0xc0, 0xe, 0xc0, 0x8, 0x4, 0x82, 0x44, 0x88, 0xe, 0xd1, 0x26, 0xc0, 0x4, 0xe, 0xd1, 0x35, 0xb3, 0x6c, 0xc, 0x92, 0x5e, 0xd2, 0x52, 0x1c, 0x92, 0x5c, 0x92, 0x5c, 0xe, 0xd0, 0x10, 0x10, 0xe, 0x1c, 0x92, 0x52, 0x52, 0x5c, 0x1e, 0xd0, 0x1c, 0x90, 0x1e, 0x1e, 0xd0, 0x1c, 0x90, 0x10, 0xe, 0xd0, 0x13, 0x71, 0x2e, 0x12, 0x52, 0x5e, 0xd2, 0x52, 0x1c, 0x88, 0x8, 0x8, 0x1c, 0x1f, 0xe2, 0x42, 0x52, 0x4c, 0x12, 0x54, 0x98, 0x14, 0x92, 0x10, 0x10, 0x10, 0x10, 0x1e, 0x11, 0x3b, 0x75, 0xb1, 0x31, 0x11, 0x39, 0x35, 0xb3, 0x71, 0xc, 0x92, 0x52, 0x52, 0x4c, 0x1c, 0x92, 0x5c, 0x90, 0x10, 0xc, 0x92, 0x52, 0x4c, 0x86, 0x1c, 0x92, 0x5c, 0x92, 0x51, 0xe, 0xd0, 0xc, 0x82, 0x5c, 0x1f, 0xe4, 0x84, 0x84, 0x84, 0x12, 0x52, 0x52, 0x52, 0x4c, 0x11, 0x31, 0x31, 0x2a, 0x44, 0x11, 0x31, 0x35, 0xbb, 0x71, 0x12, 0x52, 0x4c, 0x92, 0x52, 0x11, 0x2a, 0x44, 0x84, 0x84, 0x1e, 0xc4, 0x88, 0x10, 0x1e, 0xe, 0xc8, 0x8, 0x8, 0xe, 0x10, 0x8, 0x4, 0x82, 0x41, 0xe, 0xc2, 0x42, 0x42, 0x4e, 0x4, 0x8a, 0x40, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1f, 0x8, 0x4, 0x80, 0x0, 0x0, 0x0, 0xe, 0xd2, 0x52, 0x4f, 0x10, 0x10, 0x1c, 0x92, 0x5c, 0x0, 0xe, 0xd0, 0x10, 0xe, 0x2, 0x42, 0x4e, 0xd2, 0x4e, 0xc, 0x92, 0x5c, 0x90, 0xe, 0x6, 0xc8, 0x1c, 0x88, 0x8, 0xe, 0xd2, 0x4e, 0xc2, 0x4c, 0x10, 0x10, 0x1c, 0x92, 0x52, 0x8, 0x0, 0x8, 0x8, 0x8, 0x2, 0x40, 0x2, 0x42, 0x4c, 0x10, 0x14, 0x98, 0x14, 0x92, 0x8, 0x8, 0x8, 0x8, 0x6, 0x0, 0x1b, 0x75, 0xb1, 0x31, 0x0, 0x1c, 0x92, 0x52, 0x52, 0x0, 0xc, 0x92, 0x52, 0x4c, 0x0, 0x1c, 0x92, 0x5c, 0x90, 0x0, 0xe, 0xd2, 0x4e, 0xc2, 0x0, 0xe, 0xd0, 0x10, 0x10, 0x0, 0x6, 0xc8, 0x4, 0x98, 0x8, 0x8, 0xe, 0xc8, 0x7, 0x0, 0x12, 0x52, 0x52, 0x4f, 0x0, 0x11, 0x31, 0x2a, 0x44, 0x0, 0x11, 0x31, 0x35, 0xbb, 0x0, 0x12, 0x4c, 0x8c, 0x92, 0x0, 0x11, 0x2a, 0x44, 0x98, 0x0, 0x1e, 0xc4, 0x88, 0x1e, 0x6, 0xc4, 0x8c, 0x84, 0x86, 0x8, 0x8, 0x8, 0x8, 0x8, 0x18, 0x8, 0xc, 0x88, 0x18, 0x0, 0x0, 0xc, 0x83, 0x60];

        let nb = data.length;
        let n = nb / 5;
        let font = createImage(nb);
        for (let c = 0; c < n; c++) {
            for (let row = 0; row < 5; row++) {
                let char = data[c * 5 + row];
                for (let col = 0; col < 5; col++) {
                    if ((char & (1 << col)) != 0)
                        font.set((c * 5 + 4) - col, row, 255);
                }
            }
        }
        return font;
    }
}