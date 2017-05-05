/// <reference path="../../node_modules/pxt-common-packages/libs/core/dal.d.ts" />

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

        touchPins: CPlayPinName[];
        touchButtons: CPButton[];

        constructor() {
            this.buttons = [
                new CPButton(DAL.DEVICE_ID_BUTTON_A),
                new CPButton(DAL.DEVICE_ID_BUTTON_B),
                new CPButton(3000), // DEVICE_ID_BUTTON_SLIDE
                new CPButton(DAL.DEVICE_ID_BUTTON_AB)
            ];

            this.touchPins =[
                CPlayPinName.A4,
                CPlayPinName.A5,
                CPlayPinName.A6,
                CPlayPinName.A7,
                CPlayPinName.A8,
                CPlayPinName.A9,
                CPlayPinName.A10,
                CPlayPinName.A11,
            ];

            this.touchButtons = this.touchPins.map(id => new CPButton(DAL.DEVICE_ID_IO_P0 + 100 + id));
        }
    }
}
namespace pxsim.pxtcore {
    export function getButton(buttonId: number): Button {
        const buttons = board().buttonPairState.buttons;
        if (buttonId === 2) {
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
        const state = board().buttonPairState;
        if (buttonId < state.touchButtons.length && buttonId >= 0) {
            const pin = board().edgeConnectorState.getPin(state.touchPins[buttonId]) as pins.CPPin;
            pin.mode |= PinFlags.Analog;
            pins.markUsed(pin);
            return state.touchButtons[buttonId];
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
