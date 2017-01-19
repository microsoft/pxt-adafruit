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

enum TemperatureUnit {
    //% block="°C"
    Celcius,
    //% block="°F"
    Fahrenheit
};


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
* Registers an event that runs when particular lighting conditions (dark, bright) are encountered.
* @param condition the condition that event triggers on
*/
//% help=input/on-light-condition-changed weight=97
//% blockId=input_on_light_condition_changed block="on light %condition"
//% parts="lightsensor" blockGap=8
void onLightConditionChanged(LightCondition condition, Action handler) {
    auto sensor = &getWLight()->sensor;
    sensor->updateSample();
    registerWithDal(sensor->id, (int)condition, handler);
}

/**
 * Reads the light level applied to the LED screen in a range from ``0`` (dark) to ``255`` (bright).
 */
//% help=input/light-level weight=76
//% blockId=device_get_light_level block="light level" blockGap=8
//% parts="lightsensor"
int lightLevel() {
    // 0...1023
    int value = getWLight()->sensor.getValue();
    return value / 4;
}

/**
* Registers an event raised when the temperature condition (hold, cold) changes.
* @param condition the condition, hot or cold, the event triggers on
* @param temperature the temperature, in degree Celcius, at which this event happens, eg: 15
*/
//% blockId=input_on_temperature_condition_changed block="on temperature %condition|at (°C)%temperature"
//% parts="thermometer" weight=95 blockGap=8
//% help=input/on-temperature-condition-changed
void onTemperateConditionChanged(TemperatureCondition condition, int temperature, Action handler) {
    auto sensor = &getWTemp()->sensor;
    sensor->updateSample();
    if (condition == TemperatureCondition::Cold)
        sensor->setLowThreshold(temperature);
    else
        sensor->setHighThreshold(temperature);        
    registerWithDal(sensor->id, (int)condition, handler);
}

/**
 * Gets the temperature in Celsius or Fahrenheit degrees.
 */
//% weight=75
//% help=input/temperature
//% blockId=device_temperature block="temperature in %unit" blockGap=8
//% parts="thermometer"
int temperature(TemperatureUnit unit) {
    int value = getWTemp()->sensor.getValue();
    if (unit == TemperatureUnit::Celcius) return value;
    else return (value * 18) / 10 + 32;
}
}
