namespace pxsim {

    export enum ThermometerUnit {
        Celsius, 
        Fahrenheit
    }

    export class ThermometerState {
        usesTemperature = false;
        unit: ThermometerUnit = ThermometerUnit.Celsius;
        temperature = 21;
    }
}

namespace pxsim.playground {
    export function temperature(unit: ThermometerUnit = ThermometerUnit.Celsius): number {
        let b = board();
        if (!b.thermometerState.usesTemperature) {
            b.thermometerState.usesTemperature = true;
            b.thermometerState.unit = unit;
            runtime.queueDisplayUpdate();
        }
        return b.thermometerState.temperature;
    }
}