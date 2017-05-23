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
    DigitalPin D4;
    //%
    DigitalPin D5;
    //%
    DigitalPin D6;
    //%
    DigitalPin D7;
    //%
    DigitalPin D8;
    //%
    DigitalPin D13;
#undef DigitalPin
#undef AnalogPin
#undef PwmPin

    // not surface in user code
    DevicePin MIC_DATA;
    DevicePin MIC_CLOCK;
    DevicePin SPEAKER_AMP;

    I2C i2c;

    DevPins();
};

extern DevPins *io;

// modify if the last field changes
const int LastPinID = &io->SPEAKER_AMP - io->pins;

#endif
