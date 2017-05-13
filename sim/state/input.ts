/// <reference path="../../node_modules/pxt-common-packages/libs/core/dal.d.ts" />


namespace pxsim {
    enum ThresholdState {
        High,
        Low,
        Normal
    }

    export class AnalogSensorState {
        public sensorUsed: boolean = false;
        public button: CPButton;

        private level: number;
        private state = ThresholdState.Normal;

        constructor(public id: number, private min = 0, private max = 255, private lowThreshold = 64, private highThreshold = 192) {
            this.level = Math.ceil((max - min) / 2);
            this.button = new CPButton(this.id);
        }

        public setUsed() {
            if (!this.sensorUsed) {
                this.sensorUsed = true;
                runtime.queueDisplayUpdate();
            }
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
            this.button.setPressed(this.state == ThresholdState.Low);
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
        b.setUsed();

        return b.getLevel();
    }

    export function onLightConditionChanged(condition: number, body: RefAction) {
        let b = board().lightSensorState;
        b.setUsed();

        pxtcore.registerWithDal(b.id, condition, body);
    }

    export function soundLevel(): number {
        let b = board().soundSensorState;
        b.setUsed();
        return b.getLevel();
    }

    export function onSoundConditionChanged(condition: number, body: RefAction) {
        let b = board().soundSensorState;
        b.setUsed();
        pxtcore.registerWithDal(b.id, condition, body);
    }

    export function temperature(): number {
        let b = board().thermometerState;
        b.setUsed();
        return b.getLevel();
    }

    export function onTemperateConditionChanged(condition: number, temperature: number, body: RefAction) {
        let b = board().thermometerState;
        b.setUsed();

        if (condition === DAL.ANALOG_THRESHOLD_HIGH) {
            b.setHighThreshold(temperature);
        }
        else {
            b.setLowThreshold(temperature);
        }

        pxtcore.registerWithDal(b.id, condition, body);
    }

    const SWITCH_ID = 3000;
    export function onSwitchMoved(direction: number, body: RefAction) {
        pxtcore.registerWithDal(SWITCH_ID, direction, body);

        const b = board();
        const sw = b.slideSwitchState;
        if (sw.isLeft() == (direction == DAL.DEVICE_BUTTON_EVT_UP))
            b.bus.queue(SWITCH_ID, direction);
    }
}
