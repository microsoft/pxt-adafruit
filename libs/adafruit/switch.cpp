#include "pxt.h"
#include "DeviceButton.h"

enum class SwitchDirection {
    //% block="left"
    Left = DEVICE_BUTTON_EVT_UP,
    //% block="right"
    Right = DEVICE_BUTTON_EVT_DOWN
};

namespace pxt {

// Wrapper classes
class WSlide {
  public:
    /**
     * Slide switch.
     */
    //% block="slide switch" weight=90
    DeviceButton slideSwitch;

    WSlide()
        : slideSwitch(*pxt::lookupPin(PIN_BTN_SLIDE), DEVICE_ID_BUTTON_SLIDE,
                      DEVICE_BUTTON_ALL_EVENTS, ACTIVE_LOW, PullUp) {}
};
SINGLETON(WSlide);

}

namespace input {
/**
* Do something when the slide switch is moved left or right.
*
* @param direction the direction the switch must be moved to trigget the event
*/
//% help=input/on-switch-moved weight=93
//% blockId=device_on_switch_moved block="on switch moved %direction" blockGap=8
//% parts="switch"
void onSwitchMoved(SwitchDirection direction, Action handler) {
    ButtonMethods::onEvent(&getWSlide()->slideSwitch, (ButtonEvent)direction, handler);
}
}