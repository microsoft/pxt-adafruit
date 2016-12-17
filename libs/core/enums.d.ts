// Auto-generated. Do not edit.


    declare enum DigitalPin {
    // all analog pins have to come first
    A0 = 0,
    A1 = 1,
    A2 = 2,
    A3 = 3,
    A4 = 4,
    A5 = 5,
    A6 = 6,
    // digital pins start here
    D0 = 7,
    D1 = 8,
    D2 = 9,
    D3 = 10,
    D4 = 11,
    D5 = 12,
    D6 = 13,
    D7 = 14,
    D8 = 15,
    D9 = 16,
    D10 = 17,
    D11 = 18,
    D12 = 19,
    D13 = 20,
    LED = 21,
    LEDRX = 22,
    LEDTX = 23,
    MOSI = 24,
    MISO = 25,
    SCK = 26,
    SDA = 27,
    SCL = 28,
    }


    declare enum AnalogPin {
    A0 = 0,
    A1 = 1,
    A2 = 2,
    A3 = 3,
    A4 = 4,
    A5 = 5,
    A6 = 6,
    }


    declare enum PulseValue {
    //% block=high
    High = 4,  // DEVICE_PIN_EVT_PULSE_HI
    //% block=low
    Low = 5,  // DEVICE_PIN_EVT_PULSE_LO
    }


    declare enum PinPullMode {
    //% block="down"
    PullDown = 0,
    //% block="up"
    PullUp = 1,
    //% block="none"
    PullNone = 2,
    }


    declare enum NumberFormat {
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,
    // UInt32,
    }

// Auto-generated. Do not edit. Really.
