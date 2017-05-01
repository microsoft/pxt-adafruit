enum CircuitPlaygroundEvent {
    LeftButtonClicked,
    RightButtonClicked,
    Shake,
    TiltUp,
    TiltDown,
    TiltLeft,
    TiltRight,
    Loud,
    Quiet
}

enum CircuitPlaygroundSensor {
    AccelerationX,
    AccelerationY,
    AccelerationZ,
    Loudness,
    Light
}

/**
 * Circuit Playground Junior blocks
 * 
 */
//% color=#E2008C icon="\uf0a3"
namespace cp {
    /**
     * Register code for an event on the Circuit Playground
     */
    //% blockId=cp_on_event block="on %event" weight=99
    export function onEvent(event: CircuitPlaygroundEvent, handler: Action) {
        const cb = () => handler();
        switch (event) {
            case CircuitPlaygroundEvent.LeftButtonClicked:
                input.leftButton.onEvent(ButtonEvent.Click, cb);
                break;
            case CircuitPlaygroundEvent.RightButtonClicked:
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
    //% blockId=cp_sense block="sense %sensor" weight=98
    export function sense(sensor: CircuitPlaygroundSensor): number {
        switch (sensor) {
            case CircuitPlaygroundSensor.AccelerationX: return input.acceleration(Dimension.X);
            case CircuitPlaygroundSensor.AccelerationY: return input.acceleration(Dimension.Y);
            case CircuitPlaygroundSensor.AccelerationZ: return input.acceleration(Dimension.Z);
            default: return 0;
        }
    }
}