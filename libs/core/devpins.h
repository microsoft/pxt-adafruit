#ifndef __PXT_DEV_PINS_H
#define __PXT_DEV_PINS_H

#include "pins.h"

class DevPins {
  public:
    DevicePin pins[0];
#define DigitalPin DevicePin
#define AnalogPin DevicePin
#define PwmPin DevicePin
    //% indexedInstanceNS=pins indexedInstanceShim=pxt::getPin
    //%
    AnalogPin A0;
    //%
    PwmPin A1;
    //%
    PwmPin A2;
    //%
    PwmPin A3;
    //%
    AnalogPin A4;
    //%
    AnalogPin A5;
    //%
    AnalogPin A6;
    //%
    AnalogPin A7;
    //%
    AnalogPin A8;
    //%
    AnalogPin A9;
    //%
    AnalogPin A10;
    //%
    DigitalPin D4;
    //%
    DigitalPin D5;
    //%
    DigitalPin D7;
    //%
    DigitalPin D8;
    //%
    DigitalPin LED;
#undef DigitalPin
#undef AnalogPin
#undef PwmPin

    I2C i2c;

    DevPins();
};

extern DevPins *io;

// modify if the last field changes
const int LastPinID = &io->LED - io->pins;

#endif
