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
#define PIN_A0 PA02
#define PIN_A1 PB08
#define PIN_A2 PB09
#define PIN_A3 PA04
#define PIN_A4 PA05
#define PIN_A5 PB02
#define PIN_D0 PA11
#define PIN_D1 PA10
#define PIN_D2 PA14
#define PIN_D3 PA09
#define PIN_D4 PA08
#define PIN_D5 PA15
#define PIN_D6 PA20
#define PIN_D7 PA21
#define PIN_D8 PA06
#define PIN_D9 PA07
#define PIN_D10 PA18
#define PIN_D11 PA16
#define PIN_D12 PA19
#define PIN_D13 PA17
#define PIN_LED PA17
#define PIN_LEDRX PB03
#define PIN_LEDTX PA27
#define PIN_MISO PA12
#define PIN_MOSI PB10
#define PIN_SCK PB11
#define PIN_SCL PA23
#define PIN_SDA PA22

#elif PXT_BOARD_ID == BOARD_ID_CPLAY
// TODO need to map LEFT_BUTTON and friends to D<n>
#define PIN_ACCELEROMETER_CS PA13
#define PIN_ACCELEROMETER_INTERRUPT PA14
#define PIN_D0 PA11
#define PIN_D1 PA10
#define PIN_D10 PA06
#define PIN_D12 PA05
#define PIN_D13 PA17
#define PIN_D2 PA22
#define PIN_D3 PA23
#define PIN_D6 PA04
#define PIN_D9 PA07
#define PIN_LEFT_BUTTON PA28
#define PIN_LIGHT PB02
#define PIN_MICROPHONE PA08
#define PIN_MISO PA12
#define PIN_MOSI PB10
#define PIN_NEOPIXEL PB22
#define PIN_RIGHT_BUTTON PA19
#define PIN_SCK PB11
#define PIN_SCL PA23
#define PIN_SDA PA22
#define PIN_SLIDE_SWITCH PB09
#define PIN_SPEAKER PA02
#define PIN_TEMPERATURE PA09

#elif PXT_BOARD_ID == BOARD_ID_FEATHER
#define PIN_A0 PA02
#define PIN_A1 PB08
#define PIN_A2 PB09
#define PIN_A3 PA04
#define PIN_A4 PA05
#define PIN_A5 PB02
#define PIN_D0 PA11
#define PIN_D1 PA10
#define PIN_D5 PA15
#define PIN_D6 PA20
#define PIN_D9 PA07
#define PIN_D10 PA18
#define PIN_D11 PA16
#define PIN_D12 PA19
#define PIN_D13 PA17
#define PIN_MISO PA12
#define PIN_MOSI PB10
#define PIN_SCK PB11
#define PIN_SCL PA23
#define PIN_SD PA08
#define PIN_SDA PA22

#elif PXT_BOARD_ID == BOARD_ID_GEMMA
#define PIN_A0 PA02
#define PIN_D3 PA09
#define PIN_D4 PA08
#define PIN_D13 PA17

#elif PXT_BOARD_ID == BOARD_ID_TRINKET
#define PIN_A0 PA02
#define PIN_D0 PA11
#define PIN_D1 PA10
#define PIN_D3 PA09
#define PIN_D4 PA08
#define PIN_D13 PA17
#else
#error "Board pinout not defined"
#endif

#ifndef PIN_A0
#define PIN_A0 PA00
#endif
#ifndef PIN_A1
#define PIN_A1 PA00
#endif
#ifndef PIN_A2
#define PIN_A2 PA00
#endif
#ifndef PIN_A3
#define PIN_A3 PA00
#endif
#ifndef PIN_A4
#define PIN_A4 PA00
#endif
#ifndef PIN_A5
#define PIN_A5 PA00
#endif
#ifndef PIN_A6
#define PIN_A6 PA00
#endif
#ifndef PIN_D0
#define PIN_D0 PA00
#endif
#ifndef PIN_D1
#define PIN_D1 PA00
#endif
#ifndef PIN_D2
#define PIN_D2 PA00
#endif
#ifndef PIN_D3
#define PIN_D3 PA00
#endif
#ifndef PIN_D4
#define PIN_D4 PA00
#endif
#ifndef PIN_D5
#define PIN_D5 PA00
#endif
#ifndef PIN_D6
#define PIN_D6 PA00
#endif
#ifndef PIN_D7
#define PIN_D7 PA00
#endif
#ifndef PIN_D8
#define PIN_D8 PA00
#endif
#ifndef PIN_D9
#define PIN_D9 PA00
#endif
#ifndef PIN_D10
#define PIN_D10 PA00
#endif
#ifndef PIN_D11
#define PIN_D11 PA00
#endif
#ifndef PIN_D12
#define PIN_D12 PA00
#endif
#ifndef PIN_D13
#define PIN_D13 PA00
#endif
#ifndef PIN_LED
#define PIN_LED PA00
#endif
#ifndef PIN_LEDRX
#define PIN_LEDRX PA00
#endif
#ifndef PIN_LEDTX
#define PIN_LEDTX PA00
#endif
#ifndef PIN_MOSI
#define PIN_MOSI PA00
#endif
#ifndef PIN_MISO
#define PIN_MISO PA00
#endif
#ifndef PIN_SCK
#define PIN_SCK PA00
#endif
#ifndef PIN_SDA
#define PIN_SDA PA00
#endif
#ifndef PIN_SCL
#define PIN_SCL PA00
#endif

class DevPins {
  public:
    DevicePin pins[0];
    DevicePin pinA0;
    DevicePin pinA1;
    DevicePin pinA2;
    DevicePin pinA3;
    DevicePin pinA4;
    DevicePin pinA5;
    DevicePin pinA6;
    DevicePin pinD0;
    DevicePin pinD1;
    DevicePin pinD2;
    DevicePin pinD3;
    DevicePin pinD4;
    DevicePin pinD5;
    DevicePin pinD6;
    DevicePin pinD7;
    DevicePin pinD8;
    DevicePin pinD9;
    DevicePin pinD10;
    DevicePin pinD11;
    DevicePin pinD12;
    DevicePin pinD13;
    DevicePin pinLED;
    DevicePin pinLEDRX;
    DevicePin pinLEDTX;
    DevicePin pinMOSI;
    DevicePin pinMISO;
    DevicePin pinSCK;
    DevicePin pinSDA;
    DevicePin pinSCL;
    DevPins();
};

extern DevPins devPins;

// not all boards have all the pins
// Zero has most, but doesn't have A6, which MKR1000 has, etc.
// This enum must match exactly the DevPins class
enum class DigitalPin {
    // all analog pins have to come first
    A0,
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    // digital pins start here
    D0,
    D1,
    D2,
    D3,
    D4,
    D5,
    D6,
    D7,
    D8,
    D9,
    D10,
    D11,
    D12,
    D13,
    LED,
    LEDRX,
    LEDTX,
    MOSI,
    MISO,
    SCK,
    SDA,
    SCL,
};

// must match DigitalPin above!
enum class AnalogPin {
    A0,
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
};

#endif
