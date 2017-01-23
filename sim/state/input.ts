/// <reference path="../../libs/core/dal.d.ts" />


namespace pxsim {
    enum ThresholdState {
        High,
        Low,
        Normal
    }

    export class AnalogSensorState {
        public sensorUsed: boolean = false;

        private level: number;
        private state = ThresholdState.Normal;

        constructor(public id: number, private min = 0, private max = 255, private lowThreshold = 64, private highThreshold = 192) {
            this.level = Math.ceil((max - min) / 2);
        }

        public setLevel(level: number) {
            this.level = this.clampValue(level);

            if (this.level >= this.highThreshold) {
                this.setState(ThresholdState.High);
            }
            else if (this.level <= this.lowThreshold) {
                this.setState(ThresholdState.Low);
            }
            else {
                this.setState(ThresholdState.Normal);
            }
        }

        public getLevel(): number {
            return this.level;
        }

        public setLowThreshold(value: number) {
            this.lowThreshold = this.clampValue(value);
            this.highThreshold = Math.max(this.lowThreshold + 1, this.highThreshold);
        }

        public setHighThreshold(value: number) {
            this.highThreshold = this.clampValue(value);
            this.lowThreshold = Math.min(this.highThreshold - 1, this.lowThreshold);
        }

        private clampValue(value: number) {
            if (value < this.min) {
                return this.min;
            }
            else if (value > this.max) {
                return this.max;
            }
            return value;
        }

        private setState(state: ThresholdState) {
            if (this.state === state) {
                return;
            }

            this.state = state;
            switch (state) {
                case ThresholdState.High:
                    board().bus.queue(this.id, DAL.ANALOG_THRESHOLD_HIGH);
                    break;
                case ThresholdState.Low:
                    board().bus.queue(this.id, DAL.ANALOG_THRESHOLD_LOW);
                    break;
                case ThresholdState.Normal:
                    break;
            }
        }
    }
}


namespace pxsim.input {
    export function lightLevel(): number {
        let b = board().lightSensorState;
        setSensorUsed(b);

        return b.getLevel();
    }

    export function onLightConditionChanged(condition: number, body: RefAction) {
        let b = board().lightSensorState;
        setSensorUsed(b);

        pxtcore.registerWithDal(b.id, condition, body);
    }

    export function soundLevel(): number {
        let b = board().soundSensorState;
        setSensorUsed(b);

        return b.getLevel();
    }

    export function onSoundConditionChanged(condition: number, body: RefAction) {
        let b = board().soundSensorState;
        setSensorUsed(b);

        pxtcore.registerWithDal(b.id, condition, body);
    }

    export function temperature(): number {
        let b = board().thermometerState;
        setSensorUsed(b);
        return b.getLevel();
    }

    export function onTemperateConditionChanged(condition: number, temperature: number, body: RefAction) {
        let b = board().thermometerState;
        setSensorUsed(b);

        if (condition === DAL.ANALOG_THRESHOLD_HIGH) {
            b.setHighThreshold(temperature);
        }
        else {
            b.setLowThreshold(temperature);
        }

        pxtcore.registerWithDal(b.id, condition, body);
    }

    function setSensorUsed(b: AnalogSensorState) {
        if (!b.sensorUsed) {
            b.sensorUsed = true;
            runtime.queueDisplayUpdate();
        }
    }
}
