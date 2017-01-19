/// <reference path="../../libs/core/dal.d.ts" />

namespace pxsim {
    const DOUBLE_CLICK_TIME = 500;
    export class CPButton extends Button {
        private _pressedTime: number = -1;
        private _clickedTime: number = -1;
        private _wasPressed: boolean;

        setPressed(p: boolean) {
            if (this.pressed === p) {
                return;
            }
            this.pressed = p;

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

        public wasPressed() {
            const temp = this._wasPressed;
            this._wasPressed = false;
            return temp;
        }

        public isPressed() {
            return this.pressed;
        }
    }

    export class CPButtonState {
        usesButtonAB: boolean = false;
        buttons: CPButton[];
        touchButtons: CPButton[];

        constructor() {
            this.buttons = [
                new CPButton(DAL.DEVICE_ID_BUTTON_A),
                new CPButton(DAL.DEVICE_ID_BUTTON_B),
                new CPButton(3000), // DEVICE_ID_BUTTON_SLIDE
                new CPButton(DAL.DEVICE_ID_BUTTON_AB)
            ];

            this.touchButtons = [
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A4),
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A5),
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A6),
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A7),
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A8),
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A9),
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A10),
                new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + pxsim.CPlayPinName.A11),
            ];
        }
    }
}
namespace pxsim.pxtcore {
    export function getButton(buttonId: number): Button {
        const buttons = board().buttonPairState.buttons;
        if (buttonId === 3) {
            board().buttonPairState.usesButtonAB = true;
            runtime.queueDisplayUpdate();
        }
        if (buttonId < buttons.length && buttonId >= 0) {
            return buttons[buttonId];
        }
        // panic
        return undefined;
    }

    export function getTouchButton(buttonId: number): Button {
        const buttons = board().buttonPairState.touchButtons;
        if (buttonId < buttons.length && buttonId >= 0) {
            return buttons[buttonId];
        }
        // panic
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
        return (<CPButton>button).wasPressed();
    }
}
