namespace pxsim {
    export class LightSensorState {
        usesLightLevel = false;
        lightLevel = 128;
    }
}

namespace pxsim.input {
    export function lightLevel(): number {
        let b = board().lightSensorState;
        if (!b.usesLightLevel) {
            b.usesLightLevel = true;
            runtime.queueDisplayUpdate();
        }
        return b.lightLevel;
    }
}