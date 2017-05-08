#include "pxt.h"

DevPins *io;

DevPins::DevPins()
    : PIN_AD(A0), PIN_AD(A1), PIN_AD(A2), PIN_AD(A3), PIN_AD(A4), PIN_AD(A5), PIN_AD(A6),
      PIN_AD(A7), PIN_D(LED), 
      i2c((PinName)PIN_SDA, (PinName)PIN_SCL)
      {}
