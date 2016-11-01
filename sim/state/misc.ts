
namespace pxsim.control {
    export var delay = thread.pause;
    export function delayMicroseconds(us: number) {
        delay(us / 0.001);
    }
    export function millis(): number {
        return runtime.runningTime();
    }
}