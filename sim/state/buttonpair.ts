/// <reference path="../../libs/core/dal.d.ts" />

namespace pxsim {
    const DOUBLE_CLICK_TIME = 500;
    export class CPButton extends Button {
        private _pressedTime: number = -1;
        private _clickedTime: number = -1;
        private _wasPressed: boolean;
        private _pressed: boolean;

        set pressed(p: boolean) {
            if (this._pressed === p) {
                return;
            }
            this._pressed = p;

            if (p) {
                this._wasPressed = true;
                board().bus.queue(this.id, DAL.DEVICE_BUTTON_EVT_DOWN);
                this._pressedTime = runtime.runningTime();
            }
            else if (this._pressedTime !== -1) {
                board().bus.queue(this.id, DAL.DEVICE_BUTTON_EVT_UP);
                const current = runtime.runningTime();

                if (current - this._pressedTime >= DAL.DEVICE_BUTTON_LONG_CLICK_TIME) {
                    board().bus.queue(this.id, DAL.DEVICE_BUTTON_EVT_LONG_CLICK);
                }
                else {
                    board().bus.queue(this.id, DAL.DEVICE_BUTTON_EVT_CLICK);
                }


                if (this._clickedTime !== -1) {
                    if (current - this._clickedTime <= DOUBLE_CLICK_TIME) {
                        board().bus.queue(this.id, DAL.DEVICE_BUTTON_EVT_DOUBLE_CLICK);
                    }
                }

                this._clickedTime = current;
            }

        }

        get pressed() {
            return this._pressed
        }

        public wasPressed() {
            const temp = this._wasPressed;
            this._wasPressed = false;
            return temp;
        }

        public isPressed() {
            return this.pressed;
        }
    }

    export class CPButtonPairState {
        usesButtonAB: boolean = false;
        aBtn: Button;
        bBtn: Button;
        abBtn: Button;

        constructor(public props: ButtonPairProps) {
            this.aBtn = new CPButton(this.props.ID_BUTTON_A);
            this.bBtn = new CPButton(this.props.ID_BUTTON_B);
            this.abBtn = new CPButton(this.props.ID_BUTTON_AB);
            this.abBtn.virtual = true;
        }
    }
}
namespace pxsim.pxtcore {
    export function getButton(buttonId: AdaFruit_Button): Button {
        switch (buttonId) {
            case AdaFruit_Button.Left:
                return board().buttonPairState.aBtn;
            case AdaFruit_Button.Right:
                return board().buttonPairState.bBtn;
        }
        return undefined;
    }
}

namespace pxsim.ButtonMethods {
    export function onEvent(button: pxsim.Button, ev: number, body: pxsim.RefAction): void {
        pxsim.pxtcore.registerWithDal(button.id, ev, body);
    }

    export function isPressed(button: pxsim.Button): boolean {
        return button.pressed;
    }

    export function wasPressed(button: pxsim.Button): boolean {
        return false;
    }
}
