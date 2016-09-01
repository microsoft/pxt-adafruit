namespace pxsim.input {
    export function onButtonPressed(button: number, handler: RefAction): void {
        let b = board().buttonPairState;
        if (button == DAL.MICROBIT_ID_BUTTON_AB && !b.usesButtonAB) {
            b.usesButtonAB = true;
            runtime.queueDisplayUpdate();
        }
        pxt.registerWithDal(button, DAL.MICROBIT_BUTTON_EVT_CLICK, handler);
    }

    export function buttonIsPressed(button: number): boolean {
        let b = board().buttonPairState;
        if (button == DAL.MICROBIT_ID_BUTTON_AB && !b.usesButtonAB) {
            b.usesButtonAB = true;
            runtime.queueDisplayUpdate();
        }
        if (button == DAL.MICROBIT_ID_BUTTON_A) return b.aBtn.pressed;
        if (button == DAL.MICROBIT_ID_BUTTON_B) return b.bBtn.pressed;
        return b.abBtn.pressed || (b.aBtn.pressed && b.bBtn.pressed);
    }
}

namespace pxsim {
    export class Button {
        constructor(public id: number) { }
        pressed: boolean;
    }

    export class ButtonPairState {
        usesButtonAB: boolean = false;
        aBtn: Button;
        bBtn: Button;
        abBtn: Button;

        constructor() {
            this.aBtn = new Button(DAL.MICROBIT_ID_BUTTON_A);
            this.bBtn = new Button(DAL.MICROBIT_ID_BUTTON_B);
            this.abBtn = new Button(DAL.MICROBIT_ID_BUTTON_AB);
        }
    }
}