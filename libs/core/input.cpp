#include "pxt.h"
#include "DeviceSystemTimer.h"
#include "AnalogSensor.h"
#include "NonLinearAnalogSensor.h"


enum class LightCondition {
    //% block="dark"
    Dark = ANALOG_THRESHOLD_LOW,
    //% block="bright"
    Bright = ANALOG_THRESHOLD_HIGH
};

enum class TemperatureCondition {
    //% block="cold"
    Cold = ANALOG_THRESHOLD_LOW,
    //% block="hot"
    Hot = ANALOG_THRESHOLD_HIGH
};

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
* Registers an event that runs when particular lighting conditions (dark, bright) are encountered.
* @param condition the condition that event triggers on
*/
//% help=input/on-light-condition-changed
//% blockId=input_on_light_condition_changed block="on %condition"
//% parts="lightsensor"
void onLightConditionChanged(LightCondition condition, Action handler) {
    registerWithDal(getWLight()->sensor.id, (int)condition, handler);
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
* Registers an event raised when the temperature condition (hold, cold) changes.
* @param condition the condition, hot or cold, the event triggers on
* @param temperature the temperature, in degree Celcius, at which this event happens, eg: 15
*/
//% blockId=input_on_temperature_condition_changed block="on %condition|at (°C)%temperature"
//% parts="thermometer"
//% help=input/on-temperature-condition-changed
void onTemperateConditionChanged(TemperatureCondition condition, int temperature, Action handler) {
    // TODO: set threshold
    //getWTemp()->sensor.getValue();
    registerWithDal(getWTemp()->sensor.id, (int)condition, handler);
}
}
