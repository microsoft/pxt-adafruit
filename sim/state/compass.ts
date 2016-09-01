namespace pxsim.input {
    export function compassHeading(): number {
        let b = board().compassState;
        if (!b.usesHeading) {
            b.usesHeading = true;
            runtime.queueDisplayUpdate();
        }
        return b.heading;
    }

    export function magneticForce(): number {
        // TODO
        return 0;
    }
}

namespace pxsim {
    export class CompassState {
        usesHeading = false;
        heading = 90;
    }
}