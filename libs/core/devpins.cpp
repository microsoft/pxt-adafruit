#include "pxt.h"

DevPins *io;

DevPins::DevPins()
    : PIN_AD(A0), PIN_AD(A1), PIN_AD(A2), PIN_AD(A3), PIN_AD(A4), PIN_AD(A5), 
      PIN_AD(A6), PIN_AD(A7),
      PIN_D(D4), PIN_D(D5), PIN_D(D6), PIN_D(D7), PIN_D(D8), 
      PIN_D(D13), 
      PIN_D(MIC_DATA), PIN_D(MIC_CLOCK),
      i2c((PinName)PIN_SDA, (PinName)PIN_SCL)
      {}
