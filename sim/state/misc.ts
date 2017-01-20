
namespace pxsim.control {
    export var delay = thread.pause;
    export function delayMicroseconds(us: number) {
        delay(us / 0.001);
    }
}

namespace pxsim.basic {
    export var pause = thread.pause;
    export var forever = thread.forever;
}