#include "pxt.h"
#include "DeviceSystemTimer.h"
#include "AnalogSensor.h"

namespace pxt {

// Wrapper classes
class WTouch {
    public:
    TouchSensor touchSensor;
    
    WTouch()
        :touchSensor(io->touchDrive) {}    
};
SINGLETON(WTouch);

class WButtons {
  public:
#define Button DeviceButton
    Button buttons[0];
    //% indexedInstanceNS=input indexedInstanceShim=pxt::getButton
    /**
     * Left push button.
     */
    //% block="left button"
    Button leftButton;
    /**
     * Right push button.
     */
    //% block="right button"
    Button rightButton;
#undef Button
#define Button TouchButton
    /**
    * Capacitive pin A0
    */
    //% block="pin A0"
    Button pinA0;
    /**
    * Capacitive pin A1
    */
    //% block="pin A1"
    Button pinA1;
    /**
    * Capacitive pin A2
    */
    //% block="pin A2"
    Button pinA2;
    /**
    * Capacitive pin A3
    */
    //% block="pin A3"
    Button pinA3;
    /**
    * Capacitive pin A4
    */
    //% block="pin A4"
    Button pinA4;
    /**
    * Capacitive pin A5
    */
    //% block="pin A5"
    Button pinA5;
    /**
    * Capacitive pin A6
    */
    //% block="pin A6"
    Button pinA6;
    /**
    * Capacitive pin A7
    */
    //% block="pin A7"
    Button pinA7;
    /**
    * Capacitive pin A8
    */
    //% block="pin A8"
    Button pinA8;
    /**
    * Capacitive pin A9
    */
    //% block="pin A9"
    Button pinA9;
    /**
    * Capacitive pin A10
    */
    //% block="pin A10"
    Button pinA10;
#undef Button
#define Button DeviceButton
    /**
     * Slide switch.
     */
    //% block="slide switch"
    Button slideSwitch;
#undef Button

    WButtons()
        : leftButton(*pxt::lookupPin(PIN_BTN_LEFT), DEVICE_ID_BUTTON_A, DEVICE_BUTTON_ALL_EVENTS, ACTIVE_HIGH,
               PullDown),
          rightButton(*pxt::lookupPin(PIN_BTN_RIGHT), DEVICE_ID_BUTTON_B, DEVICE_BUTTON_ALL_EVENTS, ACTIVE_HIGH,
                PullDown),
          pinA0(*pxt::lookupPin(PIN_A0), getWTouch()->touchSensor),
          pinA1(*pxt::lookupPin(PIN_A1), getWTouch()->touchSensor),
          pinA2(*pxt::lookupPin(PIN_A2), getWTouch()->touchSensor),
          pinA3(*pxt::lookupPin(PIN_A3), getWTouch()->touchSensor),
          pinA4(*pxt::lookupPin(PIN_A4), getWTouch()->touchSensor),
          pinA5(*pxt::lookupPin(PIN_A5), getWTouch()->touchSensor),
          pinA6(*pxt::lookupPin(PIN_A6), getWTouch()->touchSensor),
          pinA7(*pxt::lookupPin(PIN_A7), getWTouch()->touchSensor),
          pinA8(*pxt::lookupPin(PIN_A8), getWTouch()->touchSensor),
          pinA9(*pxt::lookupPin(PIN_A9), getWTouch()->touchSensor),
          pinA10(*pxt::lookupPin(PIN_A10), getWTouch()->touchSensor),
          slideSwitch(*pxt::lookupPin(PIN_BTN_SLIDE), DEVICE_ID_BUTTON_SLIDE, DEVICE_BUTTON_ALL_EVENTS,
                ACTIVE_LOW, PullUp)
    { }
};
SINGLETON(WButtons);

const int LastButtonID = &((WButtons*)0)->slideSwitch - ((WButtons*)0)->buttons;

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
 * Do something when a button (``A``, ``B`` or both ``A+B``) is clicked, double clicked, etc...
 * @param button the button that needs to be clicked or used
 * @param event the kind of button gesture that needs to be detected
 * @param body code to run when event is raised
 */
//% help=input/on-button-event weight=85 blockGap=8
//% blockId=buttonEvent block="on %button|%event"
//% parts="buttonpair"
//% blockNamespace=input
void onEvent(Button button, ButtonEvent ev, Action body) {
    registerWithDal(button->id, (int)ev, body);
}

/**
 * Get the button state (pressed or not).
 * @param button the button to query the request
 */
//% help=input/button-is-pressed weight=60
//% block="%NAME|is pressed"
//% blockId=buttonIsPressed
//% blockGap=8
//% parts="buttonpair"
//% blockNamespace=input
bool isPressed(Button button) {
    return button->isPressed();
}

/**
 * Indicates if the button was pressed since this function was last called.
 * @param button the button to query the request
 */
//% help=input/button-was-pressed weight=60
//% block="%NAME|was pressed"
//% blockId=buttonWasPressed
//% blockGap=8
//% parts="buttonpair"
//% blockNamespace=input
bool wasPressed(Button button) {
    return button->wasPressed();
}
}
