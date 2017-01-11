#include "pxt.h"
#include "DeviceSystemTimer.h"
#include "AnalogSensor.h"

namespace pxt {

// Wrapper classes

class WButtons {
  public:
#define Button DeviceButton
    Button buttons[0];
    //% indexedInstanceNS=buttons indexedInstanceShim=pxt::getButton
    /**
     * Left push button.
     */
    //%
    Button left;
    /**
     * Right push button.
     */
    //%
    Button right;
    /**
     * Slide switch.
     */
    //%
    Button slide;
#undef Button

    WButtons()
        : left((PinName)PIN_BTN_LEFT, DEVICE_ID_BUTTON_A, DEVICE_BUTTON_ALL_EVENTS, ACTIVE_HIGH,
               PullDown),
          right((PinName)PIN_BTN_RIGHT, DEVICE_ID_BUTTON_B, DEVICE_BUTTON_ALL_EVENTS, ACTIVE_HIGH,
                PullDown),
          slide((PinName)PIN_BTN_SLIDE, DEVICE_ID_BUTTON_SLIDE, DEVICE_BUTTON_ALL_EVENTS,
                ACTIVE_LOW, PullUp)
    {}
};
SINGLETON(WButtons);

const int LastButtonID = &((WButtons*)0)->slide - ((WButtons*)0)->buttons;

//%
DeviceButton *getButton(int id) {
    if (!(0 <= id && id <= LastButtonID))
        device.panic(42);
    return &getWButtons()->buttons[id];
}

}

//% noRefCounting fixedInstances
namespace ButtonMethods {
/**
 * Do something when a button (``A``, ``B`` or both ``A+B``) is pressed
 * @param button the button that needs to be pressed
 * @param body code to run when event is raised
 */
//% help=input/on-button-pressed weight=85 blockGap=8
//% blockId=device_button_event block="on button|%NAME|pressed"
//% parts="buttonpair"
//% blockNamespace=input
void onPressed(Button button, Action body) {
    registerWithDal(button->id, DEVICE_BUTTON_EVT_CLICK, body);
}

/**
 * Get the button state (pressed or not) for ``A`` and ``B``.
 * @param button the button to query the request, eg: Button.A
 */
//% help=input/button-is-pressed weight=60
//% block="button|%NAME|is pressed"
//% blockId=device_get_button2
//% icon="\uf192" blockGap=8
//% parts="buttonpair"
//% blockNamespace=input
bool isPressed(Button button) {
    return button->isPressed();
}
}
