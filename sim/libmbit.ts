/// <reference path="../node_modules/kindscript/typings/bluebird/bluebird.d.ts"/>
/// <reference path="../node_modules/kindscript/built/kindsim.d.ts"/>
/// <reference path="../libs/microbit/dal.d.ts"/>

namespace ks.rt {
    ks.rt.initCurrentRuntime = () => {
        U.assert(!runtime.board)
        runtime.board = new Board()
    }

    export function board() {
        return runtime.board as Board
    }

    export interface AnimationOptions {
        interval: number;
        // false means last frame
        frame: () => boolean;
        whenDone?: (cancelled: boolean) => void;
    }

    export class AnimationQueue {
        private queue: AnimationOptions[] = [];
        private process: () => void;

        constructor(private runtime: Runtime) {
            this.process = () => {
                let top = this.queue[0]
                if (!top) return
                if (this.runtime.dead) return
                runtime = this.runtime
                let res = top.frame()
                runtime.queueDisplayUpdate()
                runtime.maybeUpdateDisplay()
                if (res === false) {
                    this.queue.shift();
                    // if there is already something in the queue, start processing
                    if (this.queue[0])
                        setTimeout(this.process, this.queue[0].interval)
                    // this may push additional stuff 
                    top.whenDone(false);
                } else {
                    setTimeout(this.process, top.interval)
                }
            }
        }

        public cancelAll() {
            let q = this.queue
            this.queue = []
            for (let a of q) {
                a.whenDone(true)
            }
        }

        public cancelCurrent() {
            let top = this.queue[0]
            if (top) {
                this.queue.shift();
                top.whenDone(true);
            }
        }

        public enqueue(anim: AnimationOptions) {
            if (!anim.whenDone) anim.whenDone = () => { };
            this.queue.push(anim)
            // we start processing when the queue goes from 0 to 1
            if (this.queue.length == 1)
                this.process()
        }

        public executeAsync(anim: AnimationOptions) {
            U.assert(!anim.whenDone)
            return new Promise<boolean>((resolve, reject) => {
                anim.whenDone = resolve
                this.enqueue(anim)
            })
        }
    }

    export function panic(code: number) {
        console.log("PANIC:", code)
        throw new Error("PANIC " + code)
    }

    export function getPin(id: number) {
        return board().pins.filter(p => p && p.id == id)[0] || null
    }


    export namespace AudioContextManager {
        var _context: any; // AudioContext
        var _vco: any; //OscillatorNode;
        var _vca: any; // GainNode;

        function context(): any {
            if (!_context) _context = freshContext();
            return _context;
        }

        function freshContext(): any {
            (<any>window).AudioContext = (<any>window).AudioContext || (<any>window).webkitAudioContext;
            if ((<any>window).AudioContext) {
                try {
                    // this call my crash.
                    // SyntaxError: audio resources unavailable for AudioContext construction
                    return new (<any>window).AudioContext();
                } catch (e) { }
            }
            return undefined;
        }

        export function stop() {
            if (_vca) _vca.gain.value = 0;
        }

        export function tone(frequency: number, gain: number) {
            if (frequency <= 0) return;
            var ctx = context();
            if (!ctx) return;

            gain = Math.max(0, Math.min(1, gain));
            if (!_vco) {
                try {
                    _vco = ctx.createOscillator();
                    _vca = ctx.createGain();
                    _vco.connect(_vca);
                    _vca.connect(ctx.destination);
                    _vca.gain.value = gain;
                    _vco.start(0);
                } catch (e) {
                    _vco = undefined;
                    _vca = undefined;
                    return;
                }
            }

            _vco.frequency.value = frequency;
            _vca.gain.value = gain;
        }
    }


}

namespace ks.rt.basic {
    export var pause = thread.pause;
    export var forever = thread.forever;

    export function showNumber(x: number, interval: number) {
        if (interval < 0) return;

        let leds = createImageFromString(x.toString());
        if (x < 0 || x >= 10) scrollImage(leds, interval, 1);
        else showLeds(leds, interval * 5);
    }

    export function showString(s: string, interval: number) {
        if (interval < 0) return;
        if (s.length == 0) {
            clearScreen();
            pause(interval * 5);
        } else {
            let leds = createImageFromString(s);
            if (s.length == 1) showLeds(leds, interval * 5)
            else scrollImage(leds, interval, 1);
        }
    }

    export function showLeds(leds: Image, delay: number): void {
        showAnimation(leds, delay);
    }

    export function clearScreen() {
        board().image.clear();
        runtime.queueDisplayUpdate()
    }

    function scrollImage(leds: Image, interval: number, stride: number): void {
        let cb = getResume()
        let off = stride > 0 ? 0 : leds.width - 1;
        let display = board().image;

        board().animationQ.enqueue({
            interval: interval,
            frame: () => {
                if (off >= leds.width || off < 0) return false;
                stride > 0 ? display.shiftLeft(stride) : display.shiftRight(-stride);
                let c = Math.min(stride, leds.width - off);
                leds.copyTo(off, c, display, 5 - stride)
                off += stride;
                return true;
            },
            whenDone: cb
        })
    }

    export function showAnimation(leds: Image, interval: number = 400): void {
        scrollImage(leds, interval, 5);
    }

    export function plotLeds(leds: Image): void {
        leds.copyTo(0, 5, board().image, 0)
        runtime.queueDisplayUpdate()
    }
}

namespace ks.rt.control {
    export var inBackground = thread.runInBackground;

    export function reset() {
        U.userError("reset not implemented in simulator yet")
    }

    export function onEvent(id: number, evid: number, handler: RefAction) {
        kindscript.registerWithDal(id, evid, handler)
    }

    export function raiseEvent(id: number, evid: number, mode: number) {
        // TODO mode?
        board().bus.queue(id, evid)
    }
}

namespace ks.rt.kindscript {
    export function registerWithDal(id: number, evid: number, handler: RefAction) {
        board().bus.listen(id, evid, handler);
    }
}

namespace ks.rt.input {
    export function onButtonPressed(button: number, handler: RefAction): void {
        let b = board();
        if (button == DAL.MICROBIT_ID_BUTTON_AB && !board().usesButtonAB) {
            b.usesButtonAB = true;
            runtime.queueDisplayUpdate();
        }
        b.bus.listen(button, DAL.MICROBIT_BUTTON_EVT_CLICK, handler);
    }

    export function buttonIsPressed(button: number): boolean {
        let b = board();
        if (button == DAL.MICROBIT_ID_BUTTON_AB && !board().usesButtonAB) {
            b.usesButtonAB = true;
            runtime.queueDisplayUpdate();
        }
        let bts = b.buttons;
        if (button == DAL.MICROBIT_ID_BUTTON_A) return bts[0].pressed;
        if (button == DAL.MICROBIT_ID_BUTTON_B) return bts[1].pressed;
        return bts[2].pressed || (bts[0].pressed && bts[1].pressed);
    }

    export function onGesture(gesture: number, handler: RefAction) {
        let b = board();
        b.accelerometer.activate();

        if (gesture == 11 && !b.useShake) { // SAKE
            b.useShake = true;
            runtime.queueDisplayUpdate();
        }
        b.bus.listen(DAL.MICROBIT_ID_GESTURE, gesture, handler);
    }

    export function onPinPressed(pinId: number, handler: RefAction) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.isTouched();
        input.onButtonPressed(pin.id, handler);
    }

    export function pinIsPressed(pinId: number): boolean {
        let pin = getPin(pinId);
        if (!pin) return false;
        return pin.isTouched();
    }



    export function compassHeading(): number {
        var b = board();
        if (!b.usesHeading) {
            b.usesHeading = true;
            runtime.queueDisplayUpdate();
        }
        return b.heading;
    }

    export function temperature(): number {
        var b = board();
        if (!b.usesTemperature) {
            b.usesTemperature = true;
            runtime.queueDisplayUpdate();
        }
        return b.temperature;
    }

    export function acceleration(dimension: number): number {
        let b = board();
        let acc = b.accelerometer;
        acc.activate();
        switch (dimension) {
            case 0: return acc.getX();
            case 1: return acc.getY();
            case 2: return acc.getZ();
            default: return Math.floor(Math.sqrt(acc.instantaneousAccelerationSquared()));
        }
    }

    export function setAccelerometerRange(range: number) {
        let b = board();
        b.accelerometer.setSampleRange(range);
    }

    export function lightLevel(): number {
        let b = board();
        if (!b.usesLightLevel) {
            b.usesLightLevel = true;
            runtime.queueDisplayUpdate();
        }
        return b.lightLevel;
    }

    export function magneticForce(): number {
        // TODO
        return 0;
    }

    export function runningTime(): number {
        return runtime.runningTime();
    }

    export function calibrate() {
    }
}

namespace ks.rt.led {
    export function plot(x: number, y: number) {
        board().image.set(x, y, 255);
        runtime.queueDisplayUpdate()
    }

    export function unplot(x: number, y: number) {
        board().image.set(x, y, 0);
        runtime.queueDisplayUpdate()
    }

    export function point(x: number, y: number): boolean {
        return !!board().image.get(x, y);
    }

    export function brightness(): number {
        return board().brigthness;
    }

    export function setBrightness(value: number): void {
        board().brigthness = value;
        runtime.queueDisplayUpdate()
    }

    export function stopAnimation(): void {
        board().animationQ.cancelAll();
    }

    export function setDisplayMode(mode: DisplayMode): void {
        board().displayMode = mode;
        runtime.queueDisplayUpdate()
    }
}

namespace ks.rt.serial {
    export function writeString(s: string) {
        board().writeSerial(s);
    }

    export function readString(): string {
        return board().readSerial();
    }
}


namespace ks.rt.radio {
    export function broadcastMessage(msg: number): void {
        board().radio.broadcast(msg);
    }

    export function onBroadcastMessageReceived(msg: number, handler: RefAction): void {
        board().bus.listen(DAL.MES_BROADCAST_GENERAL_ID, msg, handler);
    }

    export function setGroup(id: number): void {
        board().radio.setGroup(id);
    }

    export function setTransmitPower(power: number): void {
        board().radio.setTransmitPower(power);
    }

    export function sendNumbers(value0: number, value1: number, value2: number, value3: number): void {
        board().radio.datagram.send([value0, value1, value2, value3]);
    }

    export function receiveNumber(): number {
        return board().radio.datagram.recv().data[0];
    }

    export function receivedNumberAt(index: number): number {
        return board().radio.datagram.lastReceived.data[index] || 0;
    }

    export function receivedSignalStrength(): number {
        return board().radio.datagram.lastReceived.rssi;
    }

    export function onDataReceived(handler: RefAction): void {
        board().bus.listen(DAL.MICROBIT_ID_RADIO, DAL.MICROBIT_RADIO_EVT_DATAGRAM, handler);
    }
}

namespace ks.rt.pins {
    export function digitalReadPin(pinId: number): number {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinMode.Digital | PinMode.Input;
        return pin.value > 100 ? 1 : 0;
    }

    export function digitalWritePin(pinId: number, value: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinMode.Digital | PinMode.Output;
        pin.value = value > 0 ? 1023 : 0;
        runtime.queueDisplayUpdate();
    }

    export function analogReadPin(pinId: number): number {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinMode.Analog | PinMode.Input;
        return pin.value || 0;
    }

    export function analogWritePin(pinId: number, value: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinMode.Analog | PinMode.Output;
        pin.value = value ? 1 : 0;
        runtime.queueDisplayUpdate();
    }

    export function analogSetPeriod(pinId: number, micros: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        pin.mode = PinMode.Analog | PinMode.Output;
        pin.period = micros;
        runtime.queueDisplayUpdate();
    }

    export function servoWritePin(pinId: number, value: number) {
        analogSetPeriod(pinId, 20000);
        // TODO
    }

    export function servoSetPulse(pinId: number, micros: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        // TODO
    }

    export function analogSetPitchPin(pinId: number) {
        let pin = getPin(pinId);
        if (!pin) return;
        board().pins.filter(p => !!p).forEach(p => p.pitch = false);
        pin.pitch = true;
    }

    export function analogPitch(frequency: number, ms: number) {
        // update analog output
        let pin = board().pins.filter(pin => !!pin && pin.pitch)[0] || board().pins[0];
        pin.mode = PinMode.Analog | PinMode.Output;
        if (frequency <= 0) {
            pin.value = 0;
            pin.period = 0;
        } else {
            pin.value = 512;
            pin.period = 1000000 / frequency;
        }
        runtime.queueDisplayUpdate();

        let cb = getResume();
        AudioContextManager.tone(frequency, 1);
        if (ms <= 0) cb();
        else {
            setTimeout(() => {
                AudioContextManager.stop();
                pin.value = 0;
                pin.period = 0;
                pin.mode = PinMode.Unused;
                runtime.queueDisplayUpdate();
                cb()
            }, ms);
        }
    }


}

namespace ks.rt.images {
    export function createImage(img: Image) { return img }
    export function createBigImage(img: Image) { return img }
}

namespace ks.rt.ImageMethods {
    export function showImage(i: Image, offset: number) {
        // TODO offset?
        i.copyTo(0, 5, board().image, 0)
        runtime.queueDisplayUpdate()
    }
    
    // TODO ...
}
