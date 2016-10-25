
namespace pxsim.time {
    export var delay = thread.pause;
    export function delayMicroseconds(us: number) {
        delay(us/0.001);
    }
}