#ifndef __PXT_PINS_H
#define __PXT_PINS_H

// for pinouts
#define BOARD_ID_ZERO 1
#define BOARD_ID_MKR1000 2
#define BOARD_ID_FEATHER 3
#define BOARD_ID_METRO 4
#define BOARD_ID_TRINKET 5
#define BOARD_ID_CPLAY 6
#define BOARD_ID_GEMMA 7

#ifndef PXT_BOARD_ID
#define PXT_BOARD_ID BOARD_ID_ZERO
#endif

#if PXT_BOARD_ID == BOARD_ID_ZERO || PXT_BOARD_ID == BOARD_ID_METRO
#define PIN_A0 PIN_PA02
#define PIN_A1 PIN_PB08
#define PIN_A2 PIN_PB09
#define PIN_A3 PIN_PA04
#define PIN_A4 PIN_PA05
#define PIN_A5 PIN_PB02
#define PIN_D0 PIN_PA11
#define PIN_D1 PIN_PA10
#define PIN_D2 PIN_PA14
#define PIN_D3 PIN_PA09
#define PIN_D4 PIN_PA08
#define PIN_D5 PIN_PA15
#define PIN_D6 PIN_PA20
#define PIN_D7 PIN_PA21
#define PIN_D8 PIN_PA06
#define PIN_D9 PIN_PA07
#define PIN_D10 PIN_PA18
#define PIN_D11 PIN_PA16
#define PIN_D12 PIN_PA19
#define PIN_D13 PIN_PA17
#define PIN_LED PIN_PA17
#define PIN_LEDRX PIN_PB03
#define PIN_LEDTX PIN_PA27
#define PIN_MISO PIN_PA12
#define PIN_MOSI PIN_PB10
#define PIN_SCK PIN_PB11
#define PIN_SCL PIN_PA23
#define PIN_SDA PIN_PA22

#define PIN_BTN_A PIN_D0
#define PIN_BTN_B PIN_D1

#elif PXT_BOARD_ID == BOARD_ID_CPLAY
// TODO need to map LEFT_BUTTON and friends to D<n>
#define PIN_ACCELEROMETER_CS PIN_PA13
#define PIN_ACCELEROMETER_INTERRUPT PIN_PA14
#define PIN_D0 PIN_PA11
#define PIN_D1 PIN_PA10
#define PIN_D10 PIN_PA06
#define PIN_D12 PIN_PA05
#define PIN_D13 PIN_PA17
#define PIN_D2 PIN_PA22
#define PIN_D3 PIN_PA23
#define PIN_D6 PIN_PA04
#define PIN_D9 PIN_PA07
#define PIN_LIGHT PIN_PB02
#define PIN_MICROPHONE PIN_PA08
#define PIN_MISO PIN_PA12
#define PIN_MOSI PIN_PB10
#define PIN_NEOPIXEL PIN_PB22
#define PIN_SCK PIN_PB11
#define PIN_SCL PIN_PA23
#define PIN_SDA PIN_PA22
#define PIN_SLIDE_SWITCH PIN_PB09
#define PIN_SPEAKER PIN_PA02
#define PIN_TEMPERATURE PIN_PA09

#define PIN_BTN_A PIN_PA28 // left
#define PIN_BTN_B PIN_PA19 // right

#elif PXT_BOARD_ID == BOARD_ID_FEATHER
#define PIN_A0 PIN_PA02
#define PIN_A1 PIN_PB08
#define PIN_A2 PIN_PB09
#define PIN_A3 PIN_PA04
#define PIN_A4 PIN_PA05
#define PIN_A5 PIN_PB02
#define PIN_D0 PIN_PA11
#define PIN_D1 PIN_PA10
#define PIN_D5 PIN_PA15
#define PIN_D6 PIN_PA20
#define PIN_D9 PIN_PA07
#define PIN_D10 PIN_PA18
#define PIN_D11 PIN_PA16
#define PIN_D12 PIN_PA19
#define PIN_D13 PIN_PA17
#define PIN_MISO PIN_PA12
#define PIN_MOSI PIN_PB10
#define PIN_SCK PIN_PB11
#define PIN_SCL PIN_PA23
#define PIN_SD PIN_PA08
#define PIN_SDA PIN_PA22

#elif PXT_BOARD_ID == BOARD_ID_GEMMA
#define PIN_A0 PIN_PA02
#define PIN_D3 PIN_PA09
#define PIN_D4 PIN_PA08
#define PIN_D13 PIN_PA17

#elif PXT_BOARD_ID == BOARD_ID_TRINKET
#define PIN_A0 PIN_PA02
#define PIN_D0 PIN_PA11
#define PIN_D1 PIN_PA10
#define PIN_D3 PIN_PA09
#define PIN_D4 PIN_PA08
#define PIN_D13 PIN_PA17
#else
#error "Board pinout not defined"
#endif

#ifndef PIN_A0
#define PIN_A0 PIN_PA00
#endif
#ifndef PIN_A1
#define PIN_A1 PIN_PA00
#endif
#ifndef PIN_A2
#define PIN_A2 PIN_PA00
#endif
#ifndef PIN_A3
#define PIN_A3 PIN_PA00
#endif
#ifndef PIN_A4
#define PIN_A4 PIN_PA00
#endif
#ifndef PIN_A5
#define PIN_A5 PIN_PA00
#endif
#ifndef PIN_A6
#define PIN_A6 PIN_PA00
#endif
#ifndef PIN_D0
#define PIN_D0 PIN_PA00
#endif
#ifndef PIN_D1
#define PIN_D1 PIN_PA00
#endif
#ifndef PIN_D2
#define PIN_D2 PIN_PA00
#endif
#ifndef PIN_D3
#define PIN_D3 PIN_PA00
#endif
#ifndef PIN_D4
#define PIN_D4 PIN_PA00
#endif
#ifndef PIN_D5
#define PIN_D5 PIN_PA00
#endif
#ifndef PIN_D6
#define PIN_D6 PIN_PA00
#endif
#ifndef PIN_D7
#define PIN_D7 PIN_PA00
#endif
#ifndef PIN_D8
#define PIN_D8 PIN_PA00
#endif
#ifndef PIN_D9
#define PIN_D9 PIN_PA00
#endif
#ifndef PIN_D10
#define PIN_D10 PIN_PA00
#endif
#ifndef PIN_D11
#define PIN_D11 PIN_PA00
#endif
#ifndef PIN_D12
#define PIN_D12 PIN_PA00
#endif
#ifndef PIN_D13
#define PIN_D13 PIN_PA00
#endif
#ifndef PIN_LED
#define PIN_LED PIN_PA00
#endif
#ifndef PIN_LEDRX
#define PIN_LEDRX PIN_PA00
#endif
#ifndef PIN_LEDTX
#define PIN_LEDTX PIN_PA00
#endif
#ifndef PIN_MOSI
#define PIN_MOSI PIN_PA00
#endif
#ifndef PIN_MISO
#define PIN_MISO PIN_PA00
#endif
#ifndef PIN_SCK
#define PIN_SCK PIN_PA00
#endif
#ifndef PIN_SDA
#define PIN_SDA PIN_PA00
#endif
#ifndef PIN_SCL
#define PIN_SCL PIN_PA00
#endif

class DevPins {
  public:
    DevicePin pins[0];
#define DigitalPin DevicePin
#define AnalogPin DevicePin
    //% indexedInstanceNS=pins indexedInstanceShim=pins::getPin
    //%
    AnalogPin A0;
    //%
    AnalogPin A1;
    //%
    AnalogPin A2;
    //%
    AnalogPin A3;
    //%
    AnalogPin A4;
    //%
    AnalogPin A5;
    //%
    AnalogPin A6;
    //%
    DigitalPin D0;
    //%
    DigitalPin D1;
    //%
    DigitalPin D2;
    //%
    DigitalPin D3;
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
    DigitalPin D9;
    //%
    DigitalPin D10;
    //%
    DigitalPin D11;
    //%
    DigitalPin D12;
    //%
    DigitalPin D13;
    //%
    DigitalPin LED;
    //%
    DigitalPin LEDRX;
    //%
    DigitalPin LEDTX;
    //%
    DigitalPin MOSI;
    //%
    DigitalPin MISO;
    //%
    DigitalPin SCK;
    //%
    DigitalPin SDA;
    //%
    DigitalPin SCL;
#undef DigitalPin
#undef AnalogPin
    DevPins();
};

extern DevPins io;

// modify if the last field changes
const int LastPinID = &io.SCL - io.pins;

typedef DevicePin *DigitalPin;
typedef DevicePin *AnalogPin;
typedef DeviceButton *Button;

#endif
