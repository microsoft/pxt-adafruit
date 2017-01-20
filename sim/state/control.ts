
namespace pxsim.control {
    export var pause = thread.pause;
    export var forever = thread.forever;
    export var runInBackground = thread.runInBackground;    
    export function reset() {
        U.userError("reset not implemented in simulator yet")
    }
    export function waitMicros(micros: number) {
        // TODO
    }
    export function deviceName(): string {
        let b = board();
        return b && b.id
            ? b.id.slice(0, 4)
            : "abcd";
    }
    export function deviceSerialNumber(): number {
        let b = board();
        return parseInt(b && b.id
            ? b.id.slice(1)
            : "42");
    }
    export function deviceDalVersion(): string {
        return "0.0.0";
    }
    export function onEvent(id: number, evid: number, handler: RefAction) {
        pxtcore.registerWithDal(id, evid, handler)
    }

    export function raiseEvent(id: number, evid: number, mode: number) {
        // TODO mode?
        board().bus.queue(id, evid)
    }    

    export function runningTime(): number {
        return runtime.runningTime();
    }    
}
