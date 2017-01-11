#include "pxt.h"
#include "DeviceSystemTimer.h"
#include "AnalogSensor.h"
#include "NonLinearAnalogSensor.h"

namespace pxt {

// Wrapper classes

class WTemp {
  public:
    NonLinearAnalogSensor sensor;
    WTemp()
        : sensor(*lookupPin(PIN_TEMPERATURE), DEVICE_ID_THERMOMETER, 25, 10000, 3380, 10000,
                 273.5) //
    {}
};
SINGLETON(WTemp);

class WLight {
  public:
    AnalogSensor sensor;
    WLight()
        : sensor(*lookupPin(PIN_LIGHT), DEVICE_ID_LIGHT_SENSOR) //
    {
        sensor.setSensitivity(0.9f);
    }
};
SINGLETON(WLight);
}

//% color="#FB48C7" weight=99 icon="\uf192"
namespace input {

/**
 * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``1024`` bright.
 */
//% help=input/light-level weight=57
//% blockId=device_get_light_level block="light level" blockGap=8
//% parts="lightsensor"
int lightLevel() {
    return getWLight()->sensor.getValue();
}

/**
 * Gets the temperature in Celsius degrees (°C).
 */
//% weight=55
//% help=input/temperature
//% blockId=device_temperature block="temperature (°C)" blockGap=8
//% parts="thermometer"
int temperature() {
    return getWTemp()->sensor.getValue();
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
