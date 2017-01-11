#include "pxt.h"
#include "DeviceSystemTimer.h"
#include "AnalogSensor.h"

namespace pxt {

// Wrapper classes

class WTemp {
  public:
    DevicePin temperature;
    AnalogSensor thermometer;
    WTemp()
        : INIT_PIN(temperature, PIN_TEMPERATURE),
          thermometer(temperature, DEVICE_ID_THERMOMETER, 25, 10000, 3380, 10000, 273.5) //
    {}
};
SINGLETON(WTemp);
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

//% color="#FB48C7" weight=99 icon="\uf192"
namespace input {

#if 0
/**
 * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` bright.
 */
//% help=input/light-level weight=57
//% blockId=device_get_light_level block="light level" blockGap=8
//% parts="ledmatrix"
int lightLevel() {
    return getWLight()->light.getAnalogValue();
}
#endif

/**
 * Gets the temperature in Celsius degrees (°C).
 */
//% weight=55
//% help=input/temperature
//% blockId=device_temperature block="temperature (°C)" blockGap=8
//% parts="thermometer"
int temperature() {
    return getWTemp()->thermometer.getValue();
}

/**
  * Gets the number of milliseconds elapsed since power on.
  */
//% help=input/running-time weight=50
//% blockId=device_get_running_time block="running time (ms)"
//% advanced=true
int runningTime() {
    return system_timer_current_time();
}
}
