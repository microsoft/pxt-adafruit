/// <reference path="../node_modules/kindscript/typings/bluebird/bluebird.d.ts"/>
/// <reference path="../node_modules/kindscript/built/kindsim.d.ts"/>

namespace ks.rt.micro_bit {
    export function initCurrentRuntime() {
        U.assert(!runtime.board)
        runtime.board = new Board()
    }

    ks.rt.initCurrentRuntime = initCurrentRuntime;

    export function board() {
        return runtime.board as Board
    }

    export function enums() {
        return runtime.enums as any as Enums
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

    /* basic */
    export function showDigit(v: number) {
        if (!quiet)
            console.log("DIGIT:", v)
        plotLeds(createImageFromString(v.toString()[0]));
    }

    export function clearScreen() {
        board().image.clear();
        runtime.queueDisplayUpdate()
    }

    export function showLeds(leds: micro_bit.Image, delay: number): void {
        showAnimation(leds, delay);
    }

    function scrollImage(leds: micro_bit.Image, interval: number, stride: number): void {
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

    export function showAnimation(leds: micro_bit.Image, interval: number = 400): void {
        scrollImage(leds, interval, 5);
    }

    export function scrollNumber(x: number, interval: number) {
        if (interval < 0) return;

        let leds = createImageFromString(x.toString());
        if (x < 0 || x >= 10) scrollImage(leds, interval, 1);
        else showLeds(leds, interval * 5);
    }

    export function scrollString(s: string, interval: number) {
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

    export function forever(a: RefAction) {
        function loop() {
            runtime.runFiberAsync(a)
                .then(() => Promise.delay(20))
                .then(loop)
                .done()
        }
        incr(a)
        loop()
    }

    export var pause = thread.pause;

    /* leds */
    export function plot(x: number, y: number) {
        board().image.set(x, y, 255);
        runtime.queueDisplayUpdate()
    }

    export function unPlot(x: number, y: number) {
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

    export function plotLeds(leds: micro_bit.Image): void {
        leds.copyTo(0, 5, board().image, 0)
        runtime.queueDisplayUpdate()
    }

    export function setDisplayMode(mode: DisplayMode): void {
        board().displayMode = mode;
        runtime.queueDisplayUpdate()
    }

    /* control */
    export var runInBackground = thread.runInBackground;

    /* serial */
    export function serialSendString(s: string) {
        board().writeSerial(s);
    }
    
    export function serialReadString() : string {
        return board().readSerial();
    }

    /* input */
    export function onButtonPressed(button : number, handler: RefAction) : void {
        let ens = enums();
        let b = board();
        if (button == ens.MICROBIT_ID_BUTTON_AB && !board().usesButtonAB) {
            b.usesButtonAB = true;
            runtime.queueDisplayUpdate();
        }
        b.bus.listen(button, ens.MICROBIT_BUTTON_EVT_CLICK, handler);
    }
    
    export function isButtonPressed(button: number): boolean {
        let ens = enums();
        let b = board();
        if (button == ens.MICROBIT_ID_BUTTON_AB && !board().usesButtonAB) {
            b.usesButtonAB = true;
            runtime.queueDisplayUpdate();
        }
        let bts = b.buttons;
        if (button == ens.MICROBIT_ID_BUTTON_A) return bts[0].pressed;
        if (button == ens.MICROBIT_ID_BUTTON_B) return bts[1].pressed;
        return bts[2].pressed || (bts[0].pressed && bts[1].pressed);
    }
    
    export function onGesture(gesture: number, handler: RefAction) {
        let ens = enums();
        let b = board();
        b.accelerometer.activate();
        
        if (gesture == 11 && !b.useShake) { // SAKE
            b.useShake = true;
            runtime.queueDisplayUpdate();
        }
        b.bus.listen(ens.MICROBIT_ID_GESTURE, gesture, handler);
    }
    
    export function onPinPressed(pin: Pin, handler: RefAction) {
        pin.isTouched();
        onButtonPressed(pin.id, handler);
    }

    export function ioP0() { return board().pins[0]; }
    export function ioP1() { return board().pins[1]; }
    export function ioP2() { return board().pins[2]; }
    export function ioP3() { return board().pins[3]; }
    export function ioP4() { return board().pins[4]; }
    export function ioP5() { return board().pins[5]; }
    export function ioP6() { return board().pins[6]; }
    export function ioP7() { return board().pins[7]; }
    export function ioP8() { return board().pins[8]; }
    export function ioP9() { return board().pins[9]; }
    export function ioP10() { return board().pins[10]; }
    export function ioP11() { return board().pins[11]; }
    export function ioP12() { return board().pins[12]; }
    export function ioP13() { return board().pins[13]; }
    export function ioP14() { return board().pins[14]; }
    export function ioP15() { return board().pins[15]; }
    export function ioP16() { return board().pins[16]; }
    export function ioP19() { return board().pins[19]; }
    export function ioP20() { return board().pins[20]; }

    export function isPinTouched(pin: Pin): boolean {
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
       
    export function getAcceleration(dimension: number): number {
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
    
    export function setAccelerometerRange(range : number) {
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

    export function getMagneticForce(): number {
        // TODO
        return 0;
    }

    export function getCurrentTime(): number {
        return runtime.runningTime();
    }
    
    /* pins */
    export function digitalReadPin(pin : Pin) : number {
        pin.mode = PinMode.Digital | PinMode.Input;
        return pin.value > 100 ? 1 : 0;
    }
    
    export function digitalWritePin(pin : Pin, value: number) {
        pin.mode = PinMode.Digital | PinMode.Output;
        pin.value = value > 0 ? 1023 : 0;
        runtime.queueDisplayUpdate();
    }

    export function analogReadPin(pin : Pin) : number {
        pin.mode = PinMode.Analog | PinMode.Input;
        return pin.value || 0;
    }
    
    export function analogWritePin(pin : Pin, value: number) {
        pin.mode = PinMode.Analog | PinMode.Output;
        pin.value = value ? 1 : 0;
        runtime.queueDisplayUpdate();
    }
    
    export function setAnalogPeriodUs(pin: Pin, micros:number) {
        pin.mode = PinMode.Analog | PinMode.Output;
        pin.period = micros;
        runtime.queueDisplayUpdate();
    }
    
    export function servoWritePin(pin: Pin, value: number) {
        setAnalogPeriodUs(pin, 20000);
        // TODO
    }
    
    export function servoSetPulse(pin: Pin, micros:number) {        
    }
        
    module AudioContextManager {
        var _context : any; // AudioContext
        var _vco : any; //OscillatorNode;
        var _vca: any; // GainNode;
        
        function context() : any {
            if (!_context) _context = freshContext();
            return _context;
        }
        
        function freshContext() : any {
            (<any>window).AudioContext = (<any>window).AudioContext || (<any>window).webkitAudioContext;
            if ((<any>window).AudioContext) {
                try {
                    // this call my crash.
                    // SyntaxError: audio resources unavailable for AudioContext construction
                    return  new (<any>window).AudioContext();
                } catch(e) {}
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
                } catch(e) {
                    _vco = undefined;
                    _vca = undefined;
                    return;
                }
            }
            
            _vco.frequency.value = frequency;
            _vca.gain.value = gain;
        }
    }
    
    export function enablePitch(pin: Pin) {
        board().pins.filter(p => !!p).forEach(p => p.pitch = false);
        pin.pitch = true;
    }
    
    export function pitch(frequency: number, ms: number) {
        // update analog output
        let pin = board().pins.filter(pin => !!pin && pin.pitch)[0] || board().pins[0];
        pin.mode = PinMode.Analog | PinMode.Output;
        if (frequency <= 0) {
            pin.value = 0;     
            pin.period = 0;       
        } else {
            pin.value = 512;
            pin.period = 1000000/frequency;        
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
    
    
    /* radio */
    export function broadcastMessage(msg: number) : void {
        board().radio.broadcast(msg);
    }
    
    export function onBroadcastMessageReceived(msg: number, handler: RefAction) : void {
        let ens = enums()
        board().bus.listen(ens.MES_BROADCAST_GENERAL_ID, msg, handler);
    }
    
    export function setGroup(id : number) : void {
        board().radio.setGroup(id);
    }
    
    export function setTransmitPower(power: number) : void {
        board().radio.setTransmitPower(power);           
    }

    export function datagramSendNumbers(value0 : number, value1: number, value2: number, value3: number) : void {
        board().radio.datagram.send([value0, value1, value2, value3]);
    }
    
    export function datagramReceiveNumber() : number {
        return board().radio.datagram.recv().data[0];
    }
    
    export function datagramGetNumber(index : number) : number {
        return board().radio.datagram.lastReceived.data[index] || 0;
    }
    
    export function datagramGetRSSI() : number {
        return board().radio.datagram.lastReceived.rssi;
    }
        
    export function onDatagramReceived(handler: RefAction) : void {
        let ens = enums();
        board().bus.listen(ens.MICROBIT_ID_RADIO, ens.MICROBIT_RADIO_EVT_DATAGRAM, handler);
    }
}

