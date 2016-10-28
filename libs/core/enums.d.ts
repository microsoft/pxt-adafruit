// Auto-generated. Do not edit.


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


    declare enum Button
    {
    //% block=left
    Left = 1,
    //% block=right
    Right = 2,
    }


    declare enum MotionAxis
    {
    X = 0,
    Y = 1,
    Z = 2,
    }


    declare enum Note
    {
    //% blockIdentity=playground.noteFrequency
    C = 262,
    //% block=C#
    //% blockIdentity=playground.noteFrequency
    CSharp = 277,
    //% blockIdentity=playground.noteFrequency
    D = 294,
    //% blockIdentity=playground.noteFrequency
    Eb = 311,
    //% blockIdentity=playground.noteFrequency
    E = 330,
    //% blockIdentity=playground.noteFrequency
    F = 349,
    //% block=F#
    //% blockIdentity=playground.noteFrequency
    FSharp = 370,
    //% blockIdentity=playground.noteFrequency
    G = 392,
    //% block=G#
    //% blockIdentity=playground.noteFrequency
    GSharp = 415,
    //% blockIdentity=playground.noteFrequency
    A = 440,
    //% blockIdentity=playground.noteFrequency
    Bb = 466,
    //% blockIdentity=playground.noteFrequency
    B = 494,
    }


    declare enum CapacityPin
    {
    //% block="RX #0"
    P0 = 0,
    //% block="TX #1"
    P1 = 1,
    //% block=SDA #2
    P2 = 2,
    //% block=SCL #3
    P3 = 3,
    //% block=#6
    P6 = 6,
    //% block=#9
    P9 = 9,
    //% block=#10
    P10 = 10,
    //% block=#12
    P12 = 12,
    }


    declare enum TemperatureUnit {
    Clecius = 0,
    Fahrenheit = 1,
    }
declare namespace sensors {
}
declare namespace music {
}
declare namespace light {
}
declare namespace serial {
}


    declare enum Pin
    {
    //% block="RX #0"
    P0 = 0,
    //% block="TX #1"
    P1 = 1,
    //% block=SDA #2
    P2 = 2,
    //% block=SCL #3
    P3 = 3,
    //% block=#4 (Left Button)
    P4 = 4,
    //% block=#5 (Buzzer)
    P5 = 5,
    //% block=#6
    P6 = 6,
    //% block=X
    P7 = 7,
    //% block=X
    P8 = 8,
    //% block=#9
    P9 = 9,
    //% block=#10
    P10 = 10,
    //% block=#X
    P11 = 11,
    //% block=#12
    P12 = 12,
    //% block=#13
    P13 = 13,
    //% block=X
    P14 = 14,
    //% block=#17 (Neopixel)
    P17 = 15,
    //% block=#19 (Right Button)
    P19 = 16,
    //% block=#21 (Slide Switch)
    P21 = 17,
    //% block=#21 (Capsense Shared)
    P30 = 18,
    //% block=A0 (Thermistro)
    A0 = 19,
    //% block=A4 (Sound Sensor)
    A4 = 20,
    //% block=A5 (Light Sensor)
    A5 = 21,
    }


    declare enum PinMode
    {
    PIN_INPUT = 0,
    PIN_OUTPUT = 1,
    PIN_INPUT_PULLUP = 2,
    }


    declare enum PulseValue
    {
    PULSE_HIGH = 1,
    PULSE_LOW = 0,
    }


    declare enum PinType
    {
    PIN_EXTERNAL = 0,
    PIN_DEFAULT = 1,
    PIN_INTERNAL = 3,
    /*
    Values are different for each board:
    INTERNAL1V1 = 4,
    INTERNAL2V56 = 5,
    INTERNAL2V56_EXTCAP = 6,
     */
    }
declare namespace pins {
}
declare namespace control {
}

// Auto-generated. Do not edit. Really.
