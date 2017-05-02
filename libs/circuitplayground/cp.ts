enum CircuitPlaygroundEvent {
    LeftButtonIsClicked,
    RightButtonIsClicked,
    Shake,
    TiltedUp,
    TiltedDown,
    TiltedLeft,
    TiltedRight,
    Loud,
    RoomIsQuiet
}

enum CircuitPlaygroundInput {
    AccelerationX,
    AccelerationY,
    AccelerationZ,
    Loudness,
    Light
}

enum CircuitPlaygroundOutput {
    //% block="rainbow animation"
    RainbowAnimation,
    SparkleAnimation,
    CometAnimation,
    AllRed,
    AllBlue,
    AllGreen,
    AllOrange
}

enum CircuitPlaygroundPaint {
    //% block="forward"
    Forward,
    //% block="backward"
    Backward,
    //% block="stamp"
    Stamp,
    //% block="pen up"
    PenUp,
    //% block="pen down"
    PenDown,
    //% block="eraser"
    Eraser,
    //% block="clear"
    Clear
}

/**
 * Circuit Playground blocks
 * 
 */
//% color=#E2008C icon="\uf0a3"
namespace cp {
    /**
     * Register code for an event on the Circuit Playground
     */
    //% blockId=cp_on_event block="when %event" weight=99 blockGap=8
    export function when(event: CircuitPlaygroundEvent, handler: Action) {
        const cb = () => handler();
        switch (event) {
            case CircuitPlaygroundEvent.LeftButtonIsClicked:
                input.leftButton.onEvent(ButtonEvent.Click, cb);
                break;
            case CircuitPlaygroundEvent.RightButtonIsClicked:
                input.rightButton.onEvent(ButtonEvent.Click, cb);
                break;
            case CircuitPlaygroundEvent.Shake:
                input.onGesture(Gesture.Shake, cb);
                break;
        }
    }

    /**
     * Reads sensor data from one of the sensors
     */
    //% blockId=cp_read block="read %sensor" weight=98 blockGap=8
    export function read(sensor: CircuitPlaygroundInput): number {
        switch (sensor) {
            case CircuitPlaygroundInput.AccelerationX: return input.acceleration(Dimension.X) / 1024;
            case CircuitPlaygroundInput.AccelerationY: return input.acceleration(Dimension.Y) / 1024;
            case CircuitPlaygroundInput.AccelerationZ: return input.acceleration(Dimension.Z) / 1024;
            case CircuitPlaygroundInput.Light: return (input.lightLevel() * 100) / 255;
            case CircuitPlaygroundInput.Loudness: return (input.soundLevel() * 100) / 255;
            default: return 0;
        }
    }

    /**
     * Controls the painter photon
     * 
     */
    //% blockId=cp_paint block="paint %action" blockGap=8
    export function paint(action: CircuitPlaygroundPaint) {
        
    }

    /**
     * Changes the pen color used in paint
     */
    //% blockId=cp_set_pen_color block="set pen color %color" blockGap=8
    export function setPenColor(color: number) {
        photon.setPenColor(color);
    }

    /**
     * Shows an animation on the LED screen
     */
    //% blockId=cp_show block="show %out" weight=90 blockGap=8
    export function show(out: CircuitPlaygroundOutput) {
        const cycles = 25;
        let anim: light.NeoPixelAnimation = null;
        switch (out) {
            case CircuitPlaygroundOutput.RainbowAnimation: anim = light.rainbowAnimation(); break;
            case CircuitPlaygroundOutput.CometAnimation: anim = light.cometAnimation(); break;
        }
        if (anim) {
            for (let i = 0; i < cycles; ++i) {
                light.pixels.showAnimationFrame(anim);
                control.pause(50);
            }
            light.pixels.clear();
            light.pixels.show();
        }
    }

    /**
     * Plays a tone at the given frequency
     */
    //% blockId=cp_play_note block="play tone|at %note=device_note" blockGap=8
    export function playTone(frequency: number) {
        pins.A8.playTone(frequency, music.beat() / 4);
    }
}