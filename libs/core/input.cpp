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
