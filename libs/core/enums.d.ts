// Auto-generated. Do not edit.


    /**
     * Determines the largest of the two numbers
     *
     * @param a the first number
     *
     * @param b the second number
     *
     * @return The larger of the two given values.
     */

    declare enum PanicCode {
    // PANIC Codes. These are not return codes, but are terminal conditions.
    // These induce a panic operation, where all code stops executing, and a panic state is
    // entered where the panic code is diplayed.

    // Out out memory error. Heap storage was requested, but is not available.
    MICROBIT_OOM = 20,

    // Corruption detected in the micro:bit heap space
    MICROBIT_HEAP_ERROR = 30,

    // Dereference of a NULL pointer through the ManagedType class,
    MICROBIT_NULL_DEREFERENCE = 40,
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
declare namespace pins {
}
declare namespace control {
}

// Auto-generated. Do not edit. Really.
